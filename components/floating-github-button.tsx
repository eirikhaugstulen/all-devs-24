'use client'

import { Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const buttonVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.3
    } 
  },
  hover: { 
    scale: 1.1,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { scale: 0.9 }
}

export function FloatingGithubButton() {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <motion.div
            className="fixed top-4 right-4 z-50"
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <Link
              href="https://github.com/eirikhaugstulen/all-devs-24"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-200"
              aria-label="View source on GitHub"
            >
              <Github className="w-6 h-6" />
            </Link>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="left" align="end" className="bg-secondary text-secondary-foreground">
          <p>View source on GitHub</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}