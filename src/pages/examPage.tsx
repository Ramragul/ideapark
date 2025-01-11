// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './ExamPage.css'; // Assuming custom styles for a pleasant UI

// type Option = {
//   optionId: number;
//   questionId: number;
//   option_text: string;
//   is_correct: boolean;
// };

// type Question = {
//   questionId: number;
//   category: string;
//   questionText: string;
//   options: Option[];
// };

// type TestDetails = {
//   testId: string;
//   questions: Question[];
// };

// const ExamPage: React.FC = () => {
//   const [testDetails, setTestDetails] = useState<TestDetails | null>(null);
//   const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({}); // Maps questionId to optionId
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchTestDetails = async () => {
//       try {
//         const response = await axios.get('https://admee.in:3003/api/ip/testDetails/5'); // Replace with actual test ID
//         setTestDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching test details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestDetails();
//   }, []);

//   const handleOptionChange = (questionId: number, optionId: number) => {
//     setSelectedAnswers(prev => ({
//       ...prev,
//       [questionId]: optionId,
//     }));
//   };

//   const handleSubmit = () => {
//     console.log('Selected Answers:', selectedAnswers);
//     // Submit the answers to the backend or perform further actions
//   };

//   if (loading) return <div className="loading">Loading...</div>;

//   if (!testDetails) return <div className="error">Failed to load test details.</div>;

//   // Group questions by category
//   const categorizedQuestions = testDetails.questions.reduce<Record<string, Question[]>>((categories, question) => {
//     if (!categories[question.category]) categories[question.category] = [];
//     categories[question.category].push(question);
//     return categories;
//   }, {});

//   return (
//     <div className="exam-page">
//       <h1>Online Exam</h1>
//       {Object.entries(categorizedQuestions).map(([category, questions]) => (
//         <div key={category} className="category-section">
//           <h2>{category}</h2>
//           {questions.map(question => (
//             <div key={question.questionId} className="question-block">
//               <p className="question-text">{question.questionText}</p>
//               <div className="options">
//                 {question.options.map(option => (
//                   <label key={option.optionId} className="option">
//                     <input
//                       type="radio"
//                       name={`question-${question.questionId}`}
//                       value={option.optionId}
//                       checked={selectedAnswers[question.questionId] === option.optionId}
//                       onChange={() => handleOptionChange(question.questionId, option.optionId)}
//                     />
//                     {option.option_text}
//                   </label>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//       <button onClick={handleSubmit} className="submit-button">Submit</button>
//     </div>
//   );
// };

// export default ExamPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Button,
//   Heading,
  
//   Stack,
//   Text,
//   VStack,
//   Spinner,
//   Center,
//   Alert,
//   AlertIcon,
// } from '@chakra-ui/react';

// import { Radio,RadioGroup } from "@/components/ui/radio"

// type Option = {
//   optionId: number;
//   questionId: number;
//   option_text: string;
//   is_correct: boolean;
// };

// type Question = {
//   questionId: number;
//   category: string;
//   questionText: string;
//   options: Option[];
// };

// type TestDetails = {
//   testId: string;
//   questions: Question[];
// };

// export const ExamPage: React.FC = () => {
//   const [testDetails, setTestDetails] = useState<TestDetails | null>(null);
//   const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchTestDetails = async () => {
//       try {
//         const response = await axios.get('https://admee.in:3003/api/ip/testDetails/5'); // Replace with actual API endpoint
//         setTestDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching test details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestDetails();
//   }, []);

// //   const handleOptionChange = (questionId: number, optionId: number) => {
// //     setSelectedAnswers(prev => ({
// //       ...prev,
// //       [questionId]: optionId,
// //     }));
// //   };

// const handleOptionChange = (questionId: number, optionId: number) => {
//     setSelectedAnswers((prev) => {
//         console.log("OptionID : "+optionId)
//       const updated = {
//         ...prev,
//         [questionId]: optionId,
//       };
//       console.log("Updated selectedAnswers:", updated);
//       return updated;
//     });
//   };
  

//   const handleSubmit = () => {
//     console.log('Selected Answers:', selectedAnswers);
//     // Submit logic here
//   };

//   if (loading) {
//     return (
//       <Center h="100vh">
//         <Spinner size="xl" />
//       </Center>
//     );
//   }

//   if (!testDetails) {
//     return (
//       <Center h="100vh">
//         <Alert status="error">
//           {/* <AlertIcon /> */}
//           Failed to load test details. Please try again later.
//         </Alert>
//       </Center>
//     );
//   }

//   const categorizedQuestions = testDetails.questions.reduce<Record<string, Question[]>>(
//     (categories, question) => {
//       if (!categories[question.category]) categories[question.category] = [];
//       categories[question.category].push(question);
//       return categories;
//     },
//     {}
//   );

//   return (
//     <Box maxW="800px" mx="auto" py={10} px={4}>
//       <Heading mb={6} textAlign="center">
//         Online Exam
//       </Heading>
//       <VStack spacing={8} align="stretch">
//         {Object.entries(categorizedQuestions).map(([category, questions]) => (
//           <Box key={category} borderWidth="1px" borderRadius="lg" p={6} shadow="md">
//             <Heading as="h2" size="lg" mb={4}>
//               {category}
//             </Heading>
//             {questions.map(question => (
//               <Box key={question.questionId} mb={6}>
//                 <Text fontSize="lg" mb={2} fontWeight="semibold">
//                   {question.questionText}
//                 </Text>
//                 <RadioGroup
//   onChange={(value) => {
//     console.log(`Selected value for question ${question.questionId}: ${(value)}`);
//     handleOptionChange(question.questionId, parseInt(value));
//   }}
//   value={selectedAnswers[question.questionId]?.toString() || ''}
// >
//   <Stack direction="column">
//     {question.options.map((option) => (
//       <Radio key={option.optionId} value={option.optionId.toString()}>
//         {option.option_text}
//       </Radio>
//     ))}
//   </Stack>
// </RadioGroup>


//               </Box>
//             ))}
//           </Box>
//         ))}
//       </VStack>
//       <Button
//         mt={6}
//         colorScheme="pink"
//         size="lg"
//         w="full"
//         onClick={handleSubmit}
//       >
//         Submit
//       </Button>
//     </Box>
//   );
// };

// export default ExamPage;


// Version 3 

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box, Button, Heading, Stack, Text, Spinner, Center } from '@chakra-ui/react';
// import { Radio, RadioGroup } from "@/components/ui/radio";

// type Option = {
//   optionId: number;
//   questionId: number;
//   option_text: string;
//   is_correct: boolean;
// };

// type Question = {
//   questionId: number;
//   category: string;
//   questionText: string;
//   options: Option[];
// };

// type TestDetails = {
//   testId: string;
//   questions: Question[];
// };

// export const ExamPage: React.FC = () => {
//   const [testDetails, setTestDetails] = useState<TestDetails | null>(null);
//   const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetch the test details from API
//   useEffect(() => {
//     const fetchTestDetails = async () => {
//       try {
//         const response = await axios.get('https://admee.in:3003/api/ip/testDetails/5'); // Replace with actual API endpoint
//         setTestDetails(response.data);
//         console.log(response.data); // Debugging: log the fetched data
//       } catch (error) {
//         console.error('Error fetching test details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestDetails();
//   }, []);

//   // Handle the radio button selection change
//   const handleOptionChange = (questionId: number, value: string) => {
//     const optionId = parseInt(value, 10); // Ensure it's parsed correctly as an integer
//     if (!isNaN(optionId)) {
//       setSelectedAnswers((prev) => {
//         console.log("Updating selected answers:", {
//           ...prev,
//           [questionId]: optionId,
//         });
//         return {
//           ...prev,
//           [questionId]: optionId,
//         };
//       });
//     }
//   };

//   // Handle form submission
//   const handleSubmit = () => {
//     console.log('Selected Answers:', selectedAnswers);
//   };

//   if (loading) {
//     return (
//       <Center h="100vh">
//         <Spinner size="xl" />
//       </Center>
//     );
//   }

//   if (!testDetails) {
//     return (
//       <Center h="100vh">
//         <p>Failed to load test details. Please try again later.</p>
//       </Center>
//     );
//   }

//   return (
//     <Box maxW="800px" mx="auto" py={10} px={4}>
//       <Heading mb={6} textAlign="center">
//         Online Exam
//       </Heading>
//       <Stack spacing={6}>
//         {testDetails.questions.map((question) => (
//           <Box key={question.questionId} borderWidth="1px" borderRadius="lg" p={6} shadow="md">
//             <Text fontSize="lg" mb={4} fontWeight="semibold">
//               {question.questionText}
//             </Text>

//             {/* RadioGroup for each question */}
//             <RadioGroup
//               onChange={(e) => {
//                 const value = e.target.value; // Access the value from event.target.value
//                 console.log("Radio value changed:", value); // Debugging
//                 handleOptionChange(question.questionId, value);
//               }}
//               value={selectedAnswers[question.questionId] ? selectedAnswers[question.questionId].toString() : ''}
//             >
//               <Stack direction="column">
//                 {question.options.map((option) => (
//                   <Radio key={option.optionId} value={option.optionId.toString()}>
//                     {option.option_text}
//                   </Radio>
//                 ))}
//               </Stack>
//             </RadioGroup>
//           </Box>
//         ))}
//       </Stack>

//       {/* Submit button */}
//       <Button
//         mt={6}
//         colorScheme="pink"
//         size="lg"
//         w="full"
//         onClick={handleSubmit}
//         isDisabled={Object.keys(selectedAnswers).length !== testDetails.questions.length}
//       >
//         Submit
//       </Button>
//     </Box>
//   );
// };

