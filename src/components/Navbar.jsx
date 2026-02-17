import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
// Import icon medsos dari Font Awesome (Fa)
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // List menu navigasi
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
        
        {/* SISI KIRI: JUDUL + MEDSOS */}
        <div className="nav-left">
          <div className="nav-logo">
            <a href="#home"><h2>X-RPL</h2></a>
          </div>
          
          <div className="nav-socials">
            <a href="https://www.instagram.com/xrplsmkmusanganjuk?igsh=cWtodTY3eGVvd3F2" target="_blank" rel="noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="social-icon">
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/@xrplsmkmusa?_r=1&_t=ZS-93y3SsOrRjg" target="_blank" rel="noreferrer" className="social-icon">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* MENU NAVIGASI (Desktop & Mobile) */}
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

        {/* ICON HAMBURGER MENU (MOBILE ONLY) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;