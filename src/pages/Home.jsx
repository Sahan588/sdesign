import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/profile.png';

export default function Home() {
  return (
    // ප්‍රධාන parent div එක
    <div className="relative min-h-screen bg-[#0b1120] text-white pt-32 overflow-hidden">
      
      {/* 🌌 Live Background Stars Animation */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: Math.random(), scale: Math.random() }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
            transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, delay: Math.random() * 5 }}
            className="absolute bg-white rounded-full"
            style={{
              width: '2px', height: '2px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          <h2 className="text-orange-500 font-bold tracking-[0.2em] uppercase">I'M SAHAN JAYAMAL</h2>
          
          <div className="h-40 md:h-32">
            <TypeAnimation
              sequence={['UI/UX Designer', 1500, 'Mobile App Developer', 1500, 'Graphic Designer', 1500, 'WordPress Developer', 1500, 'SEO Specialist', 1500]}
              wrapper="h1"
              className="text-5xl md:text-7xl font-extrabold text-white"
              repeat={Infinity}
            />
          </div>

          <p className="text-slate-400 text-lg max-w-md">A Passionate Professional Creating seamless and engaging digital experiences.</p>
          
          <div className="flex gap-6 pt-4">
            <a href="mailto:sahanjayamal835@gmail.com?subject=Hiring Inquiry" 
               className="px-10 py-4 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/20">
              Hire Me
            </a>
            <a href="/my-cv.pdf" download 
               className="px-10 py-4 border border-slate-700 hover:border-orange-500 rounded-xl font-bold transition-all">
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex-1 flex justify-center">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-80 h-80 md:w-[450px] md:h-[450px]"
          >
            <div className="absolute inset-0 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.5)] overflow-hidden">
              <img src={profilePic} alt="Sahan" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Skills Marquee - මේකත් ඇතුලටම ගත්තා */}
      <div className="absolute bottom-10 w-full overflow-hidden opacity-50 z-20">
        <motion.div 
          className="flex whitespace-nowrap gap-10 text-slate-500 font-bold text-sm uppercase tracking-widest"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <span>UI/UX Design</span> • <span>Mobile App Development</span> • <span>Graphic Design</span> • 
          <span>WordPress Web Development</span> • <span>SEO Optimization</span> • <span>Brand Identity</span> •
          <span>UI/UX Design</span> • <span>Mobile App Development</span> • <span>Graphic Design</span> • 
          <span>WordPress Web Development</span> • <span>SEO Optimization</span>
        </motion.div>
      </div>

    </div>
  );
}