'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, WindIcon, DatabaseIcon, CodeIcon, EditIcon } from "lucide-react"

interface Resource {
  title: string
  description: string
  link: string
  icon: React.ReactNode
  color: string
}

const resources: Resource[] = [
  {
    title: "Flow by Whispr",
    description: "AI-powered workflow automation platform for seamless task management",
    link: "https://www.flowvoice.ai",
    icon: <WindIcon className="h-8 w-8" />,
    color: "from-blue-400 to-cyan-300",
  },
  {
    title: "Postgres.new",
    description: "Instant, shareable PostgreSQL databases for quick prototyping and testing",
    link: "https://postgres.new",
    icon: <DatabaseIcon className="h-8 w-8" />,
    color: "from-indigo-400 to-purple-300",
  },
  {
    title: "v0 by Vercel",
    description: "AI-driven UI generation tool for rapid prototyping and design iteration",
    link: "https://v0.dev",
    icon: <CodeIcon className="h-8 w-8" />,
    color: "from-red-400 to-pink-300",
  },
  {
    title: "Cursor",
    description: "AI-enhanced code editor for smarter, more efficient programming",
    link: "https://cursor.sh",
    icon: <EditIcon className="h-8 w-8" />,
    color: "from-orange-400 to-amber-300",
  },
]

export function KeynoteResources() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Resources</h1>
        <p className="text-xl text-muted-foreground">Explore these innovative tools for developers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <CardHeader className={`bg-gradient-to-br ${resource.color} p-6 transition-all duration-300 group-hover:scale-105`}>
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center mb-4 mx-auto shadow-lg">
                {resource.icon}
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <CardTitle className="text-xl mb-2 text-center">{resource.title}</CardTitle>
              <CardDescription className="text-center">{resource.description}</CardDescription>
            </CardContent>
            <CardFooter className="pt-2 pb-6">
              <Button className="w-full" asChild>
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  Explore <ExternalLinkIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}