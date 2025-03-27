// src/components/services.tsx
export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Services I Am Providing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service Card */}
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="font-semibold text-xl mb-2">WEB DESIGN</h3>
            <p className="text-gray-600">
              Modern and responsive web design solutions.
            </p>
          </div>
          {/* Service Card */}
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="font-semibold text-xl mb-2">APP DESIGN</h3>
            <p className="text-gray-600">
              Engaging mobile app design for iOS and Android.
            </p>
          </div>
          {/* Service Card */}
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="font-semibold text-xl mb-2">DASHBOARD DESIGN</h3>
            <p className="text-gray-600">
              Intuitive dashboards to track important metrics.
            </p>
          </div>
          {/* Service Card */}
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="font-semibold text-xl mb-2">DESIGN STRATEGY</h3>
            <p className="text-gray-600">
              Strategic approach for impactful user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
