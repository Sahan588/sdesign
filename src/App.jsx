import { motion } from 'framer-motion';
import Navbar from './components/Navbar'; // 1. Navbar එක Import කරගන්න
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-blue-500 selection:text-slate-900">
      
      {/* Navbar එක මෙතනට දාමු */}
      <Navbar />

      {/* 🔮 Background Real Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 80, -40, 0], y: [0, -80, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -100, 60, 0], y: [0, 100, -60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"
        />
      </div>

      {/* 🚀 1. Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center z-10 pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500"
        >
          Sdesign
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light"
        >
          Building Interactive <span className="text-blue-400 font-semibold">Websites</span>, 
          Seamless <span className="text-purple-400 font-semibold">Mobile Apps</span>, and 
          High-End <span className="text-indigo-400 font-semibold">UI/UX Designs</span>.
        </motion.p>
      </div>

      {/* 🛠️ 2. Tech Stack Section - id එකක් දාන්න */}
      <div id="techstack">
        <TechStack />
      </div>

      {/* 🎨 3. Projects Section - id එකක් දාන්න */}
      <div id="projects">
        <Projects />
      </div>

      {/* 💬 4. Contact Section - id එකක් දාන්න */}
      <div id="contact">
        <Contact />
      </div>

    </div>
  );
}