// export default ExamPage;



// Version 4 


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Button,
//   Heading,
//   Stack,
//   Text,
//   Spinner,
//   Center,

// } from '@chakra-ui/react';
// import { Radio, RadioGroup } from '@/components/ui/radio';
// import { useColorModeValue } from '@/components/ui/color-mode';

// type Option = {
//   optionId: number;
//   questionId: number;
//   option_text: string;
//   is_correct: boolean;
// };

// type Question = {
//   questionId: number;
//   category: string;
//   questionText: string;
//   options: Option[];
// };

// type TestDetails = {
//   testId: string;
//   questions: Question[];
// };

// export const ExamPage: React.FC = () => {
//   const [testDetails, setTestDetails] = useState<TestDetails | null>(null);
//   const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
//   const [loading, setLoading] = useState<boolean>(true);

//   const cardBg = useColorModeValue('white', 'gray.800');
//   const cardShadow = useColorModeValue('md', 'lg');

//   useEffect(() => {
//     const fetchTestDetails = async () => {
//       try {
//         const response = await axios.get('https://admee.in:3003/api/ip/testDetails/5'); // Replace with actual API endpoint
//         setTestDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching test details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestDetails();
//   }, []);

//   // const handleOptionChange = (questionId: number, value: string) => {
//   //   const optionId = parseInt(value, 10);
//   //   if (!isNaN(optionId)) {
//   //     setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
//   //   }
//   // };

//   const handleOptionChange = (questionId: number, value: string) => {
//     const optionId = parseInt(value, 10); // Ensure it's parsed correctly as an integer
//     if (!isNaN(optionId)) {
//       setSelectedAnswers((prev) => {
//         console.log("Updating selected answers:", {
//           ...prev,
//           [questionId]: optionId,
//         });
//         return {
//           ...prev,
//           [questionId]: optionId,
//         };
//       });
//     }
//   };
  

//   const handleSubmit = () => {
//     console.log('Selected Answers:', selectedAnswers);
//   };

//   if (loading) {
//     return (
//       <Center h="100vh">
//         <Spinner size="xl" />
//       </Center>
//     );
//   }

//   if (!testDetails) {
//     return (
//       <Center h="100vh">
//         <Text fontSize="lg">Failed to load test details. Please try again later.</Text>
//       </Center>
//     );
//   }

//   return (
//     <Box maxW={{ base: '95%', md: '80%', lg: '70%' }} mx="auto" py={10} px={4}>
//       <Heading mb={8} textAlign="center" color="pink.600">
//         Online Exam
//       </Heading>
//       <Stack spacing={8}>
//         {testDetails.questions.map((question, index) => (
//           <Box
//             key={question.questionId}
//             borderWidth="1px"
//             borderRadius="lg"
//             p={6}
//             bg={cardBg}
//             shadow={cardShadow}
//           >
//             <Text fontSize="lg" mb={4} fontWeight="bold" color="gray.700">
//               {`${index + 1}. ${question.questionText}`}
//             </Text>

//             {/* <RadioGroup
//               onChange={(value) => handleOptionChange(question.questionId, value)}
//               value={selectedAnswers[question.questionId]?.toString() || ''}
//             > */}
//                         <RadioGroup
//               onChange={(e) => {
//                 const value = e.target.value; // Access the value from event.target.value
//                 console.log("Radio value changed:", value); // Debugging
//                 handleOptionChange(question.questionId, value);
//               }}
//               value={selectedAnswers[question.questionId] ? selectedAnswers[question.questionId].toString() : ''}
//             >
//               <Stack spacing={4}>
//                 {question.options.map((option) => (
//                   <Radio key={option.optionId} value={option.optionId.toString()} colorScheme="pink">
//                     {option.option_text}
//                   </Radio>
//                 ))}
//               </Stack>
//             </RadioGroup>
//           </Box>
//         ))}
//       </Stack>
//       <Button
//         mt={8}
//         colorScheme="pink"
//         size="lg"
//         w="full"
//         onClick={handleSubmit}
//         isDisabled={Object.keys(selectedAnswers).length !== testDetails.questions.length}
//       >
//         Submit
//       </Button>
//     </Box>
//   );
// };

// export default ExamPage;



// Version 5 - Working Version

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Button,
//   Heading,
//   Stack,
//   Text,
//   Spinner,
//   Center,
// Radio,
// RadioGroup,
 
// } from '@chakra-ui/react';
// //import { Radio, RadioGroup } from '@/components/ui/radio';
// //import { useColorModeValue } from '@/components/ui/color-mode';
// //import { Progress } from '@chakra-ui/react';
// //import Progress from '@chakra-ui/react/progress';
// import { ProgressLabel } from '@chakra-ui/react';
// import { ProgressBar, ProgressRoot , ProgressValueText } from "@/components/ui/progress"

// import { useAuth } from '@/contexts/AuthContext';
// import usePostData from '../hooks/usePostData';



// type Option = {
//   optionId: number;
//   questionId: number;
//   option_text: string;
//   is_correct: boolean;
// };

// type Question = {
//   questionId: number;
//   category: string;
//   questionText: string;
//   options: Option[];
// };

// type TestDetails = {
//   testId: string;
//   questions: Question[];
// };

// export const ExamPage: React.FC = () => {
//   //const [testDetails, setTestDetails] = useState<TestDetails | null>(null);
//   const [testDetails, setTestDetails] = useState<TestDetails | null>(null as TestDetails | null);

//   const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [loading, setLoading] = useState<boolean>(true);

//   const { postData, isLoading: isUpdating } = usePostData('/ip/test/submit');

//   const {authState} = useAuth();
//   //const cardBg = useColorModeValue('white', 'gray.800');
//   //const cardShadow = useColorModeValue('md', 'lg');

//   const cardBg = 'white'; // or 'gray.800' depending on your theme
// const cardShadow = 'md'; // or 'lg' depending on your theme


//   useEffect(() => {
//     const fetchTestDetails = async () => {
//       try {
//         const response = await axios.get('https://admee.in:3003/api/ip/testDetails/14'); // Replace with actual API endpoint
//         setTestDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching test details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestDetails();
//   }, []);

//   // const handleOptionChange = (questionId: number, value: string) => {
//   //   const optionId = parseInt(value, 10);
//   //   if (!isNaN(optionId)) {
//   //     setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
//   //   }
//   // };

//   //   const handleOptionChange = (questionId: number, value: string) => {
//   //   const optionId = parseInt(value, 10); // Ensure it's parsed correctly as an integer
//   //   if (!isNaN(optionId)) {
//   //     setSelectedAnswers((prev) => {
//   //       console.log("Updating selected answers:", {
//   //         ...prev,
//   //         [questionId]: optionId,
//   //       });
//   //       return {
//   //         ...prev,
//   //         [questionId]: optionId,
//   //       };
//   //     });
//   //   }
//   // };

//   const handleOptionChange = (questionId: number, value: string) => {
//     const optionId = parseInt(value, 10); // Ensure it's parsed correctly as an integer
//     if (!isNaN(optionId)) {
//       setSelectedAnswers((prev) => {
//         console.log("Updating selected answers:", {
//           ...prev,
//           [questionId]: optionId,
//         });
//         return {
//           ...prev,
//           [questionId]: optionId,
//         };
//       });
//     }
//   };

//   const handleNext = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, testDetails?.questions.length! - 1));
//   };

//   const handlePrevious = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   const handleSubmit = async() => {
//     alert("Exam Completed")
//     console.log('Selected Answers:' +JSON.stringify(selectedAnswers));

//     const payload = {
//       "userID" : authState.userId,
//       "testID" : "14",
//       selectedAnswers
//     };

//     console.log(JSON.stringify(payload));
//     await postData(payload)
//   };

//   if (loading) {
//     return (
//       //<Center h="100vh">
//         <Spinner size="xl" />
//      // </Center>
//     );
//   }

//   if (!testDetails) {
//     return (
//     //  <Center h="100vh">
//         <Text fontSize="lg">Failed to load test details. Please try again later.</Text>
//      // </Center>
//     );
//   }

//   const currentQuestion = testDetails.questions[currentQuestionIndex];

//   return (
//     <>
//      <Box maxW={{ base: '95%', md: '80%', lg: '60%' }} mx="auto" py={10} px={4}>
  
//       <Heading mb={6} textAlign="center" color="pink.600">
//         Online Exam
//       </Heading>
//       {/* <Progress value={((currentQuestionIndex + 1) / testDetails.questions.length) * 100} mb={4} colorScheme="pink" /> */}
//       {/* <ProgressRoot value={((currentQuestionIndex + 1) / testDetails.questions.length) * 100} mb={4} colorScheme="pink">
//   <ProgressLabel>Progress</ProgressLabel>
//   <ProgressValueText>{((currentQuestionIndex + 1) / testDetails.questions.length) * 100}%</ProgressValueText>
//   <ProgressBar />
// </ProgressRoot> */}

// {/* <ProgressRoot
// colorPalette="green"

//   value={Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100)}
//   mb={4}
  
// >
//   <ProgressLabel>Progress</ProgressLabel>
//   <ProgressValueText >
//     {Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100)}%
   
//   </ProgressValueText>
//   <ProgressBar
 
//     // style={{
//     //   backgroundColor:
//     //     Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100) === 100
//     //       ? 'green'
//     //       : 'yellow',
//     // }}
//   />
// </ProgressRoot> */}


