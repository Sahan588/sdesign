import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-900 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Sdesign</h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#apps" className="hover:text-blue-400">Apps</a>
          <a href="#design" className="hover:text-blue-400">Design</a>
          <a href="#blogs" className="hover:text-blue-400">Blogs</a>
          <a href="#contact" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Contact</a>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 p-4 bg-slate-800">
          <a href="#apps">Apps</a>
          <a href="#design">Design</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;