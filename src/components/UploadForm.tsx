import React, { useState } from 'react';
import { Storage, API, graphqlOperation, Auth } from 'aws-amplify';
import { createVideo } from '../graphql/mutations';
import './UploadForm.css';

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadMessage(null);
    }
  };

  const handleUpload = async () => {
    if (file) {
      setUploading(true);
      try {
        // Get the current authenticated user
        const user = await Auth.currentAuthenticatedUser();
        const userID = user.attributes.sub;
        

        // Upload the video file to S3
        const s3Response = await Storage.put(file.name, file, {
          contentType: file.type,
        });

        // Store video metadata in DynamoDB via the GraphQL API
        const videoData = {
          title: file.name,
          description: 'Video description',
          filePath: s3Response.key,
          category: '360 Video',
          userID: userID,
        };
        console.log(videoData)
        await API.graphql(graphqlOperation(createVideo, { input: videoData }));

        setUploadMessage('Upload successful!');
        console.log('File uploaded:', s3Response);
      } catch (error: any) {
        if (error.errors && error.errors[0].errorType === 'Unauthorized') {
          setUploadMessage('You are not authorized to perform this operation.');
        } else {
          setUploadMessage('Error uploading file.');
        }
        console.error('Error uploading file:', error);
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div className="upload-form">
      <h2>Upload Your 360° Video</h2>
      <input
        type="file"
        accept="video/*"
        onChange={handleChange}
        className="upload-input"
      />
      <button
        onClick={handleUpload}
        className="upload-button"
        disabled={uploading || !file}
      >
        {uploading ? 'Uploading...' : 'Upload Video'}
      </button>
      {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
    </div>
  );
};

export default UploadForm;
