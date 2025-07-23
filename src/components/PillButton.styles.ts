import styled from 'styled-components';
import { colors } from '../styles/colors';

export const PillButtonStyled = styled.a`
  display: inline-block;
  border-radius: 9999px;
  padding: 12px 16px;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  background: ${colors.white};
  color: ${colors.gray[900]};
  text-decoration: none;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  transition: transform 0.4s cubic-bezier(.4,0,.2,1), box-shadow 0.15s cubic-bezier(.4,0,.2,1);
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
  &:active {
    transform: scale(0.97);
  }

  [data-theme="dark"] & {
    background: ${colors.gray[800]};
    color: ${colors.gray[100]};
    box-shadow: 0 1px 4px rgba(0,0,0,0.2);

    &:hover {
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      background: ${colors.gray[700]};
    }
  }
`; 