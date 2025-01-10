// Version 1 :working version

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Heading,
//   Text,
//   Button,
//   VStack,
//   Stack,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   useDisclosure,
//   Spinner,
// } from '@chakra-ui/react';
// import { useAuth } from '@/contexts/AuthContext';
// import useGetData from '@/hooks/useGetData';

// export const StudentTestDashboard: React.FC = () => {
//   const { authState } = useAuth();
//   const userId = authState?.userId;

//   const { data, error, isLoading } = useGetData(userId, `/api/ip/users/${userId}/tests`);
//   const [selectedTest, setSelectedTest] = useState<any>(null);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const navigate = useNavigate();

//   const resetModal = () => {
//     setSelectedTest(null);
//     onClose();
//   };

//   if (isLoading) return <Spinner size="lg" />;
//   if (error) return <Text color="red.500">Failed to load tests.</Text>;
//   if (!data) return <Text>Loading data...</Text>;

//   const { activeTests = [], expiredTests = [] } = data;

//   const handleTestClick = (test: any) => {
//     setSelectedTest(test);
//     onOpen();
//   };

//   return (
//     <Box p={6}>
//       <Heading mb={4}>Candidate Dashboard</Heading>

//       {/* Active Tests Section */}
//       <Box mb={8}>
//         <Heading size="md" mb={4}>Active Tests</Heading>
//         {activeTests.length > 0 ? (
//           <VStack spacing={4}>
//             {activeTests.map((test: any) => (
//               <Box
//                 key={test.id}
//                 p={4}
//                 border="1px"
//                 borderRadius="md"
//                 boxShadow="sm"
//                 bg="green.50"
//                 cursor="pointer"
//                 _hover={{ boxShadow: 'md' }}
//                 onClick={() => handleTestClick(test)}
//               >
//                 <Text fontSize="lg" fontWeight="bold">{test.name}</Text>
//                 <Text fontSize="sm" color="gray.600">Created By: {test.created_by}</Text>
//               </Box>
//             ))}
//           </VStack>
//         ) : (
//           <Text>No active tests available.</Text>
//         )}
//       </Box>

//       {/* Expired Tests Section */}
//       <Box>
//         <Heading size="md" mb={4}>Expired Tests</Heading>
//         {expiredTests.length > 0 ? (
//           <VStack spacing={4}>
//             {expiredTests.map((test: any) => (
//               <Box
//                 key={test.id}
//                 p={4}
//                 border="1px"
//                 borderRadius="md"
//                 boxShadow="sm"
//                 bg="red.50"
//                 cursor="pointer"
//                 _hover={{ boxShadow: 'md' }}
//                 onClick={() => handleTestClick(test)}
//               >
//                 <Text fontSize="lg" fontWeight="bold">{test.name}</Text>
//                 <Text fontSize="sm" color="gray.600">Expired on: {new Date(test.validity).toLocaleDateString()}</Text>
//               </Box>
//             ))}
//           </VStack>
//         ) : (
//           <Text>No expired tests available.</Text>
//         )}
//       </Box>

//       {/* Modal for Test Details */}
//       {selectedTest && (
//         <Modal isOpen={isOpen} onClose={resetModal}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Test Details</ModalHeader>
//             <ModalBody>
//               <Text><b>Name:</b> {selectedTest.name}</Text>
//               <Text><b>Description:</b> {selectedTest.description}</Text>
//               <Text><b>Created By:</b> {selectedTest.created_by}</Text>
//               <Text><b>Category:</b> {selectedTest.category}</Text>
//               <Text><b>Timings:</b> {selectedTest.timings} minutes</Text>
//               <Text><b>Validity:</b> {new Date(selectedTest.validity).toLocaleDateString()}</Text>
//             </ModalBody>
//             <ModalFooter>
//               {activeTests.some((test: any) => test.id === selectedTest.id) ? (
//                 <Button
//                   colorScheme="blue"
//                   mr={3}
//                   onClick={() => navigate('/exam', { state: { testId: selectedTest.id } })}
//                 >
//                   Start Test
//                 </Button>
//               ) : (
//                 <Text color="red.500" fontWeight="bold">Expired</Text>
//               )}
//               <Button variant="ghost" onClick={resetModal}>Close</Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       )}
//     </Box>
//   );
// };

// export default StudentTestDashboard;



// Version 2 : Enhancement to version 1 with design changes - Working Version

// import React, { useState } from 'react';
// import {
//   Box,
//   Heading,
//   Text,
//   Button,
//   VStack,
//   Input,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Grid,
//   GridItem,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
// } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '@/contexts/AuthContext';
// import useGetData from '@/hooks/useGetData';

