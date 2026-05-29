import { useState } from 'react';
import Footer from '../components/Footer';

// ඉම්පෝට් ටික
import bs_card1 from '../assets/designs/Business_Cards/bs_card_1.jpg';
import bs_card2 from '../assets/designs/Business_Cards/bs_card_2.jpg';
import bs_card3 from '../assets/designs/Business_Cards/bs_card_3.jpg';
import bs_card4 from '../assets/designs/Business_Cards/bs_card_4.jpg';
import bs_card5 from '../assets/designs/Business_Cards/bs_card_5.jpg';
import bs_card6 from '../assets/designs/Business_Cards/bs_card_6.jpg';
import bs_card7 from '../assets/designs/Business_Cards/bs_card_7.jpg';
import bs_card8 from '../assets/designs/Business_Cards/bs_card_8.jpg';
import bs_card9 from '../assets/designs/Business_Cards/bs_card_9.jpg';
import bs_card10 from '../assets/designs/Business_Cards/bs_card_10.jpg';

import icone_1 from '../assets/designs/icon/icone_1.jpg';
import icone_2 from '../assets/designs/icon/icone_2.jpg';
import icone_3 from '../assets/designs/icon/icone_3.jpg';
import icone_4 from '../assets/designs/icon/icone_4.png';
import icone_5 from '../assets/designs/icon/icone_5.png';
import icone_6 from '../assets/designs/icon/icone_6.png';
import icone_7 from '../assets/designs/icon/icone_7.png';
import icone_8 from '../assets/designs/icon/icone_8.png';
import icone_9 from '../assets/designs/icon/icone_9.jpg';
import icone_10 from '../assets/designs/icon/icone_10.jpg';

import logo_1 from '../assets/designs/logo/logo_1.jpg';
import logo_2 from '../assets/designs/logo/logo_2.jpg';
import logo_3 from '../assets/designs/logo/logo_3.jpg';
import logo_4 from '../assets/designs/logo/logo_4.jpg';
import logo_5 from '../assets/designs/logo/logo_5.jpg';
import logo_6 from '../assets/designs/logo/logo_6.jpg';
import logo_7 from '../assets/designs/logo/logo_7.jpg';
import logo_8 from '../assets/designs/logo/logo_8.jpg';
import logo_9 from '../assets/designs/logo/logo_9.jpg';
import logo_10 from '../assets/designs/logo/logo_10.jpg';

import poster_1 from '../assets/designs/poster/poster_1.jpg';
import poster_2 from '../assets/designs/poster/poster_2.jpg';
import poster_3 from '../assets/designs/poster/poster_3.jpg';
import poster_4 from '../assets/designs/poster/poster_4.jpg';
import poster_5 from '../assets/designs/poster/poster_5.jpg';
import poster_6 from '../assets/designs/poster/poster_6.jpg';
import poster_7 from '../assets/designs/poster/poster_7.jpg';
import poster_8 from '../assets/designs/poster/poster_8.jpg';
import poster_9 from '../assets/designs/poster/poster_9.jpeg';
import poster_10 from '../assets/designs/poster/poster_10.png';

