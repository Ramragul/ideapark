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


// Version 2 - Working Version

// import React from 'react';
// import { Box, Flex, Heading, Grid, GridItem, Button, VStack, Text } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '@/contexts/AuthContext';

// export const StudentTestHomePage: React.FC = () => {
//   const navigate = useNavigate();
//   const {authState} = useAuth()

//   const tiles = [
//     { title: 'Take a Test', description: 'Start your journey by attempting tests.', path: '/student/test/dashboard', bg: 'teal.400', hover: 'teal.500' },
//     { title: 'View Results', description: 'Check your performance and results.', path: '/test/result', bg: 'orange.400', hover: 'orange.500' },
//   ];

//   return (
//     <Box bgGradient="linear(to-br, green.50, yellow.50)" minH="100vh" py={8}>
//       <VStack spacing={4} align="center">
//         <Heading as="h1" size="2xl" color="green.600">
//           Welcome, {authState.userName}!
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
//               bg={tile.bg}
//               borderRadius="md"
//               shadow="lg"
//               p={6}
//               h="full"
//               justifyContent="center"
//               _hover={{ bg: tile.hover, transform: 'scale(1.05)', shadow: 'xl' }}
//               transition="0.3s"
//             >
//               <Heading as="h3" size="lg" color="white">
//                 {tile.title}
//               </Heading>
//               <Text mt={2} mb={4} fontSize="md" color="whiteAlpha.900" textAlign="center">
//                 {tile.description}
//               </Text>
//               <Button
//                 size="lg"
//                 colorScheme="whiteAlpha"
//                 variant="outline"
//                 _hover={{ bg: 'whiteAlpha.300' }}
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

// export default StudentTestHomePage;


// Version 3: Purple Theme - Enhancement to Version 2 

// import React from 'react';
// import { Box, Flex, Heading, Grid, GridItem, Button, VStack, Text } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '@/contexts/AuthContext';

// export const StudentTestHomePage: React.FC = () => {
//   const navigate = useNavigate();
//   const {authState} = useAuth()

//   const tiles = [
//     { title: 'Take a Test', description: 'Start your journey by attempting tests.', path: '/student/test/dashboard', bg: 'purple.500', hover: 'purple.600' },
//     { title: 'View Results', description: 'Check your performance and results.', path: '/test/result', bg: 'purple.400', hover: 'purple.500' },
//   ];

//   return (
//     <Box bgGradient="linear(to-br, purple.50, purple.100)" minH="100vh" py={8}>
//       <VStack spacing={4} align="center">
//         <Heading as="h1" size="2xl" color="purple.700">
//           Welcome, {authState.userName}!
//         </Heading>
//         <Text fontSize="lg" color="purple.600">
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
//               bg={tile.bg}
//               borderRadius="md"
//               shadow="lg"
//               p={6}
//               h="full"
//               justifyContent="center"
//               _hover={{ bg: tile.hover, transform: 'scale(1.05)', shadow: 'xl' }}
//               transition="0.3s"
//             >
//               <Heading as="h3" size="lg" color="white">
//                 {tile.title}
//               </Heading>
//               <Text mt={2} mb={4} fontSize="md" color="whiteAlpha.900" textAlign="center">
//                 {tile.description}
//               </Text>
//               <Button
//                 size="lg"
//                 colorScheme="whiteAlpha"
//                 variant="outline"
//                 _hover={{ bg: 'whiteAlpha.300' }}
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

// export default StudentTestHomePage;




// Version 4 : Different colour theme enhancement to version 2

// import React from 'react';
// import { Box, Flex, Heading, Grid, GridItem, Button, VStack, Text } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '@/contexts/AuthContext';

// export const StudentTestHomePage: React.FC = () => {
//   const navigate = useNavigate();
//   const {authState} = useAuth()

//   const tiles = [
//     { title: 'Take a Test', description: 'Start your journey by attempting tests.', path: '/student/test/dashboard', bg: 'indigo', hover: '#9966CC' },
//     { title: 'View Results', description: 'Check your performance and results.', path: '/test/result', bg: 'pink.400', hover: 'pink.500' },
//   ];

//   return (
//     <Box bgGradient="linear(to-br, purple.100, pink.50)" minH="100vh" py={8}>
//       <VStack spacing={4} align="center">
//         <Heading as="h1" size="2xl" color="purple.700">
//           Welcome, {authState.userName}!
//         </Heading>
//         <Text fontSize="lg" color="purple.600">
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
//               bg={tile.bg}
//               borderRadius="md"
//               shadow="lg"
//               p={6}
//               h="full"
//               justifyContent="center"
//               _hover={{ bg: tile.hover, transform: 'scale(1.05)', shadow: 'xl' }}
//               transition="0.3s"
//             >
//               <Heading as="h3" size="lg" color="white">
//                 {tile.title}
//               </Heading>
//               <Text mt={2} mb={4} fontSize="md" color="whiteAlpha.900" textAlign="center">
//                 {tile.description}
//               </Text>
//               <Button
//                 size="lg"
//                 colorScheme="whiteAlpha"
//                 variant="outline"
//                 _hover={{ bg: 'whiteAlpha.300' }}
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

