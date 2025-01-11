// Version 1 : Working version

// import React, { useState, useMemo } from 'react';
// import { useAuth } from '@/contexts/AuthContext';
// import useGetData from '@/hooks/useGetData';
// import useGetTestResults from '@/hooks/useGetTestResults';
// import {
//   Box,
//   Button,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Text,
//   Spinner,
//   VStack,
//   Heading,
//   Input,
//   Flex,
//   useBreakpointValue,
//   Card,
//   CardBody,
//   Stack,
//   HStack,
// } from '@chakra-ui/react';
// import { useNavigate, useLocation } from 'react-router-dom';
// export const StudentStatsDetailsPage: React.FC = () => {
//  const location = useLocation();
// const { mobile } = location.state || {};

// console.log("Mobile Number of the user from Stats Details Page" +mobile);

//     const { data, error, isLoading } = useGetTestResults(`/api/ip/users/${mobile}/results`);
//     const isMobileView = useBreakpointValue({ base: true, md: false });
//     console.log("Actual format data received from the api "+JSON.stringify(data));
   
  
//     if (isLoading) return <Spinner size="xl" color="pink.500" />;
//     if (error) return <Text color="red.500">Error: {error}</Text>;
  
//     return (
//       <Box p={4}>
//         <Heading mb={6} textAlign="center">
//           Test Results
//         </Heading>
//         {isMobileView ? (
//           <VStack spacing={4} align="stretch"> 
//             {data?.testResults?.map((result: any) => (
//               <Card key={result.testName} borderWidth="1px" borderRadius="lg" overflow="hidden">
//                 <CardBody>
//                   <Stack spacing={3}>
//                     <Text><strong>Test Name:</strong> {result.testName}</Text>
//                     <Text><strong>Percentage:</strong> {result.percentage}%</Text>
//                     <Text><strong>Marks Scored:</strong> {result.marksScored}/{result.totalMarks}</Text>
//                     <Text><strong>Date:</strong> {new Date(result.testTakenTime).toLocaleDateString()}</Text>
//                   </Stack>
//                 </CardBody>
//               </Card>
//             ))}
//           </VStack>
//         ) : (
//           <Table variant="striped" colorScheme="pink">
//             <Thead>
//               <Tr>
//                 <Th>Test Name</Th>
//                 <Th>Percentage</Th>
//                 <Th>Marks Scored</Th>
//                 <Th>Total Marks</Th>
//                 <Th>Date</Th>
//               </Tr>
//             </Thead>
//             <Tbody>
//               {data?.testResults?.map((result: any) => (
//                 <Tr key={result.testName}>
//                   <Td>{result.testName}</Td>
//                   <Td>{result.percentage}%</Td>
//                   <Td>{result.marksScored}</Td>
//                   <Td>{result.totalMarks}</Td>
//                   <Td>{new Date(result.testTakenTime).toLocaleDateString()}</Td>
//                 </Tr>
//               ))}
//             </Tbody>
//           </Table>
//         )}
//       </Box>
//     );
//   };

//   export default StudentStatsDetailsPage;
  


// Version 2 : 1 is woking version, this is enhancement to 1 in terms of design 

// import React from 'react';
// import {
//   Box,
//   Button,
//   VStack,
//   Heading,
//   Card,
//   CardBody,
//   Stack,
//   Text,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Spinner,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Flex,
// } from '@chakra-ui/react';
// import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
// import { useBreakpointValue } from '@chakra-ui/react';
// import { useLocation,useNavigate } from 'react-router-dom';
// import useGetTestResults from '@/hooks/useGetTestResults';


// // const calculatePercentage = (marksScored, totalMarks) => {
// //   return ((marksScored / totalMarks) * 100).toFixed(2);
// // };

// // const calculateAggregatePercentage = (results) => {
// //   if (!results.length) return 0;
// //   const totalPercentage = results.reduce(
// //     (acc, result) => acc + parseFloat(calculatePercentage(result.marksScored, result.totalMarks)),
// //     0
// //   );
// //   return (totalPercentage / results.length).toFixed(2);
// // };



// const calculatePercentage = (marksScored: number, totalMarks: number) => {
//     if (totalMarks === 0) return 0; // Prevent division by zero
//     return ((marksScored / totalMarks) * 100).toFixed(2); // Return formatted percentage
//   };
  
