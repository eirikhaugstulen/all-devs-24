import ConfettiButtonWrapper from "@/components/magicui/ConfettiButtonWrapper";
import DotPattern from "@/components/magicui/dot-pattern";
import Globe from "@/components/magicui/globe";
import HyperText from "@/components/magicui/hyper-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'all_devs 24 - Generative AI for High-fidelity Prototypes',
  description: 'Join us to see how AI can make your prototypes and web-applications better. Simple tips for everyone, no expert skills needed!',
};

export default async function Index() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
        <DotPattern className="absolute z-0" />
        <Globe
          className="relative z-0"
        />
        <div>
          <HyperText text="all_devs 24" className="relative z-10 text-5xl md:text-6xl text-black dark:text-white" />
        </div>
        <h1 className='relative text-center z-10 text-3xl mt-10 text-black dark:text-white'>
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
