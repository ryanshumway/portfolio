import React from "react";
import HeaderRow from "../components/HeaderRow";
import YouTubeEmbed from "../components/YouTubeEmbed";

const Home: React.FC = () => (
  <>
    <HeaderRow />
    <YouTubeEmbed videoId="2zu059dpTc8" />
    {/* Other home content goes here */}
  </>
);

export default Home;
