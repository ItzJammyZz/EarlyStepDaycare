import React from 'react';
import './videoPlayer.css';

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AboeZLYKVw4?si=gU61uQeA3iavbhsS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/AboeZLYKVw4?si=gU61uQeA3iavbhsS"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
