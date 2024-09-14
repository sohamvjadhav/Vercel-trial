/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MvwTCfX8eBc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <img
            src="/placeholder.svg"
            width="40"
            height="40"
            alt="John Doe's Portfolio"
            className="mr-2"
            style={{ aspectRatio: "40/40", objectFit: "cover" }}
          />
          <span className="sr-only">John Doe's Portfolio</span>
        </Link>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Work
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <UserIcon className="h-6 w-6" />
                <span className="sr-only">Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 hidden lg:inline-block"
            prefetch={false}
          >
            Resume
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 hidden lg:inline-block"
            prefetch={false}
          >
            Blog
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hi, I'm John Doe</h1>
              <p className="text-muted-foreground md:text-xl">
                I'm a passionate designer and developer with a focus on creating beautiful and functional digital
                experiences.
              </p>
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View My Work
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
        <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Work</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of the projects I've worked on. Click on an image to learn more.
              </p>
            </div>
            <div className="grid gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Link href="#" className="group rounded-lg overflow-hidden" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Project 1"
                  className="w-full aspect-[3/2] object-cover transition-all group-hover:scale-105"
                />
                <div className="px-4 py-2 bg-background">
                  <h3 className="text-lg font-semibold">Project 1</h3>
                  <p className="text-muted-foreground line-clamp-2">A brief description of the first project.</p>
                </div>
              </Link>
              <Link href="#" className="group rounded-lg overflow-hidden" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Project 2"
                  className="w-full aspect-[3/2] object-cover transition-all group-hover:scale-105"
                />
                <div className="px-4 py-2 bg-background">
                  <h3 className="text-lg font-semibold">Project 2</h3>
                  <p className="text-muted-foreground line-clamp-2">A brief description of the second project.</p>
                </div>
              </Link>
              <Link href="#" className="group rounded-lg overflow-hidden" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Project 3"
                  className="w-full aspect-[3/2] object-cover transition-all group-hover:scale-105"
                />
                <div className="px-4 py-2 bg-background">
                  <h3 className="text-lg font-semibold">Project 3</h3>
                  <p className="text-muted-foreground line-clamp-2">A brief description of the third project.</p>
                </div>
              </Link>
              <Link href="#" className="group rounded-lg overflow-hidden" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Project 4"
                  className="w-full aspect-[3/2] object-cover transition-all group-hover:scale-105"
                />
                <div className="px-4 py-2 bg-background">
                  <h3 className="text-lg font-semibold">Project 4</h3>
                  <p className="text-muted-foreground line-clamp-2">A brief description of the fourth project.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="About"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-muted-foreground md:text-xl">
                I'm a designer and developer with a passion for creating beautiful and functional digital experiences. I
                have a strong background in user experience design, front-end development, and project management.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Skills</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>UI/UX Design</li>
                    <li>Front-end Development</li>
                    <li>Project Management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Experience</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>5+ years in the industry</li>
                    <li>Worked with startups and enterprises</li>
                    <li>Passionate about technology</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="text-muted-foreground md:text-xl">
                I'm always excited to discuss new projects and opportunities. Feel free to reach out and let's chat!
              </p>
            </div>
            <form className="space-y-4">
              <Input type="text" placeholder="Name" className="w-full" />
              <Input type="email" placeholder="Email" className="w-full" />
              <Textarea placeholder="Message" rows={4} className="w-full" />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}