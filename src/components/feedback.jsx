// src/components/feedback.tsx
export default function Feedback() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonial</h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Testimonial Card */}
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-700 italic text-center">
              Professional, creative, and delivered on time. Highly recommended!
            </p>
            <p className="mt-4 font-semibold text-center">- Simon Yu</p>
          </div>
        </div>
      </div>
    </section>
  );
}
