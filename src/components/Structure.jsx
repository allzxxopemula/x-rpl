import React from 'react';
import './Structure.css';

const Structure = () => {
  const teacher = { name: "Meia Ferydha", role: "Wali Kelas", img: "anggota.jpg" };

  const coreMembers = [
    { name: "Galang Wahyu", role: "Ketua Kelas", img: "anggota.jpg" },
    { name: "Gaung Sabilillah", role: "Wakil Ketua", img: "anggota.jpg" },
    { name: "Ayyub Rashif", role: "Sekretaris", img: "anggota.jpg" },
    { name: "Nofisha Viammira", role: "Bendahara", img: "anggota.jpg" },
  ];

  const students = [
    { name: "Abiftian Mareza", img: "anggota.jpg" },
    { name: "Adam Hibaturrahman", img: "anggota.jpg" },
    { name: "Aldo Rendy", img: "anggota.jpg" },
    { name: "Ayyub Rashif", img: "anggota.jpg" },
    { name: "Brian Adira", img: "anggota.jpg" },
    { name: "Fernando Gandhi", img: "anggota.jpg" },
    { name: "Galang Wahyu", img: "anggota.jpg" },
    { name: "Galih Ghanim", img: "anggota.jpg" },
    { name: "Gaung Sabilillah", img: "anggota.jpg" },
    { name: "Geral Dayaka", img: "anggota.jpg" },
    { name: "Muhammad Dhihya'", img: "anggota.jpg" },
    { name: "Nofisha Vianmira", img: "anggota.jpg" },
    { name: "Rakha Widyadhana", img: "anggota.jpg" },
    { name: "Santi Wulan", img: "anggota.jpg" },
    { name: "Wahyu Hanindio", img: "anggota.jpg" },
    { name: "Widodo Santoso", img: "anggota.jpg" },
  ];

  return (
    <section className="struct-wrapper" id="structure">
      <div className="struct-container">
        
        {/* Title Sama Dengan About */}
        <h2 className="top-title" data-aos="fade-down">Struktur Kelas</h2>

        <div className="center-flex">
          <div className="card-item highlight" data-aos="fade-up">
            <div className="card-img">
              <img src={teacher.img} alt={teacher.name} />
            </div>
            <div className="card-txt">
              <span className="badge-role">Wali Kelas</span>
              <h4>{teacher.name}</h4>
            </div>
          </div>
        </div>

        <div className="grid-layout">
          {coreMembers.map((member, index) => (
            <div className="card-item" key={index} data-aos="fade-up">
              <div className="card-img">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="card-txt">
                <span className="badge-role">{member.role}</span>
                <h4>{member.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Title Sama Dengan About */}
        <h3 className="top-title margin-top" data-aos="fade-down">Anggota Kelas</h3>

        <div className="grid-layout">
          {students.map((student, index) => (
            <div className="card-item" key={index} data-aos="fade-up">
              <div className="card-img">
                <img src={student.img} alt={student.name} />
              </div>
              <div className="card-txt only-name">
                <h4>{student.name}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Structure;
