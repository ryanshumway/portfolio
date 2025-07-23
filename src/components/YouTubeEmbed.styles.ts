import styled from 'styled-components';

export const YouTubeWrapper = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const YouTubeContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
  }
`; 