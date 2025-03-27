// src/components/cta.tsx
export default function CTA() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Have An Awesome Project Idea? Let&apos;s Discuss
        </h2>
        <p className="text-gray-600 mb-6">
          I&apos;m always open to new opportunities and exciting projects.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition">
          Contact Me
        </button>
      </div>
    </section>
  );
}
