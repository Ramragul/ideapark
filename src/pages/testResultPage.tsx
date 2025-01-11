// import useGetTestResults from '@/hooks/useGetTestResults';
// import React from 'react';

// export const TestResultPage = () => {
// const { data, error, isLoading } = useGetTestResults('api/ip/users/36377/results');

// console.log("Data From the API inside the fronted code" +JSON.stringify(data))


// return (

// )

// }

// export default TestResultPage;


// Version 2 : 

// import React, { useState, useEffect } from 'react';
// import { Box, Select, Table, Thead, Tbody, Tr, Th, Td, Spinner, Text, Button, useToast } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import useGetTestResults from '@/hooks/useGetTestResults';

// export const TestResultPage = () => {
//   const { data, error, isLoading } = useGetTestResults('api/ip/users/36377/results');
//   const [filteredResults, setFilteredResults] = useState([]);
//   const [selectedTest, setSelectedTest] = useState('');
//   const navigate = useNavigate();
//   const toast = useToast();

//   // Handle filter logic
//   useEffect(() => {
//     if (data?.testResults) {
//       const results = selectedTest
//         ? data.testResults.filter((test: any) => test.testName === selectedTest)
//         : data.testResults;
//       setFilteredResults(results);
//     }
//   }, [selectedTest, data]);

//   // Handle error
//   if (error) {
//     toast({
//       title: 'Error loading test results.',
//       description: error.message,
//       status: 'error',
//       duration: 5000,
//       isClosable: true,
//     });
//     return null;
//   }

//   return (
//     <Box maxW="1200px" mx="auto" p={4}>
//       <Text fontSize="2xl" fontWeight="bold" mb={4}>
//         Test Results
//       </Text>

//       {isLoading ? (
//         <Box display="flex" justifyContent="center" alignItems="center" h="200px">
//           <Spinner size="lg" />
//         </Box>
//       ) : (
//         <>
//           {/* Test Name Filter */}
//           <Select
//             placeholder="Select a Test"
//             mb={4}
//             onChange={(e) => setSelectedTest(e.target.value)}
//           >
//             {Array.from(new Set(data?.testResults?.map((test: any) => test.testName))).map(
//               (testName, index) => (
//                 <option key={index} value={testName}>
//                   {testName}
//                 </option>
//               )
//             )}
//           </Select>

//           {/* Results Table */}
//           {filteredResults.length > 0 ? (
//             <Table variant="striped" colorScheme="pink" size="md" mb={4}>
//               <Thead>
//                 <Tr>
//                   <Th>Test Name</Th>
//                   <Th>Date Taken</Th>
//                   <Th>Total Marks</Th>
//                   <Th>Marks Scored</Th>
//                   <Th>Action</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {filteredResults.map((result: any, index: number) => (
//                   <Tr key={index}>
//                     <Td>{result.testName}</Td>
//                     <Td>{new Date(result.testTakenDate).toLocaleString()}</Td>
//                     <Td>{result.totalMarks}</Td>
//                     <Td>{result.marksScored}</Td>
//                     <Td>
//                       <Button
//                         colorScheme="teal"
//                         size="sm"
//                         onClick={() =>
//                           navigate('/result/details', { state: { result } })
//                         }
//                       >
//                         View Details
//                       </Button>
//                     </Td>
//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>
//           ) : (
//             <Text>No results found for the selected test.</Text>
//           )}
//         </>
//       )}
//     </Box>
//   );
// };

// export default TestResultPage;



// Version 3 : 2 is working fine, this is the enhanced design verision 

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Select,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Spinner,
//   Text,
//   Button,
//   useToast,
// } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import useGetTestResults from '@/hooks/useGetTestResults';

// export const TestResultPage = () => {
//   const { data, error, isLoading } = useGetTestResults('api/ip/users/9441/results');
//   const [filteredResults, setFilteredResults] = useState([]);
//   const [selectedTest, setSelectedTest] = useState('');
//   const navigate = useNavigate();
//   const toast = useToast();

//   useEffect(() => {
//     if (data?.testResults) {
//       const results = selectedTest
//         ? data.testResults.filter((test: any) => test.testName === selectedTest)
//         : data.testResults;
//       setFilteredResults(results);
//     }
//   }, [selectedTest, data]);

//   if (error) {
//     toast({
//       title: 'Error loading test results.',
//       description: error.message,
//       status: 'error',
//       duration: 5000,
//       isClosable: true,
//     });
//     return null;
//   }

