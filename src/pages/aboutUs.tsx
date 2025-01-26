// Version 1

// import React from 'react';
// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   VStack,
//   HStack,
//   SimpleGrid,
//   Icon,
//   Stack,
//   Button,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import { CheckCircleIcon } from '@chakra-ui/icons';

// const competitiveExams = [
//   'Joint Entrance Examination (JEE)',
//   'National Eligibility cum Entrance Test (NEET)',
//   'Common Admission Test (CAT)',
//   'Civil Services Examination (UPSC)',
//   'Graduate Aptitude Test in Engineering (GATE)',
//   'Staff Selection Commission (SSC)',
//   'Bank Probationary Officer (Bank PO)',
//   'Chartered Accountancy (CA)',
//   'Law Entrance Tests (CLAT, AILET)',
//   'Defence Exams (NDA, CDS)',
// ];

// export const AboutUs: React.FC = () => {
//   const bgColor = useColorModeValue('pink.50', 'gray.800');
//   const textColor = useColorModeValue('gray.700', 'gray.300');

//   return (
//     <Box bg={bgColor} py={10}>
//       <Container maxW="6xl">
//         <VStack spacing={6} textAlign="center">
//           <Heading fontSize={{ base: '2xl', md: '4xl' }} color="pink.600">
//             About Us
//           </Heading>
//           <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} maxW="3xl">
//             Welcome to our online testing platform—a place where students can prepare for a brighter future. We provide a wide variety of competitive exams, helping students enhance their career prospects. Our application is designed to be simple, efficient, and user-friendly, ensuring an excellent experience for everyone.
//           </Text>
//         </VStack>

//         <Stack spacing={10} mt={10} alignItems="center">
//           <Heading fontSize={{ base: 'xl', md: '2xl' }} color="pink.600">
//             Top Competitive Exams We Cover
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={5} maxW="5xl">
//             {competitiveExams.map((exam, index) => (
//               <HStack
//                 key={index}
//                 bg="white"
//                 p={4}
//                 borderRadius="md"
//                 boxShadow="sm"
//                 _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
//                 transition="0.2s ease"
//               >
//                 <Icon as={CheckCircleIcon} color="pink.500" boxSize={5} />
//                 <Text fontSize="md" fontWeight="medium" color="gray.700">
//                   {exam}
//                 </Text>
//               </HStack>
//             ))}
//           </SimpleGrid>

//           <Box textAlign="center">
//             <Text fontSize="lg" color={textColor} maxW="4xl" mb={5}>
//               Start your journey with us and unlock your potential with the best resources and guidance tailored for your success.
//             </Text>
//             <Button
//               size="lg"
//               colorScheme="pink"
//               bgGradient="linear(to-r, pink.400, pink.600)"
//               _hover={{ bgGradient: 'linear(to-r, pink.500, pink.700)' }}
//               px={10}
//               py={6}
//             >
//               Get Started Today
//             </Button>
//           </Box>
//         </Stack>
//       </Container>
//     </Box>
//   );
// };

// export default AboutUs;



// Version 2 : Enhanced Design

// import React from 'react';
// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   VStack,
//   SimpleGrid,
//   HStack,
//   Stack,
//   Button,
//   Icon,
//   Image,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import { CheckCircleIcon } from '@chakra-ui/icons';
// import Slider from 'react-slick';

// // Dummy images for the slider
// const sliderImages = [
//   'https://via.placeholder.com/1200x400?text=Online+Exam+Platform',
//   'https://via.placeholder.com/1200x400?text=Analyze+Student+Performance',
//   'https://via.placeholder.com/1200x400?text=Advanced+Analytics',
//   'https://via.placeholder.com/1200x400?text=For+Institutions+of+All+Sizes',
// ];

// // Features of the platform
// const platformFeatures = [
//   {
//     title: 'Online Exams',
//     description: 'Easily conduct online exams with secure and scalable solutions.',
//   },
//   {
//     title: 'Performance Analytics',
//     description: 'Analyze student performance with detailed and actionable insights.',
//   },
//   {
//     title: 'Customizable Tests',
//     description: 'Create and customize tests to fit your institution’s unique needs.',
//   },
//   {
//     title: 'Ease of Use',
//     description: 'User-friendly interface for administrators, teachers, and students.',
//   },
// ];

// export const AboutUs: React.FC = () => {
//   const bgColor = useColorModeValue('purple.50', 'gray.800');
//   const textColor = useColorModeValue('gray.700', 'gray.300');

//   // Slider settings for react-slick
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <Box bg={bgColor} py={10}>
//       {/* Image Slider */}
//       <Box mb={10}>
//         <Slider {...sliderSettings}>
//           {sliderImages.map((image, index) => (
//             <Box key={index}>
//               <Image src={image} alt={`Slide ${index + 1}`} width="100%" borderRadius="md" />
//             </Box>
//           ))}
//         </Slider>
//       </Box>

//       {/* About Us Section */}
//       <Container maxW="6xl">
//         <VStack spacing={6} textAlign="center">
//           <Heading fontSize={{ base: '2xl', md: '4xl' }} color="purple.600">
//             About Us
//           </Heading>
//           <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} maxW="3xl">
//             Class Bench is a comprehensive platform for institutions to seamlessly conduct online
//             exams, analyze student performance, and leverage advanced analytics. Whether you are a
//             school, college, or coaching institute, Class Bench is designed to suit your needs.
//           </Text>
//         </VStack>

