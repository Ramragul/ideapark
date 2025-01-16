


// Version 1 - Working Version

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Lottie from 'lottie-react';
// import successAnimation from '../animations/successfulLogin.json';
// //import failureAnimation from '../animations/error.json';
// import logo from '../assets/navbar/logo2.jpg';
// import useGetList , {list}from '@/hooks/useGetList';
// import {
//   Box,
//   Button,
//   Input,
//   Grid,
//   GridItem,
//   Center,
//   Text,
//   FormControl,
//   FormLabel,
//   Radio,
//   RadioGroup,
//   Stack,
//   Select,
//   useBreakpointValue,
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
//     trainingsProvided: string[];
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
//     trainingsProvided: [],
//   });

//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const { data, isLoading } = useGetList(`/api/ip/institute/lists`);

//   console.log("Response Received from Backend Institute Api " +JSON.stringify(data) )



//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleTrainingsCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   //   const { value, checked } = event.target;
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     trainingsProvided: checked
//   //       ? [...prevData.trainingsProvided, value]
//   //       : prevData.trainingsProvided.filter((training) => training !== value),
//   //   }));
//   // };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

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

//   //const trainingOptions = ['Schools', 'Colleges', 'Government Competitive Exams', 'NEET', 'Bank Exams'];

//   return (
//     <Center height="100vh" p={4}>
//       <Box
//         maxW={{ base: '95%', md: '600px' }}
//         w="full"
//         borderWidth="1px"
//         borderRadius="lg"
//         overflow="hidden"
//         p={6}
//         boxShadow="lg"
//         bg="white"
//       >
//         <Center mb={4}>
//           <img src={logo} alt="Logo" style={{ height: useBreakpointValue({ base: '40px', md: '175px' }) }} />
//         </Center>
//         {/* <Heading size={useBreakpointValue({ base: 'md', md: 'lg' })} textAlign="center" mb={6}>
//           Register
//         </Heading> */}

//         <RadioGroup
//           onChange={(value) => setFormData({ ...formData, userType: value })}
//           value={formData.userType}
//           mb={6}
//         >
//           <Stack direction="row" justify="center" spacing={6}>
//             <Radio value="Candidate">Candidate</Radio>
//             <Radio value="Business Partner">Business Partner</Radio>
//           </Stack>
//         </RadioGroup>

//         {success ? (
//           <Center flexDirection="column">
//             <Lottie animationData={successAnimation} style={{ height: '200px' }} />
//             <Text mt={4} fontSize="lg" fontWeight="bold" color="green.500">
//               Successfully Registered
//             </Text>
//           </Center>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
//               <GridItem>
//                 <FormControl id="name" isRequired>
//                   <FormLabel>Name</FormLabel>
//                   <Input type="text" name="name" value={formData.name} onChange={handleChange} />
//                 </FormControl>
//               </GridItem>

//               <GridItem>
//                 <FormControl id="mobile" isRequired>
//                   <FormLabel>Mobile Number</FormLabel>
//                   <Input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
//                 </FormControl>
//               </GridItem>

//               <GridItem>
//                 <FormControl id="email" isRequired>
//                   <FormLabel>Email</FormLabel>
//                   <Input type="email" name="email" value={formData.email} onChange={handleChange} />
//                 </FormControl>
//               </GridItem>

//               <GridItem>
//                 <FormControl id="address" isRequired>
//                   <FormLabel>Address</FormLabel>
//                   <Input type="text" name="address" value={formData.address} onChange={handleChange} />
//                 </FormControl>
//               </GridItem>

//               <GridItem>
//                 <FormControl id="city" isRequired>
//                   <FormLabel>City</FormLabel>
//                   <Input type="text" name="city" value={formData.city} onChange={handleChange} />
//                 </FormControl>
//               </GridItem>

//               <GridItem>
//                 <FormControl id="pincode" isRequired>
//                   <FormLabel>Pincode</FormLabel>
//                   <Input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
//                 </FormControl>
//               </GridItem>
//             </Grid>

//             {formData.userType === 'Business Partner' && (
//               <>
//                 <FormControl id="businessName" mt={4} isRequired>
//                   <FormLabel>Business Name</FormLabel>
//                   <Input
//                     type="text"
//                     name="businessName"
//                     value={formData.businessName}
//                     onChange={handleChange}
//                   />
//                 </FormControl>

//                 <FormControl id="businessType" mt={4} isRequired>
//                   <FormLabel>Business Type</FormLabel>
//                   <Select
//                     name="businessType"
//                     value={formData.businessType}
//                     onChange={handleChange}
//                     placeholder="Select Business Type"
//                   >
//                     <option value="College">College</option>
//                     <option value="School">School</option>
//                     <option value="Tuition Center">Tuition Center</option>
//                     <option value="Competitive Exams Institute">Competitive Exams Institute</option>
//                     <option value="Other">Other</option>
//                   </Select>
//                 </FormControl>
//               </>
//             )}

