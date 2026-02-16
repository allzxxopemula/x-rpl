import React from 'react';
import './Tools.css';
// Menggunakan import yang lebih aman dan umum
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPhp, 
  FaReact, 
  FaDatabase, 
  FaRobot, // Gunakan Robot untuk AI agar aman
  FaCode // Gunakan Code untuk VS Code agar aman
} from 'react-icons/fa'; 
import { SiTailwindcss, SiBootstrap } from 'react-icons/si';

const Tools = () => {
  const toolList = [
    { name: "HTML5", desc: "Struktur standar halaman web.", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", desc: "Desain layout dan styling modern.", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", desc: "Logika dan interaktivitas website.", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React JS", desc: "Library untuk antarmuka UI dinamis.", icon: <FaReact />, color: "#61DAFB" },
    { name: "PHP", desc: "Pemrosesan server-side dan database.", icon: <FaPhp />, color: "#777BB4" },
    { name: "MySQL", desc: "Sistem manajemen database relasional.", icon: <FaDatabase />, color: "#4479A1" },
    { name: "Tailwind", desc: "Framework CSS utility-first.", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "VS Code", desc: "Editor kode andalan produktivitas.", icon: <FaCode />, color: "#007ACC" },
    { name: "ChatGPT", desc: "AI pendukung debugging dan ide.", icon: <FaRobot />, color: "#10A37F" },
    { name: "Gemini", desc: "Asisten cerdas optimasi kode.", icon: <FaRobot />, color: "#8E75FF" },
  ];

  return (
    <section className="tools-wrapper" id="tools">
      <div className="tools-container">
        {/* Menggunakan class yang sama dengan Structure agar identik */}
        <h2 className="top-title" data-aos="fade-down">Tools/Tech</h2>
        <div className="tools-grid">
          {toolList.map((tool, index) => (
            <div className="tool-card" key={index} data-aos="fade-up" data-aos-duration="600">
              <div className="tool-icon" style={{ color: tool.color }} data-aos="fade-up" data-aos-duration="600">
                {tool.icon}
              </div>
              <div className="tool-info">
                <h4>{tool.name}</h4>
                <p>{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;