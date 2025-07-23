import React from 'react';
import ExperienceAccordion from './ExperienceAccordion';
import type { ExperienceData } from './ExperienceAccordion';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  width: 100%;
  margin: 0;

  box-sizing: border-box;

  @media (max-width: 800px) {
    padding: 32px;
  }
`;

const ExperienceSection: React.FC = () => {
  const experiences: ExperienceData[] = [
    {
      title: "A template builder that landed a $125k ARR deal",
      period: "ComplyAuto",
      description: "Leading UX design initiatives for an automotive compliance platform, focusing on creating intuitive interfaces for complex regulatory workflows. Redesigned the main dashboard"
    },
    {
      title: "DealCheck Ai: an ai tool that increased Comply's ARR by $1M in a single month",
      period: "ComplyAuto",
      description: "Specialized in creating digital experiences for tech startups and established companies"
    },
    {
      title: "Graphite",
      period: "October 2022 - January 2023",
      description: "Focused on creating data visualization interfaces and improving the overall user experience for a developer productivity platform. Designed intuitive data visualization components, improved developer onboarding flow reducing time-to-value by 50%, and created comprehensive design documentation and guidelines."
    },
    {
      title: "Mango Voice",
      period: "September 2019 - October 2022",
      description: "Led design efforts for a cloud-based business communications platform, creating seamless experiences for voice, video, and messaging solutions. Spearheaded complete platform redesign serving 100,000+ users, implemented design thinking workshops across engineering teams, reduced user support tickets by 45% through improved UX design, and established user testing protocols and feedback loops."
    }
  ];

  return (
    <ExperienceContainer>
      {experiences.map((experience, index) => (
        <ExperienceAccordion 
          key={`${experience.title}-${index}`} 
          experience={experience} 
        />
      ))}
    </ExperienceContainer>
  );
};

export default ExperienceSection; 