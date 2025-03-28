"use client";

import { useState } from "react";
import ServiceDetails from "./servicedetails";
import { Button } from "./ui/button";

export default function Services() {
  const services = [
    {
      title: "Web Designer",
      description:
        "Crafting modern, responsive websites that captivate and engage.",
      details: [
        "I develop the user interface.",
        "Web page development.",
        "I create UX element interactions.",
        "I position your company brand.",
        "Design and mockups of products for companies.",
      ],
    },
    {
      title: "UI/UX Designer",
      description:
        "Transforming ideas into intuitive, user-friendly digital experiences.",
      details: [
        "I design user interfaces.",
        "User experience improvements.",
        "Wireframes and mockups.",
        "User testing and feedback.",
        "Continuous design iteration.",
      ],
    },
    {
      title: "Trilingual Service",
      description:
        "Offering expert communication in multiple languages to boost your brand.",
      details: [
        "Brand identity design.",
        "Logo creation.",
        "Brand guidelines.",
        "Marketing materials.",
        "Brand strategy.",
      ],
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => setSelectedService(service);
  const handleClose = () => setSelectedService(null);

  const renderService = (service) => (
    <div
      key={service.title}
      className="bg-white p-6 rounded shadow text-center hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
      <Button
        className="m-4"
        onClick={() => handleOpen(service)}
        aria-label={`View more about ${service.title}`}
      >
        View More
      </Button>
    </div>
  );

  return (
    <section
      id="services"
      className="py-20 min-h-screen flex flex-col items-center justify-center bg-white text-gray-600"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Services I Am Providing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(renderService)}
        </div>
      </div>
      {selectedService && (
        <ServiceDetails
          open={Boolean(selectedService)}
          onClose={handleClose}
          title={selectedService.title}
          details={selectedService.details}
        />
      )}
    </section>
  );
}
