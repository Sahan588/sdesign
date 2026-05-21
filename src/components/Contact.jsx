import { motion } from 'framer-motion';

export default function Contact() {
  const whatsappNumber = "947XXXXXXXX"; // 👈 උඹේ ඇත්තම WhatsApp නම්බර් එක මෙතනට දාපන් මචං (9491234567 වගේ)
  const message = encodeURIComponent("Hi Sdesign, I saw your portfolio and would like to discuss a project!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="py-20 bg-slate-950 relative z-10 text-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Something Amazing</h2>
        <p className="text-slate-400 mb-8">
          Have an app idea, a website project, or need stunning UI/UX designs? Let's chat on WhatsApp.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all"
        >
          Chat on WhatsApp 💬
        </motion.a>
      </motion.div>
    </div>
  );
}