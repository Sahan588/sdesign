import { motion } from 'framer-motion';

const skills = [
  { name: 'React Native / Flutter', type: 'App Dev', color: 'from-blue-500 to-cyan-400' },
  { name: 'React.js / Vite', type: 'Web Dev', color: 'from-cyan-500 to-blue-600' },
  { name: 'Tailwind CSS', type: 'UI Framework', color: 'from-teal-400 to-emerald-500' },
  { name: 'UI/UX (Figma)', type: 'Design', color: 'from-purple-500 to-pink-500' },
  { name: 'Graphic Design (Photoshop)', type: 'Art', color: 'from-amber-500 to-orange-600' }
];

export default function TechStack() {
  return (
    <div className="py-20 bg-slate-900/50 relative z-10 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          My Tech Stack & Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{skill.type}</span>
              <h3 className={`text-xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r ${skill.color}`}>
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}