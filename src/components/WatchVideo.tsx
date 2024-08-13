import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Storage } from 'aws-amplify';
import VideoPlayer from './VideoPlayer';
import './WatchVideo.css';

const WatchVideo: React.FC = () => {
  const { videoKey } = useParams<{ videoKey: string }>();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        if (videoKey) {
          const signedUrl = await Storage.get(videoKey);
          setVideoUrl(signedUrl as string);
        } else {
          console.error('Video key is missing in the URL.');
        }
      } catch (error) {
        console.error('Error fetching video URL:', error);
      }
    };

    fetchVideoUrl();
  }, [videoKey]);

  return (
    <div className="watch-video">
      {videoUrl ? (
        <VideoPlayer videoUrl={videoUrl} />
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default WatchVideo;
