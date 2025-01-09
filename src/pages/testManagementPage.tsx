// Version 1 - simple ui to fetch backend data

// import { useAuth } from '@/contexts/AuthContext';
// import useGetData from '@/hooks/useGetData';
// import React from 'react'


// export const TestManagementPage = () => {

//     const { authState } = useAuth();
//     // const { data, error, isLoading } = useGetData(authState.userId, '/api/ip/tests?created_by=36377');
//     const { data, error, isLoading } = useGetData(authState.userId, `/api/ip/tests?created_by=${authState.userId}`);


//     console.log("Received Data" +JSON.stringify(data));
//     return(
//         <div>PartnerTestHistory Page</div>
//     )
// }

// export default TestManagementPage;


// version 2 

import { useAuth } from '@/contexts/AuthContext';
import useGetData from '@/hooks/useGetData';
import React from 'react';
import { Box, Button, Table, Thead, Tbody, Tr, Th, Td, Text, Spinner, VStack, Heading, useBreakpointValue, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { EditIcon } from '@chakra-ui/icons';

export const TestManagementPage = () => {
    const { authState } = useAuth();
    const { data, error, isLoading } = useGetData(authState.userId, `/api/ip/tests?created_by=${authState.userId}`);
    const navigate = useNavigate();
    const mobileView = useBreakpointValue({ base: true, md: false });
    const { isOpen, onOpen, onClose } = useDisclosure();

    if (isLoading) return <Spinner size="xl" color="pink.500" />;
    if (error) return <Text color="red.500">Error: {error}</Text>;

    const handleNavigateToTestDetails = (test: any) => {
        navigate(`/testDetails`, { state: { test } });
    };

    return (
        <Box p={4}>
            <VStack spacing={4} align="start">
                {/* <Heading size="lg" color='green'>Test Management</Heading> */}
                <Text fontSize="md" color="gray.500">
                    Manage your tests and their details.
                </Text>

                <Box w="100%" overflowX="auto">
                    <Table variant="simple" size={mobileView ? "sm" : "md"} colorScheme='green'>
                        <Thead bgColor='teal'>
                            <Tr >
                                <Th color='white'>Name</Th>
                                <Th color='white'>Description</Th>
                                <Th color='white'>Category</Th>
                                <Th color='white'>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data?.map((test: any) => (
                                <Tr key={test.id}>
                                    <Td>{test.name}</Td>
                                    <Td>{test.description}</Td>
                                    <Td>{test.category}</Td>
                                    <Td>
                                        <IconButton
                                            icon={<EditIcon />}
                                            colorScheme="teal"
                                            variant="outline"
                                            onClick={() => handleNavigateToTestDetails(test)}
                                            aria-label="Edit Test"
                                        />
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </VStack>
        </Box>
    );
};

export default TestManagementPage;



