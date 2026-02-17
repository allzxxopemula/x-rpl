import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; 
import './Contact.css';

const Contact = () => {

  // Fungsi untuk handle klik tombol kirim
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah form reload halaman
    alert("web masih dalam pengembangan yaa..");
  };

  return (
    <div className="contact-main-wrapper" id="contact">
      <div className="contact-container-custom" data-aos="fade">
        <h2 className="top-title" data-aos="fade-down">Hubungi Kami</h2>
        
        <div className="contact-flex-layout">
          {/* SISI INFO */}
          <div className="contact-info-side">
            <h3 className="contact-sub-title">Informasi Sekolah</h3>
            
            <div className="contact-items-stack">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon-react" />
                <p>Jl. Citarum No.22-24, Mangundikaran, Mangun Dikaran, Kec. Nganjuk</p>
              </div>
              
              <div className="contact-item">
                <FaEnvelope className="contact-icon-react" />
                <p>empty@sekolah.sch.id</p>
              </div>
              
              <div className="contact-item">
                <FaPhoneAlt className="contact-icon-react" />
                <p>+62 ??? ??? ???</p>
              </div>
            </div>
          </div>

          {/* SISI FORM */}
          <div className="contact-form-side">
            {/* Tambahkan onSubmit di sini */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Nama Lengkap" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Anda" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Pesan untuk kelas kami..." rows="4" required></textarea>
              </div>
              <button type="submit" className="contact-submit-btn">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;