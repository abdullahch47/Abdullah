import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "SaaS Multi-Tenancy Boilerplate",
    description: "A robust starting point for SaaS applications using Laravel. Features include tenant isolation, subscription billing (Stripe), and role-based access control.",
    techStack: ["Laravel 10", "PostgreSQL", "Vue.js", "Docker"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    link: "#"
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    description: "High-performance dashboard processing millions of events per day. Utilizes Redis streams for ingestion and Laravel Echo for real-time frontend updates.",
    techStack: ["Laravel", "Redis", "Socket.io", "React"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    link: "#"
  },
  {
    id: 3,
    title: "E-Commerce API Microservice",
    description: "Headless E-commerce backend designed for scale. Handles complex product variations, inventory management across warehouses, and omni-channel orders.",
    techStack: ["Laravel API Resource", "Elasticsearch", "MySQL"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Featured Projects</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-red-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-800 text-xs text-slate-300 rounded border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-white hover:text-red-400 transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-white hover:text-red-400 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;