//   return (
//     <Box maxW="100%" mx="auto" p={4}>
//       <Text fontSize="2xl" fontWeight="bold" mb={4}>
//         Test Results
//       </Text>

//       {isLoading ? (
//         <Box display="flex" justifyContent="center" alignItems="center" h="200px">
//           <Spinner size="lg" />
//         </Box>
//       ) : (
//         <>
//           <Select
//             placeholder="Select a Test"
//             mb={4}
//             onChange={(e) => setSelectedTest(e.target.value)}
//           >
//             {Array.from(new Set(data?.testResults?.map((test: any) => test.testName))).map(
//               (testName, index) => (
//                 <option key={index} value={testName}>
//                   {testName}
//                 </option>
//               )
//             )}
//           </Select>

//           <Box overflowX="auto">
//             <Table variant="striped" colorScheme="pink" size="sm">
//               <Thead>
//                 <Tr>
//                   <Th>Test Name</Th>
//                   <Th>Date Taken</Th>
//                   <Th>Total Marks</Th>
//                   <Th>Marks Scored</Th>
//                   <Th>Action</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {filteredResults.map((result: any, index: number) => (
//                   <Tr key={index}>
//                     <Td>{result.testName}</Td>
//                     <Td>{new Date(result.testTakenDate).toLocaleString()}</Td>
//                     <Td>{result.totalMarks}</Td>
//                     <Td>{result.marksScored}</Td>
//                     <Td>
//                       <Button
//                         colorScheme="teal"
//                         size="sm"
//                         onClick={() =>
//                           navigate('/result/details', { state: { result } })
//                         }
//                       >
//                         View Details
//                       </Button>
//                     </Td>
//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// };

// export default TestResultPage;


// Version 4 : Design responsivenss fix to version 3

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Select,
//   Spinner,
//   Text,
//   Button,
//   SimpleGrid,
//   Card,
//   CardBody,
//   Heading,
//   Stack,
//   useToast,
// } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import useGetTestResults from '@/hooks/useGetTestResults';

// import { useAuth } from '@/contexts/AuthContext';

// export const TestResultPage = () => {

//   const {authState} = useAuth()

//   const userId = authState.userId;

//   const { data, error, isLoading } = useGetTestResults(`api/ip/users/${authState.userId}/results`);
//   const [filteredResults, setFilteredResults] = useState([]);
//   const [selectedTest, setSelectedTest] = useState('');
//   const navigate = useNavigate();
//   const toast = useToast();


  

//   useEffect(() => {
//     if (data?.testResults) {
//       const results = selectedTest
//         ? data.testResults.filter((test: any) => test.testName === selectedTest)
//         : data.testResults;
//       setFilteredResults(results);
//     }
//   }, [selectedTest, data]);

//   if (error) {
//     toast({
//       title: 'Error loading test results.',
//       description: error.message,
//       status: 'error',
//       duration: 5000,
//       isClosable: true,
//     });
//     return null;
//   }

//   return (
//     <Box maxW="100%" mx="auto" p={4}>
//       <Text fontSize="2xl" fontWeight="bold" mb={4}>
//         Test Results
//       </Text>

//       {isLoading ? (
//         <Box display="flex" justifyContent="center" alignItems="center" h="200px">
//           <Spinner size="lg" />
//         </Box>
//       ) : (
//         <>
//           <Select
//             placeholder="Select a Test"
//             mb={4}
//             onChange={(e) => setSelectedTest(e.target.value)}
//           >
//             {Array.from(new Set(data?.testResults?.map((test: any) => test.testName))).map(
//               (testName, index) => (
//                 <option key={index} value={testName}>
//                   {testName}
//                 </option>
//               )
//             )}
//           </Select>

//           {/* Display Results as Cards */}
//           {filteredResults.length > 0 ? (
//             <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
//               {filteredResults.map((result: any, index: number) => (
//                 <Card key={index} borderWidth="1px" borderRadius="md" boxShadow="sm">
//                   <CardBody>
//                     <Stack spacing={3}>
//                       <Heading size="md">{result.testName}</Heading>
//                       <Text>Date Taken: {new Date(result.testTakenDate).toLocaleString()}</Text>
//                       <Text>Total Marks: {result.totalMarks}</Text>
//                       <Text>Marks Scored: {result.marksScored}</Text>
//                       <Button
//                         colorScheme="teal"
//                         size="sm"
//                         onClick={() =>
//                           navigate('/result/details', { state: { result } })
//                         }
//                       >
//                         View Details
//                       </Button>
//                     </Stack>
//                   </CardBody>
//                 </Card>
//               ))}
//             </SimpleGrid>
//           ) : (
//             <Text>No results found for the selected test.</Text>
//           )}
//         </>
//       )}
//     </Box>
//   );
// };

