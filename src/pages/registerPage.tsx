


// Version 1 - Working Version

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Lottie from 'lottie-react';
// import successAnimation from '../animations/successfulLogin.json';
// import failureAnimation from '../animations/error.json';
// import logo from '../assets/navbar/logo1.jpg';
// import {
//   Box,
//   Button,
//   Input,

//   Stack,
//   Heading,
//   Center,

//   Text,
// } from '@chakra-ui/react';

// import { FormControl , FormLabel} from '@chakra-ui/form-control';

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
  

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://admee.in:3003/api/cc/register', formData);
//       console.log("Response From DB For Duplicate Error" +JSON.stringify(response))
//       if(response.status!=205)
//       {
//         setSuccess(true);
//         setTimeout(() => navigate('/login'), 5000); // Redirect to login page after 3 seconds
//       }
//       else {
//        // setError('')
//         //setError('Registration failed. Mobile Number Already Registered with Another Account' +error);
//         // toast({
//         //   title: 'Registration failed.',
//         //   description: 'Duplicate User . Mobile Number Already Registered with Another Account',
//         //   status: 'error',
//         //   duration: 5000,
//         //   isClosable: true,
//         // });
//       }
//     } catch (error) {
//       setError('Registration failed. Please try again.');
//       console.log("Error from The Server DB" +error)
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
//     <Center height="100vh" p={4}>
//       <Box
//         maxW="lg"
//         width="full"
//         borderWidth="1px"
//         borderRadius="lg"
//         overflow="hidden"
//         p={6}
//         boxShadow="lg"
//         textAlign="center"
//       >
//         <img src={logo} alt="Logo" style={{ margin: '0 auto 20px', height: '50px' }} />
//         <Heading mb={6}>Register</Heading>
//         {success ? (<>
//           <Lottie animationData={successAnimation} style={{ height: '200px' }} />
//           Successfully Registered
//           </>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <FormControl id="name" mb={4}>
//               <FormLabel>Name</FormLabel>
//               <Input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
                
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


// Version 2 - To handle both candidate and business partner registrations

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Lottie from 'lottie-react';
// import successAnimation from '../animations/successfulLogin.json';
// import failureAnimation from '../animations/error.json';
// import logo from '../assets/navbar/logo1.jpg';
// import {
//   Box,
//   Button,
//   Input,
//   Stack,
//   Heading,
//   Center,
//   Text,
//   FormControl,
//   FormLabel,
//   Radio,
//   RadioGroup,
//   Checkbox,
//   CheckboxGroup,
// } from '@chakra-ui/react';

// //import { FormControl , FormLabel} from '@chakra-ui/form-control';



