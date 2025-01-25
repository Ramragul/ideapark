// Version 1

// import React from "react";
// import { Box, Flex, Heading, Text } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// export const StudentHomePage: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <Flex
//       direction="column"
//       align="center"
//       justify="center"
//       minH="100vh"
//       bgGradient="linear(to-b, purple.600, purple.800)"
//       color="white"
//       p={4}
//     >
//       <Heading mb={8} fontSize={{ base: "2xl", md: "4xl" }}>
//         Welcome to Student Home Page
//       </Heading>
//       <Flex
//         wrap="wrap"
//         justify="center"
//         gap={6}
//         w={{ base: "100%", md: "70%" }}
//       >
//         {/* Tile for Test Home Page */}
//         <Box
//           w={{ base: "100%", md: "45%" }}
//           h="200px"
//           bg="purple.500"
//           borderRadius="lg"
//           boxShadow="lg"
//           display="flex"
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//           transition="transform 0.2s"
//           _hover={{ transform: "scale(1.05)", bg: "purple.400" }}
//           cursor="pointer"
//           onClick={() => navigate("/student/home/test")}
//         >
//           <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
//             Test Home Page
//           </Text>
//         </Box>

//         {/* Tile for Lectures Videos */}
//         <Box
//           w={{ base: "100%", md: "45%" }}
//           h="200px"
//           bg="purple.500"
//           borderRadius="lg"
//           boxShadow="lg"
//           display="flex"
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//           transition="transform 0.2s"
//           _hover={{ transform: "scale(1.05)", bg: "purple.400" }}
//           cursor="pointer"
//           onClick={() => navigate("/lecture/videos")}
//         >
//           <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
//             Lectures Videos
//           </Text>
//         </Box>

//                 {/* Tile for Lectures Documents */}
//                 <Box
//           w={{ base: "100%", md: "45%" }}
//           h="200px"
//           bg="purple.500"
//           borderRadius="lg"
//           boxShadow="lg"
//           display="flex"
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//           transition="transform 0.2s"
//           _hover={{ transform: "scale(1.05)", bg: "purple.400" }}
//           cursor="pointer"
//           onClick={() => navigate("/lecture/documents")}
//         >
//           <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
//             Lectures Documents
//           </Text>
//         </Box>

//       </Flex>
//     </Flex>
//   );
// };

// export default StudentHomePage;



// Version 2 : Design Enhancement

import React from "react";
import { Box, Flex, Heading, Text, Grid, GridItem, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaBook, FaVideo, FaFileAlt } from "react-icons/fa";

export const StudentHomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bgGradient="linear(to-b, pink.400, purple.600)"
      color="white"
      p={6}
    >
      {/* Hero Section */}
      <Box textAlign="center" mb={12}>
        <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb={4}>
          Welcome to Your Learning Hub
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} opacity={0.8}>
          Explore lectures, tests, and resources to boost your learning journey.
        </Text>
      </Box>

      {/* Grid Section */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
        w="100%"
        maxW="1200px"
      >
        {/* Test Home Page Tile */}
        <GridItem>
          <Box
            h="220px"
            bg="white"
            borderRadius="lg"
            boxShadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            transition="transform 0.3s, background-color 0.3s"
            _hover={{ transform: "scale(1.05)", bg: "pink.100" }}
            cursor="pointer"
            onClick={() => navigate("/student/home/test")}
          >
            <Icon as={FaBook} boxSize={12} color="pink.500" mb={4} />
            <Text fontSize="xl" fontWeight="bold" color="gray.800">
              Test Home Page
            </Text>
          </Box>
        </GridItem>

        {/* Lectures Videos Tile */}
        <GridItem>
          <Box
            h="220px"
            bg="white"
            borderRadius="lg"
            boxShadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            transition="transform 0.3s, background-color 0.3s"
            _hover={{ transform: "scale(1.05)", bg: "pink.100" }}
            cursor="pointer"
            onClick={() => navigate("/lecture/videos")}
          >
            <Icon as={FaVideo} boxSize={12} color="pink.500" mb={4} />
            <Text fontSize="xl" fontWeight="bold" color="gray.800">
              Lectures Videos
            </Text>
          </Box>
        </GridItem>

        {/* Lectures Documents Tile */}
        {/* <GridItem>
          <Box
            h="220px"
            bg="white"
            borderRadius="lg"
            boxShadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            transition="transform 0.3s, background-color 0.3s"
            _hover={{ transform: "scale(1.05)", bg: "pink.100" }}
            cursor="pointer"
            onClick={() => navigate("/lecture/documents")}
          >
            <Icon as={FaFileAlt} boxSize={12} color="pink.500" mb={4} />
            <Text fontSize="xl" fontWeight="bold" color="gray.800">
              Lectures Documents
            </Text>
          </Box>
        </GridItem> */}
      </Grid>
    </Flex>
  );
};

export default StudentHomePage;
