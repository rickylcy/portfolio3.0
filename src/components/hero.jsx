"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button"; // Example import from shadcn/ui
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white py-10  min-h-screen flex flex-col items-center md:py-50 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hello, <span className="text-orange-500">I&apos;m Ricky</span>,
            <br />
            Web Developer Based in{" "}
            <span className="text-orange-500">Brisbane, Australia</span>.
          </h1>
          <p className="mt-4 text-gray-600">
            I help companies create excellent web applications.
          </p>
          <div className="mt-6">
            <Link href="#contact">
              <Button
                variant="default"
                className="bg-orange-500 hover:bg-orange-600"
              >
                Hire Me
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center relative">
          <Image
            className="home_img"
            src="/photo.jpg" // Replace with the actual image path
            alt="Profile Image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
