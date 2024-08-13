import React from 'react';
import { Link } from 'react-router-dom';

interface VideoItemProps {
  video: any;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  return (
    <div>
      <Link to={`/video/${video.id}`}>
        <h3>{video.title}</h3>
        <img src={video.thumbnailUrl} alt={video.title} width="200" />
      </Link>
    </div>
  );
};

export default VideoItem;
