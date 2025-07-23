import React, { useState } from "react";
import HeaderRow from "../components/HeaderRow";
import YouTubeEmbed from "../components/YouTubeEmbed";
import { ButtonToggle } from "../components/ButtonToggle";
import ExperienceSection from "../components/ExperienceSection";

// Portfolio section options
const PORTFOLIO_SECTIONS = ['Portfolio', 'Illustrations', 'Side Projects'];

const Home: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>(PORTFOLIO_SECTIONS[0]);

  return (
    <>
      <HeaderRow />
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
    </>
  );
};

export default Home;