//   const calculateAggregatePercentage = (results: any[]) => {
//     if (!results || results.length === 0) return 0; // Handle empty results
//     const totalScored = results.reduce((acc, result) => acc + result.marksScored, 0);
//     const totalMarks = results.reduce((acc, result) => acc + result.totalMarks, 0);
//     return totalMarks === 0 ? 0 : ((totalScored / totalMarks) * 100).toFixed(2); // Prevent NaN
//   };

// export const StudentStatsDetailsPage: React.FC = () => {

//   const navigate = useNavigate();
//   const location = useLocation();
//   const { mobile } = location.state || {};
//   const { data, error, isLoading } = useGetTestResults(`/api/ip/users/${mobile}/results`);
//   const isMobileView = useBreakpointValue({ base: true, md: false });

//   if (isLoading) return <Spinner size="xl" color="pink.500" />;
//   if (error) return <Text color="red.500">Error: {error}</Text>;

//   const aggregatePercentage = calculateAggregatePercentage(data?.testResults || []);

//   return (
//     <Box p={4}>
//       <Heading mb={6} textAlign="center">
//         Test Details
//       </Heading>
//       <Tabs variant="soft-rounded" colorScheme="pink">
//         <TabList justifyContent="center">
//           <Tab>Summary</Tab>
//           <Tab>Analytics</Tab>
//         </TabList>
//         <TabPanels>
//           <TabPanel>
//             {isMobileView ? (
//               <VStack spacing={4} align="stretch">
//                 {data?.testResults?.map((result, index) => (
//                   <Card key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
//                     <CardBody>
//                       <Stack spacing={3}>
//                         <Text><strong>S.No:</strong> {index + 1}</Text>
//                         <Text><strong>Test Name:</strong> {result.testName}</Text>
//                         <Text><strong>Percentage:</strong> {calculatePercentage(result.marksScored, result.totalMarks)}%</Text>
//                         <Text><strong>Marks Scored:</strong> {result.marksScored}/{result.totalMarks}</Text>
//                         <Text><strong>Date:</strong> {new Date(result.testTakenDate).toLocaleDateString()}</Text>
//                       </Stack>
//                     </CardBody>
//                   </Card>
//                 ))}
//               </VStack>
//             ) : (
//               <Table variant="striped" colorScheme="pink">
//                 <Thead>
//                   <Tr>
//                     <Th>S.No</Th>
//                     <Th>Test Name</Th>
//                     <Th>Percentage</Th>
//                     <Th>Marks Scored</Th>
//                     <Th>Total Marks</Th>
//                     <Th>Date</Th>
//                   </Tr>
//                 </Thead>
//                 <Tbody>
//                   {data?.testResults?.map((result, index) => (
//                     <Tr key={index}>
//                       <Td>{index + 1}</Td>
//                       <Td>{result.testName}</Td>
//                       <Td>{calculatePercentage(result.marksScored, result.totalMarks)}%</Td>
//                       <Td>{result.marksScored}</Td>
//                       <Td>{result.totalMarks}</Td>
//                       <Td>{new Date(result.testTakenDate).toLocaleDateString()}</Td>
//                     </Tr>
//                   ))}
//                 </Tbody>
//               </Table>
//             )}
//           </TabPanel>
//           <TabPanel>
//             <Flex justify="center" align="center" h="100%">
//               <CircularProgress value={parseFloat(aggregatePercentage)} size="120px" color="pink.400">
//                 <CircularProgressLabel style={{ fontSize: '1.5rem' }}>{aggregatePercentage}%</CircularProgressLabel>
//               </CircularProgress>
//             </Flex>
//           </TabPanel>
//         </TabPanels>
//       </Tabs>
//       <Button colorScheme="teal" onClick={() => navigate(-1)} width="full">
//           Back to Student Stats Page
//         </Button>
//     </Box>
//   );
// };

// export default StudentStatsDetailsPage;



// Version 3 : 2 is the working version, this has typescript fix for Build 




