import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    name: "Akash Purifiers Website",
    description: "A modern e-commerce platform for water purification systems with seamless user experience and integrated booking system.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjMxODU3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "OperforceAI Website",
    description: "AI-powered operational management platform with advanced analytics and real-time monitoring capabilities.",
    category: "AI & Web Development",
    image: "https://images.unsplash.com/photo-1683701251422-912fe98f2b5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzA5OTA3OHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our commitment to delivering exceptional digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="inline-block px-3 py-1 bg-blue-600/80 rounded-full mb-4 text-sm">
                  {project.category}
                </div>
                <h3 className="text-2xl mb-3 flex items-center gap-2">
                  {project.name}
                  <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
