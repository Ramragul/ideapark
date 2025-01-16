// import React, { useState } from 'react';
// import {
//   Box,
//   Input,
//   Button,
//   FormControl,
//   FormLabel,
//   useToast,
// } from '@chakra-ui/react';
// import axios from 'axios';
// import { useAuth } from '@/contexts/AuthContext';

// export const VideoUploadPage: React.FC = () => {
//   const [videoFile, setVideoFile] = useState<File | null>(null);
//   const [uploaderId, setUploaderId] = useState<string>('');
//   const toast = useToast();
//   const { authState } = useAuth();

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setVideoFile(e.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!videoFile) {
//       toast({ title: 'Error', description: 'Please provide all required fields', status: 'error' });
//       return;
//     }

//     const formData = new FormData();
//     formData.append('video', videoFile);
//     formData.append('uploader_id', authState.userId);

//     try {
//       const response = await axios.post('https://admee.in:3003/aws/upload/video', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       toast({ title: 'Success', description: response.data.message, status: 'success' });
//     } catch (error) {
//       toast({ title: 'Error', description: 'Failed to upload video', status: 'error' });
//     }
//   };

//   return (
//     <Box p={6} maxW="500px" mx="auto">
//       <FormControl>
//         <FormLabel>Uploader ID</FormLabel>
//         <Input
//           placeholder="Enter your ID"
//           value={uploaderId}
//           onChange={(e) => setUploaderId(e.target.value)}
//         />
//       </FormControl>

//       <FormControl mt={4}>
//         <FormLabel>Video File</FormLabel>
//         <Input type="file" accept="video/*" onChange={handleFileChange} />
//       </FormControl>

//       <Button colorScheme="blue" mt={6} onClick={handleUpload}>
//         Upload Video
//       </Button>
//     </Box>
//   );
// };

// export default VideoUploadPage;



// Version 2 : Enhancement to version 1

// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Input,
//   Button,
//   FormControl,
//   FormLabel,
//   useToast,
//   Text
// } from '@chakra-ui/react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '@/contexts/AuthContext';
// import usePostData from '@/hooks/usePostData';
// import successAnimation from '../animations/success.json';
// import errorAnimation from '../animations/error.json';
// import loadingAnimation from '../animations/loading.json';
// import Lottie from 'lottie-react';

// export const VideoUploadPage: React.FC = () => {
//   const [videoFile, setVideoFile] = useState<File | null>(null);
//   const [uploaderId, setUploaderId] = useState<string>('');
//   const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);
//   const [showAnimation, setShowAnimation] = useState(false);
//   const toast = useToast();
//   const { authState } = useAuth();

//   const navigate = useNavigate();

//   const { postData, responseData, error, isLoading } = usePostData('/aws/upload/video');

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setVideoFile(e.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!videoFile) {
//       toast({ title: 'Error', description: 'Please provide all required fields', status: 'error' });
//       return;
//     }

//     const formData = new FormData();
//     formData.append('video', videoFile);
//     formData.append('uploader_id', authState.userId || '');

//     setShowAnimation(true);
//     setAnimationType('loading');
//     await postData(formData); 


//   };

//   useEffect(() => {
//     if (responseData) {
//       if (responseData.status === 201) {
        
//         console.log("Response Status is " +responseData.status)
//         setAnimationType('success');
//         setTimeout(() => {
//           navigate('/partner/home'); // Navigate to home page after 3 seconds
//         }, 3000);
//       } else {
//         setAnimationType('error');
//       }
//     } else if (error) {
//       console.log("Inside error block")
//       setAnimationType('error');
//       setTimeout(() => {
//         setShowAnimation(false);
//         navigate('/video/upload'); // Navigate back to checkout page after a few seconds
//       }, 3000);
      
//     }
//   }, [responseData, error, navigate]);

//   return (
//     <Box className='testContainer'>
//       {showAnimation && (
      
//       <Box
//         position="fixed"
//         top="50%"
//         left="50%"
//         transform="translate(-50%, -50%)"
//         zIndex="1000"
//         bg="rgba(0, 0, 0, 0.5)" // Optional: To dim the background
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         width="100vw"
//         height="100vh"
//       >
//         {animationType === 'loading' && (

//         <Box textAlign="center">
//           <Lottie
//             animationData={loadingAnimation}
//             loop={false}
//             autoplay={true}
//             style={{ width: '150px', height: '150px' }}
//           />
//           <Text mt={4} fontSize="lg" color="white">
//           Please Wait !! Video upload in progress ..
          
//          </Text>
//          </Box>
//         )}
//         {animationType === 'success' && (
//           <Box textAlign="center">
//             <Lottie
//               animationData={successAnimation}
//               loop={false}
//               autoplay={true}
//               // style={{ width: '150px', height: '150px' }}
//             />
//             <Text mt={4} fontSize="lg" color="white">
//              Video has been uploaded successfully
             
//             </Text>
//           </Box>
//         )}
//         {animationType === 'error' && (
//           <Box textAlign="center">
//             <Lottie
//               animationData={errorAnimation}
//               loop={false}
//               autoplay={true}
//               // style={{ width: '150px', height: '150px' }}
//             />
//             <Text mt={4} fontSize="lg" color="white">
//               {error || "oops !! An error occurred, please try again."}
//             </Text>
//           </Box>
//         )}
//       </Box>
    
//     )} : {!showAnimation && 
//       <>
//       <Box p={6} maxW="500px" mx="auto">


//       <FormControl mt={4}>
//         <FormLabel>Video File</FormLabel>
//         <Input type="file" accept="video/*" onChange={handleFileChange} />
//       </FormControl>

//       <Button colorScheme="blue" mt={6} onClick={handleUpload}>
//         Upload Video
//       </Button>
//     </Box>
//     </>}
//     </Box>
//   );
// };

// export default VideoUploadPage;



// Version 3 : Enhancement to version 2

import React, { useEffect, useState } from 'react';
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  useToast,
  Select,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import usePostData from '@/hooks/usePostData';
import successAnimation from '../animations/success.json';
import errorAnimation from '../animations/error.json';
import loadingAnimation from '../animations/loading.json';
import Lottie from 'lottie-react';

export const VideoUploadPage: React.FC = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [course, setCourse] = useState<string>(''); // For capturing the key of the selected course
  const [subject, setSubject] = useState<string>(''); // For capturing the subject field input
  const [animationType, setAnimationType] =
    useState<'success' | 'error' | 'loading' | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const toast = useToast();
  const { authState } = useAuth();
  const navigate = useNavigate();
  const { postData, responseData, error, isLoading } = usePostData('/api/ip/video/upload');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setVideoFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!videoFile || !course || !subject) {
      toast({
        title: 'Error',
        description: 'Please provide all required fields',
        status: 'error',
      });
      return;
    }

    const formData = new FormData();
    formData.append('video', videoFile);
    formData.append('course_id', course);
    formData.append('subject', subject);
    formData.append('uploader_id', authState.userId || '');
    formData.append('institute', authState.institute || '');

    setShowAnimation(true);
    setAnimationType('loading');
    await postData(formData);
  };

  useEffect(() => {
    if (responseData) {
      if (responseData.status === 201) {
        setAnimationType('success');
        setTimeout(() => {
          navigate('/partner/home'); // Navigate to home page after 3 seconds
        }, 3000);
      } else {
        setAnimationType('error');
      }
    } else if (error) {
      setAnimationType('error');
      setTimeout(() => {
        setShowAnimation(false);
        navigate('/video/upload'); // Navigate back to upload page after a few seconds
      }, 3000);
    }
  }, [responseData, error, navigate]);

  // Theme Colors
  const primaryColor = useColorModeValue('purple.500', 'purple.300');
  const secondaryColor = useColorModeValue('teal.400', 'teal.300');

  return (
    <Box className="testContainer" bg={primaryColor} color="white" minH="100vh">
      {showAnimation && (
        <Box
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="1000"
          bg="rgba(0, 0, 0, 0.7)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100vw"
          height="100vh"
        >
          {animationType === 'loading' && (
            <Box textAlign="center">
              <Lottie
                animationData={loadingAnimation}
                loop
                autoplay
                style={{ width: '150px', height: '150px' }}
              />
              <Text mt={4} fontSize="lg" color="white">
                Please Wait! Video upload in progress...
              </Text>
            </Box>
          )}
          {animationType === 'success' && (
            <Box textAlign="center">
              <Lottie animationData={successAnimation} loop={false} autoplay />
              <Text mt={4} fontSize="lg" color="white">
                Video has been uploaded successfully!
              </Text>
            </Box>
          )}
          {animationType === 'error' && (
            <Box textAlign="center">
              <Lottie animationData={errorAnimation} loop={false} autoplay />
              <Text mt={4} fontSize="lg" color="white">
                {error || 'Oops! An error occurred, please try again.'}
              </Text>
            </Box>
          )}
        </Box>
      )}
      {!showAnimation && (
        <Box
          p={6}
          maxW="500px"
          mx="auto"
          bg="white"
          borderRadius="md"
          boxShadow="xl"
          color={primaryColor}
        >
          <FormControl mt={4} isRequired>
            <FormLabel>Course</FormLabel>
            <Select
              placeholder="Select a Course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              bg={secondaryColor}
              color="white"
              borderColor={secondaryColor}
            >
              <option value="1" style={{ color: 'black' }}>
                General
              </option>
              <option value="2" style={{ color: 'black' }}>
                CA Batch April to May
              </option>
              <option value="3" style={{ color: 'black' }}>
                CA Batch June to Dec
              </option>
            </Select>
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              placeholder="Enter Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              bg="yellow.200"
              borderColor="yellow.500"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Video File</FormLabel>
            <Input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              bg="green.200"
              borderColor="green.500"
            />
          </FormControl>

          <Button
            colorScheme="purple"
            mt={6}
            onClick={handleUpload}
            isDisabled={isLoading}
          >
            {isLoading ? 'Uploading...' : 'Upload Video'}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default VideoUploadPage;
