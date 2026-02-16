import React from 'react';
import './Project.css';

const Project = () => {
 const projects = [
  {
    title: "Web Login System",
    tech: ["PHP", "CSS", "HTML"],
    desc: "Sistem autentikasi user yang aman menggunakan PHP native, mengelola sesi login dan enkripsi data untuk perlindungan akun.",
    img: "https://www.malasngoding.com/wp-content/uploads/2018/03/membuat-login-dengan-php-dan-mysqli-menggunakan-md5-1.png"
  },
  {
    title: "Database MYSQLI Management",
    tech: ["PHP", "MySQL", "HTML"],
    desc: "Implementasi CRUD (Create, Read, Update, Delete) yang terhubung dengan database MySQLi untuk manajemen data dinamis yang efisien.",
    img: "https://www.malasngoding.com/wp-content/uploads/2018/03/login-enkripsi-password-md5-php.png"
  },
  {
    title: "Modern Form Login UI",
    tech: ["HTML", "CSS"],
    desc: "Antarmuka formulir login dengan desain clean dan modern, mengandalkan CSS Flexbox/Grid untuk responsivitas maksimal di berbagai perangkat.",
    img: "/sabar.jpg"
  },
  {
    title: "Landing Page Clone",
    tech: ["HTML", "CSS"],
    desc: "Replikasi desain website sekolah untuk melatih akurasi layouting, tipografi, dan komposisi warna agar menyerupai situs profesional.",
    img: "/sabar.jpg"
  }
];

  return (
    <div className="project-wrapper" id="project">
      <div className="project-container">
        <h2 className="top-title" data-aos="fade-down">Project Kami</h2> {/* Pakai class yang sama agar identik */}
        
        <div className="project-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i} data-aos="zoom-in" data-aos-duration="600">
              <div className="p-img">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="p-content" data-aos="fade" data-aos-duration="600">
                <div className="p-tech-list">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="p-tech-tag">{t}</span>
                  ))}
                </div>
                <h4 className="p-title">{p.title}</h4>
                <p className="p-desc">{p.desc}</p>
                <button className="p-btn" data-aos="fade" data-aos-duration="800">View Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;