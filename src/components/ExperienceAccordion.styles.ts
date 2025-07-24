import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../styles/colors';

export const AccordionContainer = styled(motion.div)`
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 8px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.5);

  &:hover {
    border-color: rgba(0, 0, 0, 0.12);
    box-shadow: 
      0 4px 20px rgba(0, 0, 0, 0.08),
      0 1px 3px rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    margin-bottom: 0;
  }

  [data-theme="dark"] & {
    background: ${colors.gray[800]};
    border: none;

    &:hover {
      box-shadow: 
        0 4px 20px rgba(0, 0, 0, 0.3),
        0 1px 3px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${colors.gray[400]};
  border-radius: 12px;
  margin-bottom: 16px;

  [data-theme="dark"] & {
    background-color: ${colors.gray[700]};
  }
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;

  [data-theme="dark"] & {
    /* Ready for any future dark mode specific styling */
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex: 1;
  align-items: center;

  [data-theme="dark"] & {
    /* Ready for any future dark mode specific styling */
  }
`;

export const CompanyName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${colors.gray[900]};
  margin: 0;
  line-height: 1.4;

  [data-theme="dark"] & {
    color: ${colors.gray[100]};
  }
`;

export const TimeInfo = styled.div`
  font-size: 0.875rem;
  color: ${colors.gray[600]};
  font-weight: 500;
  line-height: 1.4;

  [data-theme="dark"] & {
    color: ${colors.gray[400]};
  }
`;





export const AccordionContent = styled.div`
  width: 100%;

  [data-theme="dark"] & {
    /* Ready for any future dark mode specific styling */
  }
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: ${colors.gray[700]};
  line-height: 1.6;
  font-weight: 400;
  margin: 0;

  [data-theme="dark"] & {
    color: ${colors.gray[300]};
  }
`;

 