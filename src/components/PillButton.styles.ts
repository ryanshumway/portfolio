import styled from 'styled-components';

export const PillButtonStyled = styled.a`
  display: inline-block;
  border-radius: 9999px;
  padding: 12px 16px;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  background: #fff;
  color: #111827;
  text-decoration: none;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  transition: transform 0.4s cubic-bezier(.4,0,.2,1), box-shadow 0.15s cubic-bezier(.4,0,.2,1);
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
  &:active {
    transform: scale(0.97);
  }
`; 