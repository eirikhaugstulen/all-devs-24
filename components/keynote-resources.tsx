'use client'

import { WindIcon, DatabaseIcon, CodeIcon, EditIcon } from "lucide-react"
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid"

const resources = [
  {
    Icon: WindIcon,
    name: "Flow by Whispr",
    description: "Software that turns your voice into text, making it easier to control your computer by talking",
    href: "https://www.flowvoice.ai",
    cta: "Explore",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 opacity-20" />,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    Icon: DatabaseIcon,
    name: "Postgres.new",
    description: "Instant, shareable PostgreSQL databases",
    href: "https://postgres.new",
    cta: "Explore",
    background: <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-300 opacity-20" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    Icon: CodeIcon,
    name: "v0 by Vercel",
    description: "AI-driven UI generation tool for rapid prototyping and design iteration",
    href: "https://v0.dev",
    cta: "Explore",
    background: <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-300 opacity-20" />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    Icon: EditIcon,
    name: "Cursor",
    description: "AI-enhanced code editor for smarter, more efficient programming",
    href: "https://cursor.sh",
    cta: "Explore",
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-300 opacity-20" />,
    className: "md:col-span-2 md:row-span-1",
  },
]

export function KeynoteResources() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Resources</h1>
        <p className="text-xl text-muted-foreground">
          Explore the tools we will be using during the keynote
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <BentoGrid className="md:grid-cols-3 md:auto-rows-[12rem] gap-4">
          {resources.map((resource) => (
            <BentoCard key={resource.name} {...resource} />
          ))}
        </BentoGrid>
      </div>
    </div>
  )
}