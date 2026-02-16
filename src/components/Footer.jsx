import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'; // Import Icon
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-main-wrapper">
      <div className="footer-container-custom">
        <div className="footer-top">
          
          {/* SISI KIRI: Branding */}
          <div className="footer-brand">
            <h2 className="footer-logo-text">X-RPL SMK MUSA</h2>
            <p className="footer-tagline">Solidaritas Tanpa Batas, Kreativitas Tanpa Akhir.</p>
          </div>

          {/* SISI TENGAH: Medsos */}
          <div className="footer-socials">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-links-grid">
              <a href="https://www.instagram.com/xrplsmkmusanganjuk?igsh=cWtodTY3eGVvd3F2" target="_blank" rel="noreferrer" className="social-btn">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@xrplsmkmusa?_r=1&_t=ZS-93y3SsOrRjg" target="_blank" rel="noreferrer" className="social-btn">
                <FaTiktok />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="social-btn">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* SISI KANAN: Dev Info */}
          <div className="footer-dev">
            <h4 className="footer-heading">Developed By</h4>
            <p className="dev-name">Aldo Rendy</p>
            <p className="dev-role">Web Developer & Designer</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-line"></div>
          <div className="footer-copyright-flex">
            <p>© 2026 X-RPL SMK MUSA. All Rights Reserved.</p>
            <p className="built-with">Built with React & GSAP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;