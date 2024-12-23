// Version 2 - Version 1 is working code, 2 is for db connect

// import React, { useState } from 'react';
// import axios from 'axios';
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
//   Center,
//   useToast,
// } from '@chakra-ui/react';

// export const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     email: '',
//     address: '',
//     city: '',
//     password: '',
//   });
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const toast = useToast();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://admee.in:3003/api/cc/register', formData);
//       setSuccess(true);
//       setTimeout(() => navigate('/login'), 3000); // Redirect to login page after 3 seconds
//     } catch (error) {
//       setError('Registration failed. Please try again.');
//       toast({
//         title: 'Registration failed.',
//         description: 'Please try again.',
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
//         <Heading mb={6}>Register</Heading>
//         {success ? (
//           <Lottie animationData={successAnimation} style={{ height: '200px' }} />
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <FormControl id="name" mb={4}>
//               <FormLabel>Name</FormLabel>
//               <Input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </FormControl>
//             <FormControl id="mobile" mb={4}>
//               <FormLabel>Mobile Number</FormLabel>
//               <Input
//                 type="text"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 required
//               />
//             </FormControl>
//             <FormControl id="email" mb={4}>
//               <FormLabel>Email</FormLabel>
//               <Input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </FormControl>
//             <FormControl id="address" mb={4}>
//               <FormLabel>Address</FormLabel>
//               <Input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//             </FormControl>
//             <FormControl id="city" mb={4}>
//               <FormLabel>City</FormLabel>
//               <Input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 required
//               />
//             </FormControl>
//             <FormControl id="password" mb={6}>
//               <FormLabel>Password</FormLabel>
//               <Input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </FormControl>
//             <Button type="submit" colorScheme="pink" width="full" mb={4}>
//               Register
//             </Button>
//             {error && <Text color="red.500">{error}</Text>}
//           </form>
//         )}
//       </Box>
//     </Center>
//   );
// };

// export default RegisterPage;


// Version 3 - Copy of version 2, with error handling and design changes

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

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
    password: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://admee.in:3003/api/cc/register', formData);
      console.log("Response From DB For Duplicate Error" +JSON.stringify(response))
      if(response.status!=205)
      {
        setSuccess(true);
        setTimeout(() => navigate('/login'), 5000); // Redirect to login page after 3 seconds
      }
      else {
       // setError('')
        //setError('Registration failed. Mobile Number Already Registered with Another Account' +error);
        toast({
          title: 'Registration failed.',
          description: 'Duplicate User . Mobile Number Already Registered with Another Account',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.log("Error from The Server DB" +error)
      toast({
        title: 'Registration failed.',
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
        maxW="lg"
        width="full"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={6}
        boxShadow="lg"
        textAlign="center"
      >
        <img src={logo} alt="Logo" style={{ margin: '0 auto 20px', height: '50px' }} />
        <Heading mb={6}>Register</Heading>
        {success ? (<>
          <Lottie animationData={successAnimation} style={{ height: '200px' }} />
          Successfully Registered
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <FormControl id="name" mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                
              />
            </FormControl>
            <FormControl id="mobile" mb={4}>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                
              />
            </FormControl>
            <FormControl id="address" mb={4}>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl id="city" mb={4}>
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl id="password" mb={6}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </FormControl>
            <Button type="submit" colorScheme="pink" width="full" mb={4}>
              Register
            </Button>
            {error && <Text color="red.500">{error}</Text>}
          </form>
        )}
      </Box>
    </Center>
  );
};

export default RegisterPage;


