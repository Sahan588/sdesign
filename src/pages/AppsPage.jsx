import { Link } from 'react-router-dom';

const apps = [
  {
    title: "Fitness Tracking App",
    desc: "React Native වලින් හැදූ පූර්ණ mobile app එකක්. තමන්ගේ දෛනික ව්‍යායාම සහ කැලරි ට්‍රැක් කරන්න පුළුවන්.",
    tech: ["React Native", "Firebase"],
  },
  {
    title: "E-Commerce Platform",
    desc: "Modern responsive web app එකක්. Tailwind CSS සහ React පාවිච්චි කරලා ගොඩනැගුවේ.",
    tech: ["React.js", "Tailwind CSS", "Stripe"],
  },
];

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-orange-500">My Mobile Apps</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {apps.map((app, index) => (
            <div key={index} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-orange-500 transition-all">
              <h2 className="text-2xl font-bold mb-4">{app.title}</h2>
              <p className="text-slate-400 mb-6">{app.desc}</p>
              <div className="flex gap-2">
                {app.tech.map((t, i) => (
                  <span key={i} className="bg-slate-800 px-3 py-1 rounded-full text-xs text-orange-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <Link to="/" className="text-slate-400 hover:text-white underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}