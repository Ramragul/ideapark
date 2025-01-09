// import React from 'react'

// export const PartnerLandingPage= () => {
//   return (
//     <div>partnerLandingPage</div>
//   )
// }

// export default PartnerLandingPage;



import React from "react";
import { Box, Grid, GridItem, Heading, Text, Button, VStack } from "@chakra-ui/react";

import { useNavigate } from 'react-router-dom';

import { useAuth } from "@/contexts/AuthContext";

export const PartnerLandingPage: React.FC = () => {

  const {authState} = useAuth();

  const navigate = useNavigate ();
  return (
    <Box p={6} bg="gray.50" minH="100vh">
      <Heading textAlign="center" mb={6} color="teal.500">
       {authState.userName}
      </Heading>
      <Text textAlign="center" mb={8} fontSize="lg" color="gray.600">
        Manage your business effectively with our streamlined tools and dashboard.
      </Text>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        maxW="1200px"
        mx="auto"
      >
        {/* Create Test Tile */}
        <GridItem
          bg="white"
          p={6}
          shadow="md"
          borderRadius="lg"
          textAlign="center"
          _hover={{ shadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
        >
          <Heading size="md" color="teal.600" mb={4}>
            Create Test
          </Heading>
          <Text color="gray.500" mb={6}>
            Easily create and configure tests for your audience.
          </Text>
          <Button colorScheme="teal" size="md" onClick= {()=> navigate('/test/creation')}>
            Get Started
          </Button>
        </GridItem>

        {/* Admin Dashboard Tile */}
        <GridItem
          bg="white"
          p={6}
          shadow="md"
          borderRadius="lg"
          textAlign="center"
          _hover={{ shadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
        >
          <Heading size="md" color="purple.600" mb={4}>
            Test Management
          </Heading>
          <Text color="gray.500" mb={6}>
            View analytics, manage users, and access detailed reports.
          </Text>
          <Button colorScheme="purple" size="md" onClick= {()=> navigate('/test/management')}>
            Manage Test
          </Button >
        </GridItem>

        {/* Payment Management Tile */}
        <GridItem
          bg="white"
          p={6}
          shadow="md"
          borderRadius="lg"
          textAlign="center"
          _hover={{ shadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
        >
          <Heading size="md" color="blue.600" mb={4}>
            Test Stats
          </Heading>
          <Text color="gray.500" mb={6}>
            Track Tests
          </Text>
          <Button colorScheme="blue" size="md" onClick= {()=> navigate('/test/stats')}>
            Test Stats
          </Button>
        </GridItem>

        {/* User Management Tile */}
        <GridItem
          bg="white"
          p={6}
          shadow="md"
          borderRadius="lg"
          textAlign="center"
          _hover={{ shadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
        >
          <Heading size="md" color="orange.600" mb={4}>
            Candidate Performance Analytics
          </Heading>
          <Text color="gray.500" mb={6}>
            Analyse Candidate Performance.
          </Text>
          <Button colorScheme="orange" size="md" onClick= {()=> navigate('/student/stats')}>
            Analyse Candidates
          </Button>
        </GridItem>

         {/* File Format Tile */}

        <GridItem
          bg="white"
          p={6}
          shadow="md"
          borderRadius="lg"
          textAlign="center"
          _hover={{ shadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
        >
          <Heading size="md" color="green.600" mb={4}>
          File Format Guide
          </Heading>
          <Text color="gray.500" mb={6}>
          Learn and download supported file formats for uploads.
          </Text>
          <Button colorScheme="green" size="md" onClick= {()=> navigate('/file/format')}>
          View Formats
          </Button>
        </GridItem>

        {/* Support Tile */}
        <GridItem
          bg="white"
          p={6}
          shadow="md"
          borderRadius="lg"
          textAlign="center"
          _hover={{ shadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
        >
          <Heading size="md" color="pink.600" mb={4}>
            Support
          </Heading>
          <Text color="gray.500" mb={6}>
            Access FAQs, guides, and get help from our support team.
          </Text>
          <Button colorScheme="pink" size="md">
            Get Support
          </Button>
        </GridItem>

       

      </Grid>
    </Box>
  );
};

export default PartnerLandingPage;

