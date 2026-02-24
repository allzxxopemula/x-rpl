import React, { useRef, useEffect, useState } from 'react'; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FaPlay, FaPause, FaMusic } from 'react-icons/fa';

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

// Mendaftarkan plugin ScrollTrigger agar bisa digunakan oleh GSAP
gsap.registerPlugin(ScrollTrigger);

function App() {
  const main = useRef();
  const audioRef = useRef(null);
  const [showIntro, setShowIntro] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Fungsi untuk mengontrol Play/Pause audio
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Memaksa browser untuk selalu mulai dari posisi scroll paling atas saat refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // Inisialisasi library AOS (Animate On Scroll) untuk komponen statis
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: 'ease-in-out',
    });

    // Timer untuk mematikan Loading/Intro Screen setelah 3.5 detik
    const timer = setTimeout(() => {
      setShowIntro(false);
      // Refresh ScrollTrigger agar koordinat animasi dihitung ulang setelah intro hilang
      ScrollTrigger.refresh(); 
    }, 3500);

    // Sinkronisasi AOS dengan ScrollTrigger agar animasi tidak berantakan
    ScrollTrigger.addEventListener("refresh", () => AOS.refresh());

    return () => {
      ScrollTrigger.removeEventListener("refresh", () => AOS.refresh());
      clearTimeout(timer);
    };
  }, []);

  useGSAP(() => {
    // --- 1. HERO CONTENT ANIMATION ---
    // Animasi masuk untuk judul/konten di Hero section saat web pertama kali dibuka
    const tl = gsap.timeline();
    tl.from(".hero-content > *", { 
      y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power4.out", delay: 2.8 
    });

    // --- 2. PARALLAX BACKGROUND EFFECT ---
    // Efek background yang bergerak lebih lambat saat discroll (efek kedalaman/parallax)
    gsap.to(".hero-bg", {
      scrollTrigger: {
        trigger: ".pin-wrapper",
        start: "top top",
        end: "bottom top",
        scrub: true, // Animasi mengikuti pergerakan scroll (bisa maju mundur)
      },
      y: 100, 
      ease: "none",
    });

    // --- 3. PINNING HERO SECTION ---
    // Membuat bagian Hero tetap menempel (diam) di layar saat discroll ke bawah
    ScrollTrigger.create({
      trigger: ".pin-wrapper",
      start: "top top",
      pin: true,           // Mengunci elemen di posisi top
      pinSpacing: false,   // Elemen bawahnya akan langsung menimpa tanpa ada ruang kosong
      anticipatePin: 1,
    });

    // --- 4. HERO EXIT FADE OUT ---
    // Membuat konten Hero perlahan menghilang saat User mulai masuk ke section About
    gsap.to(".hero-content", {
      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom", 
        end: "top 20%",     
        scrub: true,
      },
      opacity: 0,
      y: -100,
      ease: "power1.inOut"
    });

    // --- 5. PINNING STRUCTURE SECTION ---
    // Menahan section Structure agar tetap di tempat sejenak sebelum dilewati scroll
    ScrollTrigger.create({
      trigger: ".structure-section",
      start: "bottom bottom", 
      end: "+=80%",         // Durasi penahanan elemen (80% dari tinggi layar)
      pin: true,
      pinSpacing: false,
    });

    // --- 6. PINNING TOOLS SECTION ---
    // Menahan section Tools agar memberikan efek layering yang kuat
    ScrollTrigger.create({
      trigger: ".tools-section",
      start: "bottom bottom", 
      end: "+=100%", 
      pin: true,
      pinSpacing: false,
    });

    // --- 7. PINNING SCHEDULE SECTION ---
    // Menahan section Schedule sebagai layer terakhir sebelum masuk ke Contact/Footer
    ScrollTrigger.create({
      trigger: ".schedule-section",
      start: "bottom bottom", 
      end: "+=120%", 
      pin: true,
      pinSpacing: false,
    });

    // Memastikan semua kalkulasi ScrollTrigger diperbarui dengan posisi terbaru
    ScrollTrigger.refresh();
  }, { scope: main });

  return (
    <div ref={main} className="app-main-container" style={{ backgroundColor: '#020617' }}>
      
      {/* Intro Overlay: Layar Loading saat pertama kali masuk */}
      {showIntro && (
        <div className="intro-overlay">
          <h1 className="intro-logo">X-RPL</h1>
        </div>
      )}

      {/* Komponen Audio: File ditaruh di folder 'public' */}
      <audio ref={audioRef} src="lagu.mp3" loop />

      {/* Tombol Music: Muncul otomatis setelah Intro selesai */}
      {!showIntro && (
        <div className={`mini-music-btn ${isPlaying ? 'jj-active' : ''}`} onClick={toggleMusic}>
          <div className="icon-main-music">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
          {/* Efek icon melayang hanya muncul saat musik sedang berputar */}
          {isPlaying && (
            <>
              <FaMusic className="note-anim note-1" />
              <FaMusic className="note-anim note-2" />
            </>
          )}
        </div>
      )}

      <Navbar />
      <div className="main-wrapper">
        <div className="pin-wrapper" style={{ zIndex: 1, position: 'relative' }}>
          <Hero />
        </div>

        {/* Setiap section dibungkus dengan z-index berbeda agar efek tumpang tindih (layering) berjalan lancar */}
        <section className="about-section galaxy-stars" style={{ 
          position: 'relative', zIndex: 2, backgroundColor: '#020617', marginTop: "-2px" 
        }}>
          <About />
        </section>

        <section className="structure-section galaxy-stars" style={{ 
          position: 'relative', zIndex: 3, backgroundColor: '#020617', marginTop: "-1px"
        }}>
          <Structure />
        </section>

        <section className="project-section galaxy-stars" style={{ 
          position: 'relative', zIndex: 4, backgroundColor: '#020617', marginTop: "-1px"
        }}>
          <Project />
        </section>

        <section className="tools-section galaxy-stars" style={{ 
          position: 'relative', zIndex: 5, backgroundColor: '#020617', marginTop: "-1px"
        }}>
          <Tools />
        </section>

        <section className="gallery-section galaxy-stars" style={{ 
          position: 'relative', zIndex: 6, backgroundColor: '#020617', marginTop: "-1px"
        }}>
          <Gallery />
        </section>

        <section className="schedule-section galaxy-stars" style={{ 
          position: 'relative', zIndex: 7, backgroundColor: '#020617', marginTop: "-1px"
        }}>
          <Schedule />
        </section>

        <section className="contact-section galaxy-stars" style={{ 
          position: 'relative', zIndex: 8, backgroundColor: '#020617', marginTop: "-1px"
        }}>
          <Contact />
        </section>

        <section className="footer-section galaxy-stars" style={{ 
          position: 'relative', zIndex: 9, backgroundColor: '#020617'
        }}>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