//             <FormControl id="password" mt={4} isRequired>
//               <FormLabel>Password</FormLabel>
//               <Input type="password" name="password" value={formData.password} onChange={handleChange} />
//             </FormControl>

//             <Button colorScheme="purple" w="full" mt={6} type="submit">
//               Register
//             </Button>
//             {error && <Text color="red.500" mt={4}>{error}</Text>}
//           </form>
//         )}
//       </Box>
//     </Center>
//   );
// };

// export default RegisterPage;



// Version 2 : Enhancement to Version 1

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Select from "react-select";
import successAnimation from "../animations/successfulLogin.json";
import logo from "../assets/navbar/logo2.jpg";
import useGetList from "@/hooks/useGetList";
import {
  Box,
  Button,
  Input,
  Grid,
  GridItem,
  Center,
  Text,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  //Select,
  Stack,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";

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
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    password: "",
    userType: "Candidate",
    qualifications: "",
    institute: "",
    businessName: "",
    businessType: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { data, isLoading } = useGetList(`/api/ip/institute/lists`);

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleInstituteChange = (selectedOption: any) => {
    setFormData({ ...formData, institute: selectedOption?.value || "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://admee.in:3003/api/ip/register", formData);
      if (response.status !== 205) {
        setSuccess(true);
        setTimeout(() => navigate("/login"), 5000);
      } else {
        setError("Mobile Number Already Registered with Another Account");
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  const instituteOptions =
    data?.map((item: { type: string }) => ({
      value: item.type,
      label: item.type,
    })) || [];

  return (
    <Center height="100vh" bg="purple.50" p={4}>
      <Box
        maxW={{ base: "95%", md: "600px" }}
        w="full"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={6}
        boxShadow="lg"
        bg="white"
      >
        <Center mb={4}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: useBreakpointValue({ base: "40px", md: "175px" }) }}
          />
        </Center>

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
            <Lottie animationData={successAnimation} style={{ height: "200px" }} />
            <Text mt={4} fontSize="lg" fontWeight="bold" color="green.500">
              Successfully Registered
            </Text>
          </Center>
        ) : (
          <form onSubmit={handleSubmit}>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
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

              {formData.userType === "Candidate" && (

              // <GridItem colSpan={2}>
              //   <FormControl id="institute" isRequired>
              //     <FormLabel>Institute</FormLabel>
              //     {isLoading ? (
              //       <Spinner />
              //     ) : (
              //       <Select
              //         options={instituteOptions}
              //         placeholder="Search and select institute"
              //         value={instituteOptions.find(
              //           (option: any) => option.value === formData.institute
              //         )}
              //         onChange={handleInstituteChange}
              //         isClearable
              //         isSearchable
              //       />
              //     )}
              //   </FormControl>
              // </GridItem>

                <GridItem colSpan={2}>
                <FormControl id="institute" isRequired>
                  <FormLabel>Institute</FormLabel>
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <Select
                      options={instituteOptions}
                      placeholder="Search and select institute"
                      value={instituteOptions.find(
                        (option: any) => option.value === formData.institute
                      )}
                      onChange={handleInstituteChange}
                      isClearable
                      isSearchable
                      styles={{
                        menu: (provided) => ({
                          ...provided,
                          maxHeight: "200px", // Sets the maximum height for the dropdown
                          overflowY: "auto",  // Enables vertical scrolling
                        }),
                      }}
                    />
                  )}
                </FormControl>
              </GridItem>

              
        
            //   <GridItem colSpan={2}>
            //   <FormControl id="institute" isRequired>
            //     <FormLabel>Institute</FormLabel>
            //     {isLoading ? (
            //       <Spinner />
            //     ) : (
            //       <Select
            //         placeholder="Search and select institute"
            //         value={formData.institute}
            //         onChange={(e) =>
            //           setFormData({ ...formData, institute: e.target.value })
            //         }
            //       >
            //         {instituteOptions.map((option: any) => (
            //           <option key={option.value} value={option.value}>
            //             {option.label}
            //           </option>
            //         ))}
            //       </Select>
            //     )}
            //   </FormControl>
            // </GridItem>

              )}
            </Grid>

            {formData.userType === "Business Partner" && (
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

                {/* <FormControl id="businessType" mt={4} isRequired>
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
                    <option value="Competitive Exams Institute">
                      Competitive Exams Institute
                    </option>
                    <option value="Other">Other</option>
                  </Select>
                </FormControl> */}
                <FormControl id="businessType" mt={4} isRequired>
                <FormLabel>Business Type</FormLabel>
                {/* <Select
                  name="businessType"
                  value={formData.businessType}
                  onChange={(e) => handleSelectChange("businessType", e.target.value)}
                  placeholder="Select Business Type"
                >
                  <option value="College">College</option>
                  <option value="School">School</option>
                  <option value="Tuition Center">Tuition Center</option>
                  <option value="Competitive Exams Institute">Competitive Exams Institute</option>
                  <option value="Other">Other</option>
                </Select> */}

                <Select
                  options={[
                    { value: "College", label: "College" },
                    { value: "School", label: "School" },
                    { value: "Tuition Center", label: "Tuition Center" },
                    { value: "Competitive Exams Institute", label: "Competitive Exams Institute" },
                    { value: "Other", label: "Other" },
                  ]}
                  placeholder="Select Business Type"
                  value={
                    formData.businessType
                      ? { value: formData.businessType, label: formData.businessType }
                      : null
                  }
                  onChange={(selectedOption) =>
                    handleSelectChange("businessType", selectedOption?.value || "")
                  }
                />
              </FormControl>

              </>
            )}

            <FormControl id="password" mt={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </FormControl>

            <Button colorScheme="purple" w="full" mt={6} type="submit">
              Register
            </Button>
            {error && (
              <Text color="red.500" mt={4}>
                {error}
              </Text>
            )}
          </form>
        )}
      </Box>
    </Center>
  );
};