// export default StudentTestHomePage;


// Version 5 : Design Changes to version 4

// import React from 'react';
// import { Box, Flex, Heading, Grid, GridItem, Button, VStack, Text } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '@/contexts/AuthContext';
// import { FaClipboardCheck, FaChartBar } from 'react-icons/fa';

// export const StudentTestHomePage: React.FC = () => {
//   const navigate = useNavigate();
//   const { authState } = useAuth();

//   const tiles = [
//     {
//       title: 'Take a Test',
//       description: 'Start your journey by attempting tests.',
//       path: '/student/test/dashboard',
//       bgGradient: 'linear(to-r, #ff7eb3, #ff758c)',
//       icon: <FaClipboardCheck size={36} />,
//     },
//     {
//       title: 'View Results',
//       description: 'Check your performance and results.',
//       path: '/test/result',
//       bgGradient: 'linear(to-r, #85ffc7, #42c8b4)',
//       icon: <FaChartBar size={36} />,
//     },
//   ];

//   return (
//     <Box bgGradient="linear(to-br, purple.100, pink.50)" minH="100vh" py={8}>
//       <VStack spacing={4} align="center">
//         <Heading as="h1" size="2xl" color="purple.700">
//           Welcome, {authState.userName}!
//         </Heading>
//         <Text fontSize="lg" color="purple.600">
//           Explore your options below and get started.
//         </Text>
//       </VStack>

//       <Grid
//         templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
//         gap={8}
//         px={{ base: 6, md: 12 }}
//         mt={10}
//       >
//         {tiles.map((tile, index) => (
//           <GridItem key={index}>
//             <Flex
//               direction="column"
//               align="center"
//               bgGradient={tile.bgGradient}
//               borderRadius="xl"
//               shadow="lg"
//               p={8}
//               h="full"
//               justifyContent="center"
//               transition="all 0.3s ease-in-out"
//               _hover={{ transform: 'scale(1.05)', shadow: '2xl' }}
//             >
//               <Box mb={4} color="white">
//                 {tile.icon}
//               </Box>
//               <Heading as="h3" size="lg" color="white">
//                 {tile.title}
//               </Heading>
//               <Text mt={2} mb={6} fontSize="md" color="whiteAlpha.900" textAlign="center">
//                 {tile.description}
//               </Text>
//               <Button
//                 size="lg"
//                 colorScheme="whiteAlpha"
//                 variant="outline"
//                 _hover={{ bg: 'whiteAlpha.300' }}
//                 onClick={() => navigate(tile.path)}
//                 borderRadius="full"
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

// export default StudentTestHomePage;




// Version 6 : Design Enhancement


// import React from 'react';
// import { Box, Flex, Heading, Grid, GridItem, Button, VStack, Text } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '@/contexts/AuthContext';
// import { FaClipboardCheck, FaChartBar } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// export const StudentTestHomePage: React.FC = () => {
//   const navigate = useNavigate();
//   const { authState } = useAuth();

//   const tiles = [
//     {
//       title: 'Take a Test',
//       description: 'Start your journey by attempting tests.',
//       path: '/student/test/dashboard',
//       bgGradient: 'linear(to-r, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
//       hoverBorder: '2px solid rgba(255, 122, 219, 0.6)',
//       icon: <FaClipboardCheck size={40} />,
//     },
//     {
//       title: 'View Results',
//       description: 'Check your performance and results.',
//       path: '/test/result',
//       bgGradient: 'linear(to-r, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
//       hoverBorder: '2px solid rgba(122, 219, 255, 0.6)',
//       icon: <FaChartBar size={40} />,
//     },
//   ];

//   return (
//     <Box
//       bgGradient="linear(to-br, purple.100, pink.50)"
//       minH="100vh"
//       py={8}
//       overflow="hidden"
//       position="relative"
//     >
//       {/* Decorative Background Elements */}
//       <Box
//         position="absolute"
//         top="-20%"
//         left="-10%"
//         w="60%"
//         h="60%"
//         bg="pink.200"
//         opacity="0.3"
//         rounded="full"
//         filter="blur(200px)"
//       />
//       <Box
//         position="absolute"
//         bottom="-30%"
//         right="-20%"
//         w="80%"
//         h="80%"
//         bg="purple.300"
//         opacity="0.4"
//         rounded="full"
//         filter="blur(300px)"
//       />

//       {/* Content */}
//       <VStack spacing={4} align="center" zIndex={1} position="relative">
//         <Heading as="h1" size="2xl" color="purple.700" fontFamily="Poppins">
//           Welcome, {authState.userName}!
//         </Heading>
//         <Text fontSize="lg" color="purple.600" fontFamily="Poppins">
//           Explore your options below and get started.
//         </Text>
//       </VStack>

