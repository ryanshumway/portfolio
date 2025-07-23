import React from 'react';
import YouTube from 'react-youtube';
import { YouTubeWrapper, YouTubeContainer } from './YouTubeEmbed.styles.ts';

type YouTubeEmbedProps = {
  videoId: string;
  autoplay?: boolean;
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ 
  videoId, 
  autoplay = false 
}) => {
  const opts = {
    playerVars: {
      autoplay: autoplay ? 1 : 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <YouTubeWrapper>
      <YouTubeContainer>
        <YouTube videoId={videoId} opts={opts} />
      </YouTubeContainer>
    </YouTubeWrapper>
  );
};

export default YouTubeEmbed; 