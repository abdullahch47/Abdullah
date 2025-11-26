import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AiAssistant from './components/AiAssistant';
import HireMeModal from './components/HireMeModal';

function App() {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen selection:bg-red-500/30 selection:text-red-200">
      <Navbar onHireMeClick={() => setIsHireMeOpen(true)} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Abdullah Munir. All rights reserved.</p>
        <p className="mt-2">Built with React, Tailwind & Gemini AI</p>
      </footer>

      <AiAssistant />
      <HireMeModal isOpen={isHireMeOpen} onClose={() => setIsHireMeOpen(false)} />
    </div>
  );
}

export default App;