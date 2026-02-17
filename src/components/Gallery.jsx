import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const photos = [
    { id: 1, title: "Kebersamaan", category: "Fotbar", imgUrl: "gallery/fotbarbareng.jpeg" },
    { id: 2, title: "Pembelajaran", category: "Academic", imgUrl: "gallery/dikelas.jpg" },
    { id: 3, title: "Apa ya", category: "ntah", imgUrl: "sabar.jpg" },
    { id: 4, title: "Apa ya", category: "ntah", imgUrl: "sabar.jpg" },
    { id: 5, title: "Apa ya", category: "ntah", imgUrl: "sabar.jpg" },
    { id: 6, title: "Apa ya", category: "ntah", imgUrl: "sabar.jpg" },
   
  ];

  return (
    <div className="gallery-wrapper" id="gallery">
      <div className="gallery-container">
        <h2 className="top-title" data-aos="fade-down">Galeri Momen</h2>
        <div className="gallery-grid">
          {photos.map((photo) => (
            <div className="gallery-item" key={photo.id} data-aos="fade"> 
              <div className="gallery-img-box" >
                <img src={photo.imgUrl} alt={photo.title} />
                <div className="gallery-overlay">
                  <span className="category-tag">{photo.category}</span>
                  <h4>{photo.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;