// export const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     email: '',
//     address: '',
//     city: '',
//     password: '',
//     userType: 'Candidate', // Default selection
//     academicQualifications: '',
//     instituteDetails: '',
//     businessName: '',
//     trainingsProvided: '',
//   });
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCheckboxChange = (selectedValues: string[]) => {
//     setFormData({ ...formData, trainingsProvided: selectedValues.join(', ') });
//   };

  

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://admee.in:3003/api/cc/register', formData);
//       console.log('Response From DB For Duplicate Error' + JSON.stringify(response));
//       if (response.status !== 205) {
//         setSuccess(true);
//         setTimeout(() => navigate('/login'), 5000);
//       } else {
//         setError('Mobile Number Already Registered with Another Account');
//       }
//     } catch (error) {
//       setError('Registration failed. Please try again.');
//       console.log('Error from The Server DB' + error);
//     }
//   };

//   return (
//     <Center height="100vh" p={4}>
//       <Box
//         maxW="lg"
//         width="full"
//         borderWidth="1px"
//         borderRadius="lg"
//         overflow="hidden"
//         p={6}
//         boxShadow="lg"
//         textAlign="center"
//       >
//         <img src={logo} alt="Logo" style={{ margin: '0 auto 20px', height: '50px' }} />
//         <Heading mb={6}>Register</Heading>
//         <RadioGroup
//           onChange={(value) => setFormData({ ...formData, userType: value })}
//           value={formData.userType}
//           mb={6}
//         >
//           <Stack direction="row" justifyContent="center">
//             <Radio value="Candidate">Candidate</Radio>
//             <Radio value="Business Partner">Business Partner</Radio>
//           </Stack>
//         </RadioGroup>

//         {success ? (
//           <>
//             <Lottie animationData={successAnimation} style={{ height: '200px' }} />
//             Successfully Registered
//           </>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <FormControl id="name" mb={4}>
//               <FormLabel>Name</FormLabel>
//               <Input type="text" name="name" value={formData.name} onChange={handleChange} />
//             </FormControl>
//             <FormControl id="mobile" mb={4}>
//               <FormLabel>Mobile Number</FormLabel>
//               <Input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
//             </FormControl>
//             <FormControl id="email" mb={4}>
//               <FormLabel>Email</FormLabel>
//               <Input type="email" name="email" value={formData.email} onChange={handleChange} />
//             </FormControl>
//             <FormControl id="address" mb={4}>
//               <FormLabel>Address</FormLabel>
//               <Input type="text" name="address" value={formData.address} onChange={handleChange} />
//             </FormControl>
//             <FormControl id="city" mb={4}>
//               <FormLabel>City</FormLabel>
//               <Input type="text" name="city" value={formData.city} onChange={handleChange} />
//             </FormControl>
//             <FormControl id="password" mb={6}>
//               <FormLabel>Password</FormLabel>
//               <Input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </FormControl>

//             {formData.userType === 'Candidate' && (
//               <>
//                 <FormControl id="academicQualifications" mb={4}>
//                   <FormLabel>Highest Academic Qualifications</FormLabel>
//                   <Input
//                     type="text"
//                     name="academicQualifications"
//                     value={formData.academicQualifications}
//                     onChange={handleChange}
//                   />
//                 </FormControl>
//                 <FormControl id="instituteDetails" mb={4}>
//                   <FormLabel>Academic Institute Details</FormLabel>
//                   <Input
//                     type="text"
//                     name="instituteDetails"
//                     value={formData.instituteDetails}
//                     onChange={handleChange}
//                   />
//                 </FormControl>
//               </>
//             )}

//             {formData.userType === 'Business Partner' && (
//               <>
//                 <FormControl id="businessName" mb={4}>
//                   <FormLabel>Business Name</FormLabel>
//                   <Input
//                     type="text"
//                     name="businessName"
//                     value={formData.businessName}
//                     onChange={handleChange}
//                   />
//                 </FormControl>
//                 <FormControl id="trainingsProvided" mb={6}>
//                   <FormLabel>Types of Trainings Provided</FormLabel>
//                   <CheckboxGroup onChange={handleCheckboxChange}>
//                     <Stack spacing={2}>
//                       <Checkbox value="Schools">Schools</Checkbox>
//                       <Checkbox value="Colleges">Colleges</Checkbox>
//                       <Checkbox value="Government Competitive Exams">
//                         Government Competitive Exams
//                       </Checkbox>
//                       <Checkbox value="NEET">NEET</Checkbox>
//                       <Checkbox value="Bank Exams">Bank Exams</Checkbox>
//                     </Stack>
//                   </CheckboxGroup>
//                 </FormControl>
//               </>
//             )}

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




// Version 3 - Working Version

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Lottie from 'lottie-react';
// import successAnimation from '../animations/successfulLogin.json';
// import failureAnimation from '../animations/error.json';
// import logo from '../assets/navbar/logo1.jpg';
// import {
//   Box,
//   Button,
//   Input,
//   Stack,
//   Heading,
//   Center,
//   Text,
//   FormControl,
//   FormLabel,
//   Radio,
//   RadioGroup,
//   Checkbox,
//   CheckboxGroup,
//   Select,
// } from '@chakra-ui/react';




// export const RegisterPage = () => {

//   interface FormData {
//     name: string;
//     mobile: string;
//     email: string;
//     address: string;
//     city: string;
//     pincode: string;
//     password: string;
//     userType: string;
//     qualifications: string;
//     institute: string;
//     businessName: string;
//     businessType: string;
//     trainingsProvided: string[]; // Explicitly type as an array of strings
//   }

//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     mobile: '',
//     email: '',
//     address: '',
//     city: '',
//     pincode: '',
//     password: '',
//     userType: 'Candidate',
//     qualifications: '',
//     institute: '',
//     businessName: '',
//     businessType: '',
//     trainingsProvided: [], // Array for storing selected trainings
//   });

//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Handle text input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   //Handle checkbox changes
//   const handleTrainingsCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, checked } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       trainingsProvided: checked
//         ? [...prevData.trainingsProvided, value] // Add to array if checked
//         : prevData.trainingsProvided.filter((training) => training !== value), // Remove if unchecked
//     }));
//   };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     for (let [key, value] of Object.entries(formData)) {
//       console.log(key, value);
//     }
    

//     try {
//       const response = await axios.post('https://admee.in:3003/api/ip/register', formData);
//       if (response.status !== 205) {
//         setSuccess(true);
//         setTimeout(() => navigate('/login'), 5000);
//       } else {
//         setError('Mobile Number Already Registered with Another Account');
//       }
//     } catch (error) {
//       setError('Registration failed. Please try again.');
//     }
//   };

//   const trainingOptions = ['Schools', 'Colleges', 'Government Competitive Exams', 'NEET', 'Bank Exams'];

//   return (
//     <Center height="100vh" p={4}>
//       <Box
//         maxW={{ base: '90%', md: 'lg' }}
//         width="full"
//         borderWidth="1px"
//         borderRadius="lg"
//         overflow="hidden"
//         p={6}
//         boxShadow="lg"
//         textAlign="center"
//       >
//         <img src={logo} alt="Logo" style={{ margin: '0 auto 20px', height: '50px' }} />
//         <Heading mb={6}>Register</Heading>
//         <RadioGroup
//           onChange={(value) => setFormData({ ...formData, userType: value })}
//           value={formData.userType}
//           mb={6}
//         >
//           <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
//             <Radio value="Candidate">Candidate</Radio>
//             <Radio value="Business Partner">Business Partner</Radio>
//           </Stack>
//         </RadioGroup>

//         {success ? (
//           <>
//             <Lottie animationData={successAnimation} style={{ height: '200px' }} />
//             Successfully Registered
//           </>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <FormControl id="name" mb={4}>
//               <FormLabel>Name</FormLabel>
//               <Input type="text" name="name" value={formData.name} onChange={handleChange} />
//             </FormControl>
//             {formData.userType === 'Candidate' && (
//             <FormControl id="qualifications" mb={4}>
//               <FormLabel>Highest Qualification</FormLabel>
//               <Input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} />
//             </FormControl> 
//             )}
//             {formData.userType === 'Candidate' && (
//             <FormControl id="institute" mb={4}>
//               <FormLabel>Institute</FormLabel>
//               <Input type="text" name="institute" value={formData.institute} onChange={handleChange} />
//             </FormControl> 
//             )}
//             <FormControl id="mobile" mb={4}>
//               <FormLabel>Mobile Number</FormLabel>
//               <Input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
//             </FormControl>
//             <FormControl id="email" mb={4}>
//               <FormLabel>Email</FormLabel>
//               <Input type="email" name="email" value={formData.email} onChange={handleChange} />
//             </FormControl>
//             <FormControl id="address" mb={4}>
//               <FormLabel>Address</FormLabel>
//               <Input type="text" name="address" value={formData.address} onChange={handleChange} />
//             </FormControl>
//             <FormControl id="city" mb={4}>
//               <FormLabel>City</FormLabel>
//               <Input type="text" name="city" value={formData.city} onChange={handleChange} />
//             </FormControl>
//             <FormControl id="pincode" mb={4}>
//               <FormLabel>Pincode</FormLabel>
//               <Input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
//             </FormControl>


//             {formData.userType === 'Business Partner' && (
//               <>
//                 <FormControl id="businessName" mb={4}>
//                   <FormLabel>Business Name</FormLabel>
//                   <Input
//                     type="text"
//                     name="businessName"
//                     value={formData.businessName}
//                     onChange={handleChange}
//                   />
//                 </FormControl>

//                 <FormControl id="businessType" mb={4}>
//                 <FormLabel>Business Type</FormLabel>
//                 <Select 
//                   name="businessType" 
//                   value={formData.businessType} 
//                   onChange={handleChange}
//                   placeholder="Select Business Type"
//                 >
//                   <option value="College">College</option>
//                   <option value="School">School</option>
//                   <option value="Tuition Center">Tuition Center</option>
//                   <option value="Competitive Exams Institute">Competitive Exams Institute</option>
//                   <option value="Other">Other</option>
//                 </Select>
//               </FormControl>

//                 <FormControl id="trainingsProvided" mb={6}>
//                   <FormLabel>Types of Trainings Provided</FormLabel>
//                   <div className="form-group">
//                     {trainingOptions.map((option, index) => (
//                       <div key={index}>
//                         <label>
//                           <input
//                             type="checkbox"
//                             value={option}
//                             checked={formData.trainingsProvided.includes(option)}
//                             onChange={handleTrainingsCheckboxChange}
//                           />
//                           {option}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </FormControl>
//               </>
//             )}

//             <FormControl id="password" mb={6}>
//               <FormLabel>Password</FormLabel>
//               <Input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
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


// Version 4 - Design Enhancement to v3

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
  Grid,
  GridItem,
  Heading,
  Center,
  Text,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Stack,
  Select,
  useBreakpointValue,
} from '@chakra-ui/react';

