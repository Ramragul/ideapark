// Version 1

// import { useAuth } from '@/contexts/AuthContext';
// import useGetData from '@/hooks/useGetData';
// import React from 'react';
// import { Box, Button, Table, Thead, Tbody, Tr, Th, Td, Text, Spinner, VStack, Heading, useBreakpointValue, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { EditIcon } from '@chakra-ui/icons';

// export const TestStatsPage = () => {
//     const { authState } = useAuth();
//     const { data, error, isLoading } = useGetData(authState.userId, `/api/ip/tests?created_by=${authState.userId}`);
//     const navigate = useNavigate();
//     const mobileView = useBreakpointValue({ base: true, md: false });
//     const { isOpen, onOpen, onClose } = useDisclosure();

//     if (isLoading) return <Spinner size="xl" color="pink.500" />;
//     if (error) return <Text color="red.500">Error: {error}</Text>;


//     return (
//       <div>Test Stas page</div>
//     );
// };

// export default TestStatsPage;


// Version 2 :

// import React, { useState } from "react";
// import {
//   Box,
//   Select,
//   Text,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Heading,
//   VStack,
//   Divider,
//   Spinner,
// } from "@chakra-ui/react";
// import axios from "axios";

// import { useAuth } from '@/contexts/AuthContext';
// import useGetData from '@/hooks/useGetData';

// const testData = [
//   { id: 14, name: "Maths CA" },
//   { id: 17, name: "History Test" },
//   { id: 18, name: "Biology Test" },
// ];

// export const TestStatsPage = () => {
//   const [selectedTestId, setSelectedTestId] = useState(null);
//   const [statsData, setStatsData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const {authState} = useAuth ();

//   const { data, error:apiError, isLoading } = useGetData(authState.userId, `/api/ip/tests?created_by=${authState.userId}`);

//   const handleTestChange = async (event) => {
//     const testId = event.target.value;
//     console.log("Selected test Value is " +testId);
//     setSelectedTestId(testId);
//     setStatsData(null); // Clear previous stats
//     setError(""); // Clear previous errors

//     if (testId) {
//       setLoading(true);

//       try {
//         const response = await axios.get(`https://admee.in:3003/api/ip/test/${testId}/stats`);
//         setStatsData(response.data);
//         console.log("Stats Data "+JSON.stringify(statsData))
       
//       } catch (err) {
//         setError("Failed to fetch test stats. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   return (
//     <Box p={8}>
//       <Heading size="lg" mb={4}>
//         Test Stats
//       </Heading>
//       <VStack align="start" spacing={6}>
//         {/* Test Selector */}
//         <Box>
//           <Text mb={2}>Select a Test:</Text>
//           <Select placeholder="Select a test" onChange={handleTestChange}>
//             {data.map((test) => (
//               <option key={test.id} value={test.id}>
//                 {test.name}
//               </option>
//             ))}
//           </Select>
//         </Box>

//         {/* Loading State */}
//         {loading && (
//           <Box textAlign="center" w="100%" mt={6}>
//             <Spinner size="lg" />
//           </Box>
//         )}

//         {/* Error Message */}
//         {error && (
//           <Text color="red.500" mt={4}>
//             {error}
//           </Text>
//         )}

//         {/* Display Test Stats */}
//         {statsData && (
//           <Box w="100%">
//             <Divider my={4} />
//             <Heading size="md" mb={4}>
//               Assigned Candidates
//             </Heading>
//             <Table variant="striped" colorScheme="teal">
//               <Thead>
//                 <Tr>
//                   <Th>Candidate ID</Th>
//                   <Th>Name</Th>
//                   <Th>Institute</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {statsData.assignedCandidates.map((candidate) => (
//                   <Tr key={candidate.candidateId}>
//                     <Td>{candidate.candidateId}</Td>
//                     <Td>{candidate.name}</Td>
//                     <Td>{candidate.institute}</Td>
//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>

//             <Divider my={4} />
//             <Heading size="md" mb={4}>
//               Attended Candidates
//             </Heading>
//             <Table variant="striped" colorScheme="pink">
//               <Thead>
//                 <Tr>
//                   <Th>Candidate ID</Th>
//                   <Th>Name</Th>
//                   <Th>Marks Scored</Th>
//                   <Th>Total Marks</Th>
//                   <Th>Percentage</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {statsData.attendedCandidates.map((candidate) => (
//                   <Tr key={candidate.candidateId}>
//                     <Td>{candidate.candidateId}</Td>
//                     <Td>{candidate.name}</Td>
//                     <Td>{candidate.marksScored}</Td>
//                     <Td>{candidate.totalMarks}</Td>
//                     <Td>
//                       {(
//                         (candidate.marksScored / candidate.totalMarks) *
//                         100
//                       ).toFixed(2)}
//                       %
//                     </Td>
//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>
//           </Box>
//         )}
//       </VStack>
//     </Box>
//   );
// };

// export default TestStatsPage;




// Version 3 : UI Design Enhancement to Version 2

