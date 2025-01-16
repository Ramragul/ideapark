//Version 1

// import { useAuth } from '@/contexts/AuthContext';
// import useGetData from '@/hooks/useGetData';
// import React from 'react';
// import { Box, Button, Table, Thead, Tbody, Tr, Th, Td, Text, Spinner, VStack, Heading, useBreakpointValue, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { EditIcon } from '@chakra-ui/icons';

// export const StudentStatsPage = () => {
//     const { authState } = useAuth();
//     const { data, error, isLoading } = useGetData(authState.userId, `/api/ip/partner/${authState.userId}/students`);
//     const navigate = useNavigate();
//     const mobileView = useBreakpointValue({ base: true, md: false });
//     const { isOpen, onOpen, onClose } = useDisclosure();

//     const userId = authState.userId

//     console.log("Students data returned from the backend : " +"Partner ID :" +userId+  "Data :" +JSON.stringify(data))

//     if (isLoading) return <Spinner size="xl" color="pink.500" />;
//     if (error) return <Text color="red.500">Error: {error}</Text>;


//     return (
//       <div>Student Stas page</div>
//     );
// };

// export default StudentStatsPage;


// Version 2 : Design Enhancements

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
// import { useNavigate } from 'react-router-dom';

// export const StudentStatsPage: React.FC = () => {
//   const { authState } = useAuth();
//   const { data, error, isLoading } = useGetData(authState.userId, `/api/ip/partner/${authState.userId}/students`);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();
//   const isMobileView = useBreakpointValue({ base: true, md: false });

//   const filteredStudents = useMemo(() => {
//     if (!data?.student) return [];
//     return data.student.filter((student: any) => {
//       const term = searchTerm.toLowerCase();
//       return (
//         student.name.toLowerCase().includes(term) ||
//         student.mobile.includes(term) ||
//         student.email.toLowerCase().includes(term) ||
//         student.city.toLowerCase().includes(term)
//       );
//     });
//   }, [data, searchTerm]);

//   const handleAnalyze = (mobile: string) => {

//     console.log("Mobile Number :" +mobile)
//     navigate(`/student/stats/details`, { state: { mobile } });
//   };

//   if (isLoading) return <Spinner size="xl" color="pink.500" />;
//   if (error) return <Text color="red.500">Error: {error}</Text>;

//   return (
//     <Box p={4}>
//       <Heading mb={6} textAlign="center">
//         Student Performance Analysis
//       </Heading>

//       <Flex mb={4} justifyContent="center">
//         <Input
//           placeholder="Search students..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           width={{ base: '100%', md: '50%' }}
//           variant="outline"
//           focusBorderColor="pink.500"
//         />
//       </Flex>

//       {isMobileView ? (
//         <VStack spacing={4} align="stretch">
//           {filteredStudents.map((student: any, index: number) => (
//             <Card key={student.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
//               <CardBody>
//                 <Stack spacing={3}>
//                   <Text><strong>S.No:</strong> {index + 1}</Text>
//                   <Text><strong>Name:</strong> {student.name}</Text>
//                   <Text><strong>Mobile:</strong> {student.mobile}</Text>
//                   <Text><strong>Email:</strong> {student.email}</Text>
//                   <Text><strong>City:</strong> {student.city}</Text>
//                   <Button
//                     mt={2}
//                     colorScheme="teal"
//                     onClick={() => handleAnalyze(student.mobile)}
//                   >
//                     Analyze
//                   </Button>
//                 </Stack>
//               </CardBody>
//             </Card>
//           ))}
//         </VStack>
//       ) : (
//         <Table variant="striped" colorScheme="pink">
//           <Thead>
//             <Tr>
//               <Th>S.No</Th>
//               <Th>Name</Th>
//               <Th>Mobile</Th>
//               <Th>Email</Th>
//               <Th>City</Th>
//               <Th>Actions</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {filteredStudents.map((student: any, index: number) => (
//               <Tr key={student.id}>
//                 <Td>{index + 1}</Td>
//                 <Td>{student.name}</Td>
//                 <Td>{student.mobile}</Td>
//                 <Td>{student.email}</Td>
//                 <Td>{student.city}</Td>
//                 <Td>
//                   <Button
//                     size="sm"
//                     colorScheme="teal"
//                     onClick={() => handleAnalyze(student.mobile)}
//                   >
//                     Analyze
//                   </Button>
//                 </Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       )}
//     </Box>
//   );
// };

