// src/services/VideoService.ts
import { API } from 'aws-amplify';
import { createVideo } from '../graphql/mutations';

export type VideoData =  {
  title: string;
  description?: string;
  tags?: string[];
  category?: string;
  videoUrl: string;
  thumbnailUrl?: string;
  isForKids: boolean;
  isRestricted: boolean;
  playlist: string;
  scheduleTime: string;
  timezone: string;
}

export async function saveVideoMetadata(videoData: VideoData): Promise<void> {
  try {
  
    const response = await API.graphql({
      query: createVideo, 
      variables: { input: videoData },
      authMode: 'AMAZON_COGNITO_USER_POOLS',

    });
    console.log(response)
  } catch (error) {
    console.error('Error saving video metadata:', error);
    throw new Error('Failed to save video metadata.');
  }
}