// import React, { useState } from "react";
// import {
//   Box,
//   Select,
//   Text,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Heading,
//   VStack,
//   Divider,
//   Spinner,
//   Tabs,
//   TabList,
//   TabPanels,
//   TabPanel,
//   Tab,
//   useBreakpointValue,
// } from "@chakra-ui/react";
// import axios from "axios";

// import { useAuth } from '@/contexts/AuthContext';
// import useGetData from '@/hooks/useGetData';

// export const TestStatsPage = () => {
//   const [selectedTestId, setSelectedTestId] = useState<string | null>(null);
//   const [statsData, setStatsData] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string>("");

//   const { authState } = useAuth();

//   const { data, error: apiError, isLoading } = useGetData(authState.userId, `/api/ip/tests?created_by=${authState.userId}`);

//   const handleTestChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const testId = event.target.value;
//     setSelectedTestId(testId);
//     setStatsData(null); // Clear previous stats
//     setError(""); // Clear previous errors

//     if (testId) {
//       setLoading(true);

//       try {
//         const response = await axios.get(`https://admee.in:3003/api/ip/test/${testId}/stats`);
//         setStatsData(response.data);
//       } catch (err) {
//         setError("Failed to fetch test stats. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const isMobile = useBreakpointValue({ base: true, md: false });

//   return (
//     <Box p={8}>
//       <Heading size="lg" mb={4}>
//         Test Stats
//       </Heading>
//       <VStack align="start" spacing={6}>
//         {/* Test Selector */}
//         <Box width="100%" mb={4}>
//           <Text mb={2}>Select a Test:</Text>
//           <Select placeholder="Select a test" onChange={handleTestChange}>
//             {data?.map((test: any) => (
//               <option key={test.id} value={test.id}>
//                 {test.name}
//               </option>
//             ))}
//           </Select>
//         </Box>

//         {/* Loading State */}
//         {loading && (
//           <Box textAlign="center" w="100%" mt={6}>
//             <Spinner size="lg" />
//           </Box>
//         )}

//         {/* Error Message */}
//         {error && (
//           <Text color="red.500" mt={4}>
//             {error}
//           </Text>
//         )}

//         {/* Tabs for displaying stats */}
//         {statsData && (
//           <Box width="100%">
//             <Tabs variant="enclosed" isLazy>
//               <TabList>
//                 <Tab>Assigned Candidates</Tab>
//                 <Tab>Attended Candidates</Tab>
//                 <Tab>Not Attended Candidates</Tab>
//               </TabList>

//               <TabPanels>
//                 {/* Assigned Candidates */}
//                 <TabPanel>
//                   <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
//                     <Heading size="md" mb={4}>
//                       Assigned Candidates
//                     </Heading>
//                     <Table variant="striped" colorScheme="teal" size={isMobile ? "sm" : "md"}>
//                       <Thead>
//                         <Tr>
//                           <Th>Candidate ID</Th>
//                           <Th>Name</Th>
//                           <Th>Institute</Th>
//                         </Tr>
//                       </Thead>
//                       <Tbody>
//                         {statsData?.assignedCandidates?.map((candidate: any) => (
//                           <Tr key={candidate.candidateId}>
//                             <Td>{candidate.candidateId}</Td>
//                             <Td>{candidate.name}</Td>
//                             <Td>{candidate.institute}</Td>
//                           </Tr>
//                         ))}
//                       </Tbody>
//                     </Table>
//                   </Box>
//                 </TabPanel>

//                 {/* Attended Candidates */}
//                 <TabPanel>
//                   <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
//                     <Heading size="md" mb={4}>
//                       Attended Candidates
//                     </Heading>
//                     <Table variant="striped" colorScheme="pink" size={isMobile ? "sm" : "md"}>
//                       <Thead>
//                         <Tr>
//                           <Th>Candidate ID</Th>
//                           <Th>Name</Th>
//                           <Th>Marks Scored</Th>
//                           <Th>Total Marks</Th>
//                           <Th>Percentage</Th>
//                         </Tr>
//                       </Thead>
//                       <Tbody>
//                         {statsData?.attendedCandidates?.map((candidate: any) => (
//                           <Tr key={candidate.candidateId}>
//                             <Td>{candidate.candidateId}</Td>
//                             <Td>{candidate.name}</Td>
//                             <Td>{candidate.marksScored}</Td>
//                             <Td>{candidate.totalMarks}</Td>
//                             <Td>
//                               {(
//                                 (candidate.marksScored / candidate.totalMarks) *
//                                 100
//                               ).toFixed(2)}%
//                             </Td>
//                           </Tr>
//                         ))}
//                       </Tbody>
//                     </Table>
//                   </Box>
//                 </TabPanel>

//                 {/* Not Attended Candidates */}
//                 <TabPanel>
//                   <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
//                     <Heading size="md" mb={4}>
//                       Not Attended Candidates
//                     </Heading>
//                     <Table variant="striped" colorScheme="yellow" size={isMobile ? "sm" : "md"}>
//                       <Thead>
//                         <Tr>
//                           <Th>Candidate ID</Th>
//                           <Th>Name</Th>
//                         </Tr>
//                       </Thead>
//                       <Tbody>
//                         {statsData?.notAttendedCandidates?.map((candidate: any) => (
//                           <Tr key={candidate.candidateId}>
//                             <Td>{candidate.candidateId}</Td>
//                             <Td>{candidate.name}</Td>
//                           </Tr>
//                         ))}
//                       </Tbody>
//                     </Table>
//                   </Box>
//                 </TabPanel>
//               </TabPanels>
//             </Tabs>
//           </Box>
//         )}
//       </VStack>
//     </Box>
//   );
// };

