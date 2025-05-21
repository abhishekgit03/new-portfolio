import { Calendar, MapPin, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Raccoon AI",
      position: "Software Engineer Intern",
      period: "Jan 2025 - Present",
      location: "Bangalore, Onsite",
      description:
        "Joined the team as a founding engineer intern and contributed to building an autonomous AI browser agent using Playwright. Designed core decision-making logic using large language models, developed backend services with FastAPI and Golang, and implemented frontend components using Next.js.",
      skills: ["Playwright", "LLMs", "FastAPI", "Golang", "Next.js", "AI Agents"],
      current: true,
    },
    {
      company: "TapHealth",
      position: "Generative AI Intern",
      period: "Sept 2024 - Jan 2025",
      location: "Gurgaon, Remote",
      description:
        "Enhanced AI digital diagnostic solutions using Hybrid RAG and Graph databases for optimized disease ontology retrieval and clinical support. Also developed hospital chatbots to boost patient engagement and lead generation.",
      skills: ["Generative AI", "RAG", "Graph Databases", "Chatbots", "Healthcare AI"],
      current: false,
    },
    {
      company: "Ground0.ai",
      position: "Machine Learning Intern",
      period: "Feb 2024 - Aug 2024",
      location: "Mumbai, Remote",
      description:
        "Successfully built a MVP for the company through Generative AI integration for an AI Career Co-Pilot using Google Gemini, Milvus Vector Database, Flask and Strapi. Developed efficient Retrieval-Augmented-Generation pipelines using Langchain, embedding models and vector databases to fetch similar career roles based on user profiles. Conducted in-depth research and delivered consultancy on GenAI solutions for the company's core products.",
      skills: ["Google Gemini", "Milvus", "Flask", "Strapi", "RAG", "Langchain", "Vector Databases"],
      current: false,
    },
    {
      company: "Acciolbis",
      position: "Machine Learning Intern",
      period: "Nov 2022 - Dec 2023",
      location: "France, Remote",
      description:
        "Led the development of Generative AI voice agents for automated sales calling, securing the company's first customer and driving a 30% increase in lead conversions. Built and managed high-performance generative AI pipelines utilizing Langchain, Pinecone and Retrieval-Augmented Generation (RAG), improving data retrieval efficiency. Conducted extensive research, training, and fine-tuning of large language models (LLMs) for specific company use-cases, including Vicuna and LLaMA 2, increasing model accuracy by 40%.",
      skills: ["Voice AI", "Langchain", "Pinecone", "RAG", "LLM Fine-tuning", "Vicuna", "LLaMA 2"],
      current: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Experience</h1>
        <p className="text-muted-foreground mb-8">
          My professional journey includes experience in Software Engineering, Generative AI, and Machine Learning
          across various companies.
        </p>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative flex items-start md:justify-center md:even:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-background shadow shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2">
                <Briefcase className="h-5 w-5" />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-background p-4 rounded-lg border shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-lg">{experience.company}</h3>
                  {experience.current && (
                    <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                      Current
                    </Badge>
                  )}
                </div>
                <div className="text-muted-foreground mb-2">{experience.position}</div>
                <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