// export default TestResultPage;



// version 4 : clone of 3 for the build issue fix 





import  { useState, useEffect } from 'react';
import {
  Box,
  Select,
  Spinner,
  Text,
  Button,
  SimpleGrid,
  Card,
  CardBody,
  Heading,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
//import useGetTestResults from '@/hooks/useGetTestResults';

import { useAuth } from '@/contexts/AuthContext';
import axios from 'axios';

interface TestResult {
  testId: number;
  testName: string;
  testTakenDate: string; // or Date if you parse it
  totalMarks: number;
  marksScored: number;
}

// Define the structure of the response data
interface ApiResponse {
  testResults: TestResult[];
} 

export const TestResultPage = () => {

  const {authState} = useAuth()

  const userId = authState.userId;
  console.log(userId);

  //const { data, error, isLoading } = useGetTestResults(`api/ip/users/${authState.userId}/results`);
  const [filteredResults, setFilteredResults] = useState<TestResult[] | null>(null);
  const [selectedTest, setSelectedTest] = useState('');
  const [data, setData] = useState<ApiResponse | null>(null);
  const navigate = useNavigate();
  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // try {
  //   const response = await axios.get(`https://admee.in:3003/api/ip/users/${authState.userId}/results`);
  //   // const { data  , error: apiError, isLoading } = useGetData(
  //   //   authState.userId,
  //   //   `/api/ip/test/${testId}/stats`
  //   // ) ;
  //   setData(response.data.data);
  //   const data = response.data;
    
  // } catch (err) {
  //   setError("Failed to fetch test stats. Please try again later.");
  // } finally {
  //   setLoading(false);
  // }

  
  useEffect(() => {
    setLoading(true);
    const fetchTestResults = async () => {
      try {
        const response = await axios.get(
          `https://admee.in:3003/api/ip/users/${authState.userId}/results`
        );
        setData(response.data.data); // Assuming the API response has `data.data`
      } catch (err) {
        setError("Failed to fetch test stats. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestResults();
  }, [authState.userId]); 
  

  useEffect(() => {
    if (data?.testResults) {
      const results = selectedTest
        ? data.testResults.filter((test: any) => test.testName === selectedTest)
        : data.testResults;
      setFilteredResults(results);
    }
  }, [selectedTest, data]);

  if (error) {
    toast({
      title: 'Error loading test results.',
      description: "Error Occured",
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
    return null;
  }

  return (
    <Box maxW="100%" mx="auto" p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Test Results
      </Text>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" h="200px">
          <Spinner size="lg" />
        </Box>
      ) : (
        <>
          <Select
            placeholder="Select a Test"
            mb={4}
            onChange={(e) => setSelectedTest(e.target.value)}
          >
            {Array.from(new Set(data?.testResults?.map((test: any) => test.testName))).map(
              (testName, index) => (
                <option key={index} value={testName}>
                  {testName}
                </option>
              )
            )}
          </Select>

          {/* Display Results as Cards */}
          {/* {filteredResults?.length > 0 ? ( */}
          {filteredResults && filteredResults.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {filteredResults?.map((result: any, index: number) => (
                <Card key={index} borderWidth="1px" borderRadius="md" boxShadow="sm">
                  <CardBody>
                    <Stack spacing={3}>
                      <Heading size="md">{result.testName}</Heading>
                      <Text>Date Taken: {new Date(result.testTakenDate).toLocaleString()}</Text>
                      <Text>Total Marks: {result.totalMarks}</Text>
                      <Text>Marks Scored: {result.marksScored}</Text>
                      <Button
                        colorScheme="teal"
                        size="sm"
                        onClick={() =>
                          navigate('/result/details', { state: { result } })
                        }
                      >
                        View Details
                      </Button>
                    </Stack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          ) : (
            <Text>No results found for the selected test.</Text>
            )}
        </>
      )}
    </Box>
  );
};

export default TestResultPage;
