import React, { useRef, useEffect } from 'react'; // Tambah useEffect
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// --- IMPORT AOS DI SINI ---
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Structure from './components/Structure';
import Project from './components/Project';
import Tools from './components/Tools';
import Gallery from './components/Gallery'; 
import Schedule from './components/Schedule';
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const main = useRef();

  // 1. INISIALISASI AOS (PENTING!)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,           // Animasi jalan sekali aja biar gak bentrok pas scrolling naik-turun
      offset: 100,          // Muncul 100px sebelum elemen kena viewport
      easing: 'ease-in-out',
    });

    // TRICK MAUT: Paksa AOS hitung ulang posisi tiap kali GSAP selesai refresh
    ScrollTrigger.addEventListener("refresh", () => AOS.refresh());

    return () => {
      ScrollTrigger.removeEventListener("refresh", () => AOS.refresh());
    };
  }, []);

  useGSAP(() => {
    // --- 1. PARALLAX BACKGROUND HERO ---
    gsap.to(".hero-bg", {
      scrollTrigger: {
        trigger: ".pin-wrapper",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 100, 
      ease: "none",
    });

    // --- 2. PIN HERO SECTION ---
    ScrollTrigger.create({
      trigger: ".pin-wrapper",
      start: "top top",
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
    });

    // --- 3. ANIMASI HERO CONTENT ---
    gsap.to(".hero-content", {
      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
      y: -200,
      opacity: 0,
      ease: "power1.inOut"
    });

    // --- 4. PIN STRUCTURE SECTION ---
    ScrollTrigger.create({
      trigger: ".structure-section",
      start: "bottom bottom", 
      end: "+=80%", 
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
    });

    // --- 5. PIN TOOLS SECTION ---
    ScrollTrigger.create({
      trigger: ".tools-section",
      start: "bottom bottom", 
      end: "+=100%", 
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
      fastScrollEnd: true,
      preventOverlaps: true,
      invalidateOnRefresh: true,
    });

    // --- 6. PIN SCHEDULE SECTION ---
    ScrollTrigger.create({
      trigger: ".schedule-section",
      start: "bottom bottom", 
      end: "+=120%", 
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
    });

    ScrollTrigger.refresh();

  }, { scope: main });

  return (
    <div ref={main} className="app-main-container" style={{ backgroundColor: '#020617' }}>
      <Navbar />
      <div className="main-wrapper">
        <div className="pin-wrapper" style={{ zIndex: 1, position: 'relative' }}>
          <Hero />
        </div>

        <section className="about-section" style={{ 
          position: 'relative', zIndex: 2, backgroundColor: '#020617',
          boxShadow: "0 -30px 60px rgba(0,0,0,0.9)", marginTop: "-1px" 
        }}>
          <About />
        </section>

        {/* ... Sisa section lainnya tetep sama ... */}
        <section className="structure-section" style={{ 
          position: 'relative', zIndex: 3, backgroundColor: '#020617',
          boxShadow: "0 -30px 60px rgba(0,0,0,0.9)", marginTop: "-1px"
        }}>
          <Structure />
        </section>

        <section className="project-section" style={{ 
          position: 'relative', zIndex: 4, backgroundColor: '#020617',
          boxShadow: "0 -30px 60px rgba(0,0,0,0.9)", marginTop: "-1px"
        }}>
          <Project />
        </section>

        <section className="tools-section" style={{ 
          position: 'relative', zIndex: 5, backgroundColor: '#020617',
          boxShadow: "0 -30px 60px rgba(0,0,0,0.9)", marginTop: "-1px"
        }}>
          <Tools />
        </section>

        <section className="gallery-section" style={{ 
          position: 'relative', zIndex: 6, backgroundColor: '#020617',
          boxShadow: "0 -30px 60px rgba(0,0,0,0.9)", marginTop: "-1px"
        }}>
          <Gallery />
        </section>

        <section className="schedule-section" style={{ 
          position: 'relative', zIndex: 7, backgroundColor: '#020617',
          boxShadow: "0 -30px 60px rgba(0,0,0,0.9)", marginTop: "-1px"
        }}>
          <Schedule />
        </section>

        <section className="contact-section" style={{ 
          position: 'relative', zIndex: 8, backgroundColor: '#020617',
          boxShadow: "0 -30px 60px rgba(0,0,0,0.9)", marginTop: "-1px"
        }}>
          <Contact />
        </section>

        <section className="footer-section" style={{ 
          position: 'relative', zIndex: 9, backgroundColor: '#020617'
        }}>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;