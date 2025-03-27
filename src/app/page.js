// src/app/page.tsx
import Hero from "@/components/hero";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Feedback from "@/components/feedback";
import CTA from "@/components/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Feedback />
      <CTA />
    </>
  );
}
