import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 64px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1.5rem;
`;

export const ProfilePic = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 18px;
  object-fit: cover;
  background: #e5e7eb;
`;

export const Name = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  font-family: 'DM Sans', system-ui, sans-serif;
  color: #111827;
`;

export const Roles = styled.div`
  font-size: 1.1rem;
  color: #6b7280;
  font-family: 'DM Mono', monospace;
  margin-bottom: 1.5rem;
  text-align: left;
`; 

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;