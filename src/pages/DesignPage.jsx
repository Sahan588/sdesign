import { useState } from 'react';

export default function DesignPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const allDesigns = [
    { title: "Personal CV", type: "CV", price: "$20", url: "/path/to/cv.png" },
    { title: "Event Poster", type: "Poster", price: "$15", url: "/path/to/poster.png" },
    { title: "Brand Logo", type: "Logo", price: "$50", url: "/path/to/logo.png" },
    { title: "AI Concept Art", type: "AI", price: "$30", url: "/path/to/ai.png" },
  ];

  const filteredDesigns = filter === "All" ? allDesigns : allDesigns.filter(d => d.type === filter);
  const whatsappLink = "https://wa.me/94763749048?text=Hi, I'm interested in your design service!";

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-300">
          My Graphic Designs
        </h1>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {["All", "CV", "Poster", "Logo", "AI"].map((cat) => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-full border transition-all duration-300 ${
                filter === cat 
                ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20' 
                : 'bg-slate-900 border-slate-800 hover:border-slate-600 text-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDesigns.map((d, i) => (
            <div key={i} className="group bg-slate-900/50 p-5 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
              <img 
                src={d.url} alt={d.title} 
                onClick={() => setSelectedImg(d.url)}
                className="w-full h-56 object-cover rounded-xl cursor-pointer group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{d.title}</h3>
                  <p className="text-orange-500 font-bold text-xl">{d.price}</p>
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-orange-500 px-5 py-2 rounded-full transition-colors font-bold text-sm">
                  ORDER
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Zoom */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl border border-slate-700" />
        </div>
      )}
    </div>
  );
}