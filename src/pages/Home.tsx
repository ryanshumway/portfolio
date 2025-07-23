import React, { useState } from "react";
import HeaderRow from "../components/HeaderRow";
import YouTubeEmbed from "../components/YouTubeEmbed";
import { ButtonToggle } from "../components/ButtonToggle";

const Home: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>('Text');

  return (
    <>
      <HeaderRow />
      <YouTubeEmbed videoId="2zu059dpTc8" />
      <ButtonToggle 
        options={['Text', 'Visuals']}
        onSelectionChange={(value) => setSelectedSection(value)}
      />
      
      {selectedSection === 'Text' && (
        <div>Text content will go here</div>
      )}
      {selectedSection === 'Visuals' && (
        <div>Visuals content will go here</div>
      )}
    </>
  );
};

export default Home;
