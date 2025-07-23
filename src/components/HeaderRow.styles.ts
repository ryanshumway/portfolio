import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 64px;
  background-color: red;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    gap: 24px;
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

export const ProfilePic = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 18px;
  object-fit: cover;
  background: #e5e7eb;
`;

export const Name = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin: 0;
  font-family: 'DM Sans', system-ui, sans-serif;
  color: #111827;
  letter-spacing: -0.02em;
`;

export const Roles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  font-size: 1.1rem;
  color: #6b7280;
  font-family: 'DM Mono', monospace;
  margin-bottom: 1.5rem;
  text-align: left;
  overflow-wrap: anywhere;
  word-break: break-word;
  max-width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`; 