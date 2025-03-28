// src/app/page.tsx
import Hero from "@/components/hero";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Feedback from "@/components/feedback";
import CTA from "@/components/cta";
import AboutMe from "@/components/aboutme";
import Skills from "@/components/skills";
import Portfolio from "@/components/portfolio";
import ContactMe from "@/components/ContactMe";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <Portfolio />
      <ContactMe />
      <Feedback />
    </>
  );
}
