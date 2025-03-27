// src/components/hero.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Example import from shadcn/ui

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hello, <span className="text-orange-500">I&apos;m Jawd</span>,<br />
            UI/UX Designer Based in <span className="text-orange-500">USA</span>
            .
          </h1>
          <p className="mt-4 text-gray-600">
            I help companies create memorable digital experiences.
          </p>
          <div className="mt-6">
            <Button
              variant="default"
              className="bg-orange-500 hover:bg-orange-600"
            >
              Hire Me
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center relative">
          {/* Orange Circle Behind */}
          <div className="absolute -z-10 bg-orange-100 rounded-full w-64 h-64 md:w-80 md:h-80 -top-10 md:-top-20" />
          <Image
            src="/profile.png" // Replace with your own image in /public folder
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full object-cover z-10"
          />
        </div>
      </div>
    </section>
  );
}
