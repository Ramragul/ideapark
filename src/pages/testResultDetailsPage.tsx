// Version 1

// import React from 'react';
// import { Box, Text, Button } from '@chakra-ui/react';
// import { useLocation, useNavigate } from 'react-router-dom';

// export const TestResultDetailsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { result } = location.state || {};

//   if (!result) {
//     return <Text>No result data found.</Text>;
//   }

//   return (
//     <Box maxW="800px" mx="auto" p={4}>
//       <Text fontSize="2xl" fontWeight="bold" mb={4}>
//         {result.testName} Details
//       </Text>
//       <Text mb={2}>Date Taken: {new Date(result.testTakenDate).toLocaleString()}</Text>
//       <Text mb={2}>Total Marks: {result.totalMarks}</Text>
//       <Text mb={2}>Marks Scored: {result.marksScored}</Text>
//       <Button colorScheme="pink" mt={4} onClick={() => navigate(-1)}>
//         Back
//       </Button>
//     </Box>
//   );
// };

// export default TestResultDetailsPage;


// Version 2 : Design enhancment to version 1

// import React from 'react';
// import { Box, Text, Button } from '@chakra-ui/react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


// export const TestResultDetailsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { result } = location.state || {};

//   if (!result) {
//     return <Text>No result details available</Text>;
//   }

//   const chartData = {
//     labels: ['Total Marks', 'Marks Scored'],
//     datasets: [
//       {
//         label: result.testName,
//         data: [result.totalMarks, result.marksScored],
//         backgroundColor: ['#f56565', '#48bb78'],
//       },
//     ],
//   };

//   return (
//     <Box maxW="800px" mx="auto" p={4}>
//       <Text fontSize="2xl" fontWeight="bold" mb={4}>
//         {result.testName} Details
//       </Text>
//       <Bar data={chartData} />
//       <Button mt={4} colorScheme="teal" onClick={() => navigate(-1)}>
//         Back to Test Results
//       </Button>
//     </Box>
//   );
// };

// export default TestResultDetailsPage;


// version 3 : more better ui 

// import React from 'react';
// import { Box, Text, Button, Stack, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export const TestResultDetailsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { result } = location.state || {};

//   if (!result) {
//     return <Text>No result details available</Text>;
//   }

//   // Calculate percentage
//   const percentage = ((result.marksScored / result.totalMarks) * 100).toFixed(2);

//   return (
//     <Box maxW="800px" mx="auto" p={4}>
//       <Text fontSize="2xl" fontWeight="bold" mb={4}>
//         {result.testName} Details
//       </Text>

//       {/* Percentage Display with Circular Progress */}
//       <Stack align="center" mb={6}>
//         <Text fontSize="lg" fontWeight="bold">
//           Score: {percentage}%
//         </Text>
//         <CircularProgress
//           value={percentage}
//           color={percentage >= 50 ? 'green.400' : 'red.400'}
//           size="120px"
//           thickness="8px"
//           capIsRound
//         >
//           <CircularProgressLabel>{percentage}%</CircularProgressLabel>
//         </CircularProgress>
//       </Stack>

//       {/* Bar Chart (optional if you still want to show the bar chart) */}
//       {/* <Bar data={chartData} /> */}

//       {/* Back Button */}
//       <Button mt={4} colorScheme="teal" onClick={() => navigate(-1)}>
//         Back to Test Results
//       </Button>
//     </Box>
//   );
// };

// export default TestResultDetailsPage;


// version 4 : build version fix 




// import { Box, Text, Button, Stack, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export const TestResultDetailsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { result } = location.state || {};

//   if (!result) {
//     return <Text>No result details available</Text>;
//   }

//   // Calculate percentage
//   const percentage = ((result.marksScored / result.totalMarks) * 100).toFixed(2);

//   return (
//     <Box maxW="800px" mx="auto" p={4}>
//       <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
//         {result.testName} Details
//       </Text>

//       {/* Result Card */}
//       <Box 
//         p={6} 
//         borderRadius="md" 
//         boxShadow="lg" 
//         bg="white" 
//         mb={6} 
//         textAlign="center"
//         border="1px solid #e2e8f0"
//       >
//         <Text fontSize="lg" fontWeight="medium" mb={4}>
//           Total Marks: {result.marksScored} / {result.totalMarks}
//         </Text>

