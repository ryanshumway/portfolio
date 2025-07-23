import React from 'react';
import styled from 'styled-components';
import ExperienceSection from '../components/ExperienceSection';

const AboutContainer = styled.div`
  padding: 32px;
  max-width: 1000px;
  margin: 0 auto;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1a1a1a;
`;

const AboutDescription = styled.p`
  font-size: 1.125rem;
  color: #4a4a4a;
  line-height: 1.6;
  margin-bottom: 48px;
`;

const About: React.FC = () => (
  <AboutContainer>
    <AboutTitle>About Me</AboutTitle>
    <AboutDescription>
      Hi, I'm Ryan. I'm a UX Designer and Front-End Developer passionate about creating 
      beautiful, intuitive, and performant digital experiences. Here's my journey in design:
    </AboutDescription>
    <ExperienceSection />
  </AboutContainer>
);

export default About; 