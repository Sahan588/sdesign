import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Link එක import කරන්න

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-900 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Contact පේජ් එකක් තියෙනවා නම් Link දාන්න, නැත්නම් ඒකත් Link එකක් විදිහට පාවිච්චි කරන්න */}
        <Link to="/contact" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Contact</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/apps" className="hover:text-blue-400">Apps</Link>
          <Link to="/design" className="hover:text-blue-400">Design</Link>
          <Link to="/blogs" className="hover:text-blue-400">Blogs</Link>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 p-4 bg-slate-800">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/apps" onClick={() => setIsOpen(false)}>Apps</Link>
          <Link to="/design" onClick={() => setIsOpen(false)}>Design</Link>
          <Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;