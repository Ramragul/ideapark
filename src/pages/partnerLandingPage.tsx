
// Version 1


// import React from "react";
// import { Box, Grid, GridItem, Heading, Text, Button } from "@chakra-ui/react";

// import { useNavigate } from 'react-router-dom';

// import { useAuth } from "@/contexts/AuthContext";

// export const PartnerLandingPage: React.FC = () => {

//   const {authState} = useAuth();

//   const navigate = useNavigate ();
//   return (
//     <Box p={6} bg="gray.50" minH="100vh">
//       <Heading textAlign="center" mb={6} color="#9966CC">
//        {authState.userName}
//       </Heading>
//       <Text textAlign="center" mb={8} fontSize="lg" color="gray.600">
//         Manage your business effectively with our streamlined tools and dashboard.
//       </Text>
//       <Grid
//         templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
//         gap={6}
//         maxW="1200px"
//         mx="auto"
//       >
//         {/* Create Test Tile */}
//         <GridItem
//           bg="white"
//           p={6}
//           shadow="md"
//           borderRadius="lg"
//           textAlign="center"
//           _hover={{ shadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
//         >
//           <Heading size="md" color="teal.600" mb={4}>
//             Create Test
//           </Heading>
//           <Text color="gray.500" mb={6}>
//             Easily create and configure tests for your audience.
//           </Text>
//           <Button colorScheme="teal" size="md" onClick= {()=> navigate('/test/creation')}>
//             Get Started
//           </Button>
//         </GridItem>

//         {/* Admin Dashboard Tile */}
//         <GridItem
//           bg="white"
//           p={6}
//           shadow="md"
//           borderRadius="lg"
//           textAlign="center"
//           _hover={{ shadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
//         >
//           <Heading size="md" color="purple.600" mb={4}>
//             Test Management
//           </Heading>
//           <Text color="gray.500" mb={6}>
//             View analytics, manage users, and access detailed reports.
//           </Text>
//           <Button colorScheme="purple" size="md" onClick= {()=> navigate('/test/management')}>
//             Manage Test
//           </Button >
//         </GridItem>

//         {/* Payment Management Tile */}
//         <GridItem
//           bg="white"
//           p={6}
//           shadow="md"
//           borderRadius="lg"
//           textAlign="center"
//           _hover={{ shadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
//         >
//           <Heading size="md" color="blue.600" mb={4}>
//             Test Stats
//           </Heading>
//           <Text color="gray.500" mb={6}>
//             Track Tests
//           </Text>
//           <Button colorScheme="blue" size="md" onClick= {()=> navigate('/test/stats')}>
//             Test Stats
//           </Button>
//         </GridItem>

//         {/* User Management Tile */}
//         <GridItem
//           bg="white"
//           p={6}
//           shadow="md"
//           borderRadius="lg"
//           textAlign="center"
//           _hover={{ shadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
//         >
//           <Heading size="md" color="orange.600" mb={4}>
//             Candidate Performance Analytics
//           </Heading>
//           <Text color="gray.500" mb={6}>
//             Analyse Candidate Performance.
//           </Text>
//           <Button colorScheme="orange" size="md" onClick= {()=> navigate('/student/stats')}>
//             Analyse Candidates
//           </Button>
//         </GridItem>

//         {/* Lecture Video Uploads*/}

//          <GridItem
//           bg="white"
//           p={6}
//           shadow="md"
//           borderRadius="lg"
//           textAlign="center"
//           _hover={{ shadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
//         >
//           <Heading size="md" color="pink.700" mb={4}>
//           Lecture Video Upload
//           </Heading>
//           <Text color="gray.500" mb={6}>
//           Upload Lecture Videos in a simple steps
//           </Text>
//           <Button bgColor="pink.700"  color="white" size="md" onClick= {()=> navigate('/lecture/video/upload')}>
//           Upload Video
//           </Button>
//         </GridItem>

//                 {/* Lecture Document Uploads*/}

//                 <GridItem
//           bg="white"
//           p={6}
//           shadow="md"
//           borderRadius="lg"
//           textAlign="center"
//           _hover={{ shadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
//         >
//           <Heading size="md" color="teal.700" mb={4}>
//           Lecture Document Upload
//           </Heading>
//           <Text color="gray.500" mb={6}>
//           Upload Lecture Videos in a simple steps
//           </Text>
//           <Button bgColor="teal.700"  color="white" size="md" onClick= {()=> navigate('/lecture/document/upload')}>
//           Upload Document
//           </Button>
//         </GridItem>


