import React, { useState, useEffect } from 'react';
import { Box, Text, Select, Spinner } from '@chakra-ui/react';
import axios from 'axios';

interface Video {
  id: number;
  video_url: string;
}

export const VideoPlaybackPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <Box p={6}>
      <Text fontSize="xl" mb={4}>Select a Video to Play</Text>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <Select
            placeholder="Select a video"
            onChange={(e) => setSelectedVideo(e.target.value)}
          >
            {videos.map((video) => (
              <option key={video.id} value={video.video_url}>
                Video {video.id}
              </option>
            ))}
          </Select>

          {selectedVideo && (
            <Box mt={6}>
              <video controls width="100%">
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default VideoPlaybackPage;