//         {/* Features Section */}
//         <Stack spacing={10} mt={10} alignItems="center">
//           <Heading fontSize={{ base: 'xl', md: '2xl' }} color="purple.600">
//             Why Choose Class Bench?
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} maxW="5xl">
//             {platformFeatures.map((feature, index) => (
//               <HStack
//                 key={index}
//                 bg="white"
//                 p={5}
//                 borderRadius="md"
//                 boxShadow="md"
//                 _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
//                 transition="0.2s ease"
//               >
//                 <Icon as={CheckCircleIcon} color="purple.500" boxSize={6} />
//                 <VStack align="start" spacing={1}>
//                   <Heading fontSize="lg" color="purple.600">
//                     {feature.title}
//                   </Heading>
//                   <Text fontSize="sm" color={textColor}>
//                     {feature.description}
//                   </Text>
//                 </VStack>
//               </HStack>
//             ))}
//           </SimpleGrid>
//         </Stack>

//         {/* Call to Action Section */}
//         <Box textAlign="center" mt={16}>
//           <Text fontSize="lg" color={textColor} maxW="4xl" mb={5}>
//             Unlock the full potential of your institution with our powerful platform. Start today
//             and experience the Class Bench difference.
//           </Text>
//           <Button
//             size="lg"
//             colorScheme="purple"
//             bgGradient="linear(to-r, purple.400, purple.600)"
//             _hover={{ bgGradient: 'linear(to-r, purple.500, purple.700)' }}
//             px={10}
//             py={6}
//           >
//             Get Started Today
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default AboutUs;


// Version 3 : Enhancement to version 1


import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

// Features data
const platformFeatures = [
  {
    title: 'Conduct Online Exams',
    description: 'Simplify online assessments with secure and scalable solutions.',
    icon: CheckCircleIcon,
  },
  {
    title: 'Advanced Analytics',
    description: 'Get actionable insights to track and improve student performance.',
    icon: CheckCircleIcon,
  },
  {
    title: 'Customizable Tests',
    description: 'Tailor exams to meet your institution’s unique requirements.',
    icon: CheckCircleIcon,
  },
  {
    title: 'User-Friendly Platform',
    description: 'Intuitive design for admins, educators, and students alike.',
    icon: CheckCircleIcon,
  },
];

export const AboutUs: React.FC = () => {
  const bgColor = useColorModeValue('purple.50', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const ctaBg = useColorModeValue('purple.600', 'purple.400');

  return (
    <Box bg={bgColor}>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-r, purple.500, purple.700)"
        color="white"
        py={20}
        px={5}
        textAlign="center"
      >
        <Container maxW="6xl">
          <VStack spacing={6}>
            <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold">
              Empowering Institutions with Smarter Online Exam Solutions
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl">
              Class Bench offers a seamless platform for conducting online exams, analyzing
              performance, and boosting institutional efficiency. Trusted by educators nationwide.
            </Text>
            <Button
              size="lg"
              bg={ctaBg}
              _hover={{ bg: 'purple.500' }}
              px={8}
              py={6}
              fontSize="lg"
            >
              Get Started Today
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="6xl" py={16}>
        <VStack spacing={8} textAlign="center">
          <Heading fontSize={{ base: '2xl', md: '3xl' }} color="purple.600">
            Why Choose Class Bench?
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} maxW="3xl">
            Designed to simplify the online exam experience, Class Bench is equipped with
            cutting-edge tools to support educational success.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
          {platformFeatures.map((feature, index) => (
            <Flex
              key={index}
              direction="row"
              align="center"
              bg="white"
              p={5}
              rounded="lg"
              shadow="md"
              _hover={{ shadow: 'lg', transform: 'scale(1.05)' }}
              transition="0.2s ease"
            >
              <Icon as={feature.icon} color="purple.500" w={8} h={8} mr={4} />
              <VStack align="start" spacing={2}>
                <Heading fontSize="lg" color="purple.700">
                  {feature.title}
                </Heading>
                <Text color={textColor} fontSize="sm">
                  {feature.description}
                </Text>
              </VStack>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>

      {/* Testimonials / Success Metrics Section */}
      <Box bg="purple.50" py={16} px={5}>
        <Container maxW="6xl">
          <VStack spacing={8} textAlign="center">
            <Heading fontSize={{ base: '2xl', md: '3xl' }} color="purple.600">
              Trusted by Institutions Nationwide
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} maxW="3xl">
              Over 500+ institutions have streamlined their exam processes with Class Bench. Join
              the revolution today!
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={10} textAlign="center">
            <VStack>
              <Heading fontSize="3xl" color="purple.700">
                500+
              </Heading>
              <Text color={textColor}>Institutions Served</Text>
            </VStack>
            <VStack>
              <Heading fontSize="3xl" color="purple.700">
                1M+
              </Heading>
              <Text color={textColor}>Students Empowered</Text>
            </VStack>
            <VStack>
              <Heading fontSize="3xl" color="purple.700">
                98%
              </Heading>
              <Text color={textColor}>Customer Satisfaction</Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Box bgGradient="linear(to-r, purple.600, purple.800)" color="white" py={16} px={5}>
        <Container maxW="6xl" textAlign="center">
          <VStack spacing={6}>
            <Heading fontSize={{ base: '2xl', md: '3xl' }}>
              Ready to Revolutionize Your Institution?
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl">
              Experience a smarter way to conduct exams and analyze results with Class Bench.
            </Text>
            <Button
              size="lg"
              bg="white"
              color="purple.700"
              _hover={{ bg: 'gray.100' }}
              px={8}
              py={6}
              fontSize="lg"
            >
              Get Started Today
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;

