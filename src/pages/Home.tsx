import React from 'react';
import VideoList from '../components/Video/VideoList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the 360° Video Platform</h1>
      <VideoList />
    </div>
  );
};

export default Home;
