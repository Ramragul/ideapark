import React, { useState, useEffect } from 'react';
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
  Divider,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import usePostData from '@/hooks/usePostData';
import Lottie from 'lottie-react';
import successAnimation from '../animations/success.json';
import errorAnimation from '../animations/error.json';
import loadingAnimation from '../animations/loading.json';

export const DocumentUploadPage: React.FC = () => {
  const [documentFile, setDocumentFile] = useState<File | null>(null);
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [course, setCourse] = useState<string>(''); // For capturing the key of the selected course
  const [subject, setSubject] = useState<string>(''); // For capturing the subject field input
  const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const toast = useToast();
  const { authState } = useAuth();
  const navigate = useNavigate();
  const { postData, responseData, error, isLoading } = usePostData('/api/ip/document/upload');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setDocumentFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!documentFile || !category || !description) {
      toast({
        title: 'Missing Fields',
        description: 'All fields are required for document upload.',
        status: 'error',
      });
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('document', documentFile);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('uploader_id', authState.userId || '');
    formData.append('institute', authState.institute || '');
    formData.append('course_id', course);
    formData.append('subject', subject);
    //formData.append('category', category);

    setShowAnimation(true);
    setAnimationType('loading');
    await postData(formData);
  };

  useEffect(() => {
    if (responseData) {
      if (responseData.status === 201) {
        setAnimationType('success');
        setTimeout(() => navigate('/documents'), 3000);
      } else {
        setAnimationType('error');
      }
    } else if (error) {
      setAnimationType('error');
      setTimeout(() => setShowAnimation(false), 3000);
    }
  }, [responseData, error, navigate]);

  const primaryColor = useColorModeValue('blue.500', 'blue.300');
  const secondaryColor = useColorModeValue('orange.400', 'orange.300');

  return (
    <Box bgGradient="linear(to-br, purple.400, pink.400)" minH="100vh" p={6}>
      {showAnimation && (
        <Box
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          bg="rgba(0, 0, 0, 0.7)"
          p={8}
          borderRadius="lg"
          textAlign="center"
        >
          {animationType === 'loading' && (
            <Lottie animationData={loadingAnimation} loop style={{ width: '150px' }} />
          )}
          {animationType === 'success' && (
            <Lottie animationData={successAnimation} loop={false} style={{ width: '150px' }} />
          )}
          {animationType === 'error' && (
            <Lottie animationData={errorAnimation} loop={false} style={{ width: '150px' }} />
          )}
        </Box>
      )}
      {!showAnimation && (
        <Box bg="white" p={6} maxW="600px" mx="auto" borderRadius="md" shadow="lg">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" color={primaryColor}>
            Upload Your Document
          </Text>
          <Divider my={4} />


          <FormControl isRequired mt={4}>
            <FormLabel>Document Name</FormLabel>
            <Input
              type="text"
              placeholder="Document Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              borderColor="yellow.500"
            />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Document Category</FormLabel>
            <Select
              placeholder="Select Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              borderColor={secondaryColor}
            >
              <option value="Education">Education</option>
              <option value="Business">Business</option>
              <option value="Personal">Personal</option>
            </Select>
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              placeholder="Brief Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              borderColor="yellow.500"
            />
          </FormControl>
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
          <FormControl isRequired mt={4}>
            <FormLabel>Upload File</FormLabel>
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              borderColor="green.500"
            />
          </FormControl>
          <Button
            mt={6}
            w="100%"
            colorScheme="purple"
            onClick={handleUpload}
            isLoading={isLoading}
          >
            Upload Document
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default DocumentUploadPage;
