"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export default function Skills() {
  const frontendSkills = [
    { name: "React", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Shadcn UI", level: "Intermediate" },
    { name: "Material UI", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "REST API", level: "Intermediate" },
    { name: "Bootstrap", level: "Basic" },
  ];

  const backendSkills = [
    { name: "NodeJS", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "REST API", level: "Intermediate" }, // Consistent naming
    { name: "GraphQL", level: "Basic" },
    { name: "MSSQL Server", level: "Basic" },
    { name: "MongoDB", level: "Basic" },
  ];

  const renderSkill = (skill) => (
    <li key={skill.name} className="flex items-center space-x-2 mb-2">
      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
      <div>
        <span className="font-semibold text-gray-800">{skill.name}</span>
        <span className="text-sm text-gray-500"> ({skill.level})</span>
      </div>
    </li>
  );

  return (
    <section
      id="skills"
      className="py-20 min-h-screen flex flex-col items-center justify-center bg-white text-gray-600"
    >
      <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">
        Skills
      </h1>
      <p className="text-center text-lg mb-8">My technical level</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-4">
        {/* Frontend Skills Card */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-center mb-4">Frontend</h3>
          <div className="grid grid-cols-2 gap-4">
            <ul>{frontendSkills.slice(0, 3).map(renderSkill)}</ul>
            <ul>{frontendSkills.slice(3).map(renderSkill)}</ul>
          </div>
        </div>
        {/* Backend Skills Card */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-center mb-4">Backend</h3>
          <div className="grid grid-cols-2 gap-4">
            <ul>{backendSkills.slice(0, 3).map(renderSkill)}</ul>
            <ul>{backendSkills.slice(3).map(renderSkill)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