export default RegisterPage;



// Version 3 : Enhancement to Version 1


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Lottie from 'lottie-react';
// import Select from 'react-select';
// import successAnimation from '../animations/successfulLogin.json';
// import logo from '../assets/navbar/logo2.jpg';
// import useGetList from '@/hooks/useGetList';
// import {
//   Box,
//   Button,
//   Input,
//   Grid,
//   GridItem,
//   Center,
//   Text,
//   FormControl,
//   FormLabel,
//   Radio,
//   RadioGroup,
//   Stack,
//   useBreakpointValue,
//   Heading,
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
//   });

//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const { data, isLoading } = useGetList('/api/ip/institute/lists');

//   // Convert backend data to options for react-select
//   const instituteOptions =
//     data?.map((item: { type: string }) => ({
//       value: item.type,
//       label: item.type,
//     })) || [];

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleInstituteChange = (selectedOption: any) => {
//     setFormData({ ...formData, institute: selectedOption?.value || '' });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
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

//   return (
//     <Center height="100vh" p={4}>
//       <Box
//         maxW={{ base: '95%', md: '600px' }}
//         w="full"
//         borderWidth="1px"
//         borderRadius="lg"
//         overflow="hidden"
//         p={6}
//         boxShadow="lg"
//         bg="white"
//       >
//         <Center mb={4}>
//           <img
//             src={logo}
//             alt="Logo"
//             style={{ height: useBreakpointValue({ base: '40px', md: '175px' }) }}
//           />
//         </Center>

//         <Heading
//           size={useBreakpointValue({ base: 'md', md: 'lg' })}
//           textAlign="center"
//           color="purple.600"
//           mb={6}
//         >
//           Register
//         </Heading>

//         <RadioGroup
//           onChange={(value) => setFormData({ ...formData, userType: value })}
//           value={formData.userType}
//           mb={6}
//         >
//           <Stack direction="row" justify="center" spacing={6}>
//             <Radio value="Candidate" colorScheme="purple">
//               Candidate
//             </Radio>
//             <Radio value="Business Partner" colorScheme="purple">
//               Business Partner
//             </Radio>
//           </Stack>
//         </RadioGroup>

//         {success ? (
//           <Center flexDirection="column">
//             <Lottie animationData={successAnimation} style={{ height: '200px' }} />
//             <Text mt={4} fontSize="lg" fontWeight="bold" color="green.500">
//               Successfully Registered
//             </Text>
//           </Center>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
//               <GridItem>
//                 <FormControl id="name" isRequired>
//                   <FormLabel>Name</FormLabel>
//                   <Input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     focusBorderColor="purple.500"
//                   />
//                 </FormControl>
//               </GridItem>

//               <GridItem>
//                 <FormControl id="mobile" isRequired>
//                   <FormLabel>Mobile Number</FormLabel>
//                   <Input
//                     type="text"
//                     name="mobile"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                     focusBorderColor="purple.500"
//                   />
//                 </FormControl>
//               </GridItem>

//               <GridItem>
//                 <FormControl id="email" isRequired>
//                   <FormLabel>Email</FormLabel>
//                   <Input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     focusBorderColor="purple.500"
//                   />
//                 </FormControl>
//               </GridItem>

//               <GridItem>
//                 <FormControl id="institute" isRequired>
//                   <FormLabel>Institute</FormLabel>
//                   <Select
//                     options={instituteOptions}
//                     value={instituteOptions.find((opt) => opt.value === formData.institute)}
//                     onChange={handleInstituteChange}
//                     isLoading={isLoading}
//                     placeholder="Select or Search Institute"
//                     isClearable
//                     styles={{
//                       control: (base) => ({
//                         ...base,
//                         borderColor: 'purple.500',
//                       }),
//                       menu: (base) => ({
//                         ...base,
//                         zIndex: 9999,
//                       }),
//                     }}
//                   />
//                 </FormControl>
//               </GridItem>
//             </Grid>

//             <Button colorScheme="purple" w="full" mt={6} type="submit">
//               Register
//             </Button>
//             {error && (
//               <Text color="red.500" mt={4}>
//                 {error}
//               </Text>
//             )}
//           </form>
//         )}
//       </Box>
//     </Center>
//   );
// };

// export default RegisterPage;