export const RegisterPage = () => {
  interface FormData {
    name: string;
    mobile: string;
    email: string;
    address: string;
    city: string;
    pincode: string;
    password: string;
    userType: string;
    qualifications: string;
    institute: string;
    businessName: string;
    businessType: string;
    trainingsProvided: string[];
  }

  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    password: '',
    userType: 'Candidate',
    qualifications: '',
    institute: '',
    businessName: '',
    businessType: '',
    trainingsProvided: [],
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTrainingsCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      trainingsProvided: checked
        ? [...prevData.trainingsProvided, value]
        : prevData.trainingsProvided.filter((training) => training !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://admee.in:3003/api/ip/register', formData);
      if (response.status !== 205) {
        setSuccess(true);
        setTimeout(() => navigate('/login'), 5000);
      } else {
        setError('Mobile Number Already Registered with Another Account');
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  const trainingOptions = ['Schools', 'Colleges', 'Government Competitive Exams', 'NEET', 'Bank Exams'];

  return (
    <Center height="100vh" p={4}>
      <Box
        maxW={{ base: '95%', md: '600px' }}
        w="full"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={6}
        boxShadow="lg"
        bg="white"
      >
        <Center mb={4}>
          <img src={logo} alt="Logo" style={{ height: useBreakpointValue({ base: '40px', md: '175px' }) }} />
        </Center>
        {/* <Heading size={useBreakpointValue({ base: 'md', md: 'lg' })} textAlign="center" mb={6}>
          Register
        </Heading> */}

        <RadioGroup
          onChange={(value) => setFormData({ ...formData, userType: value })}
          value={formData.userType}
          mb={6}
        >
          <Stack direction="row" justify="center" spacing={6}>
            <Radio value="Candidate">Candidate</Radio>
            <Radio value="Business Partner">Business Partner</Radio>
          </Stack>
        </RadioGroup>

        {success ? (
          <Center flexDirection="column">
            <Lottie animationData={successAnimation} style={{ height: '200px' }} />
            <Text mt={4} fontSize="lg" fontWeight="bold" color="green.500">
              Successfully Registered
            </Text>
          </Center>
        ) : (
          <form onSubmit={handleSubmit}>
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
              <GridItem>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" name="name" value={formData.name} onChange={handleChange} />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="mobile" isRequired>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="address" isRequired>
                  <FormLabel>Address</FormLabel>
                  <Input type="text" name="address" value={formData.address} onChange={handleChange} />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="city" isRequired>
                  <FormLabel>City</FormLabel>
                  <Input type="text" name="city" value={formData.city} onChange={handleChange} />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="pincode" isRequired>
                  <FormLabel>Pincode</FormLabel>
                  <Input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
                </FormControl>
              </GridItem>
            </Grid>

            {formData.userType === 'Business Partner' && (
              <>
                <FormControl id="businessName" mt={4} isRequired>
                  <FormLabel>Business Name</FormLabel>
                  <Input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl id="businessType" mt={4} isRequired>
                  <FormLabel>Business Type</FormLabel>
                  <Select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    placeholder="Select Business Type"
                  >
                    <option value="College">College</option>
                    <option value="School">School</option>
                    <option value="Tuition Center">Tuition Center</option>
                    <option value="Competitive Exams Institute">Competitive Exams Institute</option>
                    <option value="Other">Other</option>
                  </Select>
                </FormControl>
              </>
            )}

            <FormControl id="password" mt={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={formData.password} onChange={handleChange} />
            </FormControl>

            <Button colorScheme="purple" w="full" mt={6} type="submit">
              Register
            </Button>
            {error && <Text color="red.500" mt={4}>{error}</Text>}
          </form>
        )}
      </Box>
    </Center>
  );
};

export default RegisterPage;

