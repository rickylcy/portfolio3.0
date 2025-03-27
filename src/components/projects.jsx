// src/components/projects.tsx
export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          My Client Projects
        </h2>

        {/* Example "Projects" stats */}
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-500">500+</p>
            <p className="text-gray-700">Web Design</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-500">300+</p>
            <p className="text-gray-700">App Design</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-500">250+</p>
            <p className="text-gray-700">Dashboard</p>
          </div>
        </div>

        {/* Overall stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-800">2500+</p>
            <p className="text-gray-600">Project Done</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-800">7+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-800">100%</p>
            <p className="text-gray-600">Clients Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
