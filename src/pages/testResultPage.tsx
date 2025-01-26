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





// import  { useState, useEffect } from 'react';
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
// //import useGetTestResults from '@/hooks/useGetTestResults';

// import { useAuth } from '@/contexts/AuthContext';
// import axios from 'axios';

// interface TestResult {
//   testId: number;
//   testName: string;
//   testTakenDate: string; // or Date if you parse it
//   totalMarks: number;
//   marksScored: number;
// }

// // Define the structure of the response data
// interface ApiResponse {
//   testResults: TestResult[];
// } 

// export const TestResultPage = () => {

//   const {authState} = useAuth()

//   const userId = authState.userId;
//   console.log(userId);

//   //const { data, error, isLoading } = useGetTestResults(`api/ip/users/${authState.userId}/results`);
//   const [filteredResults, setFilteredResults] = useState<TestResult[] | null>(null);
//   const [selectedTest, setSelectedTest] = useState('');
//   const [data, setData] = useState<ApiResponse | null>(null);
//   const navigate = useNavigate();
//   const toast = useToast();

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // try {
//   //   const response = await axios.get(`https://admee.in:3003/api/ip/users/${authState.userId}/results`);
//   //   // const { data  , error: apiError, isLoading } = useGetData(
//   //   //   authState.userId,
//   //   //   `/api/ip/test/${testId}/stats`
//   //   // ) ;
//   //   setData(response.data.data);
//   //   const data = response.data;
    
//   // } catch (err) {
//   //   setError("Failed to fetch test stats. Please try again later.");
//   // } finally {
//   //   setLoading(false);
//   // }

  
//   useEffect(() => {
//     setLoading(true);
//     const fetchTestResults = async () => {
//       try {
//         const response = await axios.get(
//           `https://admee.in:3003/api/ip/users/${authState.userId}/results`
//         );
//         setData(response.data.data); // Assuming the API response has `data.data`
//       } catch (err) {
//         setError("Failed to fetch test stats. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestResults();
//   }, [authState.userId]); 
  

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
//       description: "Error Occured",
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

//       {loading ? (
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
//           {/* {filteredResults?.length > 0 ? ( */}
//           {filteredResults && filteredResults.length > 0 ? (
//             <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
//               {filteredResults?.map((result: any, index: number) => (
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
//             )}
//         </>
//       )}
//     </Box>
//   );
// };

// export default TestResultPage;


//  Version 5 : Enhancement of version 4


// import { useState, useEffect } from 'react';
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
// import { useAuth } from '@/contexts/AuthContext';
// import axios from 'axios';

// interface TestResult {
//   testId: number;
//   testName: string;
//   testTakenDate: string;
//   totalMarks: number;
//   marksScored: number;
// }

// interface ApiResponse {
//   testResults: TestResult[];
// }

// export const TestResultPage = () => {
//   const { authState } = useAuth();
//   const userId = authState.userId;

//   const [filteredResults, setFilteredResults] = useState<TestResult[] | null>(null);
//   const [selectedTest, setSelectedTest] = useState('');
//   const [data, setData] = useState<ApiResponse | null>(null);
//   const navigate = useNavigate();
//   const toast = useToast();

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     setLoading(true);
//     const fetchTestResults = async () => {
//       try {
//         const response = await axios.get(
//           `https://admee.in:3003/api/ip/users/${authState.userId}/results`
//         );
//         setData(response.data.data);
//       } catch (err) {
//         setError('Failed to fetch test stats. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTestResults();
//   }, [authState.userId]);

//   useEffect(() => {
//     if (data?.testResults) {
//       const results = selectedTest
//         ? data.testResults.filter((test) => test.testName === selectedTest)
//         : data.testResults;
//       setFilteredResults(results);
//     }
//   }, [selectedTest, data]);

//   if (error) {
//     toast({
//       title: 'Error loading test results.',
//       description: 'Error Occurred',
//       status: 'error',
//       duration: 5000,
//       isClosable: true,
//     });
//     return null;
//   }

//   return (
//     <Box
//       maxW="100%"
//       mx="auto"
//       p={4}
//       bgGradient="linear(to-r, pink.50, purple.50)"
//       minH="100vh"
//     >
//       <Box textAlign="center" mb={6}>
//         <Text
//           fontSize={{ base: '2xl', md: '3xl' }}
//           fontWeight="bold"
//           bgGradient="linear(to-r, purple.400, pink.400)"
//           bgClip="text"
//         >
//           Test Results
//         </Text>
//       </Box>

//       {loading ? (
//         <Box display="flex" justifyContent="center" alignItems="center" h="300px">
//           <Spinner size="xl" color="purple.400" />
//         </Box>
//       ) : (
//         <>
//           <Select
//             placeholder="Select a Test"
//             mb={6}
//             onChange={(e) => setSelectedTest(e.target.value)}
//             borderColor="purple.400"
//             focusBorderColor="pink.400"
//             _hover={{ borderColor: 'pink.400' }}
//           >
//             {Array.from(new Set(data?.testResults?.map((test) => test.testName))).map(
//               (testName, index) => (
//                 <option key={index} value={testName}>
//                   {testName}
//                 </option>
//               )
//             )}
//           </Select>

