import React from "react";
import "./gallery.css";
import gallery1 from "../../assets/gallery-1.jpeg"
import gallery2 from "../../assets/gallery-2.jpeg"
import gallery3 from "../../assets/gallery-3.jpeg"
import gallery4 from "../../assets/gallery-4.jpeg"
import gallery5 from "../../assets/gallery-5.jpeg"
import gallery6 from "../../assets/gallery-6.jpeg"
import gallery7 from "../../assets/gallery-7.jpeg"
import gallery8 from "../../assets/gallery-8.jpeg"
import gallery9 from "../../assets/gallery-9.jpeg"
import gallery10 from "../../assets/gallery-10.jpeg"
import gallery11 from "../../assets/gallery-11.jpeg"

const Gallery = () => {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11
  ];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title strongfont">GALLERY</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Galeria ${index}`} className="gallery-img" />
            <div className="gallery-overlay">
              {/* <span>Foto {index + 1}</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

