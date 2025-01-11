// version 1 

import React, { useState } from 'react';
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormLabel,
    Input,
    Text,
    Textarea,
    VStack,
    Heading,
    useBreakpointValue,
    useToast,
    Spinner,
    Card,
    CardBody,
    CardHeader,
    Flex
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import usePostData from '../hooks/usePostData';

import { useAuth } from '@/contexts/AuthContext';

export const TestDetailsPage = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [testData, setTestData] = useState(state?.test || {});
    const [file, setFile] = useState<File | null>(null);
    const mobileView = useBreakpointValue({ base: true, md: false });
    const toast = useToast();

    const { authState } = useAuth();
    if (!testData) {
        return <Spinner size="xl" color="pink.500" />;
    }

    const { postData: updateTestDetails, isLoading: isUpdating } = usePostData('/test/update');
    const { postData: uploadFile, isLoading: isUploading } = usePostData('/ip/test/eligible/users');

    const handleUpdateDetails = async () => {
        try {
            await updateTestDetails({
                testID: testData.id,
                testName: testData.name,
                testDescription: testData.description,
                testCategory: testData.category,
                testTimings: testData.timings,
                testValidity: testData.validity,
                modifiedBy: authState.userId,
            });

            toast({
                title: "Test updated successfully.",
                description: "The test details have been updated.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });

            navigate('/test/management');
        } catch (err) {
            console.error("Error updating test details:", err);
            toast({
                title: "Error",
                description: "Failed to update test details.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const handleUploadFile = async () => {
        if (!file) {
            toast({
                title: "No file selected.",
                description: "Please select a file to upload.",
                status: "warning",
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('testID', testData.id);
        formData.append('updatedBy', authState.userId || 'unknown');


        try {
            await uploadFile(formData);

            toast({
                title: "File uploaded successfully.",
                description: "The file has been uploaded.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });

            setFile(null); // Clear the file after upload
            navigate('/test/management');
        } catch (err) {
            console.error("Error uploading file:", err);
            toast({
                title: "Error",
                description: "Failed to upload the file.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
            setFile(selectedFiles[0]);

            console.log("File Uploaded" +file)
        } else {
            setFile(null);
        }
    };

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.files) {
    //       setFile(event.target.files[0]);
    //     }
    //   };

    return (
        <Box p={6} maxW="800px" mx="auto">
            {/* Back Button */}
            {/* <Flex justifyContent="start" mb={6} color='black'>
                <IconButton
                    aria-label="Back to Test Management"
                    icon={<ArrowBackIcon />}
                    colorScheme="teal"
                    variant="ghost"
                    size={mobileView ? 'md' : 'lg'}
                    onClick={() => navigate('/test/management')}
                    
                >
                   Back
                </IconButton>
                
            </Flex> */}

<Flex justifyContent="flex-start" alignItems="center" mb={6}>
  <Button
    leftIcon={<ArrowBackIcon />}
    colorScheme="red"
    variant="solid"
    size={mobileView ? 'md' : 'lg'}
    onClick={() => navigate('/test/management')}
  >
    Back
  </Button>
</Flex>


            <Card mb={6} shadow="lg">
                <CardHeader bg="teal.500" color="white" py={4} px={6} borderTopRadius="md">
                    <Heading size="md">Edit Test Details</Heading>
                </CardHeader>
                <CardBody>
                    <VStack spacing={4} align="start">
                        <FormControl>
                            <FormLabel htmlFor="test-name">Test Name</FormLabel>
                            <Input
                                id="test-name"
                                value={testData.name}
                                onChange={(e) => setTestData({ ...testData, name: e.target.value })}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="test-description">Test Description</FormLabel>
                            <Textarea
                                id="test-description"
                                value={testData.description}
                                onChange={(e) => setTestData({ ...testData, description: e.target.value })}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="test-category">Test Category</FormLabel>
                            <Input
                                id="test-category"
                                value={testData.category}
                                onChange={(e) => setTestData({ ...testData, category: e.target.value })}
                            />
                        </FormControl>

                        <Button
                            colorScheme="teal"
                            onClick={handleUpdateDetails}
                            isLoading={isUpdating}
                            loadingText="Updating..."
                            width={mobileView ? "100%" : "auto"}
                        >
                            Update Test Details
                        </Button>
                    </VStack>
                </CardBody>
            </Card>

            <Divider my={6} />

            <Card shadow="lg">
                <CardHeader bg="blue.500" color="white" py={4} px={6} borderTopRadius="md">
                    <Heading size="md">Upload Eligible Candidates</Heading>
                </CardHeader>
                <CardBody>
                    <VStack spacing={4} align="start">
                        <FormControl>
                            <FormLabel htmlFor="file">Upload Excel File</FormLabel>
                            <Input
                                id="file"
                                type="file"
                                accept=".xlsx, .xls"
                                onChange={handleFileChange}
                            />
                            {file && (
                                <Text fontSize="sm" color="green.500" mt={2}>{file.name} selected.</Text>
                            )}
                        </FormControl>



                        <Button
                            colorScheme="blue"
                            onClick={handleUploadFile}
                            isLoading={isUploading}
                            loadingText="Uploading..."
                            width={mobileView ? "100%" : "auto"}
                        >
                            Upload File
                        </Button>
                    </VStack>
                </CardBody>
            </Card>
        </Box>
    );
};

export default TestDetailsPage;