//       {/* Interactive Tiles */}
//       <Grid
//         templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
//         gap={8}
//         px={{ base: 6, md: 12 }}
//         mt={10}
//         zIndex={1}
//         position="relative"
//       >
//         {tiles.map((tile, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05, y: -5 }}
//             transition={{ duration: 0.3 }}
//           >
//             <GridItem>
//               <Flex
//                 direction="column"
//                 align="center"
//                 bgGradient={tile.bgGradient}
//                 backdropFilter="blur(10px)"
//                 borderRadius="2xl"
//                 shadow="lg"
//                 p={8}
//                 h="full"
//                 justifyContent="center"
//                 border="2px solid transparent"
//                 transition="all 0.3s ease-in-out"
//                 _hover={{ border: tile.hoverBorder, shadow: '2xl' }}
//               >
//                 <Box mb={4} color="white">
//                   {tile.icon}
//                 </Box>
//                 <Heading as="h3" size="lg" color="white" fontFamily="Raleway">
//                   {tile.title}
//                 </Heading>
//                 <Text
//                   mt={2}
//                   mb={6}
//                   fontSize="md"
//                   color="whiteAlpha.900"
//                   textAlign="center"
//                   fontFamily="Raleway"
//                 >
//                   {tile.description}
//                 </Text>
//                 <Button
//                   size="lg"
//                   colorScheme="whiteAlpha"
//                   variant="outline"
//                   _hover={{ bg: 'whiteAlpha.300' }}
//                   borderRadius="full"
//                   onClick={() => navigate(tile.path)}
//                 >
//                   Go to {tile.title}
//                 </Button>
//               </Flex>
//             </GridItem>
//           </motion.div>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default StudentTestHomePage;


// Version 7 : Design Enhancement

import React from 'react';
import { Box, Flex, Heading, Grid, GridItem, Button, VStack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { FaClipboardCheck, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';  

export const StudentTestHomePage: React.FC = () => {
  const navigate = useNavigate();
  const { authState } = useAuth();

  const tiles = [
    {
      title: 'Take a Test',
      description: 'Start your journey by attempting tests.',
      path: '/student/test/dashboard',
      gradient: 'linear(to-r, purple.400, pink.600)',
      hoverGradient: 'linear(to-r, pink.500, purple.600)',
      icon: <FaClipboardCheck size={40} />,
    },
    {
      title: 'View Results',
      description: 'Check your performance and results.',
      path: '/test/result',
      gradient: 'linear(to-r, teal.400, blue.600)',
      hoverGradient: 'linear(to-r, blue.500, teal.600)',
      icon: <FaChartBar size={40} />,
    },
  ];

  return (
    <Box
      bgGradient="linear(to-br, purple.100, pink.50)"
      minH="100vh"
      py={8}
      overflow="hidden"
      position="relative"
    >
      {/* Decorative Background Elements */}
      <Box
        position="absolute"
        top="-20%"
        left="-10%"
        w="60%"
        h="60%"
        bg="pink.200"
        opacity="0.3"
        rounded="full"
        filter="blur(200px)"
      />
      <Box
        position="absolute"
        bottom="-30%"
        right="-20%"
        w="80%"
        h="80%"
        bg="purple.300"
        opacity="0.4"
        rounded="full"
        filter="blur(300px)"
      />

      {/* Content */}
      <VStack spacing={4} align="center" zIndex={1} position="relative">
        <Heading as="h1" size="2xl" color="purple.700" fontFamily="Poppins">
          Welcome, {authState.userName}!
        </Heading>
        <Text fontSize="lg" color="purple.600" fontFamily="Poppins">
          Explore your options below and get started.
        </Text>
      </VStack>

      {/* Interactive Tiles */}
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={8}
        px={{ base: 6, md: 12 }}
        mt={10}
        zIndex={1}
        position="relative"
      >
        {tiles.map((tile, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <GridItem>
              <Flex
                direction="column"
                align="center"
                bgGradient={tile.gradient}
                borderRadius="2xl"
                shadow="lg"
                p={8}
                h="full"
                justifyContent="center"
                transition="all 0.3s ease-in-out"
                _hover={{ bgGradient: tile.hoverGradient, shadow: '2xl' }}
              >
                <Box mb={4} color="white">
                  {tile.icon}
                </Box>
                <Heading as="h3" size="lg" color="white" fontFamily="Raleway">
                  {tile.title}
                </Heading>
                <Text
                  mt={2}
                  mb={6}
                  fontSize="md"
                  color="whiteAlpha.900"
                  textAlign="center"
                  fontFamily="Raleway"
                >
                  {tile.description}
                </Text>
                <Button
                  size="lg"
                  colorScheme="whiteAlpha"
                  variant="outline"
                  _hover={{ bg: 'whiteAlpha.300' }}
                  borderRadius="full"
                  onClick={() => navigate(tile.path)}
                >
                  Go to {tile.title}
                </Button>
              </Flex>
            </GridItem>
          </motion.div>
        ))}
      </Grid>
    </Box>
  );
};

export default StudentTestHomePage;