//       <Text textAlign="center" mb={4} color="gray.500">
//         Question {currentQuestionIndex + 1} of {testDetails.questions.length}
//       </Text>
//       <Box
//         borderWidth="1px"
//         borderRadius="lg"
//         p={6}
//         bg={cardBg}
//         shadow={cardShadow}
//       >
//         <Text fontSize="lg" mb={4} fontWeight="bold" color="gray.700">
//           {currentQuestion.questionText}
//         </Text>
//         {/* <RadioGroup
//           onChange={(value) => handleOptionChange(currentQuestion.questionId, value)}
//           value={selectedAnswers[currentQuestion.questionId]?.toString() || ''}
//         >
//           <Stack spacing={4}>
//             {currentQuestion.options.map((option) => (
//               <Radio key={option.optionId} value={option.optionId.toString()} colorScheme="pink">
//                 {option.option_text}
//               </Radio>
//             ))}
//           </Stack>
//         </RadioGroup> */}

// {/* <RadioGroup
//               onChange={(e) => {
//                 const value = e.target.value; // Access the value from event.target.value
//                 console.log("Radio value changed:", value); // Debugging
//                 handleOptionChange(currentQuestion.questionId, value);
//               }}
//               value={selectedAnswers[currentQuestion.questionId] ? selectedAnswers[currentQuestion.questionId].toString() : ''}
//             >
//               <Stack spacing={4}>
//                 {currentQuestion.options.map((option) => (
//                   <Radio key={option.optionId} value={option.optionId.toString()} colorScheme="pink">
//                     {option.option_text}
//                   </Radio>
//                 ))}
//               </Stack>
//             </RadioGroup> */}

// <RadioGroup
//       onChange={(value: string) => {
//         console.log("Radio value changed:", value); // Debugging
//         handleOptionChange(currentQuestion.questionId, value);
//       }}
//       value={selectedAnswers[currentQuestion.questionId] ? selectedAnswers[currentQuestion.questionId].toString() : ''}
//     >
//       <Stack spacing={4}>
//         {currentQuestion.options.map((option) => (
//           <Radio key={option.optionId} value={option.optionId.toString()} colorScheme="pink">
//             {option.option_text}
//           </Radio>
//         ))}
//       </Stack>
//     </RadioGroup>

//       </Box>
//       <Stack direction="row" justify="space-between" mt={8}>
//         <Button
//           onClick={handlePrevious}
//           isDisabled={currentQuestionIndex === 0}
//           colorScheme="gray"
//           size="lg"
//           bgColor="pink.500"
//           color='white'
//         >
//           Previous
//         </Button>
//         {currentQuestionIndex === testDetails.questions.length - 1 ? (
//           <Button
//             onClick={handleSubmit}
//             color='white'
//             colorScheme="pink"
//             size="lg"
//             isDisabled={!selectedAnswers[currentQuestion.questionId]}
//             bgColor="green.500"
//           >
//             Submit
//           </Button>
//         ) : (
//           <Button
//             onClick={handleNext}
//             colorScheme="pink"
//             size="lg"
//             isDisabled={!selectedAnswers[currentQuestion.questionId]}
//             bgColor='purple.500'
//             color='white'
//           >
//             Next
//           </Button>
//         )}
//       </Stack>
//     </Box>
//     </>
//   );
// };

// export default ExamPage;


// Version 6 - Animation Enhancments to Version 5


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Button,
//   Heading,
//   Stack,
//   Text,
//   Spinner,
//   Center,
// Radio,
// RadioGroup,
// Progress,
 
// } from '@chakra-ui/react';
// //import { Radio, RadioGroup } from '@/components/ui/radio';
// //import { useColorModeValue } from '@/components/ui/color-mode';
// //import { Progress } from '@chakra-ui/react';
// //import Progress from '@chakra-ui/react/progress';
// import { ProgressLabel } from '@chakra-ui/react';
// import { ProgressBar, ProgressRoot , ProgressValueText } from "@/components/ui/progress"

// import { useAuth } from '@/contexts/AuthContext';
// import { useNavigate, useLocation } from 'react-router-dom';
// import usePostData from '../hooks/usePostData';

// import successAnimation from '../animations/success.json';
// import errorAnimation from '../animations/error.json';
// import loadingAnimation from '../animations/loading.json';
// import Lottie from 'lottie-react';



// type Option = {
//   optionId: number;
//   questionId: number;
//   option_text: string;
//   is_correct: boolean;
// };

// type Question = {
//   questionId: number;
//   category: string;
//   questionText: string;
//   options: Option[];
// };

// type TestDetails = {
//   testId: string;
//   questions: Question[];
// };

// export const ExamPage: React.FC = () => {
//   //const [testDetails, setTestDetails] = useState<TestDetails | null>(null);
//   const [testDetails, setTestDetails] = useState<TestDetails | null>(null as TestDetails | null);

//   const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);
//   const [showAnimation, setShowAnimation] = useState(false);

//   const { postData, isLoading: isUpdating,responseData,error } = usePostData('/ip/test/submit');

//   const {authState} = useAuth();
//   const navigate = useNavigate();
//   //const cardBg = useColorModeValue('white', 'gray.800');
//   //const cardShadow = useColorModeValue('md', 'lg');

//   const cardBg = 'white'; // or 'gray.800' depending on your theme
// const cardShadow = 'md'; // or 'lg' depending on your theme


//   useEffect(() => {
//     const fetchTestDetails = async () => {
//       try {
//         const response = await axios.get('https://admee.in:3003/api/ip/testDetails/14'); // Replace with actual API endpoint
//         setTestDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching test details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestDetails();
//   }, []);


//   useEffect(() => {
//     if (responseData) {
//       if (responseData.status === 201) {
        
//         setAnimationType('success');
//         setTimeout(() => {
//           navigate('/candidateHome'); // Navigate to home page after 3 seconds
//         }, 3000);
//       } else {
//         setAnimationType('error');
//       }
//     } else if (error) {
//       setAnimationType('error');
//       setTimeout(() => {
//         navigate('/exam'); // Navigate back to checkout page after a few seconds
//       }, 3000);
//     }
//   }, [responseData, error, navigate]);

//   const handleOptionChange = (questionId: number, value: string) => {
//     const optionId = parseInt(value, 10); // Ensure it's parsed correctly as an integer
//     if (!isNaN(optionId)) {
//       setSelectedAnswers((prev) => {
//         console.log("Updating selected answers:", {
//           ...prev,
//           [questionId]: optionId,
//         });
//         return {
//           ...prev,
//           [questionId]: optionId,
//         };
//       });
//     }
//   };

//   const handleNext = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, testDetails?.questions.length! - 1));
//   };

//   const handlePrevious = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   const handleSubmit = async() => {
//     alert("Exam Completed")
//     console.log('Selected Answers:' +JSON.stringify(selectedAnswers));

//     const payload = {
//       "userID" : authState.userId,
//       "testID" : "14",
//       selectedAnswers
//     };

//     console.log(JSON.stringify(payload));
//     setShowAnimation(true);
//     setAnimationType('loading');
//     await postData(payload)
//   };

//   if (loading) {
//     return (
//       //<Center h="100vh">
//         <Spinner size="xl" />
//      // </Center>
//     );
//   }

//   if (!testDetails) {
//     return (
//     //  <Center h="100vh">
//         <Text fontSize="lg">Failed to load test details. Please try again later.</Text>
//      // </Center>
//     );
//   }

//   const currentQuestion = testDetails.questions[currentQuestionIndex];

//   return (
   
//     <Box className='examContainer'>

//     {showAnimation && (
//         <Box className="animationContainer">
//           {animationType === 'loading' && (
         
//            <Lottie
//            animationData={loadingAnimation}
//            loop={true}
//            autoplay={true}
//            style={{ width: '150px', height: '150px' }}
//          />
//           )}
//           {animationType === 'success' && (
//             <Box textAlign="center">

//               <Lottie
//                 animationData={successAnimation}
//                 loop={false}
//                 autoplay={true}
//                 style={{ width: '150px', height: '150px' }}
//               />
//               <Text>Exam has been submitted Successfully! Best wishes for your results champ</Text>
//             </Box>
//           )}
//           {animationType === 'error' && (
//             <Box textAlign="center">
           
//               <Lottie
//                 animationData={errorAnimation}
//                 loop={true}
//                 autoplay={true}
//                 style={{ width: '150px', height: '150px' }}
//               />
//               <Text>{error || "An error occurred, please try again."}</Text>
//             </Box>
//           )}
//         </Box>
//       )}
//        <>
//     {!showAnimation && <Box maxW={{ base: '95%', md: '80%', lg: '60%' }} mx="auto" py={10} px={4}>
  
//       <Heading mb={6} textAlign="center" color="pink.600">
//         Online Exam
//       </Heading>
//       {/* <Progress value={((currentQuestionIndex + 1) / testDetails.questions.length) * 100} mb={4} colorScheme="pink" /> */}
//       {/* <ProgressRoot value={((currentQuestionIndex + 1) / testDetails.questions.length) * 100} mb={4} colorScheme="pink">
//   <ProgressLabel>Progress</ProgressLabel>
//   <ProgressValueText>{((currentQuestionIndex + 1) / testDetails.questions.length) * 100}%</ProgressValueText>
//   <ProgressBar />
// </ProgressRoot> */}
// {/* 
// <ProgressRoot
// colorPalette="green"

//   value={Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100)}
//   mb={4}
  
// >
//   <ProgressLabel>Progress</ProgressLabel>
//   <ProgressValueText >
//     {Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100)}%
   
//   </ProgressValueText>
//   <ProgressBar
 
//     // style={{
//     //   backgroundColor:
//     //     Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100) === 100
//     //       ? 'green'
//     //       : 'yellow',
//     // }}
//   />
// </ProgressRoot> */}

