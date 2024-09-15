import ConfettiButtonWrapper from "@/components/magicui/ConfettiButtonWrapper";
import DotPattern from "@/components/magicui/dot-pattern";
import Globe from "@/components/magicui/globe";
import HyperText from "@/components/magicui/hyper-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'all_devs 24 - Generative AI for High-fidelity Prototypes',
  description: 'Join all_devs 24 to explore the cutting-edge of Generative AI for creating high-fidelity prototypes. Learn, connect, and innovate with fellow developers.',
};

export default async function Index() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center bg-gray-100 overflow-hidden">
        <DotPattern className="absolute z-0" /> {/* Use DotPattern as background */}
        <Globe
          className="relative z-0" // Make the globe big
        />
        <div>
          <HyperText text="all_devs 24" className="relative z-10 text-5xl md:text-6xl" /> {/* Hypertext only */}
        </div>
        <h1 className='relative text-center z-10 text-3xl mt-10'>
          Generative AI for High-fidelity Prototypes
        </h1>
        <div className='relative z-10 space-x-5 pb-20 md:pb-0'>
          <ConfettiButtonWrapper />

          <Link href="/resources">
            <Button
              variant="outline"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}