// export default TestStatsPage;


// Version 4 : Design Ehancement to v3 


// import React, { useState } from "react";
// import {
//   Box,
//   Select,
//   Text,
//   Heading,
//   VStack,
//   Divider,
//   Spinner,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Card,
//   CardBody,
//   Stack,
//   Badge,
// } from "@chakra-ui/react";
// import axios from "axios";

// import { useAuth } from '@/contexts/AuthContext';
// import useGetData from '@/hooks/useGetData';

// export const TestStatsPage = () => {
//   const [selectedTestId, setSelectedTestId] = useState(null);
//   const [statsData, setStatsData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const { authState } = useAuth();

//   const { data, error: apiError, isLoading } = useGetData(
//     authState.userId,
//     `/api/ip/tests?created_by=${authState.userId}`
//   );

//   const handleTestChange = async (event) => {
//     const testId = event.target.value;
//     console.log("Selected test Value is " + testId);
//     setSelectedTestId(testId);
//     setStatsData(null); // Clear previous stats
//     setError(""); // Clear previous errors

//     if (testId) {
//       setLoading(true);

//       try {
//         const response = await axios.get(`https://admee.in:3003/api/ip/test/${testId}/stats`);
//         setStatsData(response.data);
//         console.log("Stats Data " + JSON.stringify(statsData));
//       } catch (err) {
//         setError("Failed to fetch test stats. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   return (
//     <Box p={8}>
//       <Heading size="lg" mb={4}>
//         Test Stats
//       </Heading>
//       <VStack align="start" spacing={6}>
//         {/* Test Selector */}
//         <Box>
//           <Text mb={2}>Select a Test:</Text>
//           <Select placeholder="Select a test" onChange={handleTestChange}>
//             {data.map((test) => (
//               <option key={test.id} value={test.id}>
//                 {test.name}
//               </option>
//             ))}
//           </Select>
//         </Box>

//         {/* Loading State */}
//         {loading && (
//           <Box textAlign="center" w="100%" mt={6}>
//             <Spinner size="lg" />
//           </Box>
//         )}

//         {/* Error Message */}
//         {error && (
//           <Text color="red.500" mt={4}>
//             {error}
//           </Text>
//         )}

//         {/* Tabs for Candidates */}
//         {statsData && (
//           <Tabs variant="enclosed" colorScheme="teal">
//             <TabList>
//               <Tab>Assigned Candidates</Tab>
//               <Tab colorScheme="green">Attended Candidates</Tab>
//               <Tab colorScheme="yellow">Not Attended Candidates</Tab>
//             </TabList>

//             <TabPanels>
//               <TabPanel>
//                 {/* Assigned Candidates */}
//                 <Stack spacing={4}>
//                   {statsData.assignedCandidates.map((candidate) => (
//                     <Card key={candidate.candidateId} variant="outline">
//                       <CardBody>
//                         <Stack spacing={2}>
//                           <Text fontWeight="bold">Candidate ID: {candidate.candidateId}</Text>
//                           <Text>Name: {candidate.name}</Text>
//                           <Text>Institute: {candidate.institute}</Text>
//                         </Stack>
//                       </CardBody>
//                     </Card>
//                   ))}
//                 </Stack>
//               </TabPanel>

//               <TabPanel>
//                 {/* Attended Candidates (Green Theme) */}
//                 <Stack spacing={4}>
//                   {statsData.attendedCandidates.map((candidate) => (
//                     <Card key={candidate.candidateId} bg="green.100">
//                       <CardBody>
//                         <Stack spacing={2}>
//                           <Text fontWeight="bold">Candidate ID: {candidate.candidateId}</Text>
//                           <Text>Name: {candidate.name}</Text>
//                           <Text>Marks Scored: {candidate.marksScored}</Text>
//                           <Text>Total Marks: {candidate.totalMarks}</Text>
//                           <Text>
//                             Percentage:{" "}
//                             {((candidate.marksScored / candidate.totalMarks) * 100).toFixed(2)}%
//                           </Text>
//                         </Stack>
//                       </CardBody>
//                     </Card>
//                   ))}
//                 </Stack>
//               </TabPanel>

//               <TabPanel>
//                 {/* Not Attended Candidates (Yellow Theme) */}
//                 <Stack spacing={4}>
//                   {statsData.notAttendedCandidates.map((candidate) => (
//                     <Card key={candidate.candidateId} bg="yellow.100">
//                       <CardBody>
//                         <Stack spacing={2}>
//                           <Text fontWeight="bold">Candidate ID: {candidate.candidateId}</Text>
//                           <Text>Name: {candidate.name}</Text>
//                         </Stack>
//                       </CardBody>
//                     </Card>
//                   ))}
//                 </Stack>
//               </TabPanel>
//             </TabPanels>
//           </Tabs>
//         )}
//       </VStack>
//     </Box>
//   );
// };