// export const StudentTestDashboard: React.FC = () => {
//   const { authState } = useAuth();
//   const userId = authState?.userId;

//   const { data, error, isLoading } = useGetData(userId, `/api/ip/users/${userId}/tests`);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedTest, setSelectedTest] = useState<any>(null);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const navigate = useNavigate();

//   const resetModal = () => {
//     setSelectedTest(null);
//     onClose();
//   };

//   if (isLoading) return <Text>Loading...</Text>;
//   if (error) return <Text color="red.500">Failed to load tests.</Text>;

//   const { activeTests = [], expiredTests = [] } = data;

//   const filterTests = (tests: any[]) =>
//     tests.filter((test) =>
//       Object.values(test).some((value) =>
//         String(value).toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );

//   const handleTestClick = (test: any) => {
//     setSelectedTest(test);
//     onOpen();
//   };

//   return (
//     <Box p={6}>
//       <Heading mb={4} textAlign="center" color="green.700">
//         Candidate Dashboard
//       </Heading>

//       {/* Search Bar */}
//       <Input
//         placeholder="Search tests by name, category, or creator..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         mb={6}
//         size="lg"
//         borderColor="green.400"
//         focusBorderColor="green.600"
//       />

//       {/* Tabs */}
//       <Tabs isFitted variant="soft-rounded" colorScheme="green">
//         <TabList mb={4}>
//           <Tab>Active Tests</Tab>
//           <Tab>Expired Tests</Tab>
//         </TabList>
//         <TabPanels>
//           {/* Active Tests Tab */}
//           <TabPanel>
//             <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
//               {filterTests(activeTests).length > 0 ? (
//                 filterTests(activeTests).map((test: any) => (
//                   <GridItem
//                     key={test.id}
//                     p={4}
//                     border="1px"
//                     borderColor="green.200"
//                     borderRadius="md"
//                     bg="green.50"
//                     boxShadow="md"
//                     _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
//                     cursor="pointer"
//                     onClick={() => handleTestClick(test)}
//                   >
//                     <Text fontSize="lg" fontWeight="bold" color="green.800">
//                       {test.name}
//                     </Text>
//                     <Text fontSize="sm" color="gray.600">
//                       Created By: {test.created_by}
//                     </Text>
//                   </GridItem>
//                 ))
//               ) : (
//                 <Text>No active tests available.</Text>
//               )}
//             </Grid>
//           </TabPanel>

//           {/* Expired Tests Tab */}
//           <TabPanel>
//             <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
//               {filterTests(expiredTests).length > 0 ? (
//                 filterTests(expiredTests).map((test: any) => (
//                   <GridItem
//                     key={test.id}
//                     p={4}
//                     border="1px"
//                     borderColor="red.200"
//                     borderRadius="md"
//                     bg="red.50"
//                     boxShadow="md"
//                     _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
//                     cursor="pointer"
//                     onClick={() => handleTestClick(test)}
//                   >
//                     <Text fontSize="lg" fontWeight="bold" color="red.800">
//                       {test.name}
//                     </Text>
//                     <Text fontSize="sm" color="gray.600">
//                       Expired on: {new Date(test.validity).toLocaleDateString()}
//                     </Text>
//                   </GridItem>
//                 ))
//               ) : (
//                 <Text>No expired tests available.</Text>
//               )}
//             </Grid>
//           </TabPanel>
//         </TabPanels>
//       </Tabs>

//       {/* Modal for Test Details */}
//       {selectedTest && (
//         <Modal isOpen={isOpen} onClose={resetModal}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Test Details</ModalHeader>
//             <ModalBody>
//               <Text><b>Name:</b> {selectedTest.name}</Text>
//               <Text><b>Description:</b> {selectedTest.description}</Text>
//               <Text><b>Created By:</b> {selectedTest.created_by}</Text>
//               <Text><b>Category:</b> {selectedTest.category}</Text>
//               <Text><b>Timings:</b> {selectedTest.timings} minutes</Text>
//               <Text><b>Validity:</b> {new Date(selectedTest.validity).toLocaleDateString()}</Text>
//             </ModalBody>
//             <ModalFooter>
//               {activeTests.some((test: any) => test.id === selectedTest.id) ? (
//                 <Button
//                   colorScheme="green"
//                   mr={3}
//                   onClick={() => navigate('/exam', { state: { testId: selectedTest.id ,testDuration: selectedTest.timings,institute: selectedTest.created_by,testName: selectedTest.name} })}
//                 >
//                   Start Test
//                 </Button>
//               ) : (
//                 <Text color="red.500" fontWeight="bold">Expired</Text>
//               )}
//               <Button variant="ghost" onClick={resetModal}>Close</Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       )}
//     </Box>
//   );
// };

