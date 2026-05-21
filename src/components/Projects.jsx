import { motion } from 'framer-motion';

const projects = [
  { title: 'Fitness Tracking App', category: 'App Project', desc: 'Full-stack mobile app built with smooth UI.', link: '#' },
  { title: 'E-Commerce Platform', category: 'Web Project', desc: 'Modern responsive web app using React & Tailwind.', link: '#' },
  { title: 'Smart Home UI Concept', category: 'UI/UX Design', desc: 'High-fidelity Figma prototypes and user flows.', link: '#' },
];

export default function Projects() {
  return (
    <div className="py-20 relative z-10 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors"
            >
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-600 font-mono">
                [ Image Placeholder ]
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-purple-400 uppercase">{project.category}</span>
                <h3 className="text-xl font-bold mt-1 text-slate-200">{project.title}</h3>
                <p className="text-sm text-slate-400 mt-2">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}