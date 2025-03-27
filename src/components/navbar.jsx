// src/components/navbar.tsx
"use client"; // needed if you have any client-side interactivity (e.g., a mobile menu)

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white py-4 shadow">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo or Brand Name */}
        <div className="font-bold text-xl">MyPortfolio</div>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
