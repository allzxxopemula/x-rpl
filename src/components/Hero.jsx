import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-wrapper" id="home">
      <div className="hero-bg"></div>
      <div className="hero-content hero-container">
        <h1>Rekayasa Perangkat Lunak</h1>
        <div className="typewriter-box">
          <Typewriter 
            words={['Coding is Life', 'Innovation for Future', 'Build Your Dreams']}
            loop={0} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1500}
          />
        </div>
        <p className="hero-desc">
          Kelas X-RPL SMK adalah tempat berkumpulnya para inovator masa depan dalam dunia teknologi perangkat lunak. 
          Kami belajar, berkembang, dan berkreasi bersama.
        </p>
        <div className="hero-btns">
          <a href="#project" className="btn btn-primary">Lihat Project</a>
          <a href="#about" className="btn btn-outline">About Us</a>
        </div>
      </div>
    </section>
  );
};
export default Hero;