import styled from 'styled-components';
import { colors } from '../styles/colors';

export const ButtonToggleContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: ${colors.gray[200]};
  padding: 4px;
  border-radius: 999px;
  margin: 16px;

  [data-theme="dark"] & {
    background-color: ${colors.gray[900]};
  }
`;

export const ToggleButton = styled.button<{ $isActive: boolean }>`
  flex: 1;
  border-radius: 9999px;
  padding: 12px 16px;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  background: ${props => props.$isActive ? colors.white : 'transparent'};
  color: ${props => props.$isActive ? colors.gray[900] : colors.gray[900]};
  text-decoration: none;
  box-shadow: ${props => props.$isActive ? '0 1px 4px rgba(0,0,0,0.04)' : 'none'};
  transition: transform 0.4s cubic-bezier(.4,0,.2,1), box-shadow 0.15s cubic-bezier(.4,0,.2,1), background-color 0.2s ease, color 0.2s ease;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    ${props => !props.$isActive && `
      background: rgba(255, 255, 255, 0.5);
    `}
  }
  
  &:active {
    transform: scale(0.97);
  }

  [data-theme="dark"] & {
    background: ${props => props.$isActive ? colors.gray[800] : 'transparent'};
    color: ${props => props.$isActive ? colors.gray[100] : colors.gray[300]};
    box-shadow: ${props => props.$isActive ? '0 1px 4px rgba(0,0,0,0.2)' : 'none'};

    &:hover {
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      ${props => !props.$isActive && `
        background: rgba(55, 65, 81, 0.5);
      `}
    }
  }
`; 