import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const StudentHomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bgGradient="linear(to-b, purple.600, purple.800)"
      color="white"
      p={4}
    >
      <Heading mb={8} fontSize={{ base: "2xl", md: "4xl" }}>
        Welcome to Student Home Page
      </Heading>
      <Flex
        wrap="wrap"
        justify="center"
        gap={6}
        w={{ base: "100%", md: "70%" }}
      >
        {/* Tile for Test Home Page */}
        <Box
          w={{ base: "100%", md: "45%" }}
          h="200px"
          bg="purple.500"
          borderRadius="lg"
          boxShadow="lg"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.05)", bg: "purple.400" }}
          cursor="pointer"
          onClick={() => navigate("/student/home/test")}
        >
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
            Test Home Page
          </Text>
        </Box>

        {/* Tile for Lectures Page */}
        <Box
          w={{ base: "100%", md: "45%" }}
          h="200px"
          bg="purple.500"
          borderRadius="lg"
          boxShadow="lg"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.05)", bg: "purple.400" }}
          cursor="pointer"
          onClick={() => navigate("/student/lecture")}
        >
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
            Lectures Page
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default StudentHomePage;
