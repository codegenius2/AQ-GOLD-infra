import React, { useEffect, useState } from 'react';
import { fetchVideos } from '../../services/ApiService';
import VideoItem from './VideoItem';

const VideoList: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const videoList = await fetchVideos();
        setVideos(videoList);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    loadVideos();
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
