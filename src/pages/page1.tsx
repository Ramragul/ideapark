// Version 1 - enhancement code of version 

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import usePostData from '../hooks/usePostData';

// export const Page1 = () => {
//   const navigate = useNavigate();
//   const [file, setFile] = useState<File | null>(null);
//   const [testName, setTestName] = useState('');
//   const [testDescription, setTestDescription] = useState('');
//   const [testCategory, setTestCategory] = useState('');
//   const [testTimings, setTestTimings] = useState('');
//   const [testValidity, setTestValidity] = useState('');
//   const [testStudents, setTestStudents] = useState('');

//   // Custom hook for posting data
//   const { postData, responseData, error, isLoading } = usePostData('/test/upload');

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       setFile(event.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file || !testName || !testCategory || !testTimings || !testValidity || !testStudents) {
//       alert("Please fill out all fields and upload a file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('testName', testName);
//     formData.append('testDescription', testDescription);
//     formData.append('testCategory', testCategory);
//     formData.append('testTimings', testTimings);
//     formData.append('testValidity', testValidity);
//     formData.append('testStudents', testStudents);
  

//     for (let [key, value] of formData.entries()) {
//       console.log(key, value);
//     }
    

//     await postData(formData); // Use the custom hook's `postData` function
//   };

//   useEffect(() => {
//     if (responseData) {
//       if (responseData.status === 201) {
//         alert(`Test created successfully with Order ID: ${responseData.orderId}`);
//         setTimeout(() => {
//           navigate('/home');
//         }, 3000);
//       } else {
//         alert('An error occurred while creating the test. Please try again.');
//         setTimeout(() => {
//           navigate('/page1');
//         }, 3000);
//       }
//     }
//   }, [responseData, navigate]);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
//       <div style={{ width: '100%', maxWidth: '400px', background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
//         <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', color: '#333' }}>Create Test</h1>
//         <form onSubmit={(e) => e.preventDefault()}>
//           <div style={{ marginBottom: '15px' }}>
//             <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>Test Name</label>
//             <input
//               type="text"
//               value={testName}
//               onChange={(e) => setTestName(e.target.value)}
//               placeholder="Enter test name"
//               style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px' }}>
//             <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>Test Name</label>
//             <input
//               type="textarea"
//               value={testDescription}
//               onChange={(e) => setTestDescription(e.target.value)}
//               placeholder="Enter test description"
//               style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px' }}>
//             <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>Test Category</label>
//             <select
//               value={testCategory}
//               onChange={(e) => setTestCategory(e.target.value)}
//               style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
//             >
//               <option value="">Select Category</option>
//               <option value="Category 1">Category 1</option>
//               <option value="Category 2">Category 2</option>
//             </select>
//           </div>
//           <div style={{ marginBottom: '15px' }}>
//             <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>Test Timing</label>
//             <select
//               value={testTimings}
//               onChange={(e) => setTestTimings(e.target.value)}
//               style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
//             >
//               <option value="">Select Timings</option>
//               <option value="30">30 minutes</option>
//               <option value="60">60 minutes</option>
//               <option value="90">90 minutes</option>
//             </select>
//           </div>
//           <div style={{ marginBottom: '15px' }}>
//             <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>Test Validity</label>
//             <select
//               value={testValidity}
//               onChange={(e) => setTestValidity(e.target.value)}
//               style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
//             >
//               <option value="">Select Validity</option>
//               <option value="all-time">All time valid</option>
//               <option value="1-month">Valid for 1 month</option>
//             </select>
//           </div>
//           <div style={{ marginBottom: '15px' }}>
//             <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>Test Students</label>
//             <input
//               type="text"
//               value={testStudents}
//               onChange={(e) => setTestStudents(e.target.value)}
//               placeholder="Enter target students"
//               style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px' }}>
//             <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>Upload Questions</label>
//             <input
//               type="file"
//               accept=".xlsx, .xls"
//               onChange={handleFileChange}
//               style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
//             />
//           </div>
//           <button
//             type="button"
//             onClick={handleUpload}
//             disabled={isLoading}
//             style={{
//               width: '100%',
//               padding: '10px',
//               background: isLoading ? '#ddd' : '#e91e63',
//               color: 'white',
//               borderRadius: '4px',
//               border: 'none',
//               cursor: isLoading ? 'not-allowed' : 'pointer',
//             }}
//           >
//             {isLoading ? 'Creating...' : 'Create Test'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Page1;




// Version 2 - Enhanced design to v1

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Select, Textarea, useToast } from '@chakra-ui/react';
import usePostData from '../hooks/usePostData';