//          {/* File Format Tile */}

//         <GridItem
//           bg="white"
//           p={6}
//           shadow="md"
//           borderRadius="lg"
//           textAlign="center"
//           _hover={{ shadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
//         >
//           <Heading size="md" color="green.600" mb={4}>
//           File Format Guide
//           </Heading>
//           <Text color="gray.500" mb={6}>
//           Learn and download supported file formats for uploads.
//           </Text>
//           <Button colorScheme="green" size="md" onClick= {()=> navigate('/file/format')}>
//           View Formats
//           </Button>
//         </GridItem>


//         {/* Support Tile */}
//         <GridItem
//           bg="white"
//           p={6}
//           shadow="md"
//           borderRadius="lg"
//           textAlign="center"
//           _hover={{ shadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
//         >
//           <Heading size="md" color="pink.500" mb={4}>
//             Support
//           </Heading>
//           <Text color="gray.500" mb={6}>
//             Access FAQs, guides, and get help from our support team.
//           </Text>
//           <Button bgColor="pink.500" color="white" size="md">
//             Get Support
//           </Button>
//         </GridItem>

       

//       </Grid>
//     </Box>
//   );
// };

// export default PartnerLandingPage;



// Version 2 :  Enhanced Design

// import React from "react";
// import {
//   Box,
//   Grid,
//   GridItem,
//   Heading,
//   Text,
//   Button,
//   Icon,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "@/contexts/AuthContext";
// import { FaChalkboardTeacher, FaFileAlt, FaRegChartBar, FaFileUpload, FaTools, FaUsers, FaInfoCircle, FaVideo } from "react-icons/fa";

// export const PartnerLandingPage: React.FC = () => {
//   const { authState } = useAuth();
//   const navigate = useNavigate();

//   const cardData = [
//     {
//       title: "Create Test",
//       description: "Easily create and configure tests for your audience.",
//       color: "teal.500",
//       icon: FaChalkboardTeacher,
//       action: () => navigate("/test/creation"),
//     },
//     {
//       title: "Test Management",
//       description: "View analytics, manage users, and access detailed reports.",
//       color: "purple.500",
//       icon: FaRegChartBar,
//       action: () => navigate("/test/management"),
//     },
//     {
//       title: "Test Stats",
//       description: "Track tests effectively.",
//       color: "blue.500",
//       icon: FaFileAlt,
//       action: () => navigate("/test/stats"),
//     },
//     {
//       title: "Candidate Performance Analytics",
//       description: "Analyze candidate performance with detailed insights.",
//       color: "orange.500",
//       icon: FaUsers,
//       action: () => navigate("/student/stats"),
//     },
//     {
//       title: "Lecture Video Upload",
//       description: "Upload lecture videos in simple steps.",
//       color: "pink.500",
//       icon: FaVideo,
//       action: () => navigate("/lecture/video/upload"),
//     },
//     {
//       title: "Lecture Document Upload",
//       description: "Upload lecture documents with ease.",
//       color: "teal.700",
//       icon: FaFileUpload,
//       action: () => navigate("/lecture/document/upload"),
//     },
//     {
//       title: "File Format Guide",
//       description: "Learn and download supported file formats for uploads.",
//       color: "green.500",
//       icon: FaTools,
//       action: () => navigate("/file/format"),
//     },
//     {
//       title: "Support",
//       description: "Access FAQs, guides, and support team help.",
//       color: "pink.600",
//       icon: FaInfoCircle,
//       action: () => {},
//     },
//   ];

//   return (
//     <Box
//       p={6}
//       bgGradient="linear(to-r, pink.50, blue.50)"
//       minH="100vh"
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//     >
//       <Heading textAlign="center" mb={6} color="purple.600" fontSize="3xl">
//         Welcome, {authState.userName}!
//       </Heading>
//       <Text textAlign="center" mb={8} fontSize="lg" color="gray.700">
//         Manage your business effectively with our streamlined tools and
//         dashboard.
//       </Text>
//       <Grid
//         templateColumns={{ base: "1fr", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
//         gap={8}
//         maxW="1200px"
//         mx="auto"
//       >
//         {cardData.map((card, index) => (
//           <GridItem
//             key={index}
//             bg="white"
//             p={6}
//             shadow="lg"
//             borderRadius="2xl"
//             textAlign="center"
//             transition="transform 0.3s ease, box-shadow 0.3s ease"
//             _hover={{
//               transform: "translateY(-10px)",
//               shadow: "xl",
//             }}
//           >
//             <Icon as={card.icon} w={12} h={12} color={card.color} mb={4} />
//             <Heading size="md" color={card.color} mb={4}>
//               {card.title}
//             </Heading>
//             <Text color="gray.600" mb={6}>
//               {card.description}
//             </Text>
//             <Button colorScheme={card.color.split(".")[0]} onClick={card.action}>
//               {card.title.includes("Upload") ? "Upload Now" : "Get Started"}
//             </Button>
//           </GridItem>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default PartnerLandingPage;


