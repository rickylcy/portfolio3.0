// src/components/feedback.tsx
export default function Feedback() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Our Clients Feedback
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial Card */}
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-700 italic">
              &quot;Jawd&apos;s design work was exceptional. We saw a huge
              increase in user engagement.&quot;
            </p>
            <p className="mt-4 font-semibold">- Client Name</p>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-700 italic">
              &quot;Professional, creative, and delivered on time. Highly
              recommended!&quot;
            </p>
            <p className="mt-4 font-semibold">- Another Client</p>
          </div>
        </div>
      </div>
    </section>
  );
}