export default function DesignPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const designsPerPage = 8;

  const allDesigns = [
    { title: "Business Card", type: "Business Card", price: "$20", url: bs_card1 },
    { title: "Business Card", type: "Business Card", price: "$20", url: bs_card2 },
    { title: "Business Card", type: "Business Card", price: "$20", url: bs_card3 },
    { title: "Business Card", type: "Business Card", price: "$20", url: bs_card4 },
    { title: "Business Card", type: "Business Card", price: "$20", url: bs_card5 },
    { title: "Business Card", type: "Business Card", price: "$20", url: bs_card6 },
    { title: "Business Card", type: "Business Card", price: "$20", url: bs_card7 },
    { title: "Business Card", type: "Business Card", price: "$20", url: bs_card8 },
    { title: "Business Card", type: "Business Card", price: "$20", url: bs_card9 },
    { title: "Business Card", type: "Business Card", price: "$20", url: bs_card10 },
    { title: "Icon", type: "icons", price: "$10", url: icone_1 },
    { title: "Icon", type: "icons", price: "$10", url: icone_2 },
    { title: "Icon", type: "icons", price: "$10", url: icone_3 },
    { title: "Icon", type: "icons", price: "$10", url: icone_4 },
    { title: "Icon", type: "icons", price: "$10", url: icone_5 },
    { title: "Icon", type: "icons", price: "$10", url: icone_6 },
    { title: "Icon", type: "icons", price: "$10", url: icone_7 },
    { title: "Icon", type: "icons", price: "$10", url: icone_8 },
    { title: "Icon", type: "icons", price: "$10", url: icone_9 },
    { title: "Icon", type: "icons", price: "$10", url: icone_10 },
    { title: "Logo", type: "Logo", price: "$50", url: logo_1 },
    { title: "Logo", type: "Logo", price: "$50", url: logo_2 },
    { title: "Logo", type: "Logo", price: "$50", url: logo_3 },
    { title: "Logo", type: "Logo", price: "$50", url: logo_4 },
    { title: "Logo", type: "Logo", price: "$50", url: logo_5 },
    { title: "Logo", type: "Logo", price: "$50", url: logo_6 },
    { title: "Logo", type: "Logo", price: "$50", url: logo_7 },
    { title: "Logo", type: "Logo", price: "$50", url: logo_8 },
    { title: "Logo", type: "Logo", price: "$50", url: logo_9 },
    { title: "Logo", type: "Logo", price: "$50", url: logo_10 },
    { title: "Poster", type: "Poster", price: "$30", url: poster_1 },
    { title: "Poster", type: "Poster", price: "$30", url: poster_2 },
    { title: "Poster", type: "Poster", price: "$30", url: poster_3 },
    { title: "Poster", type: "Poster", price: "$30", url: poster_4 },
    { title: "Poster", type: "Poster", price: "$30", url: poster_5 },
    { title: "Poster", type: "Poster", price: "$30", url: poster_6 },
    { title: "Poster", type: "Poster", price: "$30", url: poster_7 },
    { title: "Poster", type: "Poster", price: "$30", url: poster_8 },
    { title: "Poster", type: "Poster", price: "$30", url: poster_9 },
    { title: "Poster", type: "Poster", price: "$30", url: poster_10 },
  ];

  const filteredDesigns = filter === "All" ? allDesigns : allDesigns.filter(d => d.type === filter);
  
  const handleFilterChange = (cat) => {
    setFilter(cat);
    setCurrentPage(1);
  };

  const indexOfLastDesign = currentPage * designsPerPage;
  const indexOfFirstDesign = indexOfLastDesign - designsPerPage;
  const currentDesigns = filteredDesigns.slice(indexOfFirstDesign, indexOfLastDesign);
  const totalPages = Math.ceil(filteredDesigns.length / designsPerPage);
  
  const whatsappLink = "https://wa.me/94763749048?text=Hi, I'm interested in your design service!";

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-300">
          My Graphic Designs
        </h1>
        
        <div className="flex flex-wrap gap-4 mb-12">
          {["All", "Business Card", "icons", "Poster", "Logo"].map((cat) => (
            <button key={cat} onClick={() => handleFilterChange(cat)}
              className={`px-8 py-2 rounded-full border transition-all duration-300 ${filter === cat ? 'bg-orange-500 border-orange-500 text-white shadow-lg' : 'bg-slate-900 border-slate-800 hover:border-slate-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentDesigns.map((d, i) => (
            <div key={i} className="group bg-slate-900/50 p-5 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300">
              <img src={d.url} alt={d.title} onClick={() => setSelectedImg(d.url)} className="w-full h-56 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform" />
              <div className="mt-6 flex justify-between items-center">
                <div><h3 className="font-bold text-lg">{d.title}</h3><p className="text-orange-500 font-bold text-xl">{d.price}</p></div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-orange-500 px-5 py-2 rounded-full transition-colors font-bold text-sm">ORDER</a>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mt-16 pb-10">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="px-6 py-2 bg-slate-800 rounded-full disabled:opacity-30 hover:bg-orange-500">Previous</button>
            <span className="text-slate-400 font-bold">Page {currentPage} of {totalPages}</span>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className="px-6 py-2 bg-slate-800 rounded-full disabled:opacity-30 hover:bg-orange-500">Next</button>
          </div>
        )}
      </div>

      {selectedImg && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl" />
        </div>
      )}
      <Footer />
    </div>
  );
}