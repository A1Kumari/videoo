// AboutSection.jsx
// AboutSection.jsx
"use client";
// AboutSection.jsx

import { useEffect, useRef } from 'react';
import styles from "./About.css";

const AboutSection = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      parallaxRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`; // Adjust the parallax effect speed as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about-section py-16 relative" ref={parallaxRef}>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 mb-8">
          We're not just another tech company—we're a team of passionate storytellers on a mission to empower individuals and businesses alike. With years of experience in video editing, we understand the importance of simplicity and creativity. That's why we've created Videoo, a platform that puts the power of professional editing in your hands.
          </p>
          <p className="text-lg text-gray-600">
            With our intuitive platform, you can unleash your creativity and bring your ideas to life.
            Whether you&apos;re a professional videographer or a beginner enthusiast, we&apos;ve got you covered.
          </p>
        </div>
        <div className="flex justify-center mt-12">
          {/* <img src="/team.jpg" alt="Team" className="rounded-lg shadow-lg" style={{ maxWidth: '600px' }} /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
