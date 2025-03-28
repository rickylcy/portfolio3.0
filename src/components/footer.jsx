"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Ricky Lau</h2>
      <div className="flex flex-wrap justify-center space-x-6 mb-6">
        <Link
          href="/#about-me"
          className="cursor-pointer text-gray-600 hover:text-primary"
        >
          About
        </Link>
        <Link
          href="/#portfolio"
          className="cursor-pointer text-gray-600 hover:text-primary"
        >
          Projects
        </Link>
        <Link
          href="/#services"
          className="cursor-pointer text-gray-600 hover:text-primary"
        >
          Services
        </Link>
      </div>
      <div className="flex justify-center space-x-4 mb-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-blue-600 hover:text-blue-800"
        >
          <Facebook className="h-6 w-6" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-pink-500 hover:text-pink-700"
        >
          <Instagram className="h-6 w-6" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-blue-400 hover:text-blue-600"
        >
          <Twitter className="h-6 w-6" />
        </a>
      </div>
      <p className="text-sm text-gray-500">
        © Crypticalcoder. All rights reserved
      </p>
    </footer>
  );
}