//           {filteredResults && filteredResults.length > 0 ? (
//             <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
//               {filteredResults.map((result, index) => (
//                 <Card
//                   key={index}
//                   borderWidth="1px"
//                   borderRadius="lg"
//                   boxShadow="lg"
//                   _hover={{ boxShadow: '2xl', transform: 'scale(1.05)' }}
//                   transition="all 0.3s ease-in-out"
//                   bg="white"
//                 >
//                   <CardBody>
//                     <Stack spacing={4} textAlign="center">
//                       <Heading size="md" color="purple.600">
//                         {result.testName}
//                       </Heading>
//                       <Text color="gray.600">
//                         Date Taken: {new Date(result.testTakenDate).toLocaleString()}
//                       </Text>
//                       <Text fontWeight="bold" color="pink.500">
//                         Total Marks: {result.totalMarks}
//                       </Text>
//                       <Text fontWeight="bold" color="teal.500">
//                         Marks Scored: {result.marksScored}
//                       </Text>
//                       <Button
//                         colorScheme="purple"
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
//             <Box textAlign="center" mt={6}>
//               <Text fontSize="lg" color="gray.500">
//                 No results found for the selected test.
//               </Text>
//             </Box>
//           )}
//         </>
//       )}
//     </Box>
//   );
// };

// export default TestResultPage;



// Version 6 : enhancement to version 5

import { useState, useEffect } from "react";
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
  Divider,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";

interface TestResult {
  testId: number;
  testName: string;
  testTakenDate: string;
  totalMarks: number;
  marksScored: number;
}

interface ApiResponse {
  testResults: TestResult[];
}

export const TestResultPage = () => {
  const { authState } = useAuth();
  //const userId = authState.userId;
  const [filteredResults, setFilteredResults] = useState<TestResult[] | null>(
    null
  );
  const [selectedTest, setSelectedTest] = useState("");
  const [data, setData] = useState<ApiResponse | null>(null);
  const navigate = useNavigate();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchTestResults = async () => {
      try {
        const response = await axios.get(
          `https://admee.in:3003/api/ip/users/${authState.userId}/results`
        );
        setData(response.data.data);
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
        ? data.testResults.filter((test) => test.testName === selectedTest)
        : data.testResults;
      setFilteredResults(results);
    }
  }, [selectedTest, data]);

  if (error) {
    toast({
      title: "Error loading test results.",
      description: "Error Occurred",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
    return null;
  }

  return (
    <Box
      bgGradient="linear(to-bl, #ffecd2, #fcb69f)"
      minH="100vh"
      px={6}
      py={10}
    >
      <Box textAlign="center" mb={8}>
        <Heading
          fontSize="4xl"
          bgGradient="linear(to-r, #7928CA, #FF0080)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Your Test Results
        </Heading>
        <Text color="gray.700" fontSize="lg" mt={2}>
          Review your performance with colorful insights!
        </Text>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" h="200px">
          <Spinner size="lg" color="pink.400" />
        </Box>
      ) : (
        <>
          <Select
            placeholder="Select a Test"
            mb={6}
            maxW="400px"
            mx="auto"
            size="lg"
            onChange={(e) => setSelectedTest(e.target.value)}
            bg="white"
            borderColor="purple.400"
            focusBorderColor="purple.500"
            shadow="lg"
            fontWeight="bold"
            color="gray.700"
          >
            {Array.from(
              new Set(data?.testResults?.map((test) => test.testName))
            ).map((testName, index) => (
              <option key={index} value={testName}>
                {testName}
              </option>
            ))}
          </Select>

          {filteredResults && filteredResults.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {filteredResults.map((result, index) => (
                <Card
                  key={index}
                  borderWidth="2px"
                  borderColor="pink.400"
                  borderRadius="lg"
                  shadow="xl"
                  bgGradient="linear(to-tr, #f3e7e9, #ffe3ee)"
                  _hover={{
                    transform: "scale(1.05)",
                    shadow: "2xl",
                    borderColor: "purple.400",
                  }}
                  transition="all 0.3s ease-in-out"
                >
                  <CardBody>
                    <Stack spacing={4}>
                      <Heading
                        size="md"
                        bgGradient="linear(to-r, #ff7eb3, #ff758c)"
                        bgClip="text"
                      >
                        {result.testName}
                      </Heading>
                      <Divider />
                      <Text color="gray.600">
                        <strong>Date Taken:</strong>{" "}
                        {new Date(result.testTakenDate).toLocaleString()}
                      </Text>
                      <Text color="gray.600">
                        <strong>Total Marks:</strong> {result.totalMarks}
                      </Text>
                      <Text color="gray.600">
                        <strong>Marks Scored:</strong> {result.marksScored}
                      </Text>
                      <Button
                        mt={4}
                        bgGradient="linear(to-r, pink.400, orange.300)"
                        color="white"
                        fontWeight="bold"
                        _hover={{
                          bgGradient: "linear(to-r, pink.500, orange.400)",
                        }}
                        onClick={() =>
                          navigate("/result/details", { state: { result } })
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
            <Box textAlign="center" mt={10}>
              <Image
                src="https://via.placeholder.com/400x300.png?text=No+Data+Found"
                alt="No Results Found"
                mx="auto"
                mb={4}
              />
              <Text fontSize="lg" color="gray.500">
                No results found for the selected test.
              </Text>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default TestResultPage;
