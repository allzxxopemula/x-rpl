import React from 'react';
import './Structure.css';

const Structure = () => {
  const teacher = { name: "Meia Ferydha S.Pd", role: "Wali Kelas", img: "/anggota.jpg" };

  const coreMembers = [
    { name: "Galang Wahyu", role: "Ketua Kelas", img: "/anggota.jpg" },
    { name: "Gaung Sabilillah", role: "Wakil Ketua", img: "/anggota.jpg" },
    { name: "Ayyub Rasyif", role: "Sekretaris", img: "/anggota.jpg" },
    { name: "Novisha", role: "Bendahara", img: "/anggota.jpg" },
  ];

  const students = [
    { name: "Abif", img: "/anggota.jpg" },
    { name: "Adam", img: "/anggota.jpg" },
    { name: "Aldo", img: "/anggota.jpg" },
    { name: "Ayyub", img: "/anggota.jpg" },
    { name: "Brian", img: "/anggota.jpg" },
    { name: "Fernando", img: "/anggota.jpg" },
    { name: "Ghanim", img: "/anggota.jpg" },
    { name: "Rakha", img: "/anggota.jpg" },
    { name: "Galang", img: "/anggota.jpg" },
    { name: "Geral", img: "/anggota.jpg" },
    { name: "Novisha", img: "/anggota.jpg" },
    { name: "Santi", img: "/anggota.jpg" },
    { name: "Wahyu", img: "/anggota.jpg" },
    { name: "Dhihya", img: "/anggota.jpg" },
    { name: "Gaung", img: "/anggota.jpg" },
    { name: "Widodo", img: "/anggota.jpg" },
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