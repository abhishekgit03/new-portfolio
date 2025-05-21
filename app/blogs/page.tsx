import Link from "next/link"
import { ExternalLink, Calendar } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function BlogsPage() {
  const blogs = [
    {
      title: "My Interview experience at Atlan",
      description:
        "A detailed walkthrough of my Product Operations Intern interview at Atlan, the challenge round, interviews, and lessons learned.",
      date: "June 30, 2024",
      url: "https://medium.com/@abhishek20dgp/my-interview-experience-at-atlan-67d84bc19a8c",
    },
    {
      title: "Building a Bangla LLM by finetuning Gemma 2B LLM using Low-Rank-Adaptation(LORA)",
      description:
        "How I fine‑tuned Google's Gemma 2B to build a Bangla LLM using LoRA and share the training pipeline and code.",
      date: "March 8, 2024",
      url: "https://medium.com/@abhishek20dgp/building-a-bangla-llm-by-finetuning-gemma-2b-llm-using-low-rank-adaptation-lora-73bad579f0a4",
    },
    {
      title: "The Sheep Analogy",
      description:
        "An exploration of how often we follow the crowd in our careers and life decisions, and why we shouldn’t always trust the majority.",
      date: "January 22, 2024",
      url: "https://medium.com/@abhishek20dgp/the-sheep-analogy",
    },
    {
      title: "Threading in Python",
      description:
        "A guide to using Python threading to run functions concurrently and improve program performance.",
      date: "August 6, 2023",
      url: "https://medium.com/@abhishek20dgp/threading-in-python-b2b3971ca698",
    },
    {
      title: "My journey of becoming a GDSC Lead 2023–24 [Part 1]",
      description:
        "How I joined college tech communities, ran workshops, built DevFest 22, and became Google Developer Student Club Lead.",
      date: "August 5, 2023",
      url: "https://medium.com/@abhishek20dgp/my-journey-of-becoming-a-gdsc-lead-2023-24-part-1-6de2d9ef8614",
    },
    {
      title: "My journey of becoming a GDSC Lead 2023–24 [Part 2]",
      description:
        "The essay, aptitude test, and interview rounds that led me to be selected as GDSC Lead in early 2023.",
      date: "August 5, 2023",
      url: "https://medium.com/@abhishek20dgp/my-journey-of-becoming-a-gdsc-lead-2023-24-part-2-a716bb453f5",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Blogs</h1>
        <p className="text-muted-foreground mb-8">
          I write about AI, tech, career journeys, and personal growth. Here are some of my recent articles on Medium.
        </p>

        <div className="grid gap-6">
          {blogs.map((blog, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{blog.date}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{blog.description}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={blog.url}
                  target="_blank"
                  className="text-sm font-medium text-primary flex items-center hover:underline"
                >
                  Read on Medium
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
