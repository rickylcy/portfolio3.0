"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Eye, ExternalLink } from "lucide-react";
import ProjectDetails from "./projectdetails";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  const portfolioItems = [
    {
      title: "Visa Company Website",
      category: ["Web", "Mobile-Web", "Responsive"],
      description: "Web Development for Visa-to-China",
      image: "/visa-logo.jpg",
      demoLink: "https://visatochina.com.au/",
      status: "Completed",
      introduction:
        "This is a Visa Company Website developed for an actual client in Brisbane. It provides comprehensive information and assistance for Australians seeking visas to China.",
      technologies: [
        "React",
        "Material-UI",
        "JavaScript",
        "HTML/CSS",
        "Facebook SDK",
      ],
      tasks: [
        "Develop UI using React and Material-UI.",
        "Integrate various APIs for enhanced functionality.",
        "Deploy and host the application.",
      ],
      screenshots: ["/visa.png"],
    },
    {
      title: "IMDb Clone Movie Portal",
      category: ["Web", "Mobile-Web", "Responsive", "Self-Learning"],
      description: "Responsive Movie Searching Platform",
      image: "/IMDB.png",
      demoLink: "https://ricky-movie-portal.vercel.app/",
      status: "Completed",
      introduction:
        "A project built with Next.js and Tailwind CSS to help users browse movies by trending or top-rated categories. It integrates with TMDB API for dynamic data.",
      technologies: ["Next.js", "TailwindCSS"],
      tasks: [
        "Design and develop UI using React and TailwindCSS.",
        "Integrate TMDB API for movie data.",
        "Deploy on Vercel.",
      ],
      screenshots: ["/movie.png", "/movie1.png"],
    },
    {
      title: "Weather App",
      category: ["Web", "Self-Learning"],
      description: "Weather Comparison App",
      image: "/weather.jpg",
      demoLink: "https://ricky-weather-app.vercel.app/",
      status: "Completed",
      introduction:
        "A React and Redux project to compare the weather of two cities. It integrates with OpenWeatherMap API and displays time zone differences.",
      technologies: ["React", "Redux"],
      tasks: [
        "Design and develop UI using React and SCSS.",
        "Integrate OpenWeatherMap API.",
        "Deploy on Vercel.",
      ],
      screenshots: ["/weather-1.png"],
    },
    {
      title: "Sales Report Website",
      category: ["Web", "Mobile-Web", "Responsive"],
      description: "Company Product",
      image: "https://via.placeholder.com/150",
      demoLink: "",
      status: "Completed",
      introduction:
        "A website that visualizes sales data with dynamic charts and detailed reports, tailored for both desktop and mobile users.",
      technologies: [
        "React",
        "Material-UI",
        "JavaScript",
        "Chart.js",
        "HTML/CSS",
      ],
      tasks: [
        "Develop UI with React and Material-UI.",
        "Integrate APIs for real-time sales data.",
        "Implement dynamic charts using Chart.js.",
        "Deploy the application.",
      ],
      screenshots: ["/report.png", "/report-1.png"],
    },
    {
      title: "2D Barcode Mobile Ordering",
      category: ["Mobile-Web"],
      description: "Company Product",
      image: "https://via.placeholder.com/150",
      demoLink: "",
      status: "In Testing Stage",
      introduction:
        "A mobile ordering product using 2D barcodes in restaurants.",
      technologies: ["React", "Bootstrap", "Express", "REST"],
      tasks: [
        "Develop UI with React and Bootstrap.",
        "Integrate APIs for enhanced functionality.",
        "Deploy and host the application.",
      ],
      screenshots: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      title: "POS Customer Display App",
      category: ["Application", "Responsive"],
      description: "Company Product for POS",
      image: "/second-display.jpg",
      demoLink: "",
      status: "Completed",
      introduction:
        "An app for POS customer displays showing orders and advertisements. It’s fully responsive for various screen sizes.",
      technologies: ["C#", "WPF"],
      tasks: [
        "Develop UI using C# and WPF.",
        "Ensure responsive design.",
        "Deploy the desktop application.",
      ],
      screenshots: ["/second-display.jpg"],
    },
    {
      title: "Realtime Chat App",
      category: ["Web", "Mobile-Web", "Responsive", "Self-Learning"],
      description: "Responsive Chat App with Firebase",
      image: "https://via.placeholder.com/150",
      demoLink: "https://ricky-chat-app.vercel.app/",
      status: "Completed",
      introduction:
        "A responsive chat app built with Firebase and React, featuring real-time messaging and Google authentication.",
      technologies: ["React", "Firebase", "Joy UI"],
      tasks: [
        "Develop UI with React and Joy UI.",
        "Integrate Firebase for authentication and real-time data.",
        "Implement Google sign-in.",
        "Deploy on Vercel.",
      ],
      screenshots: ["/chat-app-1.png", "/chat-app-2.png"],
    },
    {
      title: "Anyportal",
      category: ["Self-Learning", "Mobile-Web"],
      description: "Online Forum",
      image: "/anyportal.png",
      demoLink: "https://anyportal.vercel.app",
      status: "In Progress",
      introduction:
        "An online forum project developed for facilitating discussions. (Note: There is a known 404 issue; please refresh if encountered.)",
      technologies: ["Next.js", "CSS", "JavaScript"],
      tasks: [
        "Design UI for a responsive forum.",
        "Implement authentication.",
        "Setup MongoDB for data storage.",
      ],
      screenshots: ["/anyportal-1.png", "/anyportal-2.png"],
    },
    {
      title: "Portfolio v2.0",
      category: ["Web", "Mobile-Web", "Responsive", "Self-Learning"],
      description: "Portfolio for demo",
      image: "https://via.placeholder.com/150",
      demoLink: "https://portfolio2024-ricky.vercel.app/",
      status: "In Progress",
      introduction: "A personal portfolio site showcasing projects and skills.",
      technologies: ["React", "Joy UI", "SMTP EmailJS"],
      tasks: [
        "Develop UI with React and Joy UI.",
        "Ensure responsive design.",
        "Deploy the site.",
      ],
      screenshots: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.includes(activeCategory));

  return (
    <section
      id="portfolio"
      className="py-20 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
          <p className="text-lg text-gray-600 mb-4">Most recent work</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              "All",
              "Web",
              "Mobile-Web",
              "Responsive",
              "Self-Learning",
              "Application",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 border-b-2 ${
                  activeCategory === cat
                    ? "text-primary border-primary"
                    : "text-gray-600 border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-between"
            >
              <img
                src={item.image}
                alt={item.title}
                className="max-w-[6rem] aspect-square rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {item.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setSelectedProject(item)}
                  className=" hover:bg-gray-800"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  Details
                </Button>
                {item.demoLink !== "" && (
                  <Button asChild className=" hover:bg-gray-800">
                    <a
                      href={item.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectDetails
          open={Boolean(selectedProject)}
          onClose={handleCloseDetails}
          title={selectedProject.title}
          status={selectedProject.status}
          introduction={selectedProject.introduction}
          technologies={selectedProject.technologies}
          tasks={selectedProject.tasks}
          screenshots={selectedProject.screenshots}
        />
      )}
    </section>
  );
}
