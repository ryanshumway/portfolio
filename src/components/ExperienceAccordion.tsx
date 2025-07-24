import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { colors } from '../styles/colors';
import {
  AccordionContainer,
  ImageContainer,
  AccordionHeader,
  CompanyInfo,
  CompanyName,
  TimeInfo,
  AccordionContent,
  Description
} from './ExperienceAccordion.styles.ts';

export interface ExperienceData {
  title: string;
  period: string;
  description: string;
}

interface ExperienceAccordionProps {
  experience: ExperienceData;
}

const ExperienceAccordion: React.FC<ExperienceAccordionProps> = ({ experience }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useTheme();

  const getHoverBackgroundColor = () => {
    if (isDarkMode) {
      return isHovered ? colors.gray[900] : 'transparent';
    }
    return isHovered ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.5)';
  };

  return (
    <AccordionContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ 
        scale: isHovered ? 1.02 : 1,
        backgroundColor: getHoverBackgroundColor(),
      }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <ImageContainer />
      <AccordionHeader>
        <CompanyInfo>
          <CompanyName>{experience.title}</CompanyName>
          <TimeInfo>
            {experience.period}
          </TimeInfo>
        </CompanyInfo>
      </AccordionHeader>

      <AccordionContent>
        <Description>{experience.description}</Description>
      </AccordionContent>
    </AccordionContainer>
  );
};

export default ExperienceAccordion; 