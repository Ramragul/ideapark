// Version 1 ; Problem with the map function


// import React, { useState, useEffect } from 'react';
// import { Box, Text, Select, Spinner } from '@chakra-ui/react';
// import axios from 'axios';

// interface Video {
//   id: number;
//   video_url: string;
// }

// export const VideoPlaybackPage: React.FC = () => {
//   const [videos, setVideos] = useState<Video[]>([]);
//   const [selectedVideo, setSelectedVideo] = useState<string>('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('https://admee.in:3003/api/ip/partner/36377/videos');
//         setVideos(response.data);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, []);

//   return (
//     <Box p={6}>
//       <Text fontSize="xl" mb={4}>Select a Video to Play</Text>

//       {loading ? (
//         <Spinner />
//       ) : (
//         <>
//           <Select
//             placeholder="Select a video"
//             onChange={(e) => setSelectedVideo(e.target.value)}
//           >
//             {videos.map((video) => (
//               <option key={video.id} value={video.video_url}>
//                 Video {video.id}
//               </option>
//             ))}
//           </Select>

//           {selectedVideo && (
//             <Box mt={6}>
//               <video controls width="100%">
//                 <source src={selectedVideo} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </Box>
//           )}
//         </>
//       )}
//     </Box>
//   );
// };

// export default VideoPlaybackPage;


// Version 2  - working version

// import React, { useState, useEffect } from 'react';
// import { Box, Text, Select, Spinner } from '@chakra-ui/react';
// import axios from 'axios';

// interface Video {
//   id: number;
//   video_url: string;
// }

// export const VideoPlaybackPage: React.FC = () => {
//   const [videos, setVideos] = useState<Video[]>([]);
//   const [selectedVideo, setSelectedVideo] = useState<string>('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('https://admee.in:3003/api/ip/partner/36377/videos');
//         setVideos(response.data.videos || []); // Adjusting to match expected response structure
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, []);

//   return (
//     <Box p={6}>
//       <Text fontSize="xl" mb={4}>Select a Video to Play</Text>

//       {loading ? (
//         <Spinner />
//       ) : (
//         <>
//           <Select
//             placeholder="Select a video"
//             onChange={(e) => setSelectedVideo(e.target.value)}
//           >
//             {videos.map((video) => (
//               <option key={video.id} value={video.video_url}>
//                 Video {video.id}
//               </option>
//             ))}
//           </Select>

//           {selectedVideo && (
//             <Box mt={6}>
//               <video controls width="100%">
//                 <source src={selectedVideo} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </Box>
//           )}
//         </>
//       )}
//     </Box>
//   );
// };

// export default VideoPlaybackPage;



// Version 3 : Design enhancement to Version 1

import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Spinner,
  Select,
  Button,
  useBreakpointValue,
  Divider,
} from '@chakra-ui/react';
import axios from 'axios';

interface Video {
  id: number;
  title: string;
  video_url: string;
}

export const VideoPlaybackPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string>('');
  const [selectedVideoTitle, setSelectedVideoTitle] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://admee.in:3003/api/ip/partner/36377/videos'
        );
        setVideos(response.data.videos || []); // Adjusting to match expected response structure
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video.video_url);
    setSelectedVideoTitle(video.title);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box p={4} minH="100vh" bg="gray.50">
      <HStack spacing={4} align="start">
        {/* Sidebar for Video List */}
        {!isMobile && (
          <Box
            w="30%"
            maxW="300px"
            p={4}
            bg="white"
            shadow="md"
            borderRadius="lg"
          >
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Video Playlist
            </Text>
            {loading ? (
              <Spinner />
            ) : (
              <VStack align="stretch" spacing={3}>
                {videos.map((video) => (
                  <Button
                    key={video.id}
                    variant="ghost"
                    justifyContent="start"
                    fontWeight={video.video_url === selectedVideo ? 'bold' : 'normal'}
                    colorScheme={video.video_url === selectedVideo ? 'pink' : 'gray'}
                    onClick={() => handleVideoSelect(video)}
                  >
                    {video.title || `Video ${video.id}`}
                  </Button>
                ))}
              </VStack>
            )}
          </Box>
        )}

        {/* Main Player Area */}
        <Box
          flex="1"
          p={4}
          bg="white"
          shadow="md"
          borderRadius="lg"
          minH="500px"
        >
          {selectedVideo ? (
            <>
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                {selectedVideoTitle || 'Playing Video'}
              </Text>
              <Divider mb={4} />
              <video controls width="100%" height="auto">
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </>
          ) : (
            <Text fontSize="lg" color="gray.500" textAlign="center" mt={20}>
              Select a video to start watching.
            </Text>
          )}
        </Box>
      </HStack>

      {/* Dropdown for Mobile */}
      {isMobile && (
        <Box mt={6}>
          <Text fontSize="lg" mb={2}>
            Select a Video
          </Text>
          <Select
            placeholder="Choose a video"
            onChange={(e) =>
              handleVideoSelect(
                videos.find((video) => video.video_url === e.target.value) as Video
              )
            }
          >
            {videos.map((video) => (
              <option key={video.id} value={video.video_url}>
                {video.title || `Video ${video.id}`}
              </option>
            ))}
          </Select>
        </Box>
      )}
    </Box>
  );
};

export default VideoPlaybackPage;
