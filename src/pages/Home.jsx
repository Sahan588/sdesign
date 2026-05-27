import { motion } from 'framer-motion';
import profilePic from '../assets/profile.png'; // පින්තූරේ path එක හරියට තියෙනවා නේද බලන්න

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-orange-500 selection:text-slate-900">
      
      {/* 🚀 Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-6 md:px-20 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl">
          
          {/* Left Content */}
          <div className="text-left space-y-6">
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xl text-orange-500 font-semibold tracking-widest">
              I'M [SAHAN JAYAMAL]
            </motion.h2>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-bold text-white">
              UI/UX Designer
            </motion.h1>
            <p className="text-slate-400 max-w-md text-lg">
              A Passionate UI/UX Designer creating seamless and engaging digital experiences.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              {['Framer', 'Hire Me', 'Websites', 'Mobile Apps'].map((btn) => (
                <button key={btn} className={`px-6 py-3 rounded-lg border transition-all ${btn === 'Hire Me' ? 'bg-orange-500 border-orange-500 text-white font-bold hover:bg-orange-600' : 'border-slate-700 text-slate-300 hover:border-orange-500 hover:text-white'}`}>
                  {btn}
                </button>
              ))}
            </div>

            {/* Stats Cards */}
            <div className="flex gap-4 pt-6">
              {[ {title: 'Clean Designs'}, {title: 'Intuitive UI'}, {title: 'Happy Users'} ].map((item) => (
                <div key={item.title} className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl text-center w-32 hover:border-orange-500 transition-colors">
                  <p className="text-orange-500 text-2xl font-bold">+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative flex justify-center">
            <div className="w-80 h-80 md:w-[450px] md:h-[450px] bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center overflow-hidden">
              <img 
                src={profilePic} 
                alt="Sahan Jayamal" 
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div> // මෙතනින් තමයි පේරන්ට් div එක වැහෙන්නේ
  );
}