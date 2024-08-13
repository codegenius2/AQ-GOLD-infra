// src/services/StorageService.ts
import { Storage } from 'aws-amplify';

export async function uploadVideo(file: File): Promise<string> {
  try {
    const result = await Storage.put(`videos/${file.name}`, file, {
      contentType: file.type,
    });
    return result.key;
  } catch (error) {
    console.error('Error uploading video', error);
    throw new Error('Failed to upload video. Please try again.');
  }
}

export async function getVideoUrl(key: string): Promise<string> {
  try {
    return await Storage.get(key) as string;
  } catch (error) {
    console.error('Error getting video URL', error);
    throw new Error('Failed to retrieve video URL.');
  }
}

export async function uploadThumbnail(file: File): Promise<string> {
  try {
    const result = await Storage.put(`thumbnails/${file.name}`, file, {
      contentType: file.type,
    });
    return result.key;
  } catch (error) {
    console.error('Error uploading thumbnail', error);
    throw new Error('Failed to upload thumbnail. Please try again.');
  }
}

export async function getThumbnailUrl(key: string): Promise<string> {
  try {
    return await Storage.get(key) as string;
  } catch (error) {
    console.error('Error getting thumbnail URL', error);
    throw new Error('Failed to retrieve thumbnail URL.');
  }
}