// <Box mb={4}>
//   <Text mb={2} fontWeight="bold">
//     Progress: {Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100)}%
//   </Text>
//   <Progress
//     value={Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100)}
//     colorScheme="green"
//     size="lg"
//   />
// </Box>


//       <Text textAlign="center" mb={4} color="gray.500">
//         Question {currentQuestionIndex + 1} of {testDetails.questions.length}
//       </Text>
//       <Box
//         borderWidth="1px"
//         borderRadius="lg"
//         p={6}
//         bg={cardBg}
//         shadow={cardShadow}
//       >
//         <Text fontSize="lg" mb={4} fontWeight="bold" color="gray.700">
//           {currentQuestion.questionText}
//         </Text>


// <RadioGroup
//       onChange={(value: string) => {
//         console.log("Radio value changed:", value); // Debugging
//         handleOptionChange(currentQuestion.questionId, value);
//       }}
//       value={selectedAnswers[currentQuestion.questionId] ? selectedAnswers[currentQuestion.questionId].toString() : ''}
//     >
//       <Stack spacing={4}>
//         {currentQuestion.options.map((option) => (
//           <Radio key={option.optionId} value={option.optionId.toString()} colorScheme="pink">
//             {option.option_text}
//           </Radio>
//         ))}
//       </Stack>
//     </RadioGroup>

//       </Box>
//       <Stack direction="row" justify="space-between" mt={8}>
//         <Button
//           onClick={handlePrevious}
//           isDisabled={currentQuestionIndex === 0}
//           colorScheme="gray"
//           size="lg"
//           bgColor="pink.500"
//           color='white'
//         >
//           Previous
//         </Button>
//         {currentQuestionIndex === testDetails.questions.length - 1 ? (
//           <Button
//             onClick={handleSubmit}
//             color='white'
//             colorScheme="pink"
//             size="lg"
//             isDisabled={!selectedAnswers[currentQuestion.questionId]}
//             bgColor="green.500"
//           >
//             Submit
//           </Button>
//         ) : (
//           <Button
//             onClick={handleNext}
//             colorScheme="pink"
//             size="lg"
//             isDisabled={!selectedAnswers[currentQuestion.questionId]}
//             bgColor='purple.500'
//             color='white'
//           >
//             Next
//           </Button>
//         )}
//       </Stack>
//     </Box> }
//     </>
//     </Box>
    
//   );
// };

// export default ExamPage;


// Version 7 : 6 is the working version, this is an animation design changes

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Button,
//   Heading,
//   Stack,
//   Text,
//   Spinner,
//   Center,
// Radio,
// RadioGroup,
// Progress,
 
// } from '@chakra-ui/react';
// //import { Radio, RadioGroup } from '@/components/ui/radio';
// //import { useColorModeValue } from '@/components/ui/color-mode';
// //import { Progress } from '@chakra-ui/react';
// //import Progress from '@chakra-ui/react/progress';
// import { ProgressLabel } from '@chakra-ui/react';
// import { ProgressBar, ProgressRoot , ProgressValueText } from "@/components/ui/progress"

// import { useAuth } from '@/contexts/AuthContext';
// import { useNavigate, useLocation } from 'react-router-dom';

// import usePostData from '../hooks/usePostData';

// import successAnimation from '../animations/success.json';
// import errorAnimation from '../animations/error.json';
// import loadingAnimation from '../animations/loading.json';
// import Lottie from 'lottie-react';
// import useGetData from '@/hooks/useGetData';



// type Option = {
//   optionId: number;
//   questionId: number;
//   option_text: string;
//   is_correct: boolean;
// };

// type Question = {
//   questionId: number;
//   category: string;
//   questionText: string;
//   options: Option[];
// };

// type TestDetails = {
//   testId: string;
//   questions: Question[];
// };

// export const ExamPage: React.FC = () => {
//   //const [testDetails, setTestDetails] = useState<TestDetails | null>(null);
//   const [testDetails, setTestDetails] = useState<TestDetails | null>(null as TestDetails | null);
  

  

//   const { state } = useLocation();
//   const testID = state?.testId;
//   const testDuration = state.testDuration;
//   console.log("Test Id from Candidate Page" + testID)
//   console.log("Test Duration from Candidate Page "+testDuration);




//   const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);
//   const [showAnimation, setShowAnimation] = useState(false);

//   const { postData, isLoading: isUpdating,responseData,error } = usePostData('/ip/test/submit');

//   const {authState} = useAuth();
//   const navigate = useNavigate();


//   const cardBg = 'white'; // or 'gray.800' depending on your theme
// const cardShadow = 'md'; // or 'lg' depending on your theme



//   useEffect(() => {
//     const fetchTestDetails = async () => {
//       try {
//        const response = await axios.get(`https://admee.in:3003/api/ip/testDetails/${testID}`); // Replace with actual API endpoint
//        setTestDetails(response.data.data);
      
      
//       } catch (error) {
//         console.error('Error fetching test details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestDetails();
//   }, []);


//   useEffect(() => {
//     if (responseData) {
//       if (responseData.status === 201) {
        
//         setAnimationType('success');
//         setTimeout(() => {
//           navigate('/student/home'); // Navigate to home page after 3 seconds
//         }, 3000);
//       } else {
//         setAnimationType('error');
//       }
//     } else if (error) {
//       setAnimationType('error');
//       setTimeout(() => {
//         setShowAnimation(false);
//         navigate('/exam'); // Navigate back to checkout page after a few seconds
//       }, 3000);
      
//     }
//   }, [responseData, error, navigate]);

//   const handleOptionChange = (questionId: number, value: string) => {
//     const optionId = parseInt(value, 10); // Ensure it's parsed correctly as an integer
//     if (!isNaN(optionId)) {
//       setSelectedAnswers((prev) => {
//         console.log("Updating selected answers:", {
//           ...prev,
//           [questionId]: optionId,
//         });
//         return {
//           ...prev,
//           [questionId]: optionId,
//         };
//       });
//     }
//   };

//   const handleNext = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, testDetails?.questions.length! - 1));
//   };

//   const handlePrevious = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   const handleSubmit = async() => {
    
//     console.log('Selected Answers:' +JSON.stringify(selectedAnswers));

//     const payload = {
//       "userID" : authState.userId,
//       "testID" : testID,
//       selectedAnswers
//     };

//     console.log("Answers" +JSON.stringify(payload));
//     setShowAnimation(true);
//     setAnimationType('loading');
//     await postData(payload)
//   };

//   if (loading) {
//     return (
//       //<Center h="100vh">
//         <Spinner size="xl" />
//      // </Center>
//     );
//   }

//   if (!testDetails) {
//     return (
//     //  <Center h="100vh">
//         <Text fontSize="lg">Failed to load test details. Please try again later.</Text>
//      // </Center>
//     );
//   }

//   const currentQuestion = testDetails.questions[currentQuestionIndex];

//   return (
   
//     <Box className='examContainer'>



// {showAnimation && (
//   <Center>
//   <Box
//     position="fixed"
//     top="50%"
//     left="50%"
//     transform="translate(-50%, -50%)"
//     zIndex="1000"
//     bg="rgba(0, 0, 0, 0.5)" // Optional: To dim the background
//     display="flex"
//     flexDirection="column"
//     alignItems="center"
//     justifyContent="center"
//     width="100vw"
//     height="100vh"
//   >
//     {animationType === 'loading' && (
//       <Lottie
//         animationData={loadingAnimation}
//         loop={true}
//         autoplay={true}
//         style={{ width: '150px', height: '150px' }}
//       />
//     )}
//     {animationType === 'success' && (
//       <Box textAlign="center">
//         <Lottie
//           animationData={successAnimation}
//           loop={false}
//           autoplay={true}
//           // style={{ width: '150px', height: '150px' }}
//         />
//         <Text mt={4} fontSize="lg" color="white">
//           Exam has been submitted successfully! 
         
//         </Text>
//       </Box>
//     )}
//     {animationType === 'error' && (
//       <Box textAlign="center">
//         <Lottie
//           animationData={errorAnimation}
//           loop={false}
//           autoplay={true}
//           // style={{ width: '150px', height: '150px' }}
//         />
//         <Text mt={4} fontSize="lg" color="white">
//           {error || "An error occurred, please try again."}
//         </Text>
//       </Box>
//     )}
//   </Box>
//   </Center>
// )}


//        <>
//     {!showAnimation && <Box maxW={{ base: '95%', md: '80%', lg: '60%' }} mx="auto" py={10} px={4}>
  
//       <Heading mb={6} textAlign="center" color="#144200">
//         Online Exam
//       </Heading>


// <Box mb={4}>
//   <Text mb={2} fontWeight="bold">
//     Progress: {Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100)}%
//   </Text>
//   <Progress
//     value={Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100)}
//     colorScheme="green"
//     size="lg"
//   />
// </Box>


//       <Text textAlign="center" mb={4} color="gray.500">
//         Question {currentQuestionIndex + 1} of {testDetails.questions.length}
//       </Text>
//       <Box
//         borderWidth="1px"
//         borderRadius="lg"
//         p={6}
//         bg={cardBg}
//         shadow={cardShadow}
//       >
//         <Text fontSize="lg" mb={4} fontWeight="bold" color="gray.700">
//           {currentQuestion.questionText}
//         </Text>


// <RadioGroup
//       onChange={(value: string) => {
//         console.log("Radio value changed:", value); // Debugging
//         handleOptionChange(currentQuestion.questionId, value);
//       }}
//       value={selectedAnswers[currentQuestion.questionId] ? selectedAnswers[currentQuestion.questionId].toString() : ''}
//     >
//       <Stack spacing={4}>
//         {currentQuestion.options.map((option) => (
//           <Radio key={option.optionId} value={option.optionId.toString()} colorScheme="pink">
//             {option.option_text}
//           </Radio>
//         ))}
//       </Stack>
//     </RadioGroup>

