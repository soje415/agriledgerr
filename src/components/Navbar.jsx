// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-amber text-white p-4 text-center justify-end mt-0 py-1">
        <h1 className='text-bold text-4xl align-middle flex'>AgriLedger</h1>

      <Link to="/" className="text-black mx-4 justify-end hover:underline">Home</Link>
      <Link to="/about" className="text-black mx-4 hover:underline">About</Link>
      <Link to="/contact" className="text-black mx-4 hover:underline">Contact</Link> 
    </nav>
  );
};

export default Navbar;
