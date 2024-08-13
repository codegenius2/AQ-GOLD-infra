import { API, graphqlOperation } from 'aws-amplify';
import { createVideo, updateVideo } from '../graphql/mutations';
import { listVideos } from '../graphql/queries';

// Define the type for a Video item
interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
}

// Define the type for the response when creating a video
interface CreateVideoResponse {
  createVideo: Video;
}

// Define the type for the response when listing videos
interface ListVideosResponse {
  listVideos: {
    items: Video[];
  };
}

// Function to create a new video
export async function createNewVideo(videoData: any): Promise<Video> {
  try {
    const response = (await API.graphql(graphqlOperation(createVideo, { input: videoData }))) as { data: CreateVideoResponse };

    if (response.data && response.data.createVideo) {
      return response.data.createVideo;
    } else {
      throw new Error('Failed to create video. No data returned.');
    }
  } catch (error) {
    console.error('Error creating video:', error);
    throw error;
  }
}

// Function to fetch a list of videos
export async function fetchVideos(): Promise<Video[]> {
  try {
    const response = await API.graphql({
          query: listVideos, 
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        }) as { data: ListVideosResponse };
    if (response.data && response.data.listVideos) {
      return response.data.listVideos.items;
    } else {
      throw new Error('Failed to fetch videos. No data returned.');
    }
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
}
