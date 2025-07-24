import styled from 'styled-components';
import { colors } from '../styles/colors';

interface HeaderStyledProps {
  isScrolled: boolean;
}

export const HeaderContainer = styled.header<HeaderStyledProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: ${({ isScrolled }) => isScrolled ? '24px 0' : '64px 0'};
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ isScrolled }) => 
    isScrolled 
      ? `rgba(255, 255, 255, 0.4)` 
      : 'transparent'
  };
  backdrop-filter: ${({ isScrolled }) => isScrolled ? 'blur(32px)' : 'none'};
  -webkit-backdrop-filter: ${({ isScrolled }) => isScrolled ? 'blur(32px)' : 'none'};
  box-shadow: ${({ isScrolled }) => 
    isScrolled 
      ? '0 2px 20px rgba(0, 0, 0, 0.1)' 
      : 'none'
  };
  transition: all 0.3s ease;

  [data-theme="dark"] & {
    background: ${({ isScrolled }) => 
      isScrolled 
        ? 'rgba(3, 7, 18, 0.4)' 
        : 'transparent'
    };
    box-shadow: ${({ isScrolled }) => 
      isScrolled 
        ? '0 2px 20px rgba(0, 0, 0, 0.3)' 
        : 'none'
    };
  }

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${({ isScrolled }) => isScrolled ? '16px 32px' : '32px'};
    gap: ${({ isScrolled }) => isScrolled ? '12px' : '24px'};
    margin-left: 0;
    width: 100%;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 800px;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1.5rem;
  overflow-wrap: anywhere;
  word-break: break-word;
  max-width: 100%;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const ProfilePic = styled.img<HeaderStyledProps>`
  width: ${({ isScrolled }) => isScrolled ? '56px' : '124px'};
  height: ${({ isScrolled }) => isScrolled ? '56px' : '124px'};
  border-radius: ${({ isScrolled }) => isScrolled ? '9999px' : '16px'};
  object-fit: cover;
  background: #e5e7eb;
  transition: width 0.3s ease, height 0.3s ease;
`;

export const Name = styled.h1<HeaderStyledProps>`
  font-size: ${({ isScrolled }) => isScrolled ? '24px' : '32px'};
  font-weight: 900;
  margin: 0;
  font-family: 'DM Sans', system-ui, sans-serif;
  color: ${colors.gray[900]};
  letter-spacing: -0.02em;
  transition: font-size 0.3s ease;

  [data-theme="dark"] & {
    color: ${colors.gray[50]};
  }
`;

export const Roles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  font-size: 1.1rem;
  color: ${colors.gray[500]};
  font-family: 'DM Mono', monospace;
  margin-bottom: 1.5rem;
  text-align: left;
  overflow-wrap: anywhere;
  word-break: break-word;
  max-width: 100%;

  [data-theme="dark"] & {
    color: ${colors.gray[400]};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`; 