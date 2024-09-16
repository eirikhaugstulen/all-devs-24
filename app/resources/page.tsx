import { KeynoteResources } from "@/components/keynote-resources"
import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

export const metadata: Metadata = {
  title: 'Resources | all_devs 24',
  description: 'Explore innovative tools and resources for developers at all_devs 24',
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto py-6 px-4">
        <Link href="/">
          <Button variant="outline" className="mb-6 dark:text-gray-200 dark:border-gray-700">
            <ArrowLeftIcon className="mr-2 h-4 w-4 dark:text-gray-200" /> Back to Home
          </Button>
        </Link>
      </div>
      <KeynoteResources />
    </main>
  )
}