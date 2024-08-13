import React, { useEffect } from 'react';
import 'aframe';
import './VideoPlayer.css';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  useEffect(() => {
    // Ensure A-Frame is initialized when the component mounts
    require('aframe');
  }, []);

  return (
    <div className="video-player">
      <a-scene>
        <a-videosphere src={videoUrl}></a-videosphere>
        <a-sky color="#000000"></a-sky>
        <a-camera look-controls></a-camera>
      </a-scene>
    </div>
  );
};

export default VideoPlayer;
