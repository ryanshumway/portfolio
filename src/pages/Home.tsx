import React, { useState, useEffect } from "react";
import HeaderRow from "../components/HeaderRow";
import YouTubeEmbed from "../components/YouTubeEmbed";
import { ButtonToggle } from "../components/ButtonToggle";
import ExperienceSection from "../components/ExperienceSection";

// Portfolio section options
const PORTFOLIO_SECTIONS = ['Portfolio', 'Illustrations', 'Side Projects'];

const Home: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>(PORTFOLIO_SECTIONS[0]);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Trigger after 50px of scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeaderRow isScrolled={isScrolled} />
      <YouTubeEmbed videoId="2zu059dpTc8" />
      <ButtonToggle 
        options={PORTFOLIO_SECTIONS}
        onSelectionChange={(value) => setSelectedSection(value)}
      />
      
      {selectedSection === 'Portfolio' && (
        <ExperienceSection />
      )}
      {selectedSection === 'Illustrations' && (
        <div>Visuals content will go here</div>
      )}
      
      {/* Temporary content to test dark mode */}
      <div style={{ height: '100vh', padding: '2rem' }}>
        <h2>Test Dark Mode</h2>
        <p>Click the theme toggle button in the bottom right to test dark mode!</p>
        <p>All components should seamlessly transition between light and dark themes.</p>
      </div>
    </>
  );
};

export default Home;