// export default StudentTestDashboard;




// Version 3 : Enhancement to version 2 with purple theme support 

import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import useGetData from '@/hooks/useGetData';

export const StudentTestDashboard: React.FC = () => {
  const { authState } = useAuth();
  const userId = authState?.userId;

  const { data, error, isLoading } = useGetData(userId, `/api/ip/users/${userId}/tests`);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTest, setSelectedTest] = useState<any>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const resetModal = () => {
    setSelectedTest(null);
    onClose();
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text color="red.500">Failed to load tests.</Text>;

  const { activeTests = [], expiredTests = [] } = data;

  const filterTests = (tests: any[]) =>
    tests.filter((test) =>
      Object.values(test).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  const handleTestClick = (test: any) => {
    setSelectedTest(test);
    onOpen();
  };

  return (
    <Box p={6} bgGradient="linear(to-br, purple.50, purple.100)">
      <Heading mb={4} textAlign="center" color="purple.700">
        Candidate Dashboard
      </Heading>

      {/* Search Bar */}
      <Input
        placeholder="Search tests by name, category, or creator..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={6}
        size="lg"
        borderColor="purple.400"
        focusBorderColor="purple.600"
      />

      {/* Tabs */}
      <Tabs isFitted variant="soft-rounded" colorScheme="purple">
        <TabList mb={4}>
          <Tab>Active Tests</Tab>
          <Tab>Expired Tests</Tab>
        </TabList>
        <TabPanels>
          {/* Active Tests Tab */}
          <TabPanel>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
              {filterTests(activeTests).length > 0 ? (
                filterTests(activeTests).map((test: any) => (
                  <GridItem
                    key={test.id}
                    p={4}
                    border="1px"
                    borderColor="purple.200"
                    borderRadius="md"
                    bg="purple.50"
                    boxShadow="md"
                    _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
                    cursor="pointer"
                    onClick={() => handleTestClick(test)}
                  >
                    <Text fontSize="lg" fontWeight="bold" color="purple.800">
                      {test.name}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Created By: {test.created_by}
                    </Text>
                  </GridItem>
                ))
              ) : (
                <Text>No active tests available.</Text>
              )}
            </Grid>
          </TabPanel>

          {/* Expired Tests Tab */}
          <TabPanel>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
              {filterTests(expiredTests).length > 0 ? (
                filterTests(expiredTests).map((test: any) => (
                  <GridItem
                    key={test.id}
                    p={4}
                    border="1px"
                    borderColor="purple.200"
                    borderRadius="md"
                    bg="purple.50"
                    boxShadow="md"
                    _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
                    cursor="pointer"
                    onClick={() => handleTestClick(test)}
                  >
                    <Text fontSize="lg" fontWeight="bold" color="purple.800">
                      {test.name}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      Expired on: {new Date(test.validity).toLocaleDateString()}
                    </Text>
                  </GridItem>
                ))
              ) : (
                <Text>No expired tests available.</Text>
              )}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Modal for Test Details */}
      {selectedTest && (
        <Modal isOpen={isOpen} onClose={resetModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Test Details</ModalHeader>
            <ModalBody>
              <Text><b>Name:</b> {selectedTest.name}</Text>
              <Text><b>Description:</b> {selectedTest.description}</Text>
              <Text><b>Created By:</b> {selectedTest.created_by}</Text>
              <Text><b>Category:</b> {selectedTest.category}</Text>
              <Text><b>Timings:</b> {selectedTest.timings} minutes</Text>
              <Text><b>Validity:</b> {new Date(selectedTest.validity).toLocaleDateString()}</Text>
            </ModalBody>
            <ModalFooter>
              {activeTests.some((test: any) => test.id === selectedTest.id) ? (
                <Button
                  colorScheme="purple"
                  mr={3}
                  onClick={() => navigate('/exam', { state: { testId: selectedTest.id, testDuration: selectedTest.timings, institute: selectedTest.created_by, testName: selectedTest.name } })}
                >
                  Start Test
                </Button>
              ) : (
                <Text color="red.500" fontWeight="bold">Expired</Text>
              )}
              <Button variant="ghost" onClick={resetModal}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default StudentTestDashboard;
