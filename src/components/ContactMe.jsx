"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, UserPlus, Linkedin, LinkedinIcon } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactOptions = [
  {
    icon: <Mail className="h-8 w-8" />,
    title: "Email",
    contact: "rickylcy8183@gmail.com",
    button: (
      <Button asChild className="flex items-center gap-2">
        <a
          href="mailto:rickylcy8183@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="h-5 w-5" />
          Send Email
        </a>
      </Button>
    ),
  },
  {
    icon: <LinkedinIcon className="h-8 w-8" />,
    title: "LinkedIn",
    contact: "Ching Yin (Ricky) Lau",
    button: (
      <Button asChild className="flex items-center gap-2">
        <a
          href="https://www.linkedin.com/in/ricky-lau-457825206/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UserPlus className="h-5 w-5" />
          Connect
        </a>
      </Button>
    ),
  },
];

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailStatus, setEmailStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_8f1rcgn", // Replace with your EmailJS service ID
        "template_hjuqk19", // Replace with your EmailJS template ID
        formData,
        "L06ZrGdQMtZiN067E" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmailStatus("success");
          setTimeout(() => setEmailStatus(""), 5000);
        },
        (error) => {
          console.log("FAILED...", error);
          setEmailStatus("error");
          setTimeout(() => setEmailStatus(""), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 min-h-screen px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg text-gray-600">Get in touch</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Left Column: Contact Options */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow border flex flex-col items-center text-center"
            >
              {option.icon}
              <h3 className="text-xl font-semibold mt-2">{option.title}</h3>
              <p className="text-gray-600 mt-1">{option.contact}</p>
              <div className="mt-3">{option.button}</div>
            </div>
          ))}
        </div>
        {/* Right Column: Message Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send me a message</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-md mx-auto"
            noValidate
            autoComplete="off"
          >
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 h-32"
              required
            ></textarea>
            <Button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded"
            >
              Send Message
            </Button>
            {emailStatus === "success" && (
              <div className="bg-green-100 text-green-800 p-2 rounded mt-2">
                Your message has been sent successfully!
              </div>
            )}
            {emailStatus === "error" && (
              <div className="bg-red-100 text-red-800 p-2 rounded mt-2">
                There was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
