import styled from 'styled-components';
import { colors } from '../styles/colors';

export const ThemeToggleButton = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: all 0.3s ease;
  color: #374151;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }

  &.dark {
    background: rgba(31, 41, 55, 0.9);
    color: ${colors.gray[50]};
  }
`; 