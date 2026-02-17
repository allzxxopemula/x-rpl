import React from 'react';
import { FaCode, FaLaptopCode, FaDatabase, FaLayerGroup, FaUsers, FaCheckCircle, FaTrophy } from 'react-icons/fa';
import CountUp from 'react-countup'; // Import library CountUp
import './About.css';

const About = () => {
  const skills = [
    { icon: <FaCode />, title: "Programming", desc: "Mempelajari logika bahasa pemrograman modern." },
    { icon: <FaLaptopCode />, title: "Web Developer", desc: "Membangun website responsif and interaktif." },
    { icon: <FaDatabase />, title: "Database", desc: "Manajemen data yang efisien dan terstruktur." },
    { icon: <FaLayerGroup />, title: "UI/UX Design", desc: "Menciptakan pengalaman pengguna yang estetik." }
  ];

  const stats = [
    { icon: <FaUsers />, count: "16", label: "Anggota Aktif" },
    { icon: <FaCheckCircle />, count: "5+", label: "Proyek Selesai" },
    { icon: <FaTrophy />, count: "?", label: "Penghargaan" }
  ];

  return (
    <section className="about-container" id="about">
      <div className="card-container">
        <h2 className="top-title" data-aos="fade-down">About Us</h2>
        
        {/* Grid Keahlian */}
        <div className="about-grid">
          {skills.map((item, i) => (
            <div className="card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="card-icon" data-aos="fade-up">{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Card Statistik */}
        <div className="stats-container">
          {stats.map((stat, i) => {
            // Logika buat deteksi angka: ambil angkanya aja buat CountUp
            const numericValue = parseInt(stat.count);
            const isNumber = !isNaN(numericValue);
            const suffix = stat.count.includes('+') ? '+' : '';

            return (
              <div className="stat-card" key={i} data-aos="fade-right" data-aos-delay={i * 200}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-info">
                  <h2 className="stat-count">
                    {isNumber ? (
                      <CountUp 
                        end={numericValue} 
                        duration={2.5} 
                        suffix={suffix} 
                        enableScrollSpy={true} 
                        scrollSpyOnce={true} 
                      />
                    ) : (
                      stat.count // Tampilkan apa adanya kalau bukan angka (misal: "?")
                    )}
                  </h2>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;