import React from 'react';
import {
  Box,
  Button,
  VStack,
  Heading,
  Card,
  CardBody,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import { useLocation,useNavigate } from 'react-router-dom';
import useGetTestResults, { TestResult } from '@/hooks/useGetTestResults';


interface Data {
  testResults: TestResult[]; // Matches your API response structure
}



// const calculatePercentage = (marksScored, totalMarks) => {
//   return ((marksScored / totalMarks) * 100).toFixed(2);
// };

// const calculateAggregatePercentage = (results) => {
//   if (!results.length) return 0;
//   const totalPercentage = results.reduce(
//     (acc, result) => acc + parseFloat(calculatePercentage(result.marksScored, result.totalMarks)),
//     0
//   );
//   return (totalPercentage / results.length).toFixed(2);
// };



const calculatePercentage = (marksScored: number, totalMarks: number) => {
    if (totalMarks === 0) return 0; // Prevent division by zero
    return ((marksScored / totalMarks) * 100).toFixed(2); // Return formatted percentage
  };
  
  const calculateAggregatePercentage = (results: any[]) => {
    if (!results || results.length === 0) return 0; // Handle empty results
    const totalScored = results.reduce((acc, result) => acc + result.marksScored, 0);
    const totalMarks = results.reduce((acc, result) => acc + result.totalMarks, 0);
    return totalMarks === 0 ? 0 : ((totalScored / totalMarks) * 100).toFixed(2); // Prevent NaN
  };

export const StudentStatsDetailsPage: React.FC = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { mobile } = location.state || {};
 

  const { data, error, isLoading } = useGetTestResults(`/api/ip/users/${mobile}/results`);

  const typedData = data as unknown as Data | undefined;

  const isMobileView = useBreakpointValue({ base: true, md: false });

  if (isLoading) return <Spinner size="xl" color="pink.500" />;
  if (error) return <Text color="red.500">Error: {error}</Text>;

  const aggregatePercentage = calculateAggregatePercentage(typedData?.testResults || []);

  return (
    <Box p={4}>
      <Heading mb={6} textAlign="center">
        Test Details
      </Heading>
      <Tabs variant="soft-rounded" colorScheme="pink">
        <TabList justifyContent="center">
          <Tab>Summary</Tab>
          <Tab>Analytics</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {isMobileView ? (
              <VStack spacing={4} align="stretch">
                {typedData?.testResults?.map((result, index) => (
                  <Card key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <CardBody>
                      <Stack spacing={3}>
                        <Text><strong>S.No:</strong> {index + 1}</Text>
                        <Text><strong>Test Name:</strong> {result.testName}</Text>
                        <Text><strong>Percentage:</strong> {calculatePercentage(result.marksScored, result.totalMarks)}%</Text>
                        <Text><strong>Marks Scored:</strong> {result.marksScored}/{result.totalMarks}</Text>
                        <Text><strong>Date:</strong> {new Date(result.testTakenDate).toLocaleDateString()}</Text>
                      </Stack>
                    </CardBody>
                  </Card>
                ))}
              </VStack>
            ) : (
              <Table variant="striped" colorScheme="pink">
                <Thead>
                  <Tr>
                    <Th>S.No</Th>
                    <Th>Test Name</Th>
                    <Th>Percentage</Th>
                    <Th>Marks Scored</Th>
                    <Th>Total Marks</Th>
                    <Th>Date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {typedData?.testResults?.map((result, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{result.testName}</Td>
                      <Td>{calculatePercentage(result.marksScored, result.totalMarks)}%</Td>
                      <Td>{result.marksScored}</Td>
                      <Td>{result.totalMarks}</Td>
                      <Td>{new Date(result.testTakenDate).toLocaleDateString()}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
          </TabPanel>
          <TabPanel>
            <Flex justify="center" align="center" h="100%">
              {/* <CircularProgress value={parseFloat(aggregatePercentage)} size="120px" color="pink.400">
                <CircularProgressLabel style={{ fontSize: '1.5rem' }}>{aggregatePercentage}%</CircularProgressLabel>
              </CircularProgress> */}

              <CircularProgress
                value={typeof aggregatePercentage === "string" ? parseFloat(aggregatePercentage) : aggregatePercentage}
                size="120px"
                color="pink.400">
                  <CircularProgressLabel style={{ fontSize: '1.5rem' }}>{aggregatePercentage}%</CircularProgressLabel>
                  </CircularProgress>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Button colorScheme="teal" onClick={() => navigate(-1)} width="full">
          Back to Student Stats Page
        </Button>
    </Box>
  );
};

export default StudentStatsDetailsPage;
