import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Multi-Document RAG Agent",
      description:
        "The Multi-Document RAG Agent is an intelligent query routing system built to retrieve and process information from large sets of documents efficiently. It uses a Retrieval-Augmented Generation (RAG) framework to select the most relevant documents and passages, significantly improving query response accuracy and efficiency. ",
      techStack: ["Python", "LangChain", "OpenAI API", "ChromaDB", "PyMuPDF", "Streamlit"],
      features: [
        "Query across multiple PDFs",
        "Context-aware answers",
        "LangChain custom agent integration",
        "Semantic search with ChromaDB",
        "Streamlit-based frontend",
      ],
      githubLink: "https://github.com/abhishekgit03/Multi-Document-RAG-Agent",
    },
    {
      title: "Ueducate",
      description:
        "GenAI-accelerated learning platform tailored for fast textbook solutions, enabling students to seamlessly upload PDF textbooks and promptly retrieve answers to their questions directly from the material.",
      techStack: ["Python", "OpenAI API", "MongoDB", "Langchain", "Faiss", "Pinecone", "Streamlit"],
      features: [
        "PDF textbook upload",
        "Question answering from textbooks",
        "Fast retrieval of solutions",
        "GenAI-accelerated learning",
      ],
      githubLink: "https://github.com/abhishekgit03/ueducate",
    },
    {
      title: "Personal Blog",
      description:
        "Developed a dynamic and responsive personal blog, utilizing React and Tailwind CSS to create a visually appealing user interface. Implemented Strapi headless CMS to enable efficient and flexible content management.",
      techStack: ["React.js", "Tailwind", "Strapi CMS", "Cloudinary"],
      features: [
        "Dynamic and responsive UI",
        "Efficient content management with Strapi",
        "Optimized image storage with Cloudinary",
        "Fast loading times",
      ],
      githubLink: "https://github.com/abhishekgit03/MyBlog",
    },
    {
      title: "SuperGPT",
      description:
        "Advanced AI assistant with features like code generation, document retrieval, image search, image generation and web search functionalities.",
      techStack: ["Python", "Flask", "OpenAI API", "Pinecone", "Langchain", "MongoDB", "Google Cloud Platform"],
      features: [
        "Code generation",
        "Document retrieval",
        "Image search and generation",
        "Web search functionalities",
        "Integration with OpenAI Assistant API",
      ],
      githubLink: "https://github.com/abhishekgit03/supergpt",
    },
    {
      title: "PsychAI",
      description:
        "A mental health AI companion powered by Google's Gemini API. Built with a clean, accessible UI to provide thoughtful, human-like conversations for emotional support.",
      techStack: ["React.js", "Tailwind CSS", "Gemini API"],
      features: [
        "Conversational AI for mental wellness",
        "Built with Gemini API",
        "Responsive and minimal UI",
        "Real-time chat experience",
      ],
      githubLink: "https://github.com/abhishekgit03/PsychAI",
    },
    
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Projects</h1>
        <p className="text-muted-foreground mb-8">
          Here are some of the projects I've worked on. Each project showcases different skills and technologies.
        </p>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={project.githubLink} target="_blank">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