// Version 3: Enhanced Design with Gradient / Pallette Colours

import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { FaChalkboardTeacher, FaFileAlt, FaRegChartBar, FaFileUpload, FaTools, FaUsers, FaInfoCircle, FaVideo } from "react-icons/fa";

export const PartnerLandingPage: React.FC = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();

  const cardData = [
    {
      title: "Create Test",
      description: "Easily create and configure tests for your audience.",
      gradient: "linear(to-r, teal.400, blue.500)",
      icon: FaChalkboardTeacher,
      action: () => navigate("/test/creation"),
    },
    {
      title: "Test Management",
      description: "View analytics, manage users, and access detailed reports.",
      gradient: "linear(to-r, purple.400, pink.600)",
      icon: FaRegChartBar,
      action: () => navigate("/test/management"),
    },
    {
      title: "Test Stats",
      description: "Track tests effectively.",
      gradient: "linear(to-r, blue.400, cyan.500)",
      icon: FaFileAlt,
      action: () => navigate("/test/stats"),
    },
    {
      title: "Candidate Performance Analytics",
      description: "Analyze candidate performance with detailed insights.",
      gradient: "linear(to-r, orange.400, red.500)",
      icon: FaUsers,
      action: () => navigate("/student/stats"),
    },
    {
      title: "Lecture Video Upload",
      description: "Upload lecture videos in simple steps.",
      gradient: "linear(to-r, pink.500, yellow.500)",
      icon: FaVideo,
      action: () => navigate("/lecture/video/upload"),
    },
    {
      title: "Lecture Document Upload",
      description: "Upload lecture documents with ease.",
      gradient: "linear(to-r, cyan.500, teal.400)",
      icon: FaFileUpload,
      action: () => navigate("/lecture/document/upload"),
    },
    {
      title: "File Format Guide",
      description: "Learn and download supported file formats for uploads.",
     // gradient: "linear(to-r, green.400, lime.500)",
      gradient: "linear(to-r, blue.800, cyan.500)",
      icon: FaTools,
      action: () => navigate("/file/format"),
    },
    {
      title: "Support",
      description: "Access FAQs, guides, and support team help.",
     // gradient: "linear(to-r, purple.500, indigo.600)",
     gradient: "linear(to-r, pink.700, purple.100)",
      icon: FaInfoCircle,
      action: () => {},
    },
  ];

  return (
    <Box
      p={6}
      bgGradient="linear(to-br, #ff9a9e, #fecfef, #fad0c4, #fbc2eb)"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading
        textAlign="center"
        mb={6}
        bgGradient="linear(to-r, purple.500, pink.500, red.500)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="bold"
      >
        Welcome, {authState.userName}!
      </Heading>
      <Text textAlign="center" mb={8} fontSize="lg" color="gray.700">
        Manage your business effectively with our streamlined tools and
dashboard.
      </Text>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={8}
        maxW="1200px"
        mx="auto"
      >
        {cardData.map((card, index) => (
          <GridItem
            key={index}
            bgGradient={card.gradient}
            p={6}
            shadow="lg"
            borderRadius="2xl"
            textAlign="center"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{
              transform: "translateY(-10px)",
              shadow: "2xl",
            }}
          >
            <Icon as={card.icon} w={12} h={12} color="white" mb={4} />
            <Heading size="md" color="white" mb={4}>
              {card.title}
            </Heading>
            <Text color="whiteAlpha.800" mb={6}>
              {card.description}
            </Text>
            <Button
              bg="whiteAlpha.900"
              color="gray.800"
              _hover={{ bg: "white", color: card.gradient.split(",")[1] }}
              onClick={card.action}
            >
              {card.title.includes("Upload") ? "Upload Now" : "Get Started"}
            </Button>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default PartnerLandingPage;

