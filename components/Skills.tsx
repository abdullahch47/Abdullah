import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Code, Globe, Terminal, Layers } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'Laravel', level: 95, icon: <Server className="text-red-500" /> },
  { name: 'PHP', level: 90, icon: <Code className="text-blue-400" /> },
  { name: 'MySQL', level: 85, icon: <Database className="text-orange-400" /> },
  { name: 'React.js', level: 75, icon: <Globe className="text-cyan-400" /> },
  { name: 'Docker', level: 80, icon: <Layers className="text-blue-500" /> },
  { name: 'Redis', level: 70, icon: <Terminal className="text-red-400" /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Technical Expertise</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-200">{skill.name}</h3>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-red-500 h-2.5 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                ></motion.div>
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-sm text-slate-400">{skill.level}% Proficiency</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;