// import React from 'react';
// import { Box, Flex, Heading, Grid, GridItem, Button, VStack, Text } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

// export const StudentHomePage: React.FC = () => {
//   const navigate = useNavigate();

//   const tiles = [
//     { title: 'Take a Test', description: 'Start your journey by attempting tests.', path: '/exam' },
//     { title: 'View Results', description: 'Check your performance and results.', path: '/test/result' },
//   ];

//   return (
//     <Box bgGradient="linear(to-r, pink.100, blue.100)" minH="100vh" py={8}>
//       <VStack spacing={4} align="center">
//         <Heading as="h1" size="2xl" color="pink.600">
//           Welcome, Candidate!
//         </Heading>
//         <Text fontSize="lg" color="gray.600">
//           Explore your options below and get started.
//         </Text>
//       </VStack>
//       <Grid
//         templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
//         gap={6}
//         px={{ base: 4, md: 8 }}
//         mt={8}
//       >
//         {tiles.map((tile, index) => (
//           <GridItem key={index}>
//             <Flex
//               direction="column"
//               align="center"
//               bgGradient="linear(to-t, blue.300, pink.200)"
//               borderRadius="md"
//               shadow="md"
//               p={6}
//               h="full"
//               justifyContent="center"
//               _hover={{ transform: 'scale(1.05)', shadow: 'lg' }}
//               transition="0.3s"
//             >
//               <Heading as="h3" size="lg" color="white">
//                 {tile.title}
//               </Heading>
//               <Text mt={2} mb={4} fontSize="md" color="whiteAlpha.800" textAlign="center">
//                 {tile.description}
//               </Text>
//               <Button
//                 size="lg"
//                 colorScheme="pink"
//                 variant="solid"
//                 onClick={() => navigate(tile.path)}
//               >
//                 Go to {tile.title}
//               </Button>
//             </Flex>
//           </GridItem>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default StudentHomePage;


// Version 2 

import React from 'react';
import { Box, Flex, Heading, Grid, GridItem, Button, VStack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export const StudentHomePage: React.FC = () => {
  const navigate = useNavigate();
  const {authState} = useAuth()

  const tiles = [
    { title: 'Take a Test', description: 'Start your journey by attempting tests.', path: '/student/test/dashboard', bg: 'teal.400', hover: 'teal.500' },
    { title: 'View Results', description: 'Check your performance and results.', path: '/test/result', bg: 'orange.400', hover: 'orange.500' },
  ];

  return (
    <Box bgGradient="linear(to-br, green.50, yellow.50)" minH="100vh" py={8}>
      <VStack spacing={4} align="center">
        <Heading as="h1" size="2xl" color="green.600">
          Welcome, {authState.userName}!
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Explore your options below and get started.
        </Text>
      </VStack>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={6}
        px={{ base: 4, md: 8 }}
        mt={8}
      >
        {tiles.map((tile, index) => (
          <GridItem key={index}>
            <Flex
              direction="column"
              align="center"
              bg={tile.bg}
              borderRadius="md"
              shadow="lg"
              p={6}
              h="full"
              justifyContent="center"
              _hover={{ bg: tile.hover, transform: 'scale(1.05)', shadow: 'xl' }}
              transition="0.3s"
            >
              <Heading as="h3" size="lg" color="white">
                {tile.title}
              </Heading>
              <Text mt={2} mb={4} fontSize="md" color="whiteAlpha.900" textAlign="center">
                {tile.description}
              </Text>
              <Button
                size="lg"
                colorScheme="whiteAlpha"
                variant="outline"
                _hover={{ bg: 'whiteAlpha.300' }}
                onClick={() => navigate(tile.path)}
              >
                Go to {tile.title}
              </Button>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default StudentHomePage;
