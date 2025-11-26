import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Code2, Terminal, Database, Cpu, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typedName, setTypedName] = useState("");
  const fullName = "Abdullah Munir";

  // Typewriter effect for name
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, index + 1));
      index++;
      if (index > fullName.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Matrix Code Rain Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters to drop: Laravel/PHP specific
    const chars = "PHP_LARAVEL_ROUTE_CONTROLLER_MODEL_VIEW_MIGRATION_ARTISAN_DOCKER_REDIS_VUE_REACT_API_JSON_REQUEST_RESPONSE_01";
    const charArray = chars.split('_');
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / 20); // Spacing
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start above screen
    }

    const draw = () => {
      // Semi-transparent black to create fade trail
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'; // Slate-950 with high transparency
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Inter', monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Random colors for a "Cyber" feel but professional
        const isHighlight = Math.random() > 0.95;
        ctx.fillStyle = isHighlight ? '#ef4444' : '#334155'; // Red-500 highlight or Slate-700 normal
        
        const x = i * 20;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Reset drop to top randomly or if off screen
        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 50);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Floating "IDE Windows" content
  const codeWindows = [
    { 
      id: 1,
      title: 'UserController.php',
      code: "public function index() {\n  return User::with('posts')\n    ->paginate(10);\n}", 
      x: "5%", y: "15%",
      color: "border-blue-500/30"
    },
    { 
      id: 2,
      title: 'api.php',
      code: "Route::middleware('auth:sanctum')\n  ->get('/user', function (Request $request) {\n    return $request->user();\n});", 
      x: "75%", y: "25%",
      color: "border-red-500/30"
    },
    { 
      id: 3,
      title: 'docker-compose.yml',
      code: "services:\n  laravel.test:\n    build:\n      context: ./vendor/laravel/sail", 
      x: "10%", y: "65%",
      color: "border-green-500/30"
    },
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16">
      {/* Matrix Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full -z-20 opacity-40"
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.6),rgba(15,23,42,0.95))] -z-10" />

      {/* Floating Code Windows */}
      {codeWindows.map((win, idx) => (
        <motion.div
          key={win.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: [0.1, 0.4, 0.1],
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 8, 
            delay: idx * 2, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className={`absolute hidden md:block bg-slate-900/80 backdrop-blur-md rounded-lg border ${win.color} p-4 shadow-2xl z-0 w-64 lg:w-80`}
          style={{ left: win.x, top: win.y }}
        >
          {/* Window Controls */}
          <div className="flex gap-1.5 mb-3 border-b border-slate-700/50 pb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            <span className="ml-2 text-[10px] text-slate-500 font-mono">{win.title}</span>
          </div>
          {/* Code */}
          <pre className="text-[10px] sm:text-xs text-slate-300 font-mono leading-relaxed overflow-hidden">
            <code>{win.code}</code>
          </pre>
        </motion.div>
      ))}

      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-slate-800/80 border border-slate-700 hover:border-red-500/50 backdrop-blur-sm text-red-400 text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(239,68,68,0.15)] transition-colors"
        >
          <Terminal size={16} className="animate-pulse" />
          <span>Full Stack Laravel Architect</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight h-[1.2em]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            {typedName}
          </span>
          <motion.span 
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-red-500 inline-block ml-1"
          >
            _
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Crafting scalable <span className="text-slate-200 font-semibold">backend systems</span> and robust 
          <span className="text-red-400 font-semibold"> API architectures</span>. 
          Specialized in high-performance Laravel solutions for modern businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-xl bg-red-600 text-white font-bold overflow-hidden shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-2">
              <Code2 size={20} />
              <span>Explore Code</span>
            </div>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-slate-900/80 text-white font-bold border border-slate-700 backdrop-blur-sm transition-all hover:bg-slate-800 hover:border-slate-500 hover:-translate-y-1"
          >
            Hire Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex gap-6 justify-center"
        >
          <a href="#" className="p-3 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-800 hover:scale-110 transition-all duration-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/abdullahchseo/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 hover:scale-110 transition-all duration-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:info.abdullah.manager@gmail.com" className="p-3 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-red-400 hover:border-red-500/50 hover:bg-slate-800 hover:scale-110 transition-all duration-300">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-600"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;