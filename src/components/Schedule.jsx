import React from 'react';
import './Schedule.css';

const Schedule = () => {
  const scheduleData = [
    {
      id: 1,
      title: "Jadwal Matpel Umum",
      image: "/jadwal/umum.png", 
      // Mengarah ke public/files/JADWL.KELAS MATPEL UMUM.pdf
      fileUrl: "/files/JADWL.KELAS MATPEL UMUM.pdf",
      fileName: "JADWL.KELAS MATPEL UMUM.pdf"
    },
    {
      id: 2,
      title: "Jadwal Matpel Kejuruan",
      image: "/jadwal/jurusan.png", 
      // Mengarah ke public/files/JADWAL KELAS MATPEL KEJURUAN.pdf
      fileUrl: "/files/JADWAL KELAS MATPEL KEJURUAN.pdf",
      fileName: "JADWAL KELAS MATPEL KEJURUAN.pdf"
    }
  ];

  return (
    <div className="schedule-main-wrapper" id="schedule">
      <div className="schedule-container-custom">
        <h2 className="top-title" data-aos="fade-down">Jadwal Kelas</h2>
        
        <div className="schedule-cards-layout">
          {scheduleData.map((item) => (
            <div key={item.id} className="schedule-card-item" data-aos="fade-up" data-aos-duration="600">
              <div className="schedule-img-box">
                <img src={item.image} alt={item.title} className="schedule-img-file" />
              </div>
              <div className="schedule-info-box">
                <h3 className="schedule-title-text">{item.title}</h3>
                {/* Atribut download memastikan file terunduh, bukan cuma terbuka */}
                <a 
                  href={item.fileUrl} 
                  download={item.fileName} 
                  className="schedule-download-btn"
                >
                  Download File
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;