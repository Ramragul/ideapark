import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';

export const VideoUploadPage: React.FC = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [uploaderId, setUploaderId] = useState<string>('');
  const toast = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setVideoFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!videoFile || !uploaderId) {
      toast({ title: 'Error', description: 'Please provide all required fields', status: 'error' });
      return;
    }

    const formData = new FormData();
    formData.append('video', videoFile);
    formData.append('uploader_id', uploaderId);

    try {
      const response = await axios.post('/api/upload-video', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast({ title: 'Success', description: response.data.message, status: 'success' });
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to upload video', status: 'error' });
    }
  };

  return (
    <Box p={6} maxW="500px" mx="auto">
      <FormControl>
        <FormLabel>Uploader ID</FormLabel>
        <Input
          placeholder="Enter your ID"
          value={uploaderId}
          onChange={(e) => setUploaderId(e.target.value)}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Video File</FormLabel>
        <Input type="file" accept="video/*" onChange={handleFileChange} />
      </FormControl>

      <Button colorScheme="blue" mt={6} onClick={handleUpload}>
        Upload Video
      </Button>
    </Box>
  );
};

export default VideoUploadPage;
