import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Icon,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const competitiveExams = [
  'Joint Entrance Examination (JEE)',
  'National Eligibility cum Entrance Test (NEET)',
  'Common Admission Test (CAT)',
  'Civil Services Examination (UPSC)',
  'Graduate Aptitude Test in Engineering (GATE)',
  'Staff Selection Commission (SSC)',
  'Bank Probationary Officer (Bank PO)',
  'Chartered Accountancy (CA)',
  'Law Entrance Tests (CLAT, AILET)',
  'Defence Exams (NDA, CDS)',
];

export const AboutUs: React.FC = () => {
  const bgColor = useColorModeValue('pink.50', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <Box bg={bgColor} py={10}>
      <Container maxW="6xl">
        <VStack spacing={6} textAlign="center">
          <Heading fontSize={{ base: '2xl', md: '4xl' }} color="pink.600">
            About Us
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} maxW="3xl">
            Welcome to our online testing platform—a place where students can prepare for a brighter future. We provide a wide variety of competitive exams, helping students enhance their career prospects. Our application is designed to be simple, efficient, and user-friendly, ensuring an excellent experience for everyone.
          </Text>
        </VStack>

        <Stack spacing={10} mt={10} alignItems="center">
          <Heading fontSize={{ base: 'xl', md: '2xl' }} color="pink.600">
            Top Competitive Exams We Cover
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={5} maxW="5xl">
            {competitiveExams.map((exam, index) => (
              <HStack
                key={index}
                bg="white"
                p={4}
                borderRadius="md"
                boxShadow="sm"
                _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
                transition="0.2s ease"
              >
                <Icon as={CheckCircleIcon} color="pink.500" boxSize={5} />
                <Text fontSize="md" fontWeight="medium" color="gray.700">
                  {exam}
                </Text>
              </HStack>
            ))}
          </SimpleGrid>

          <Box textAlign="center">
            <Text fontSize="lg" color={textColor} maxW="4xl" mb={5}>
              Start your journey with us and unlock your potential with the best resources and guidance tailored for your success.
            </Text>
            <Button
              size="lg"
              colorScheme="pink"
              bgGradient="linear(to-r, pink.400, pink.600)"
              _hover={{ bgGradient: 'linear(to-r, pink.500, pink.700)' }}
              px={10}
              py={6}
            >
              Get Started Today
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutUs;
