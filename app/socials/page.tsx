import Link from "next/link"
import { Github, Linkedin, Mail, Globe } from "lucide-react"
import { XIcon } from "@/components/icons/x-icon" // <-- You'll define this icon below or use any SVG
import { cn } from "@/lib/utils"

export default function SocialsPage() {
  const socials = [
    {
      platform: "LinkedIn",
      username: "abhishekdg1",
      url: "https://linkedin.com/in/abhishekdg1",
      description: "Connect with me professionally and stay updated with my career journey.",
      icon: Linkedin,
    },
    {
      platform: "GitHub",
      username: "abhishekgit03",
      url: "https://github.com/abhishekgit03",
      description: "Check out my code repositories, contributions, and projects.",
      icon: Github,
    },
    {
      platform: "X (formerly Twitter)",
      username: "@Coder_Ab013",
      url: "https://x.com/Coder_Ab013/",
      description: "Follow me for tech insights, updates, and occasional thoughts.",
      icon: XIcon,
    },
    {
      platform: "Medium",
      username: "@abhishek20dgp",
      url: "https://medium.com/@abhishek20dgp",
      description: "Read my articles on AI, machine learning, and software development.",
      icon: Globe,
    },
    {
      platform: "Email",
      username: "abhishek20dgp@gmail.com",
      url: "mailto:abhishek20dgp@gmail.com",
      description: "Reach out to me directly for collaborations or inquiries.",
      icon: Mail,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Socials</h1>
        <p className="text-muted-foreground">
          I'm active across platforms — feel free to reach out or follow me where you hang out most.
        </p>

        <div className="space-y-6">
          {socials.map((social, index) => {
            const Icon = social.icon
            return (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                className="flex flex-col sm:flex-row sm:items-center justify-between rounded-md border p-4 transition-all hover:bg-muted/40"
              >
                <div className="flex items-center gap-4">
                  <Icon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{social.platform}</p>
                    <p className="text-sm text-muted-foreground">{social.username}</p>
                  </div>
                </div>
                <p className="mt-2 sm:mt-0 text-sm text-muted-foreground">{social.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
