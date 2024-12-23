//Version 4 - DB connect , Enhancement to version 3 

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import Lottie from 'lottie-react';
// import successAnimation from '../animations/success.json';
// import failureAnimation from '../animations/error.json';
// import logo from '../assets/navbar/logo1.jpg';
// import {
//   Box,
//   Button,
//   Input,
//   FormControl,
//   FormLabel,
//   Stack,
//   Heading,
//   Text,
//   Link as ChakraLink,
//   Center,
//   useToast,
// } from '@chakra-ui/react';

// export const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const toast = useToast();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://admee.in:3003/login', { username, password });
//       const user = response.data;
//       login(user.token, username);
//       navigate(-1); // Navigate to the previous page
//     } catch (error) {
//       setError('Invalid credentials');
//       toast({
//         title: 'Login failed.',
//         description: 'Invalid credentials. Please try again.',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <Center height="100vh">
//       <Box
//         maxW="md"
//         borderWidth="1px"
//         borderRadius="lg"
//         overflow="hidden"
//         p={6}
//         boxShadow="lg"
//         textAlign="center"
//       >
//         <img src={logo} alt="Logo" style={{ margin: '0 auto 20px', height: '50px' }} />
//         <Heading mb={6}>Login</Heading>
//         <form onSubmit={handleLogin}>
//           <FormControl id="username" mb={4}>
//             <FormLabel>Username</FormLabel>
//             <Input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </FormControl>
//           <FormControl id="password" mb={6}>
//             <FormLabel>Password</FormLabel>
//             <Input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </FormControl>
//           <Button type="submit" colorScheme="pink" width="full" mb={4}>
//             Login
//           </Button>
//           {error && <Text color="red.500">{error}</Text>}
//         </form>
//         <ChakraLink color="pink.500" onClick={() => navigate('/register')}>
//           Don't have an account? Register here.
//         </ChakraLink>
//       </Box>
//     </Center>
//   );
// };

// export default LoginPage;


// Version 5 - Version 4 is working version, minute desing and error handling enhancement

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import successAnimation from '../animations/successfulLogin.json';
import failureAnimation from '../animations/error.json';
import logo from '../assets/navbar/logo1.jpg';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Heading,
  Center,
  useToast,
  Text,
} from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const toast = useToast();


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://admee.in:3003/login', { username, password });
      const user = response.data; // Assuming the response contains user data with an ID
      console.log("Response From Login Server" +JSON.stringify(user));
      console.log("User Role" +user.userRole)
      const navigateURL = (user.userRole === "user") ? "/home" : "/adminDashboard"
    
      login(user.userName, user.userId, user.userEmail, user.pId , user.userRole); // Store the user ID and username
      setSuccess(true);
      // setTimeout(() => navigate(-1), 5000); // Navigate to the previous page after 3 seconds
      setTimeout(() => navigate(navigateURL), 5000);
    } catch (error) {
      setError('Invalid credentials. Please try again.');
      toast({
        title: 'Login failed.',
        description: 'Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Center height="100vh" p={4}>
      <Box
        maxW="md"
        width="full"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={6}
        boxShadow="lg"
        textAlign="center"
      >
        <img src={logo} alt="Logo" style={{ margin: '0 auto 20px', height: '50px' }} />
        <Heading mb={6}>Login</Heading>
        {success ? (<>
          <Lottie animationData={successAnimation} style={{ height: '200px' }} />
          </>
        ) : (
          <form onSubmit={handleLogin}>
            <FormControl id="username" mb={4}>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="password" mb={6}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
            <Button type="submit" colorScheme="pink" width="full" mb={4}>
              Login
            </Button>
            {error && <Text color="red.500">{error}</Text>}
          </form>
        )}
        <Text mt={4}>
          Don't have an account? <Button variant="link" colorScheme="pink" onClick={() => navigate('/register')}>Register here</Button>
        </Text>
      </Box>
    </Center>
  );
};

export default LoginPage;