//         {/* Percentage Display with Radial Progress */}
//         <Stack align="center" mb={6}>
//           <Text fontSize="3xl" fontWeight="bold" color="teal.500">
//             {percentage}%
//           </Text>
//           <CircularProgress
//             value={parseFloat(percentage)}
//             color={Number(percentage) >= 50 ? 'green.400' : 'red.400'}
//             size="150px"
//             thickness="10px"
//             capIsRound
//             trackColor="gray.100"
//             mb={4}
//           >
//             {/* <CircularProgressLabel>{percentage}%</CircularProgressLabel> */}

//             <CircularProgressLabel style={{ fontSize: '1.5rem' }}>{percentage}%</CircularProgressLabel>

//           </CircularProgress>
//         </Stack>

//         {/* Score Text with Styled Background */}
//         <Box 
//           bg="gray.50" 
//           p={3} 
//           borderRadius="md" 
//           fontWeight="bold"
//           mb={4}
//           //color={percentage >= 50 ? 'green.400' : 'red.400'}
//           color={Number(percentage) >= 50 ? 'green.400' : 'red.400'}
//         >
//           {/* {percentage >= 50 ? 'Great Job!' : 'Better Luck Next Time!'} */}
//           {Number(percentage) >= 50 ? 'Great Job!' : 'Better Luck Next Time!'}

//         </Box>

//         {/* Back Button */}
//         <Button colorScheme="teal" onClick={() => navigate(-1)} width="full">
//           Back to Test Results
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default TestResultDetailsPage;



// Version 5 : Design Enhancement to version 4

import {
  Box,
  Text,
  Button,
  Stack,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Icon,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdCheckCircle, MdError } from "react-icons/md";

export const TestResultDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {};

  if (!result) {
    return <Text>No result details available</Text>;
  }

  // Calculate percentage
  const percentage = ((result.marksScored / result.totalMarks) * 100).toFixed(2);
  const isPass = Number(percentage) >= 50;

  const background = useColorModeValue("#f0f8ff", "#2d3748");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Box
      maxW="800px"
      mx="auto"
      p={6}
      bgGradient="linear(to-br, #ffdee9, #b5fffc)"
      borderRadius="lg"
      boxShadow="xl"
    >
      {/* Page Title */}
      <Text
        fontSize="3xl"
        fontWeight="bold"
        mb={6}
        textAlign="center"
        bgGradient="linear(to-r, teal.500, pink.400)"
        bgClip="text"
      >
        {result.testName} Details
      </Text>

      {/* Result Card */}
      <Box
        p={6}
        borderRadius="lg"
        bg={background}
        boxShadow="2xl"
        textAlign="center"
        border="1px solid teal.300"
      >
        {/* Total Marks */}
        <Text fontSize="lg" fontWeight="medium" mb={4} color={textColor}>
          Total Marks: {result.marksScored} / {result.totalMarks}
        </Text>

        {/* Percentage Display with Radial Progress */}
        <Stack align="center" mb={6} spacing={6}>
          <CircularProgress
            value={parseFloat(percentage)}
            color={isPass ? "green.400" : "red.400"}
            size="150px"
            thickness="12px"
            trackColor="gray.200"
          >
            <CircularProgressLabel
              fontSize="2xl"
              fontWeight="bold"
              color={isPass ? "green.500" : "red.500"}
            >
              {percentage}%
            </CircularProgressLabel>
          </CircularProgress>

          {/* Status Text with Icon */}
          <Flex
            align="center"
            justify="center"
            bg={isPass ? "green.50" : "red.50"}
            p={4}
            borderRadius="md"
            boxShadow="md"
            w="full"
          >
            <Icon
              as={isPass ? MdCheckCircle : MdError}
              color={isPass ? "green.400" : "red.400"}
              w={8}
              h={8}
              mr={2}
            />
            <Text fontSize="xl" fontWeight="bold" color={isPass ? "green.500" : "red.500"}>
              {isPass ? "Great Job! You Passed!" : "Better Luck Next Time!"}
            </Text>
          </Flex>
        </Stack>

        {/* Divider */}
        <Divider my={6} borderColor="teal.300" />

        {/* Back Button */}
        <Button
          colorScheme="pink"
          size="lg"
          onClick={() => navigate(-1)}
          _hover={{ bgGradient: "linear(to-r, pink.400, teal.300)" }}
          w="full"
        >
          Back to Test Results
        </Button>
      </Box>
    </Box>
  );
};

export default TestResultDetailsPage;
