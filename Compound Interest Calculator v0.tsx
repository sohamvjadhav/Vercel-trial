import { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Download, Calculator } from 'lucide-react'
import { motion } from 'framer-motion'
import { Line } from 'react-chartjs-2'
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js'
import jsPDF from 'jspdf'

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend
)

export default function Component() {
  const [initialInvestment, setInitialInvestment] = useState(1000)
  const [monthlyInvestment, setMonthlyInvestment] = useState(100)
  const [interestRate, setInterestRate] = useState(7)
  const [years, setYears] = useState(10)
  const [isSIP, setIsSIP] = useState(true)
  const [result, setResult] = useState<{ totalInvestment: number; totalReturns: number; finalAmount: number; yearlyData: number[] } | null>(null)

  const calculateCompoundInterest = useCallback(() => {
    let totalInvestment = initialInvestment
    let finalAmount = initialInvestment
    let yearlyData = [finalAmount]

    if (isSIP) {
      for (let i = 0; i < years * 12; i++) {
        finalAmount = finalAmount * (1 + interestRate / 1200) + monthlyInvestment
        totalInvestment += monthlyInvestment
        if ((i + 1) % 12 === 0) {
          yearlyData.push(Math.round(finalAmount))
        }
      }
    } else {
      for (let i = 1; i <= years; i++) {
        finalAmount = initialInvestment * Math.pow(1 + interestRate / 100, i)
        yearlyData.push(Math.round(finalAmount))
      }
    }

    const totalReturns = finalAmount - totalInvestment

    setResult({
      totalInvestment: Math.round(totalInvestment),
      totalReturns: Math.round(totalReturns),
      finalAmount: Math.round(finalAmount),
      yearlyData
    })
  }, [initialInvestment, monthlyInvestment, interestRate, years, isSIP])

  const chartData = {
    labels: Array.from({ length: years + 1 }, (_, i) => i.toString()),
    datasets: [
      {
        label: 'Investment Growth',
        data: result?.yearlyData || [],
        borderColor: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        tension: 0.1
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'white'
        }
      },
      title: {
        display: true,
        text: 'Investment Growth Over Time',
        color: 'white'
      }
    },
    scales: {
      x: {
        type: 'category' as const,
        title: {
          display: true,
          text: 'Years',
          color: 'white'
        },
        ticks: {
          color: 'white'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Amount (₹)',
          color: 'white'
        },
        ticks: {
          color: 'white'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    }
  }

  const exportData = (format: 'pdf' | 'txt' | 'md') => {
    const content = `
Compound Interest Calculator Results

Investment Type: ${isSIP ? 'SIP' : 'One-time'}
Initial Investment: ₹${initialInvestment}
${isSIP ? `Monthly Investment: ₹${monthlyInvestment}` : ''}
Annual Interest Rate: ${interestRate}%
Investment Period: ${years} years

Total Investment: ₹${result?.totalInvestment.toLocaleString()}
Total Returns: ₹${result?.totalReturns.toLocaleString()}
Final Amount: ₹${result?.finalAmount.toLocaleString()}

Yearly Growth:
${result?.yearlyData.map((amount, index) => `Year ${index}: ₹${amount.toLocaleString()}`).join('\n')}
    `.trim()

    switch (format) {
      case 'pdf':
        const pdf = new jsPDF()
        pdf.text(content, 10, 10)
        pdf.save('compound-interest-results.pdf')
        break
      case 'txt':
        const blob = new Blob([content], { type: 'text/plain' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = 'compound-interest-results.txt'
        link.click()
        break
      case 'md':
        const mdContent = `# Compound Interest Calculator Results

## Inputs
- Investment Type: ${isSIP ? 'SIP' : 'One-time'}
- Initial Investment: ₹${initialInvestment}
${isSIP ? `- Monthly Investment: ₹${monthlyInvestment}` : ''}
- Annual Interest Rate: ${interestRate}%
- Investment Period: ${years} years

## Results
- Total Investment: ₹${result?.totalInvestment.toLocaleString()}
- Total Returns: ₹${result?.totalReturns.toLocaleString()}
- Final Amount: ₹${result?.finalAmount.toLocaleString()}

## Yearly Growth
${result?.yearlyData.map((amount, index) => `Year ${index}: ₹${amount.toLocaleString()}`).join('\n')}
        `
        const mdBlob = new Blob([mdContent], { type: 'text/markdown' })
        const mdLink = document.createElement('a')
        mdLink.href = URL.createObjectURL(mdBlob)
        mdLink.download = 'compound-interest-results.md'
        mdLink.click()
        break
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden bg-black text-white border border-gray-800">
      <CardHeader className="bg-gray-900">
        <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
          <TrendingUp className="w-6 h-6 mr-2" />
          Compound Interest Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="investment-type" className="text-lg">Investment Type</Label>
              <div className="flex items-center space-x-2">
                <Label htmlFor="investment-type" className="text-sm">One-time</Label>
                <Switch
                  id="investment-type"
                  checked={isSIP}
                  onCheckedChange={setIsSIP}
                />
                <Label htmlFor="investment-type" className="text-sm">SIP</Label>
              </div>
            </div>

            <motion.div layout className="space-y-2">
              <Label htmlFor="initial-investment" className="text-lg">Initial Investment (₹)</Label>
              <Input
                id="initial-investment"
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </motion.div>

            {isSIP && (
              <motion.div layout className="space-y-2">
                <Label htmlFor="monthly-investment" className="text-lg">Monthly Investment (₹)</Label>
                <Input
                  id="monthly-investment"
                  type="number"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </motion.div>
            )}

            <motion.div layout className="space-y-2">
              <Label htmlFor="interest-rate" className="text-lg">Annual Interest Rate (%)</Label>
              <Input
                id="interest-rate"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </motion.div>

            <motion.div layout className="space-y-2">
              <Label htmlFor="investment-period" className="text-lg">Investment Period (Years)</Label>
              <Input
                id="investment-period"
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </motion.div>

            <Button onClick={calculateCompoundInterest} className="w-full bg-white text-black hover:bg-gray-200">
              <Calculator className="w-4 h-4 mr-2" />
              Calculate
            </Button>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-lg">Total Investment:</span>
                <span className="text-2xl font-bold">₹{result?.totalInvestment.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg">Total Returns:</span>
                <span className="text-2xl font-bold text-green-400">₹{result?.totalReturns.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg">Final Amount:</span>
                <span className="text-3xl font-bold text-yellow-400">₹{result?.finalAmount.toLocaleString()}</span>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <Line data={chartData} options={chartOptions} />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => exportData('pdf')} className="bg-gray-700 hover:bg-gray-600 text-white">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
              <Button onClick={() => exportData('txt')} className="bg-gray-700 hover:bg-gray-600 text-white">
                <Download className="w-4 h-4 mr-2" />
                Export TXT
              </Button>
              <Button onClick={() => exportData('md')} className="bg-gray-700 hover:bg-gray-600 text-white">
                <Download className="w-4 h-4 mr-2" />
                Export MD
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}