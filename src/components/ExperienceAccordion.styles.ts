import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AccordionContainer = styled(motion.div)`
  border-radius: 16px;
  padding: 20px 24px;
  margin-bottom: 8px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    border-color: rgba(0, 0, 0, 0.12);
    box-shadow: 
      0 4px 20px rgba(0, 0, 0, 0.08),
      0 1px 3px rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #9CA3AF;
  border-radius: 12px;
  margin-bottom: 16px;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex: 1;
  align-items: center;
`;

export const CompanyName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
`;

export const TimeInfo = styled.div`
  font-size: 0.875rem;
  color: #666666;
  font-weight: 500;
  line-height: 1.4;
`;





export const AccordionContent = styled.div`
  width: 100%;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: #4a4a4a;
  line-height: 1.6;
  font-weight: 400;
  margin: 0;
`;

 