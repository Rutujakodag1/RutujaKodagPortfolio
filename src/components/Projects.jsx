import React from "react";
// import QR from '../assets/QROrdering.png';
const projects = [
  {
    title: "AI Interview Preparation Website",
    description: "A free interview prep platform with mock interviews, resume reviews, and quizzes.",
    techStack: ["React", "Django REST Framework", "Tailwind", "PostgreSQL",'Gemini API'],
    image: "/assets/careerexpertai.png",
    // demoLink: "https://project-demo.com",
    githubLink: "https://github.com/ChaitanyaKulkarni001/CareerXpert_AI-Get-Ready-for-Your-Dream-Job",
  },
  
  {
    title: " Vitthal Rukmini Temple Donation Portal",
    description: "A platform for managing temple activities, events, and donations.",
    techStack: ["React", "Django REST Framework", "Tailwind", "PostgreSQL"],
    image: "vite.svg",
    // demoLink: "https://project-demo.com",
    githubLink: "https://github.com/ChaitanyaKulkarni001/shri_vitthal_rukmini-samitee",
  },
  {
    title: "PetCareX (Smart PetCare Shop)",
    description: "A pet care and e-commerce platform with features like doctor consultations and product store.",
    techStack: ["React", "Vite", "Django REST Framework", "Tailwind", "PostgreSQL"],
    image: "/assets/petcarex.png",
    demoLink: "https://project-demo.com",
    githubLink: "https://github.com/Rutujakodag1/PetCareX",
  },
  {
    title: "Food Ordering Website",
    description: "Full-stack MERN project developed during an internship at Webstack Academy.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    image: "/assets/foodorder.png", // Replace with your project image
    // demoLink: "#", // Add your demo link
    githubLink: "https://github.com/Rutujakodag1/wsaIntern",
  },
  {
    title: "Developer Portfolio",
    description: "A personal portfolio built with React to showcase skills and projects.",
    techStack: ["React", "Tailwind CSS"],
    image: "/assets/portfolio.png",
    demoLink: "https://rutuja-kodag-portfolio.vercel.app/",
    githubLink: "https://github.com/Rutujakodag1/RutujaKodagPortfolio",
  },
  {
    title: "E-Menu Card",
    description: "A digital menu system built using Django, HTML, CSS, and SQLite.",
    techStack: ["Django", "HTML", "CSS", "SQLite"],
    image: "/assets/emenu.jpg",
    // demoLink: "https://project-demo.com",
    githubLink: "https://github.com/Rutujakodag1/MiniProjectFinal",
  },

];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16">
    <div className="max-w-screen-xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{project.description}</p>
              <p className="text-gray-500 text-sm mt-3">Tech Stack: {project.techStack.join(", ")}</p>
              <div className="mt-4 flex space-x-4 text-sm">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Demo
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default ProjectsSection;