// export default TestStatsPage;


// Version 5 : Enhancement to version 4. 4 is working version

// import React, { useState } from "react";
// import {
//   Box,
//   Select,
//   Text,
//   Heading,
//   VStack,
//   Divider,
//   Spinner,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Card,
//   CardBody,
//   Stack,
//   Badge,
//   useBreakpointValue,
//   Table,
//     Thead,
//     Tbody,
//     Tr,
//     Th,
//     Td,
// } from "@chakra-ui/react";
// import axios from "axios";

// import { useAuth } from '@/contexts/AuthContext';
// import useGetData from '@/hooks/useGetData';

// export const TestStatsPage = () => {
//   const [selectedTestId, setSelectedTestId] = useState(null);
//   const [statsData, setStatsData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const { authState } = useAuth();

//   const { data, error: apiError, isLoading } = useGetData(
//     authState.userId,
//     `/api/ip/tests?created_by=${authState.userId}`
//   );

//   const handleTestChange = async (event) => {
//     const testId = event.target.value;
//     console.log("Selected test Value is " + testId);
//     setSelectedTestId(testId);
//     setStatsData(null); // Clear previous stats
//     setError(""); // Clear previous errors

//     if (testId) {
//       setLoading(true);

//       try {
//         const response = await axios.get(`https://admee.in:3003/api/ip/test/${testId}/stats`);
//         setStatsData(response.data);
//         console.log("Stats Data " + JSON.stringify(statsData));
//       } catch (err) {
//         setError("Failed to fetch test stats. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   // Detect if the screen size is small (to switch between table and card layout)
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   return (
//     <Box p={8}>
//       <Heading size="lg" mb={4}>
//         Test Stats
//       </Heading>
//       <VStack align="start" spacing={6}>
//         {/* Test Selector */}
//         <Box>
//           <Text mb={2}>Select a Test:</Text>
//           <Select placeholder="Select a test" onChange={handleTestChange}>
//             {data.map((test) => (
//               <option key={test.id} value={test.id}>
//                 {test.name}
//               </option>
//             ))}
//           </Select>
//         </Box>

//         {/* Loading State */}
//         {loading && (
//           <Box textAlign="center" w="100%" mt={6}>
//             <Spinner size="lg" />
//           </Box>
//         )}

//         {/* Error Message */}
//         {error && (
//           <Text color="red.500" mt={4}>
//             {error}
//           </Text>
//         )}

//         {/* Tabs for Candidates */}
//         {statsData && (
//           <Tabs variant="enclosed" colorScheme="teal">
//             <TabList>
//               <Tab
//                 _selected={{
//                   bg: "teal.400",
//                   color: "white"
//                 }}
//               >
//                 Assigned Candidates
//               </Tab>
//               <Tab
//                 colorScheme="green"
//                 _selected={{
//                   bg: "green.400",
//                   color: "white"
//                 }}
//               >
//                 Attended Candidates
//               </Tab>
//               <Tab
//                 colorScheme="yellow"
//                 _selected={{
//                   bg: "yellow.400",
//                   color: "white"
//                 }}
//               >
//                 Not Attended Candidates
//               </Tab>
//             </TabList>

//             <TabPanels>
//               <TabPanel>
//                 {/* For Mobile - Cards, For Large Screen - Table */}
//                 {isMobile ? (
//                   <Stack spacing={4}>
//                     {statsData.assignedCandidates.map((candidate) => (
//                       <Card key={candidate.candidateId} variant="outline">
//                         <CardBody>
//                           <Stack spacing={2}>
//                             <Text fontWeight="bold">Candidate ID: {candidate.candidateId}</Text>
//                             <Text>Name: {candidate.name}</Text>
//                             <Text>Institute: {candidate.institute}</Text>
//                           </Stack>
//                         </CardBody>
//                       </Card>
//                     ))}
//                   </Stack>
//                 ) : (
//                   <Box w="100%">
//                     <Divider my={4} />
//                     <Heading size="md" mb={4}>
//                       Assigned Candidates
//                     </Heading>
//                     <Table variant="striped" colorScheme="teal">
//                       <Thead>
//                         <Tr>
//                           <Th>Candidate ID</Th>
//                           <Th>Name</Th>
//                           <Th>Institute</Th>
//                         </Tr>
//                       </Thead>
//                       <Tbody>
//                         {statsData.assignedCandidates.map((candidate) => (
//                           <Tr key={candidate.candidateId}>
//                             <Td>{candidate.candidateId}</Td>
//                             <Td>{candidate.name}</Td>
//                             <Td>{candidate.institute}</Td>
//                           </Tr>
//                         ))}
//                       </Tbody>
//                     </Table>
//                   </Box>
//                 )}
//               </TabPanel>

//               <TabPanel>
//                 {/* Attended Candidates - Mobile Cards and Large Screen Table */}
//                 {isMobile ? (
//                   <Stack spacing={4}>
//                     {statsData.attendedCandidates.map((candidate) => (
//                       <Card key={candidate.candidateId} bg="green.100">
//                         <CardBody>
//                           <Stack spacing={2}>
//                             <Text fontWeight="bold">Candidate ID: {candidate.candidateId}</Text>
//                             <Text>Name: {candidate.name}</Text>
//                             <Text>Marks Scored: {candidate.marksScored}</Text>
//                             <Text>Total Marks: {candidate.totalMarks}</Text>
//                             <Text>
//                               Percentage:{" "}
//                               {((candidate.marksScored / candidate.totalMarks) * 100).toFixed(2)}%
//                             </Text>
//                           </Stack>
//                         </CardBody>
//                       </Card>
//                     ))}
//                   </Stack>
//                 ) : (
//                   <Box w="100%">
//                     <Divider my={4} />
//                     <Heading size="md" mb={4}>
//                       Attended Candidates
//                     </Heading>
//                     <Table variant="striped" colorScheme="green">
//                       <Thead>
//                         <Tr>
//                           <Th>Candidate ID</Th>
//                           <Th>Name</Th>
//                           <Th>Marks Scored</Th>
//                           <Th>Total Marks</Th>
//                           <Th>Percentage</Th>
//                         </Tr>
//                       </Thead>
//                       <Tbody>
//                         {statsData.attendedCandidates.map((candidate) => (
//                           <Tr key={candidate.candidateId}>
//                             <Td>{candidate.candidateId}</Td>
//                             <Td>{candidate.name}</Td>
//                             <Td>{candidate.marksScored}</Td>
//                             <Td>{candidate.totalMarks}</Td>
//                             <Td>
//                               {(
//                                 (candidate.marksScored / candidate.totalMarks) *
//                                 100
//                               ).toFixed(2)}
//                               %
//                             </Td>
//                           </Tr>
//                         ))}
//                       </Tbody>
//                     </Table>
//                   </Box>
//                 )}
//               </TabPanel>

//               <TabPanel>
//                 {/* Not Attended Candidates - Mobile Cards and Large Screen Table */}
//                 {isMobile ? (
//                   <Stack spacing={4}>
//                     {statsData.notAttendedCandidates.map((candidate) => (
//                       <Card key={candidate.candidateId} bg="yellow.100">
//                         <CardBody>
//                           <Stack spacing={2}>
//                             <Text fontWeight="bold">Candidate ID: {candidate.candidateId}</Text>
//                             <Text>Name: {candidate.name}</Text>
//                           </Stack>
//                         </CardBody>
//                       </Card>
//                     ))}
//                   </Stack>
//                 ) : (
//                   <Box w="100%">
//                     <Divider my={4} />
//                     <Heading size="md" mb={4}>
//                       Not Attended Candidates
//                     </Heading>
//                     <Table variant="striped" colorScheme="yellow">
//                       <Thead>
//                         <Tr>
//                           <Th>Candidate ID</Th>
//                           <Th>Name</Th>
//                         </Tr>
//                       </Thead>
//                       <Tbody>
//                         {statsData.notAttendedCandidates.map((candidate) => (
//                           <Tr key={candidate.candidateId}>
//                             <Td>{candidate.candidateId}</Td>
//                             <Td>{candidate.name}</Td>
//                           </Tr>
//                         ))}
//                       </Tbody>
//                     </Table>
//                   </Box>
//                 )}
//               </TabPanel>
//             </TabPanels>
//           </Tabs>
//         )}
//       </VStack>
//     </Box>
//   );
// };

// export default TestStatsPage;


// Version 6 : 5 is the working version, this is an enhancement to 5 with good designs, arraning items in the center etc

import React, { useState } from "react";
import {
  Box,
  Select,
  Text,
  Heading,
  VStack,
  Divider,
  Spinner,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Card,
  CardBody,
  Stack,
  Badge,
  useBreakpointValue,
  FormControl
} from "@chakra-ui/react";
import axios from "axios";

import { useAuth } from '@/contexts/AuthContext';
import useGetData from '@/hooks/useGetData';

export const TestStatsPage = () => {
  const [selectedTestId, setSelectedTestId] = useState(null);
  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { authState } = useAuth();

  const { data, error: apiError, isLoading } = useGetData(
    authState.userId,
    `/api/ip/tests?created_by=${authState.userId}`
  );

  const handleTestChange = async (event) => {
    const testId = event.target.value;
    console.log("Selected test Value is " + testId);
    setSelectedTestId(testId);
    setStatsData(null); // Clear previous stats
    setError(""); // Clear previous errors

    if (testId) {
      setLoading(true);

      try {
        const response = await axios.get(`https://admee.in:3003/api/ip/test/${testId}/stats`);
        setStatsData(response.data);
        console.log("Stats Data " + JSON.stringify(statsData));
      } catch (err) {
        setError("Failed to fetch test stats. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
  };

  // Detect if the screen size is small (to switch between table and card layout)
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box p={8}>
      <Heading size="lg" mb={4} textAlign="center">
        Test Stats
      </Heading>
      <VStack align="center" spacing={6}>
        {/* Test Selector */}
        <Box w="100%" textAlign="center">
          <FormControl>
            <Text mb={2}>Select a Test:</Text>
            <Select
              placeholder="Select a test"
              onChange={handleTestChange}
              w="50%" // Make it bigger
              m="0 auto"
              bg={selectedTestId ? "teal.100" : "white"} // Highlight after selection
              _focus={{ borderColor: "teal.400" }} // Border color on focus
              boxShadow={selectedTestId ? "0 0 5px teal" : "none"} // Add shadow when selected
            >
              {data.map((test) => (
                <option key={test.id} value={test.id}>
                  {test.name}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Loading State */}
        {loading && (
          <Box textAlign="center" w="100%" mt={6}>
            <Spinner size="lg" />
          </Box>
        )}

        {/* Error Message */}
        {error && (
          <Text color="red.500" mt={4}>
            {error}
          </Text>
        )}

        {/* Tabs for Candidates */}
        {statsData && (
          <Tabs variant="enclosed" colorScheme="teal" align="center">
            <TabList>
              <Tab
                _selected={{
                  bg: "teal.400",
                  color: "white"
                }}
              >
                Assigned Candidates
              </Tab>
              <Tab
                colorScheme="green"
                _selected={{
                  bg: "green.400",
                  color: "white"
                }}
              >
                Attended Candidates
              </Tab>
              <Tab
                colorScheme="yellow"
                _selected={{
                  bg: "yellow.400",
                  color: "white"
                }}
              >
                Not Attended Candidates
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                {/* For Mobile - Cards, For Large Screen - Table */}
                {isMobile ? (
                  <Stack spacing={4}>
                    {statsData.assignedCandidates.map((candidate, index) => (
                      <Card key={candidate.candidateId} variant="outline">
                        <CardBody>
                          <Stack spacing={2}>
                            <Text fontWeight="bold">S.No: {index + 1}</Text>
                            <Text fontWeight="bold">Candidate ID: {candidate.candidateId}</Text>
                            <Text>Name: {candidate.name}</Text>
                            <Text>Institute: {candidate.institute}</Text>
                          </Stack>
                        </CardBody>
                      </Card>
                    ))}
                  </Stack>
                ) : (
                  <Box w="100%">
                    <Divider my={4} />
                    <Heading size="md" mb={4}>
                      Assigned Candidates
                    </Heading>
                    <Table variant="striped" colorScheme="teal">
                      <Thead>
                        <Tr>
                          <Th>S.No</Th>
                          <Th>Candidate ID</Th>
                          <Th>Name</Th>
                          <Th>Institute</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {statsData.assignedCandidates.map((candidate, index) => (
                          <Tr key={candidate.candidateId}>
                            <Td>{index + 1}</Td>
                            <Td>{candidate.candidateId}</Td>
                            <Td>{candidate.name}</Td>
                            <Td>{candidate.institute}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Box>
                )}
              </TabPanel>

              <TabPanel>
                {/* Attended Candidates - Mobile Cards and Large Screen Table */}
                {isMobile ? (
                  <Stack spacing={4}>
                    {statsData.attendedCandidates.map((candidate, index) => (
                      <Card key={candidate.candidateId} bg="green.100">
                        <CardBody>
                          <Stack spacing={2}>
                            <Text fontWeight="bold">S.No: {index + 1}</Text>
                            <Text fontWeight="bold">Candidate ID: {candidate.candidateId}</Text>
                            <Text>Name: {candidate.name}</Text>
                            <Text>Marks Scored: {candidate.marksScored}</Text>
                            <Text>Total Marks: {candidate.totalMarks}</Text>
                            <Text>
                              Percentage:{" "}
                              {((candidate.marksScored / candidate.totalMarks) * 100).toFixed(2)}%
                            </Text>
                          </Stack>
                        </CardBody>
                      </Card>
                    ))}
                  </Stack>
                ) : (
                  <Box w="100%">
                    <Divider my={4} />
                    <Heading size="md" mb={4}>
                      Attended Candidates
                    </Heading>
                    <Table variant="striped" colorScheme="green">
                      <Thead>
                        <Tr>
                          <Th>S.No</Th>
                          <Th>Candidate ID</Th>
                          <Th>Name</Th>
                          <Th>Marks Scored</Th>
                          <Th>Total Marks</Th>
                          <Th>Percentage</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {statsData.attendedCandidates.map((candidate, index) => (
                          <Tr key={candidate.candidateId}>
                            <Td>{index + 1}</Td>
                            <Td>{candidate.candidateId}</Td>
                            <Td>{candidate.name}</Td>
                            <Td>{candidate.marksScored}</Td>
                            <Td>{candidate.totalMarks}</Td>
                            <Td>
                              {(
                                (candidate.marksScored / candidate.totalMarks) *
                                100
                              ).toFixed(2)}
                              %
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Box>
                )}
              </TabPanel>

              <TabPanel>
                {/* Not Attended Candidates - Mobile Cards and Large Screen Table */}
                {isMobile ? (
                  <Stack spacing={4}>
                    {statsData.notAttendedCandidates.map((candidate, index) => (
                      <Card key={candidate.candidateId} bg="yellow.100">
                        <CardBody>
                          <Stack spacing={2}>
                            <Text fontWeight="bold">S.No: {index + 1}</Text>
                            <Text fontWeight="bold">Candidate ID: {candidate.candidateId}</Text>
                            <Text>Name: {candidate.name}</Text>
                          </Stack>
                        </CardBody>
                      </Card>
                    ))}
                  </Stack>
                ) : (
                  <Box w="100%">
                    <Divider my={4} />
                    <Heading size="md" mb={4}>
                      Not Attended Candidates
                    </Heading>
                    <Table variant="striped" colorScheme="yellow">
                      <Thead>
                        <Tr>
                          <Th>S.No</Th>
                          <Th>Candidate ID</Th>
                          <Th>Name</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {statsData.notAttendedCandidates.map((candidate, index) => (
                          <Tr key={candidate.candidateId}>
                            <Td>{index + 1}</Td>
                            <Td>{candidate.candidateId}</Td>
                            <Td>{candidate.name}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Box>
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
        )}
      </VStack>
    </Box>
  );
};


// Version 7 : enhacnement to 6, 6 is also a working and enhanced design version . 7 doesn't have serial number for the smaller devices

// import React, { useState } from "react";
// import {
//   Box,
//   Select,
//   Text,
//   Heading,
//   VStack,
//   Divider,
//   Spinner,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Card,
//   CardBody,
//   Stack,
//   Badge,
//   useBreakpointValue,
//   FormControl
// } from "@chakra-ui/react";
// import axios from "axios";

// import { useAuth } from '@/contexts/AuthContext';
// import useGetData from '@/hooks/useGetData';

// export const TestStatsPage = () => {
//   const [selectedTestId, setSelectedTestId] = useState(null);
//   const [statsData, setStatsData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const { authState } = useAuth();

//   const { data, error: apiError, isLoading } = useGetData(
//     authState.userId,
//     `/api/ip/tests?created_by=${authState.userId}`
//   );

//   const handleTestChange = async (event) => {
//     const testId = event.target.value;
//     setSelectedTestId(testId);
//     setStatsData(null); // Clear previous stats
//     setError(""); // Clear previous errors

//     if (testId) {
//       setLoading(true);

//       try {
//         const response = await axios.get(`https://admee.in:3003/api/ip/test/${testId}/stats`);
//         setStatsData(response.data);
//       } catch (err) {
//         setError("Failed to fetch test stats. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   // Detect if the screen size is small (to switch between table and card layout)
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   return (
//     <Box p={8}>
//       <Heading size="lg" mb={4} textAlign="center">
//         Test Stats
//       </Heading>
//       <VStack align="center" spacing={6}>
//         {/* Test Selector */}
//         <Box w="100%" textAlign="center">
//           <FormControl>
//             <Text mb={2}>Select a Test:</Text>
//             <Select
//               placeholder="Select a test"
//               onChange={handleTestChange}
//               w={isMobile ? "80%" : "50%"} // Make it big on larger screens and smaller on mobile
//               m="0 auto"
//               bg={selectedTestId ? "teal.100" : "white"} // Highlight after selection
//               _focus={{ borderColor: "teal.400" }} // Border color on focus
//               boxShadow={selectedTestId ? "0 0 5px teal" : "none"} // Add shadow when selected
//             >
//               {data.map((test) => (
//                 <option key={test.id} value={test.id}>
//                   {test.name}
//                 </option>
//               ))}
//             </Select>
//           </FormControl>
//         </Box>

//         {/* Loading State */}
//         {loading && (
//           <Box textAlign="center" w="100%" mt={6}>
//             <Spinner size="lg" />
//           </Box>
//         )}

//         {/* Error Message */}
//         {error && (
//           <Text color="red.500" mt={4}>
//             {error}
//           </Text>
//         )}

//         {/* Tabs for Candidates */}
//         {statsData && (
//           <Tabs variant="enclosed" colorScheme="teal" align="center">
//             <TabList>
//               <Tab
//                 _selected={{
//                   bg: "teal.400",
//                   color: "white"
//                 }}
//               >
//                 Assigned Candidates
//               </Tab>
//               <Tab
//                 colorScheme="green"
//                 _selected={{
//                   bg: "green.400",
//                   color: "white"
//                 }}
//               >
//                 Attended Candidates
//               </Tab>
//               <Tab
//                 colorScheme="yellow"
//                 _selected={{
//                   bg: "yellow.400",
//                   color: "white"
//                 }}
//               >
//                 Not Attended Candidates
//               </Tab>
//             </TabList>

//             <TabPanels>
//               <TabPanel>
//                 {/* For Mobile - Cards, For Large Screen - Table */}
//                 {isMobile ? (
//                   <Stack spacing={4}>
//                     {statsData.assignedCandidates.map((candidate, index) => (
//                       <Card key={candidate.candidateId} variant="outline">
//                         <CardBody>
//                           <Stack spacing={2}>
//                             <Text fontWeight="bold">Candidate ID: {candidate.candidateId}</Text>
//                             <Text>Name: {candidate.name}</Text>
//                             <Text>Institute: {candidate.institute}</Text>
//                           </Stack>
//                         </CardBody>
//                       </Card>
//                     ))}
//                   </Stack>
//                 ) : (
//                   <Box w="100%">
//                     <Divider my={4} />
//                     <Heading size="md" mb={4}>
//                       Assigned Candidates
//                     </Heading>
//                     <Table variant="striped" colorScheme="teal">
//                       <Thead>
//                         <Tr>
//                           <Th>S.No</Th>
//                           <Th>Candidate ID</Th>
//                           <Th>Name</Th>
//                           <Th>Institute</Th>
//                         </Tr>
//                       </Thead>
//                       <Tbody>
//                         {statsData.assignedCandidates.map((candidate, index) => (
//                           <Tr key={candidate.candidateId}>
//                             <Td>{index + 1}</Td>
//                             <Td>{candidate.candidateId}</Td>
//                             <Td>{candidate.name}</Td>
//                             <Td>{candidate.institute}</Td>
//                           </Tr>
//                         ))}
//                       </Tbody>
//                     </Table>
//                   </Box>
//                 )}
//               </TabPanel>

//               <TabPanel>
//                 {/* Attended Candidates - Mobile Cards and Large Screen Table */}
//                 {isMobile ? (
//                   <Stack spacing={4}>
//                     {statsData.attendedCandidates.map((candidate, index) => (
//                       <Card key={candidate.candidateId} bg="green.100">
//                         <CardBody>
//                           <Stack spacing={2}>
//                             <Text fontWeight="bold">Candidate ID: {candidate.candidateId}</Text>
//                             <Text>Name: {candidate.name}</Text>
//                             <Text>Marks Scored: {candidate.marksScored}</Text>
//                             <Text>Total Marks: {candidate.totalMarks}</Text>
//                             <Text>
//                               Percentage:{" "}
//                               {((candidate.marksScored / candidate.totalMarks) * 100).toFixed(2)}%
//                             </Text>
//                           </Stack>
//                         </CardBody>
//                       </Card>
//                     ))}
//                   </Stack>
//                 ) : (
//                   <Box w="100%">
//                     <Divider my={4} />
//                     <Heading size="md" mb={4}>
//                       Attended Candidates
//                     </Heading>
//                     <Table variant="striped" colorScheme="green">
//                       <Thead>
//                         <Tr>
//                           <Th>S.No</Th>
//                           <Th>Candidate ID</Th>
//                           <Th>Name</Th>
//                           <Th>Marks Scored</Th>
//                           <Th>Total Marks</Th>
//                           <Th>Percentage</Th>
//                         </Tr>
//                       </Thead>
//                       <Tbody>
//                         {statsData.attendedCandidates.map((candidate, index) => (
//                           <Tr key={candidate.candidateId}>
//                             <Td>{index + 1}</Td>
//                             <Td>{candidate.candidateId}</Td>
//                             <Td>{candidate.name}</Td>
//                             <Td>{candidate.marksScored}</Td>
//                             <Td>{candidate.totalMarks}</Td>
//                             <Td>
//                               {(
//                                 (candidate.marksScored / candidate.totalMarks) *
//                                 100
//                               ).toFixed(2)}
//                               %
//                             </Td>
//                           </Tr>
//                         ))}
//                       </Tbody>
//                     </Table>
//                   </Box>
//                 )}
//               </TabPanel>

//               <TabPanel>
//                 {/* Not Attended Candidates - Mobile Cards and Large Screen Table */}
//                 {isMobile ? (
//                   <Stack spacing={4}>
//                     {statsData.notAttendedCandidates.map((candidate, index) => (
//                       <Card key={candidate.candidateId} bg="yellow.100">
//                         <CardBody>
//                           <Stack spacing={2}>
//                             <Text fontWeight="bold">Candidate ID: {candidate.candidateId}</Text>
//                             <Text>Name: {candidate.name}</Text>
//                           </Stack>
//                         </CardBody>
//                       </Card>
//                     ))}
//                   </Stack>
//                 ) : (
//                   <Box w="100%">
//                     <Divider my={4} />
//                     <Heading size="md" mb={4}>
//                       Not Attended Candidates
//                     </Heading>
//                     <Table variant="striped" colorScheme="yellow">
//                       <Thead>
//                         <Tr>
//                           <Th>S.No</Th>
//                           <Th>Candidate ID</Th>
//                           <Th>Name</Th>
//                         </Tr>
//                       </Thead>
//                       <Tbody>
//                         {statsData.notAttendedCandidates.map((candidate, index) => (
//                           <Tr key={candidate.candidateId}>
//                             <Td>{index + 1}</Td>
//                             <Td>{candidate.candidateId}</Td>
//                             <Td>{candidate.name}</Td>
//                           </Tr>
//                         ))}
//                       </Tbody>
//                     </Table>
//                   </Box>
//                 )}
//               </TabPanel>
//             </TabPanels>
//           </Tabs>
//         )}
//       </VStack>
//     </Box>
//   );
// };
