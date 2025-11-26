import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';
import { Briefcase } from 'lucide-react';

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Laravel Developer",
    company: "TechSolutions Inc.",
    period: "2023 - Present",
    description: "Leading the backend team in re-architecting legacy monoliths into microservices using Laravel and Docker. Improved API response times by 40%."
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "Creative Digital Agency",
    period: "2022 - 2023",
    description: "Developed custom E-commerce solutions and CRM integrations. Implemented automated CI/CD pipelines and real-time features using WebSockets."
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "StartUp Hub",
    period: "2021 - 2022",
    description: "Full-stack development using PHP/Laravel and Vue.js. Assisted in database design and optimization for high-traffic campaigns."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Experience</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-slate-800 -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row gap-8 mb-12 relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 top-0 w-8 h-8 bg-slate-900 border-2 border-red-500 rounded-full -translate-x-1/2 flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>

              <div className="flex-1 hidden md:block"></div> {/* Spacer */}

              <div className="flex-1 ml-16 md:ml-0">
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors shadow-lg">
                  <div className="flex items-center gap-2 text-red-400 font-semibold mb-2">
                    <Briefcase size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-slate-400 mb-4">{exp.company}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;