//       </Box>
//       <Stack direction="row" justify="space-between" mt={8}>
//         <Button
//           onClick={handlePrevious}
//           isDisabled={currentQuestionIndex === 0}
//           colorScheme="gray"
//           size="lg"
//           bgColor="pink.500"
//           color='white'
//         >
//           Previous
//         </Button>
//         {currentQuestionIndex === testDetails.questions.length - 1 ? (
//           <Button
//             onClick={handleSubmit}
//             color='white'
//             colorScheme="pink"
//             size="lg"
//             // isDisabled={!selectedAnswers[currentQuestion.questionId]}
//             bgColor="green.500"
//           >
//             Submit
//           </Button>
//         ) : (
//           <Button
//             onClick={handleNext}
//             colorScheme="pink"
//             size="lg"
//             // isDisabled={!selectedAnswers[currentQuestion.questionId]}
//             bgColor='purple.500'
//             color='white'
//           >
//             Next
//           </Button>
//         )}
//       </Stack>
//     </Box> }
//     </>
//     </Box>
    
//   );
// };

// export default ExamPage;




// Version 8 : Enhancement to Version 7 with design changes, timer functionality, category navigation inclusion and State Additon


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Button,
//   Heading,
//   Stack,
//   Text,
//   Spinner,
//   Center,
//   Radio,
//   RadioGroup,
//   Progress,
// } from '@chakra-ui/react';
// import { useAuth } from '@/contexts/AuthContext';
// import { useNavigate, useLocation } from 'react-router-dom';
// import usePostData from '../hooks/usePostData';
// import successAnimation from '../animations/success.json';
// import errorAnimation from '../animations/error.json';
// import loadingAnimation from '../animations/loading.json';
// import Lottie from 'lottie-react';

// type Option = {
//   optionId: number;
//   questionId: number;
//   option_text: string;
//   is_correct: boolean;
// };

// type Question = {
//   questionId: number;
//   category: string;
//   questionText: string;
//   options: Option[];
// };

// type TestDetails = {
//   testId: string;
//   questions: Question[];
// };

// export const ExamPage: React.FC = () => {
//   const [testDetails, setTestDetails] = useState<TestDetails | null>(null);
//   const { state } = useLocation();
//   const testID = state?.testId;
//   const testDuration = state.testDuration;

//   const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);
//   const [showAnimation, setShowAnimation] = useState(false);

//   const { postData, isLoading: isUpdating, responseData, error } = usePostData('/ip/test/submit');
//   const { authState } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchTestDetails = async () => {
//       try {
//         const response = await axios.get(`https://admee.in:3003/api/ip/testDetails/${testID}`);
//         setTestDetails(response.data.data);
//       } catch (error) {
//         console.error('Error fetching test details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestDetails();
//   }, []);

//   useEffect(() => {
//     const savedAnswers = localStorage.getItem('selectedAnswers');
//     if (savedAnswers) {
//       setSelectedAnswers(JSON.parse(savedAnswers)); // Load from local storage
//     }
//   }, []);

//   useEffect(() => {
//     if (responseData) {
//       if (responseData.status === 201) {
//         setAnimationType('success');
//         setTimeout(() => {
//           // Clear any exam-related data in local storage
//           localStorage.removeItem('examData'); // Update this as needed
//           localStorage.removeItem('selectedAnswers');
//           navigate('/student/home'); // Navigate to home page after 3 seconds
//         }, 3000);
//       } else {
//         setAnimationType('error');
//       }
//     } else if (error) {
//       setAnimationType('error');
//       setTimeout(() => {
//         setShowAnimation(false);
//         navigate('/exam'); // Navigate back to exam page after a few seconds
//       }, 3000);
//     }
//   }, [responseData, error, navigate]);

//   const handleOptionChange = (questionId: number, value: string) => {
//     const optionId = parseInt(value, 10);
//     if (!isNaN(optionId)) {
//       setSelectedAnswers((prev) => {
//         const updatedAnswers = { ...prev, [questionId]: optionId };
//         localStorage.setItem('selectedAnswers', JSON.stringify(updatedAnswers)); // Persist to local storage
//         return updatedAnswers;
//       });
//     }
//   };

//   const handleNext = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, testDetails?.questions.length! - 1));
//   };

//   const handlePrevious = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   const handleSubmit = async () => {
//     const payload = {
//       userID: authState.userId,
//       testID: testID,
//       selectedAnswers,
//     };

//     setShowAnimation(true);
//     setAnimationType('loading');
//     await postData(payload);
//   };

//   if (loading) {
//     return (
//       <Center h="100vh">
//         <Spinner size="xl" />
//       </Center>
//     );
//   }

//   if (!testDetails) {
//     return (
//       <Center h="100vh">
//         <Text fontSize="lg">Failed to load test details. Please try again later.</Text>
//       </Center>
//     );
//   }

//   const currentQuestion = testDetails.questions[currentQuestionIndex];

//   return (
//     <Box className="examContainer">
//       {showAnimation && (
//         <Center>
//           <Box
//             position="fixed"
//             top="50%"
//             left="50%"
//             transform="translate(-50%, -50%)"
//             zIndex="1000"
//             bg="rgba(0, 0, 0, 0.5)"
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             width="100vw"
//             height="100vh"
//           >
//             {animationType === 'loading' && (
//               <Lottie
//                 animationData={loadingAnimation}
//                 loop={true}
//                 autoplay={true}
//                 style={{ width: '150px', height: '150px' }}
//               />
//             )}
//             {animationType === 'success' && (
//               <Box textAlign="center">
//                 <Lottie animationData={successAnimation} loop={false} autoplay={true} />
//                 <Text mt={4} fontSize="lg" color="white">
//                   Exam has been submitted successfully!
//                 </Text>
//               </Box>
//             )}
//             {animationType === 'error' && (
//               <Box textAlign="center">
//                 <Lottie animationData={errorAnimation} loop={false} autoplay={true} />
//                 <Text mt={4} fontSize="lg" color="white">
//                   {error || 'An error occurred, please try again.'}
//                 </Text>
//               </Box>
//             )}
//           </Box>
//         </Center>
//       )}

//       {!showAnimation && (
//         <Box maxW={{ base: '95%', md: '80%', lg: '60%' }} mx="auto" py={10} px={4}>
//           <Heading mb={6} textAlign="center" color="#144200">
//             Online Exam
//           </Heading>

//           <Box mb={4}>
//             <Text mb={2} fontWeight="bold">
//               Progress: {Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100)}%
//             </Text>
//             <Progress
//               value={Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100)}
//               colorScheme="green"
//               size="lg"
//             />
//           </Box>

//           <Text textAlign="center" mb={4} color="gray.500">
//             Question {currentQuestionIndex + 1} of {testDetails.questions.length}
//           </Text>
//           <Box
//             borderWidth="1px"
//             borderRadius="lg"
//             p={6}
//             bg="white"
//             shadow="md"
//           >
//             <Text fontSize="lg" mb={4} fontWeight="bold" color="gray.700">
//               {currentQuestion.questionText}
//             </Text>

//             <RadioGroup
//               onChange={(value) => handleOptionChange(currentQuestion.questionId, value)}
//               value={selectedAnswers[currentQuestion.questionId]?.toString() || ''}
//             >
//               <Stack spacing={4}>
//                 {currentQuestion.options.map((option) => (
//                   <Radio key={option.optionId} value={option.optionId.toString()}>
//                     {option.option_text}
//                   </Radio>
//                 ))}
//               </Stack>
//             </RadioGroup>
//           </Box>

//           <Stack direction="row" spacing={4} mt={6} justify="space-between">
//             <Button onClick={handlePrevious} colorScheme="blue" size="lg" isDisabled={currentQuestionIndex === 0}
//           colorScheme="gray"
//           size="lg"
//           bgColor="pink.500"
//           color='white'>
//               Previous
//             </Button>
//             {currentQuestionIndex < testDetails.questions.length - 1 ? (
//               <Button onClick={handleNext} size="lg" colorScheme="pink"
//               //           
//                           // isDisabled={!selectedAnswers[currentQuestion.questionId]}
//                           bgColor='purple.500'
//                           color='white'>
//                 Next
//               </Button>
//             ) : (
//               <Button onClick={handleSubmit} colorScheme="teal" size="lg" color='white'
//                           colorScheme="pink"
//                           size="lg"
//                           // isDisabled={!selectedAnswers[currentQuestion.questionId]}
//                           bgColor="green.500">
//                 Submit Exam
//               </Button>
//             )}
//           </Stack>
//         </Box>
//       )}
//     </Box>
//   );
// };


// Version 9 - Html output conversion logic inclusion. 8 is the working version 

// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Button,
//   Heading,
//   Stack,
//   Text,
//   Spinner,
//   Center,
//   Radio,
//   RadioGroup,
//   Progress,
// } from '@chakra-ui/react';
// import { useAuth } from '@/contexts/AuthContext';
// import { useNavigate, useLocation } from 'react-router-dom';
// import usePostData from '../hooks/usePostData';
// import successAnimation from '../animations/success.json';
// import errorAnimation from '../animations/error.json';
// import loadingAnimation from '../animations/loading.json';
// import Lottie from 'lottie-react';
// import axios from 'axios';

// // Additional helper function to detect HTML content
// const isHTML = (string: string) => {
//   const doc = new DOMParser().parseFromString(string, 'text/html');
//   return Array.from(doc.body.childNodes).some((node) => node.nodeType === 1); // Check for any element node
// };

// type Option = {
//   optionId: number;
//   questionId: number;
//   option_text: string;
//   is_correct: boolean;
// };