export const Page1 = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [testName, setTestName] = useState('');
  const [testDescription, setTestDescription] = useState('');
  const [testCategory, setTestCategory] = useState('');
  const [testTimings, setTestTimings] = useState('');
  const [testValidity, setTestValidity] = useState('');
  const [testStudents, setTestStudents] = useState('');

  // Custom hook for posting data
  const { postData, responseData, error, isLoading } = usePostData('/test/upload');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file || !testName || !testCategory || !testTimings || !testValidity || !testStudents) {
      toast({
        title: 'Error',
        description: "Please fill out all fields and upload a file.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('testName', testName);
    formData.append('testDescription', testDescription);
    formData.append('testCategory', testCategory);
    formData.append('testTimings', testTimings);
    formData.append('testValidity', testValidity);
    formData.append('testStudents', testStudents);

    await postData(formData); // Use the custom hook's `postData` function
  };

  useEffect(() => {
    if (responseData) {
      if (responseData.status === 201) {
        toast({
          title: `Test created successfully`,
          description: `Test created with Order ID: ${responseData.orderId}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        setTimeout(() => {
          navigate('/home');
        }, 3000);
      } else {
        toast({
          title: 'An error occurred',
          description: 'Please try again.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        setTimeout(() => {
          navigate('/page1');
        }, 3000);
      }
    }
  }, [responseData, navigate]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="gray.50"
    >
      <Box
        w="full"
        maxW="md"
        bg="white"
        p={6}
        borderRadius="lg"
        boxShadow="xl"
        border="1px solid"
        borderColor="gray.200"
      >
        <Box textAlign="center" mb={6}>
          <Box as="h1" fontSize="2xl" fontWeight="bold" color="purple.600">
            Create Test
          </Box>
        </Box>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormControl id="testName" mb={4}>
            <FormLabel htmlFor="testName" fontSize="sm" fontWeight="bold">Test Name</FormLabel>
            <Input
              type="text"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
              placeholder="Enter test name"
              isRequired
              bg="gray.100"
              borderColor="gray.300"
              _hover={{ borderColor: 'purple.400' }}
              _focus={{ borderColor: 'purple.500' }}
            />
          </FormControl>

          <FormControl id="testDescription" mb={4}>
            <FormLabel htmlFor="testDescription" fontSize="sm" fontWeight="bold">Test Description</FormLabel>
            <Textarea
              value={testDescription}
              onChange={(e) => setTestDescription(e.target.value)}
              placeholder="Enter test description"
              bg="gray.100"
              borderColor="gray.300"
              _hover={{ borderColor: 'purple.400' }}
              _focus={{ borderColor: 'purple.500' }}
            />
          </FormControl>

          <FormControl id="testCategory" mb={4}>
            <FormLabel htmlFor="testCategory" fontSize="sm" fontWeight="bold">Test Category</FormLabel>
            <Select
              value={testCategory}
              onChange={(e) => setTestCategory(e.target.value)}
              placeholder="Select Category"
              bg="gray.100"
              borderColor="gray.300"
              _hover={{ borderColor: 'purple.400' }}
              _focus={{ borderColor: 'purple.500' }}
              isRequired
            >
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
            </Select>
          </FormControl>

          <FormControl id="testTimings" mb={4}>
            <FormLabel htmlFor="testTimings" fontSize="sm" fontWeight="bold">Test Timing</FormLabel>
            <Select
              value={testTimings}
              onChange={(e) => setTestTimings(e.target.value)}
              placeholder="Select Timings"
              bg="gray.100"
              borderColor="gray.300"
              _hover={{ borderColor: 'purple.400' }}
              _focus={{ borderColor: 'purple.500' }}
              isRequired
            >
              <option value="30">30 minutes</option>
              <option value="60">60 minutes</option>
              <option value="90">90 minutes</option>
            </Select>
          </FormControl>

          <FormControl id="testValidity" mb={4}>
            <FormLabel htmlFor="testValidity" fontSize="sm" fontWeight="bold">Test Validity</FormLabel>
            <Select
              value={testValidity}
              onChange={(e) => setTestValidity(e.target.value)}
              placeholder="Select Validity"
              bg="gray.100"
              borderColor="gray.300"
              _hover={{ borderColor: 'purple.400' }}
              _focus={{ borderColor: 'purple.500' }}
              isRequired
            >
              <option value="all-time">All time valid</option>
              <option value="1-month">Valid for 1 month</option>
            </Select>
          </FormControl>

          <FormControl id="testStudents" mb={4}>
            <FormLabel htmlFor="testStudents" fontSize="sm" fontWeight="bold">Test Students</FormLabel>
            <Input
              type="text"
              value={testStudents}
              onChange={(e) => setTestStudents(e.target.value)}
              placeholder="Enter target students"
              bg="gray.100"
              borderColor="gray.300"
              _hover={{ borderColor: 'purple.400' }}
              _focus={{ borderColor: 'purple.500' }}
              isRequired
            />
          </FormControl>

          <FormControl id="fileUpload" mb={6}>
            <FormLabel htmlFor="fileUpload" fontSize="sm" fontWeight="bold">Upload Questions</FormLabel>
            <Input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileChange}
              bg="gray.100"
              borderColor="gray.300"
              _hover={{ borderColor: 'purple.400' }}
              _focus={{ borderColor: 'purple.500' }}
            />
          </FormControl>

          <Button
            colorScheme="purple"
            width="full"
            onClick={handleUpload}
            isLoading={isLoading}
            loadingText="Creating..."
            size="lg"
            isFullWidth
            borderRadius="md"
            fontWeight="bold"
            _hover={{
              bg: 'purple.600',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            }}
            _active={{
              bg: 'purple.700',
            }}
          >
            Create Test
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Page1;