// export default StudentStatsPage;



// Version 3 : 2 is the working version, this is the build fix version

import React, { useState, useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import useGetData from '@/hooks/useGetData';
//import useGetTestResults from '@/hooks/useGetTestResults';
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Spinner,
  VStack,
  Heading,
  Input,
  Flex,
  useBreakpointValue,
  Card,
  CardBody,
  Stack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface Student {
  id: number;
  name: string;
  mobile: string;
  email: string;
  city: string;
}

interface ApiResponse {
  student: Student[];
}


export const StudentStatsPage: React.FC = () => {
  const { authState } = useAuth();
  const { data, error, isLoading } = useGetData(authState.userId, `/api/ip/partner/${authState.institute}/students`);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const isMobileView = useBreakpointValue({ base: true, md: false });

  // const filteredStudents = useMemo(() => {
  //   if (!data?.student) return [];
  //   return data.student.filter((student: any) => {
  //     const term = searchTerm.toLowerCase();
  //     return (
  //       student.name.toLowerCase().includes(term) ||
  //       student.mobile.includes(term) ||
  //       student.email.toLowerCase().includes(term) ||
  //       student.city.toLowerCase().includes(term)
  //     );
  //   });
  // }, [data, searchTerm]);

  const filteredStudents = useMemo(() => {
    // Safely cast `data` to ApiResponse or use a fallback if data is undefined
    //const studentData = (data as ApiResponse | undefined)?.student || [];
    const studentData = (data as unknown as ApiResponse)?.student || [];

  
    const term = searchTerm.toLowerCase();
    return studentData.filter((student) => {
      return (
        student.name.toLowerCase().includes(term) ||
        student.mobile.includes(term) ||
        student.email.toLowerCase().includes(term) ||
        student.city.toLowerCase().includes(term)
      );
    });
  }, [data, searchTerm]);
  

  const handleAnalyze = (mobile: string) => {

    console.log("Mobile Number :" +mobile)
    navigate(`/student/stats/details`, { state: { mobile } });
  };

  if (isLoading) return <Spinner size="xl" color="pink.500" />;
  if (error) return <Text color="red.500">Error: {error}</Text>;

  return (
    <Box p={4}>
      <Heading mb={6} textAlign="center">
        Student Performance Analysis
      </Heading>

      <Flex mb={4} justifyContent="center">
        <Input
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          width={{ base: '100%', md: '50%' }}
          variant="outline"
          focusBorderColor="pink.500"
        />
      </Flex>

      {isMobileView ? (
        <VStack spacing={4} align="stretch">
          {filteredStudents.map((student: any, index: number) => (
            <Card key={student.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <CardBody>
                <Stack spacing={3}>
                  <Text><strong>S.No:</strong> {index + 1}</Text>
                  <Text><strong>Name:</strong> {student.name}</Text>
                  <Text><strong>Mobile:</strong> {student.mobile}</Text>
                  <Text><strong>Email:</strong> {student.email}</Text>
                  <Text><strong>City:</strong> {student.city}</Text>
                  <Button
                    mt={2}
                    colorScheme="teal"
                    onClick={() => handleAnalyze(student.mobile)}
                  >
                    Analyze
                  </Button>
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
              <Th>Name</Th>
              <Th>Mobile</Th>
              <Th>Email</Th>
              <Th>City</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredStudents.map((student: any, index: number) => (
              <Tr key={student.id}>
                <Td>{index + 1}</Td>
                <Td>{student.name}</Td>
                <Td>{student.mobile}</Td>
                <Td>{student.email}</Td>
                <Td>{student.city}</Td>
                <Td>
                  <Button
                    size="sm"
                    colorScheme="teal"
                    onClick={() => handleAnalyze(student.mobile)}
                  >
                    Analyze
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default StudentStatsPage;