// type Question = {
//   questionId: number;
//   category: string;
//   questionText: string;
//   options: Option[];
// };

// type TestDetails = {
//   testId: string;
//   questions: Question[];
// };

// export const ExamPage: React.FC = () => {
//   const [testDetails, setTestDetails] = useState<TestDetails | null>(null);
//   const { state } = useLocation();
//   const testID = state?.testId;
//   const testDuration = state.testDuration;
//   const institute = state.institute;
//   const testName = state.testName;

//   console.log("Test Name From State" +testName);
//   const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);
//   const [showAnimation, setShowAnimation] = useState(false);

//   const { postData, isLoading: isUpdating, responseData, error } = usePostData('/ip/test/submit');
//   const { authState } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchTestDetails = async () => {
//       try {
//         const response = await axios.get(`https://admee.in:3003/api/ip/testDetails/${testID}`);
//         setTestDetails(response.data.data);
//       } catch (error) {
//         console.error('Error fetching test details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestDetails();
//   }, []);

//   useEffect(() => {
//     const savedAnswers = localStorage.getItem('selectedAnswers');
//     if (savedAnswers) {
//       setSelectedAnswers(JSON.parse(savedAnswers)); // Load from local storage
//     }
//   }, []);

//   useEffect(() => {
//     if (responseData) {
//       if (responseData.status === 201) {
//         setAnimationType('success');
//         setTimeout(() => {
//           // Clear any exam-related data in local storage
//           localStorage.removeItem('examData'); // Update this as needed
//           localStorage.removeItem('selectedAnswers');
//           navigate('/student/home'); // Navigate to home page after 3 seconds
//         }, 3000);
//       } else {
//         setAnimationType('error');
//       }
//     } else if (error) {
//       setAnimationType('error');
//       setTimeout(() => {
//         setShowAnimation(false);
//         navigate('/exam'); // Navigate back to exam page after a few seconds
//       }, 3000);
//     }
//   }, [responseData, error, navigate]);

//   const handleOptionChange = (questionId: number, value: string) => {
//     const optionId = parseInt(value, 10);
//     if (!isNaN(optionId)) {
//       setSelectedAnswers((prev) => {
//         const updatedAnswers = { ...prev, [questionId]: optionId };
//         localStorage.setItem('selectedAnswers', JSON.stringify(updatedAnswers)); // Persist to local storage
//         return updatedAnswers;
//       });
//     }
//   };

//   const handleNext = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, testDetails?.questions.length! - 1));
//   };

//   const handlePrevious = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   const handleSubmit = async () => {
//     const payload = {
//       userID: authState.userId,
//       testID: testID,
//       selectedAnswers,
//     };

//     setShowAnimation(true);
//     setAnimationType('loading');
//     await postData(payload);
//   };

//   if (loading) {
//     return (
//       <Center h="100vh">
//         <Spinner size="xl" />
//       </Center>
//     );
//   }

//   if (!testDetails) {
//     return (
//       <Center h="100vh">
//         <Text fontSize="lg">Failed to load test details. Please try again later.</Text>
//       </Center>
//     );
//   }

//   const currentQuestion = testDetails.questions[currentQuestionIndex];

//   console.log("Current question html" +currentQuestion.questionText)

//   return (
//     <Box className="examContainer">
//       {showAnimation && (
//         <Center>
//           <Box
//             position="fixed"
//             top="50%"
//             left="50%"
//             transform="translate(-50%, -50%)"
//             zIndex="1000"
//             bg="rgba(0, 0, 0, 0.5)"
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             width="100vw"
//             height="100vh"
//           >
//             {animationType === 'loading' && (
//               <Lottie
//                 animationData={loadingAnimation}
//                 loop={true}
//                 autoplay={true}
//                 style={{ width: '150px', height: '150px' }}
//               />
//             )}
//             {animationType === 'success' && (
//               <Box textAlign="center">
//                 <Lottie animationData={successAnimation} loop={false} autoplay={true} />
//                 <Text mt={4} fontSize="lg" color="white">
//                   Exam has been submitted successfully!
//                 </Text>
//               </Box>
//             )}
//             {animationType === 'error' && (
//               <Box textAlign="center">
//                 <Lottie animationData={errorAnimation} loop={false} autoplay={true} />
//                 <Text mt={4} fontSize="lg" color="white">
//                   {error || 'An error occurred, please try again.'}
//                 </Text>
//               </Box>
//             )}
//           </Box>
//         </Center>
//       )}

//       {!showAnimation && (
//         <Box maxW={{ base: '95%', md: '80%', lg: '60%' }} mx="auto" py={10} px={4}>
//           {/* <Heading mb={6} textAlign="center" color="#144200">
//            { institute} 
//           </Heading> 
//           <Text> Test Name :   {testName}</Text> */}

// <Box textAlign="center" mb={6}>
//   <Heading 
//     fontSize={{ base: '2xl', md: '3xl' }} 
//     color="purple.500" 
//     fontWeight="bold"
//     textTransform="uppercase"
//     letterSpacing="wide"
//     mb={2}
//   >
//     {institute}
//   </Heading>

//   <Text 
//     fontSize={{ base: 'lg', md: 'xl' }} 
//     color="pink.600" 
//     fontWeight="semibold" 
//     lineHeight="short"
//     mb={4}
//   >
//     Test Name: <span style={{ color: '#1A202C', fontWeight: 'bold' }}>{testName}</span>
//   </Text>
// </Box>


//           <Box mb={4}>
//             <Text mb={2} fontWeight="bold">
//               Progress: {Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100)}%
//             </Text>
//             <Progress
//               value={Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100)}
//               colorScheme="green"
//               size="lg"
//             />
//           </Box>

//           <Text textAlign="center" mb={4} color="gray.500">
//             Question {currentQuestionIndex + 1} of {testDetails.questions.length}
//           </Text>
//           <Box
//             borderWidth="1px"
//             borderRadius="lg"
//             p={6}
//             bg="white"
//             shadow="md"
//           >
//             {/* Render question text based on whether it contains HTML */}
//             {isHTML(currentQuestion.questionText) ? (
//               <div
//                 dangerouslySetInnerHTML={{ __html: currentQuestion.questionText }}
//               />
//             ) : (
//               <Text fontSize="lg" mb={4} fontWeight="bold" color="gray.700">
//                 {currentQuestion.questionText}
//               </Text>
//             )}

//             <RadioGroup
//               onChange={(value) => handleOptionChange(currentQuestion.questionId, value)}
//               value={selectedAnswers[currentQuestion.questionId]?.toString() || ''}
//             >
//               <Stack spacing={4}>
//                 {currentQuestion.options.map((option) => (
//                   <Radio key={option.optionId} value={option.optionId.toString()}>
//                     {option.option_text}
//                   </Radio>
//                 ))}
//               </Stack>
//             </RadioGroup>
//           </Box>

//           <Stack direction="row" spacing={4} mt={6} justify="space-between">
//             <Button onClick={handlePrevious} colorScheme="blue" size="lg" 
//           colorScheme="gray"
//           size="lg"
//           bgColor="pink.500"
//           color='white' isDisabled={currentQuestionIndex === 0}>
//               Previous
//             </Button>
//             <Button onClick={handleNext} colorScheme="teal" isDisabled={currentQuestionIndex === testDetails.questions.length - 1} colorScheme="pink"
// //                        
// //                          
//                           bgColor='purple.500'
//                           color='white'>
//               Next
//             </Button>
//             {currentQuestionIndex === testDetails.questions.length - 1 && (
//               <Button onClick={handleSubmit} colorScheme="blue" color='white'
//                                         colorScheme="pink"
//                                         size="lg"
//                                         // isDisabled={!selectedAnswers[currentQuestion.questionId]}
//                                         bgColor="green.500">
//                 Submit
//               </Button>
//             )}
//           </Stack>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ExamPage;




// Version 10 : 9 is the working version, this is an enhancement to 9 with timer field addition 

// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Button,
//   Heading,
//   Stack,
//   Text,
//   Spinner,
//   Center,
//   Radio,
//   RadioGroup,
//   Progress,
// } from '@chakra-ui/react';
// import { useAuth } from '@/contexts/AuthContext';
// import { useNavigate, useLocation } from 'react-router-dom';
// import usePostData from '../hooks/usePostData';
// import successAnimation from '../animations/success.json';
// import errorAnimation from '../animations/error.json';
// import loadingAnimation from '../animations/loading.json';
// import Lottie from 'lottie-react';
// import axios from 'axios';

// const isHTML = (string) => {
//   const doc = new DOMParser().parseFromString(string, 'text/html');
//   return Array.from(doc.body.childNodes).some((node) => node.nodeType === 1);
// };

// type Option = {
//   optionId: number;
//   questionId: number;
//   option_text: string;
//   is_correct: boolean;
// };

// type Question = {
//   questionId: number;
//   category: string;
//   questionText: string;
//   options: Option[];
// };

// type TestDetails = {
//   testId: string;
//   questions: Question[];
// };

// export const ExamPage: React.FC = () => {
//   const [testDetails, setTestDetails] = useState<TestDetails | null>(null);
//   const { state } = useLocation();
//   const testID = state?.testId;
//   //const testDuration = state?.testDuration;
//   const testDuration = 0.25;
//   const institute = state?.institute;
//   const testName = state?.testName;

//   const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);
//   const [showAnimation, setShowAnimation] = useState(false);
//   const [remainingTime, setRemainingTime] = useState<number>(testDuration * 60); // Convert minutes to seconds

