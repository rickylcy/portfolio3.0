"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lightbulb, Briefcase, Headphones, Baby, File } from "lucide-react";
import BackgroundModal from "./BackgroundModal";

export default function AboutMe() {
  const [openBackground, setOpenBackground] = useState(false);

  const handleOpenBackground = () => setOpenBackground(true);
  const handleCloseBackground = () => setOpenBackground(false);

  return (
    <section
      id="about-me"
      className="py-20 min-h-screen flex flex-col items-center justify-center bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          About Me
        </h2>
        <p className="text-center text-gray-600 mb-8">A brief introduction</p>

        <div className="max-w-3xl mx-auto">
          {/* STAT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="border rounded-md p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <Lightbulb className="mb-3 h-8 w-8 text-gray-700" />
              <h3 className="font-semibold text-xl text-gray-800">
                Junior Developer
              </h3>
              <p className="text-sm text-orange-500 mt-1">2+ Years</p>
            </div>
            <div className="border rounded-md p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <Briefcase className="mb-3 h-8 w-8 text-gray-700" />
              <h3 className="font-semibold text-xl text-gray-800">Completed</h3>
              <p className="text-sm text-orange-500 mt-1">10+ Projects</p>
            </div>
            <div className="border rounded-md p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <Headphones className="mb-3 h-8 w-8 text-gray-700" />
              <h3 className="font-semibold text-xl text-gray-800">
                Continuous Learning
              </h3>
              <p className="text-sm text-orange-500 mt-1">Always Evolving</p>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-center text-gray-700 leading-relaxed mb-10">
            I'm a frontend developer who creates clean, responsive, and
            intuitive web experiences using React, NextJS, and modern UI
            frameworks. Though I'm still a junior, I'm always learning and
            evolving—and my projects reflect that growth.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              className="bg-orange-500 hover:bg-orange-600"
              onClick={handleOpenBackground}
            >
              My Background
              <Baby className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="default"
              className="bg-orange-500 hover:bg-orange-600"
              asChild
            >
              <a href="/ricky-resume.pdf" download="ricky-resume.pdf">
                Download CV
                <File className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* BACKGROUND MODAL */}
      <BackgroundModal open={openBackground} onClose={handleCloseBackground} />
    </section>
  );
}
