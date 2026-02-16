import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // List menu sesuai urutan section di App.jsx
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Structure', href: '#structure' },
    { name: 'Project', href: '#project' },
    { name: 'Tools', href: '#tools' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home"><h2>X-RPL</h2></a>
        </div>

        {/* Menu Navigasi */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Icon Menu untuk HP */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;