//   const { postData, isLoading: isUpdating, responseData, error } = usePostData('/ip/test/submit');
//   const { authState } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchTestDetails = async () => {
//       try {
//         const response = await axios.get(`https://admee.in:3003/api/ip/testDetails/${testID}`);
//         setTestDetails(response.data.data);
//       } catch (error) {
//         console.error('Error fetching test details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestDetails();
//   }, [testID]);

//   useEffect(() => {
//     const savedAnswers = localStorage.getItem('selectedAnswers');
//     if (savedAnswers) {
//       setSelectedAnswers(JSON.parse(savedAnswers));
//     }
//   }, []);

//   useEffect(() => {
//     if (responseData) {
//       if (responseData.status === 201) {
//         setAnimationType('success');
//         setTimeout(() => {
//           localStorage.removeItem('examData');
//           localStorage.removeItem('selectedAnswers');
//           navigate('/student/home');
//         }, 3000);
//       } else {
//         setAnimationType('error');
//       }
//     } else if (error) {
//       setAnimationType('error');
//       setTimeout(() => {
//         setShowAnimation(false);
//         navigate('/exam');
//       }, 3000);
//     }
//   }, [responseData, error, navigate]);

//   useEffect(() => {
//     if (testDuration > 0) {
//       const timer = setInterval(() => {
//         setRemainingTime((prev) => {
//           if (prev <= 1) {
//             clearInterval(timer);
//             handleSubmit(); // Auto-submit when time runs out
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);

//       return () => clearInterval(timer);
//     }
//   }, [testDuration]);

//   const handleOptionChange = (questionId: number, value: string) => {
//     const optionId = parseInt(value, 10);
//     if (!isNaN(optionId)) {
//       setSelectedAnswers((prev) => {
//         const updatedAnswers = { ...prev, [questionId]: optionId };
//         localStorage.setItem('selectedAnswers', JSON.stringify(updatedAnswers));
//         return updatedAnswers;
//       });
//     }
//   };

//   const handleNext = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, testDetails?.questions.length! - 1));
//   };

//   const handlePrevious = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   const handleSubmit = async () => {
//     const payload = {
//       userID: authState.userId,
//       testID: testID,
//       selectedAnswers: {
//         ...testDetails?.questions.reduce((acc, question) => {
//           acc[question.questionId] = selectedAnswers[question.questionId] || 0; // Default unattempted to 0
//           return acc;
//         }, {}),
//       },
//     };

//     setShowAnimation(true);
//     setAnimationType('loading');
//     await postData(payload);
//   };

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   if (loading) {
//     return (
//       <Center h="100vh">
//         <Spinner size="xl" />
//       </Center>
//     );
//   }

//   if (!testDetails) {
//     return (
//       <Center h="100vh">
//         <Text fontSize="lg">Failed to load test details. Please try again later.</Text>
//       </Center>
//     );
//   }

//   const currentQuestion = testDetails.questions[currentQuestionIndex];

//   return (
//     <Box className="examContainer">
//       {showAnimation && (
//         <Center>
//           <Box
//             position="fixed"
//             top="50%"
//             left="50%"
//             transform="translate(-50%, -50%)"
//             zIndex="1000"
//             bg="rgba(0, 0, 0, 0.5)"
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             width="100vw"
//             height="100vh"
//           >
//             {animationType === 'loading' && (
//               <Lottie
//                 animationData={loadingAnimation}
//                 loop={true}
//                 autoplay={true}
//                 style={{ width: '150px', height: '150px' }}
//               />
//             )}
//             {animationType === 'success' && (
//               <Box textAlign="center">
//                 <Lottie animationData={successAnimation} loop={false} autoplay={true} />
//                 <Text mt={4} fontSize="lg" color="white">
//                   Exam has been submitted successfully!
//                 </Text>
//               </Box>
//             )}
//             {animationType === 'error' && (
//               <Box textAlign="center">
//                 <Lottie animationData={errorAnimation} loop={false} autoplay={true} />
//                 <Text mt={4} fontSize="lg" color="white">
//                   {error || 'An error occurred, please try again.'}
//                 </Text>
//               </Box>
//             )}
//           </Box>
//         </Center>
//       )}

//       {!showAnimation && (
//         <Box maxW={{ base: '95%', md: '80%', lg: '60%' }} mx="auto" py={10} px={4}>
//           <Box textAlign="center" mb={6}>
//             <Heading 
//               fontSize={{ base: '2xl', md: '3xl' }} 
//               color="purple.500" 
//               fontWeight="bold"
//               textTransform="uppercase"
//               letterSpacing="wide"
//               mb={2}
//             >               {testName}
//             </Heading>
//             <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
//               {institute}
//             </Text>
//             <Text mt={2} fontSize={{ base: 'sm', md: 'md' }} color="purple.600">
//               Time Remaining: {formatTime(remainingTime)}
//             </Text>
//             <Progress
//               mt={4}
//               value={(currentQuestionIndex + 1) / testDetails.questions.length * 100}
//               colorScheme="purple"
//               size="sm"
//               borderRadius="md"
//             />
//           </Box>

//           <Box mb={8} bg="gray.100" p={6} rounded="md" shadow="md">
//             <Text fontSize="lg" fontWeight="bold" mb={4}>
//               Question {currentQuestionIndex + 1}/{testDetails.questions.length}
//             </Text>
//             {/* <Box
//               dangerouslySetInnerHTML={
//                 isHTML(currentQuestion.questionText)
//                   ? { __html: currentQuestion.questionText }
//                   : undefined
//               }
//             >
//               {!isHTML(currentQuestion.questionText) && (
//                 <Text fontSize="md">{currentQuestion.questionText}</Text>
//               )}
//             </Box> */}
            
//             /             {/* Render question text based on whether it contains HTML */}
//             {isHTML(currentQuestion.questionText) ? (
//               <div
//                 dangerouslySetInnerHTML={{ __html: currentQuestion.questionText }}
//               />
//             ) : (
//               <Text fontSize="lg" mb={4} fontWeight="bold" color="gray.700">
//                 {currentQuestion.questionText}
//               </Text>
//             )} 

//             <RadioGroup
//               mt={4}
//               value={selectedAnswers[currentQuestion.questionId]?.toString() || ''}
//               onChange={(value) => handleOptionChange(currentQuestion.questionId, value)}
//             >
//               <Stack direction="column" spacing={3}>
//                 {currentQuestion.options.map((option) => (
//                   <Radio
//                     key={option.optionId}
//                     value={option.optionId.toString()}
//                     colorScheme="purple"
//                   >
//                     {option.option_text}
//                   </Radio>
//                 ))}
//               </Stack>
//             </RadioGroup>
//           </Box>

//           <Stack direction="row" justifyContent="space-between">
//             <Button
//               colorScheme="gray"
//               variant="outline"
//               onClick={handlePrevious}
//               isDisabled={currentQuestionIndex === 0}
//             >
//               Previous
//             </Button>
//             <Button
//               colorScheme="purple"
//               onClick={currentQuestionIndex + 1 === testDetails.questions.length ? handleSubmit : handleNext}
//             >
//               {currentQuestionIndex + 1 === testDetails.questions.length ? 'Submit' : 'Next'}
//             </Button>
//           </Stack>
//         </Box>
//       )}
//     </Box>
//   );
// };




// Version 11 : 9 is the working version



import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Spinner,
  Center,
  Radio,
  RadioGroup,
  Progress,
} from '@chakra-ui/react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import usePostData from '../hooks/usePostData';
import successAnimation from '../animations/success.json';
import errorAnimation from '../animations/error.json';
import loadingAnimation from '../animations/loading.json';
import Lottie from 'lottie-react';
import axios from 'axios';

const isHTML = (string: string) => {
  const doc = new DOMParser().parseFromString(string, 'text/html');
  return Array.from(doc.body.childNodes).some((node) => node.nodeType === 1);
};

type Option = {
  optionId: number;
  questionId: number;
  option_text: string;
  is_correct: boolean;
};

type Question = {
  questionId: number;
  category: string;
  questionText: string;
  options: Option[];
};

type TestDetails = {
  testId: string;
  questions: Question[];
};

