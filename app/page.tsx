import Link from "next/link"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { XIcon } from "@/components/icons/x-icon"


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Hey, I'm Abhishek 👋
        </h1>

        <div className="mt-6 space-y-4 text-lg text-muted-foreground">
          <p>
            i'm a final year cs undergrad who loves building things — from software systems to scrappy side projects. currently engineering cool stuff at Raccoon AI 🧠💻
          </p>

          <p>
            outside of code, I dive deep into history, geopolitics, and science 🌍🔬. if it’s about how the world works, i want to understand it.
          </p>

          <p>
            i binge spy thrillers 🕵️, take spontaneous trips ✈️, and hunt for the best street food in every city I visit 🍜🌮. curiosity drives everything I do.
          </p>
        </div>


        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="https://github.com/abhishekgit03" target="_blank">
            <Button variant="outline" size="sm">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/abhishekdg1/" target="_blank">
            <Button variant="outline" size="sm">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </Link>
          <Link href="https://x.com/Coder_Ab013/" target="_blank">
            <Button variant="outline" size="sm">
              <XIcon className="mr-2 h-4 w-4" />
              X.com
            </Button>
          </Link>

        </div>

        <div className="mt-12 grid gap-4">
          <Link href="/projects">
            <div className="group flex items-center justify-between rounded-lg border p-4 transition-all hover:bg-accent">
              <div className="space-y-1">
                <h2 className="text-xl font-medium">Projects</h2>
                <p className="text-sm text-muted-foreground">Check out my recent work and side projects</p>
              </div>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link href="/experience">
            <div className="group flex items-center justify-between rounded-lg border p-4 transition-all hover:bg-accent">
              <div className="space-y-1">
                <h2 className="text-xl font-medium">Experience</h2>
                <p className="text-sm text-muted-foreground">Learn about my professional journey and internships</p>
              </div>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link href="/blogs">
            <div className="group flex items-center justify-between rounded-lg border p-4 transition-all hover:bg-accent">
              <div className="space-y-1">
                <h2 className="text-xl font-medium">Blogs</h2>
                <p className="text-sm text-muted-foreground">Read my articles on Medium</p>
              </div>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link href="/socials">
            <div className="group flex items-center justify-between rounded-lg border p-4 transition-all hover:bg-accent">
              <div className="space-y-1">
                <h2 className="text-xl font-medium">Socials</h2>
                <p className="text-sm text-muted-foreground">Connect with me on social media</p>
              </div>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link href="/resume">
            <div className="group flex items-center justify-between rounded-lg border p-4 transition-all hover:bg-accent">
              <div className="space-y-1">
                <h2 className="text-xl font-medium">Resume</h2>
                <p className="text-sm text-muted-foreground">View or download my resume</p>
              </div>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
