import React, { useState } from 'react';
import { uploadVideo, uploadThumbnail, getVideoUrl, getThumbnailUrl } from '../../services/StorageService';
import { saveVideoMetadata } from '../../services/VideoService';
import { useAuth } from '../../context/AuthContext';

interface UploadVideoForm {
  title: string;
  description: string;
  tags: string;
  category: string;
  videoFile: File | null;
  thumbnailFile: File | null;
  isForKids: boolean;
  isRestricted: boolean;
  playlist: string;
  scheduleTime: string; // Use ISO 8601 format
  timezone: string;
}

// Define the VideoData interface to ensure all fields are covered
interface VideoData {
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

const initialFormState: UploadVideoForm = {
  title: '',
  description: '',
  tags: '',
  category: '',
  videoFile: null,
  thumbnailFile: null,
  isForKids: false,
  isRestricted: false,
  playlist: '',
  scheduleTime: '',
  timezone: 'UTC', // Default to UTC or another suitable timezone
};

const timezones = [
  "UTC",
  "America/New_York",
  "Europe/London",
  "Asia/Tokyo",
  "Australia/Sydney",
  // Add more timezones as needed
];

const VideoUpload: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [formState, setFormState] = useState<UploadVideoForm>(initialFormState);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isAuthenticated) {
    return <div>Please log in to upload a video.</div>;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>) => {
    const { name, value, type, checked } = event.target;
    setFormState({
      ...formState,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    setFormState({ ...formState, [name]: files ? files[0] : null });
  };

  const handleUpload = async () => {
    if (!formState.videoFile || !formState.thumbnailFile) {
      setError('Please select both a video and a thumbnail file to upload.');
      return;
    }

    try {
      setUploading(true);
      setError(null);
      
      const scheduleTimeISO = new Date(formState.scheduleTime).toISOString();
      // 1. Upload video to S3
      const videoKey = await uploadVideo(formState.videoFile);
      const videoUrl = await getVideoUrl(videoKey);

      // 2. Upload thumbnail to S3
      const thumbnailKey = await uploadThumbnail(formState.thumbnailFile);
      const thumbnailUrl = await getThumbnailUrl(thumbnailKey);

      // 3. Save video metadata in DynamoDB
      await saveVideoMetadata({
        title: formState.title,
        description: formState.description,
        tags: formState.tags.split(',').map(tag => tag.trim()),
        category: formState.category,
        videoUrl,
        thumbnailUrl,
        isForKids: formState.isForKids,
        isRestricted: formState.isRestricted,
        playlist: formState.playlist,
        scheduleTime: scheduleTimeISO,
        timezone: formState.timezone,
      });

      // Reset form on success
      setFormState(initialFormState);
      alert('Video and thumbnail uploaded successfully!');
    } catch (error: any) {
      setError(error.message || 'An unexpected error occurred.');
      console.error('Error:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <input
        type="file"
        accept="video/*"
        name="videoFile"
        onChange={handleFileChange}
      />
      <input
        type="file"
        accept="image/*"
        name="thumbnailFile"
        onChange={handleFileChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formState.title}
        onChange={handleInputChange}
      />
      <br/>
      <textarea
        name="description"
        placeholder="Description"
        value={formState.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="tags"
        placeholder="Tags (comma separated)"
        value={formState.tags}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formState.category}
        onChange={handleInputChange}
      />
      <label>
        <input
          type="checkbox"
          name="isForKids"
          checked={formState.isForKids}
          onChange={handleInputChange}
        />
        For Kids
      </label>
      <label>
        <input
          type="checkbox"
          name="isRestricted"
          checked={formState.isRestricted}
          onChange={handleInputChange}
        />
        Restricted
      </label>
      <br/>
      <input
        type="text"
        name="playlist"
        placeholder="Playlist"
        value={formState.playlist}
        onChange={handleInputChange}
      />
      <label>
        Schedule Time:
        <input
          type="datetime-local"
          name="scheduleTime"
          value={formState.scheduleTime}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Timezone:
        <select name="timezone" value={formState.timezone} onChange={handleInputChange}>
          {timezones.map((tz: string) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Video'}
      </button>
    </div>
  );
};

export default VideoUpload;