export const ExamPage: React.FC = () => {
  const [testDetails, setTestDetails] = useState<TestDetails | null>(null);
  const { state } = useLocation();
  const testID = state?.testId;
  //const testDuration = state?.testDuration;
  const testDuration = 0.25;
  const institute = state?.institute;
  const testName = state?.testName;

  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [remainingTime, setRemainingTime] = useState<number>(testDuration * 60); // Convert minutes to seconds

  const { postData, responseData, error } = usePostData('/ip/test/submit');
  const { authState } = useAuth();
  const navigate = useNavigate();

  //const isSubmitting = useRef(false);

   const isSubmittingFlag = useRef(false); // Flag to track manual submission
  //const isSubmittingTimeoutFlag = useRef(false); // Flag to track timeout submission

//   useEffect(() => {
//     const fetchTestDetails = async () => {
//       try {
//         const response = await axios.get(`https://admee.in:3003/api/ip/testDetails/${testID}`);
//         setTestDetails(response.data.data);
//       } catch (error) {
//         console.error('Error fetching test details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestDetails();
//   }, [testID]);

// In the useEffect where testDetails are fetched
useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        const response = await axios.get(`https://admee.in:3003/api/ip/testDetails/${testID}`);
        console.log("Test details fetched:", response.data.data); // Check if testDetails are fetched
        setTestDetails(response.data.data); // Update state with fetched test details
        localStorage.setItem('testDetails', JSON.stringify(response.data.data));
      } catch (error) {
        console.error('Error fetching test details:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchTestDetails();
  }, [testID]);

  useEffect(() => {
    const savedAnswers = localStorage.getItem('selectedAnswers');
    if (savedAnswers) {
      setSelectedAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  useEffect(() => {
    if (responseData) {
      if (responseData.status === 201) {
        setAnimationType('success');
        setTimeout(() => {
          localStorage.removeItem('examData');
          localStorage.removeItem('selectedAnswers');
          navigate('/student/home');
        }, 3000);
      } else {
        setAnimationType('error');
      }
    } else if (error) {
      setAnimationType('error');
      setTimeout(() => {
        setShowAnimation(false);
        navigate('/exam');
      }, 3000);
    }
  }, [responseData, error, navigate]);



  const handleOptionChange = (questionId: number, value: string) => {
    //console.log("Test Details Inside handleOptionChange" +JSON.stringify(testDetails));
    const optionId = parseInt(value, 10);
    if (!isNaN(optionId)) {
      setSelectedAnswers((prev) => {
        const updatedAnswers = { ...prev, [questionId]: optionId };
        localStorage.setItem('selectedAnswers', JSON.stringify(updatedAnswers));
        return updatedAnswers;
      });
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, testDetails?.questions.length! - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // const handleSubmit = async () => {
  //  // console.log("TestDetails in handle Submit Button CLICK:", JSON.stringify(testDetailsRef.current)); 
  //   if (!acquireLock()) {
  //     console.log("Submission already in progress. Ignoring this call.");
  //     return; // Prevent duplicate submissions
  //   }
  
  //   isSubmitting.current = true; // Lock submission
  
  //  // console.log("Selected Answers button function :" +JSON.stringify(selectedAnswers))
  //   const payload = {
  //     userID: authState.userId,
  //     testID: testID,
  //     selectedAnswers: {
  //       ...testDetails?.questions.reduce((acc, question) => {
  //         acc[question.questionId] = selectedAnswers[question.questionId] || 0; // Default unattempted to 0
  //         return acc;
  //       }, {}),
  //     },
  //   };



  //   setShowAnimation(true);
  //   setAnimationType('loading');
  //   await postData(payload);
  //  releaseLock();
  // };



  
  // useEffect(() => {
  //   if (testDuration > 0) {
  //     const timer = setInterval(() => {
  //       setRemainingTime((prev) => {
  //         if (prev <= 1) {
  //           clearInterval(timer);
  //           handleTimeoutSubmit(true); // Submit due to timeout
  //           //handleSubmit();
  //           return 0;
  //         }
  //         return prev - 1;
  //       });
  //     }, 1000);
  
  //     return () => clearInterval(timer);
  //   }
  // }, [testDuration]);

  //const testDetailsRef = useRef();
  const testDetailsRef = useRef<TestDetails | null>(null);
 // const selectedAnswersRef = useRef();
  const selectedAnswersRef = useRef<{ [key: number]: number } | undefined>(undefined);

  useEffect(() => {
    testDetailsRef.current = testDetails; // Update the ref whenever testDetails changes
  }, [testDetails]);

  useEffect(() => {
    selectedAnswersRef.current = selectedAnswers; // Update the ref whenever testDetails changes
  }, [selectedAnswers]);
    



// Timeout submission function triggered by useEffect
const handleTimeoutSubmit = async () => {
  if (isSubmittingFlag.current) {
    console.log("A submission is already in progress (timeout). Ignoring this call.");
    return; // Prevent duplicate submissions
  }

  isSubmittingFlag.current = true; // Lock the submission

  console.log("Submitting due to timeout...");

  if (!testDetailsRef.current || !testDetailsRef.current.questions.length) {
    console.log("Test details not available!");
    isSubmittingFlag.current = false; // Reset flag in case of error or no data
    return;
  }

  // const updatedSelectedAnswers = testDetailsRef.current.questions.reduce((acc, question) => {
  //   acc[question.questionId] = selectedAnswersRef.current?.[question.questionId] || 0;
  //   return acc;
  // }, {});

  const updatedSelectedAnswers = testDetailsRef.current.questions.reduce(
    (acc: { [key: number]: number }, question) => {
      acc[question.questionId] = selectedAnswersRef.current?.[question.questionId] || 0;
      return acc;
    },
    {} as { [key: number]: number } // Explicitly cast the initial value
  );

  const payload = {
    userID: authState.userId,
    testID: testID,
    selectedAnswers: updatedSelectedAnswers,
  };

  setShowAnimation(true);
  setAnimationType('loading');

  try {
    await postData(payload);
    console.log("Timeout submission successful");
  } catch (error) {
    console.error("Error during timeout submission:", error);
  } finally {
    isSubmittingFlag.current = false; // Release lock after submission
    setShowAnimation(false);
  }
};

// Button submit function triggered by button click
const handleSubmit = async () => {
  if (isSubmittingFlag.current) {
    console.log("A submission is already in progress (button). Ignoring this call.");
    return; // Prevent duplicate submissions
  }

  isSubmittingFlag.current = true; // Lock the submission

  console.log("Submitting through button handleSubmit...");

  const payload = {
    userID: authState.userId,
    testID: testID,
    // selectedAnswers: {
    //   ...testDetails?.questions.reduce((acc, question) => {
    //     acc[question.questionId] = selectedAnswers[question.questionId] || 0;
    //     return acc;
    //   }, {}),
    // },

    selectedAnswers: {
      ...testDetails?.questions.reduce<Record<number, number>>((acc, question) => {
        acc[question.questionId] = selectedAnswers[question.questionId] || 0;
        return acc;
      }, {}),
    },
    
  };

  setShowAnimation(true);
  setAnimationType('loading');

  try {
    await postData(payload);
    console.log("Button submission successful");
  } catch (error) {
    console.error("Error during button submission:", error);
  } finally {
    isSubmittingFlag.current = false; // Release lock after submission
    setShowAnimation(false);
  }
};

// useEffect to trigger handleTimeoutSubmit after timeout
useEffect(() => {
  if (testDuration > 0) {
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeoutSubmit(); // Submit due to timeout
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }
}, [testDuration]);

  
  
  

  

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (!testDetails) {
    return (
      <Center h="100vh">
        <Text fontSize="lg">Failed to load test details. Please try again later.</Text>
      </Center>
    );
  }

  const currentQuestion = testDetails.questions[currentQuestionIndex];

  return (
    <Box className="examContainer">
      {showAnimation && (
        <Center>
          <Box
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="1000"
            bg="rgba(0, 0, 0, 0.5)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100vw"
            height="100vh"
          >
            {animationType === 'loading' && (
              <Lottie
                animationData={loadingAnimation}
                loop={true}
                autoplay={true}
                style={{ width: '150px', height: '150px' }}
              />
            )}
            {animationType === 'success' && (
              <Box textAlign="center">
                <Lottie animationData={successAnimation} loop={false} autoplay={true} />
                <Text mt={4} fontSize="lg" color="white">
                  Exam has been submitted successfully!
                </Text>
              </Box>
            )}
            {animationType === 'error' && (
              <Box textAlign="center">
                <Lottie animationData={errorAnimation} loop={false} autoplay={true} />
                <Text mt={4} fontSize="lg" color="white">
                  {error || 'An error occurred, please try again.'}
                </Text>
              </Box>
            )}
          </Box>
        </Center>
      )}

      {!showAnimation && (
        <Box maxW={{ base: '95%', md: '80%', lg: '60%' }} mx="auto" py={10} px={4}>
          <Box textAlign="center" mb={6}>
            <Heading 
              fontSize={{ base: '2xl', md: '3xl' }} 
              color="purple.500" 
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
              mb={2}
            >               {testName}
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
              {institute}
            </Text>
            <Text mt={2} fontSize={{ base: 'sm', md: 'md' }} color="purple.600">
              Time Remaining: {formatTime(remainingTime)}
            </Text>
            <Progress
              mt={4}
              value={(currentQuestionIndex + 1) / testDetails.questions.length * 100}
              colorScheme="purple"
              size="sm"
              borderRadius="md"
            />
          </Box>

          <Box mb={8} bg="gray.100" p={6} rounded="md" shadow="md">
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Question {currentQuestionIndex + 1}/{testDetails.questions.length}
            </Text>
            {/* <Box
              dangerouslySetInnerHTML={
                isHTML(currentQuestion.questionText)
                  ? { __html: currentQuestion.questionText }
                  : undefined
              }
            >
              {!isHTML(currentQuestion.questionText) && (
                <Text fontSize="md">{currentQuestion.questionText}</Text>
              )}
            </Box> */}
            
            /             {/* Render question text based on whether it contains HTML */}
            {isHTML(currentQuestion.questionText) ? (
              <div
                dangerouslySetInnerHTML={{ __html: currentQuestion.questionText }}
              />
            ) : (
              <Text fontSize="lg" mb={4} fontWeight="bold" color="gray.700">
                {currentQuestion.questionText}
              </Text>
            )} 

            <RadioGroup
              mt={4}
              value={selectedAnswers[currentQuestion.questionId]?.toString() || ''}
              onChange={(value) => handleOptionChange(currentQuestion.questionId, value)}
            >
              <Stack direction="column" spacing={3}>
                {currentQuestion.options.map((option) => (
                  <Radio
                    key={option.optionId}
                    value={option.optionId.toString()}
                    colorScheme="purple"
                  >
                    {option.option_text}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </Box>

          <Stack direction="row" justifyContent="space-between">
            <Button
              colorScheme="gray"
              variant="outline"
              onClick={handlePrevious}
              isDisabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>
            <Button
              colorScheme="purple"
              onClick={currentQuestionIndex + 1 === testDetails.questions.length ? handleSubmit : handleNext}
            >
              {currentQuestionIndex + 1 === testDetails.questions.length ? 'Submit' : 'Next'}
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};
