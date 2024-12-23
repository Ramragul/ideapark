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



// Version 5

import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
 
} from '@chakra-ui/react';
//import { Radio, RadioGroup } from '@/components/ui/radio';
//import { useColorModeValue } from '@/components/ui/color-mode';
//import { Progress } from '@chakra-ui/react';
//import Progress from '@chakra-ui/react/progress';
import { ProgressLabel } from '@chakra-ui/react';
import { ProgressBar, ProgressRoot , ProgressValueText } from "@/components/ui/progress"



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
  //const [testDetails, setTestDetails] = useState<TestDetails | null>(null);
  const [testDetails, setTestDetails] = useState<TestDetails | null>(null as TestDetails | null);

  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);

  //const cardBg = useColorModeValue('white', 'gray.800');
  //const cardShadow = useColorModeValue('md', 'lg');

  const cardBg = 'white'; // or 'gray.800' depending on your theme
const cardShadow = 'md'; // or 'lg' depending on your theme


  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        const response = await axios.get('https://admee.in:3003/api/ip/testDetails/13'); // Replace with actual API endpoint
        setTestDetails(response.data);
      } catch (error) {
        console.error('Error fetching test details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestDetails();
  }, []);

  // const handleOptionChange = (questionId: number, value: string) => {
  //   const optionId = parseInt(value, 10);
  //   if (!isNaN(optionId)) {
  //     setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  //   }
  // };

  //   const handleOptionChange = (questionId: number, value: string) => {
  //   const optionId = parseInt(value, 10); // Ensure it's parsed correctly as an integer
  //   if (!isNaN(optionId)) {
  //     setSelectedAnswers((prev) => {
  //       console.log("Updating selected answers:", {
  //         ...prev,
  //         [questionId]: optionId,
  //       });
  //       return {
  //         ...prev,
  //         [questionId]: optionId,
  //       };
  //     });
  //   }
  // };

  const handleOptionChange = (questionId: number, value: string) => {
    const optionId = parseInt(value, 10); // Ensure it's parsed correctly as an integer
    if (!isNaN(optionId)) {
      setSelectedAnswers((prev) => {
        console.log("Updating selected answers:", {
          ...prev,
          [questionId]: optionId,
        });
        return {
          ...prev,
          [questionId]: optionId,
        };
      });
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, testDetails?.questions.length! - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleSubmit = () => {
    alert("Exam Completed")
    console.log('Selected Answers:' +selectedAnswers);
  };

  if (loading) {
    return (
      //<Center h="100vh">
        <Spinner size="xl" />
     // </Center>
    );
  }

  if (!testDetails) {
    return (
    //  <Center h="100vh">
        <Text fontSize="lg">Failed to load test details. Please try again later.</Text>
     // </Center>
    );
  }

  const currentQuestion = testDetails.questions[currentQuestionIndex];

  return (
    <>
     <Box maxW={{ base: '95%', md: '80%', lg: '60%' }} mx="auto" py={10} px={4}>
  
      <Heading mb={6} textAlign="center" color="pink.600">
        Online Exam
      </Heading>
      {/* <Progress value={((currentQuestionIndex + 1) / testDetails.questions.length) * 100} mb={4} colorScheme="pink" /> */}
      {/* <ProgressRoot value={((currentQuestionIndex + 1) / testDetails.questions.length) * 100} mb={4} colorScheme="pink">
  <ProgressLabel>Progress</ProgressLabel>
  <ProgressValueText>{((currentQuestionIndex + 1) / testDetails.questions.length) * 100}%</ProgressValueText>
  <ProgressBar />
</ProgressRoot> */}

{/* <ProgressRoot
colorPalette="green"

  value={Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100)}
  mb={4}
  
>
  <ProgressLabel>Progress</ProgressLabel>
  <ProgressValueText >
    {Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100)}%
   
  </ProgressValueText>
  <ProgressBar
 
    // style={{
    //   backgroundColor:
    //     Math.round(((currentQuestionIndex + 1) / testDetails.questions.length) * 100) === 100
    //       ? 'green'
    //       : 'yellow',
    // }}
  />
</ProgressRoot> */}


      <Text textAlign="center" mb={4} color="gray.500">
        Question {currentQuestionIndex + 1} of {testDetails.questions.length}
      </Text>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        bg={cardBg}
        shadow={cardShadow}
      >
        <Text fontSize="lg" mb={4} fontWeight="bold" color="gray.700">
          {currentQuestion.questionText}
        </Text>
        {/* <RadioGroup
          onChange={(value) => handleOptionChange(currentQuestion.questionId, value)}
          value={selectedAnswers[currentQuestion.questionId]?.toString() || ''}
        >
          <Stack spacing={4}>
            {currentQuestion.options.map((option) => (
              <Radio key={option.optionId} value={option.optionId.toString()} colorScheme="pink">
                {option.option_text}
              </Radio>
            ))}
          </Stack>
        </RadioGroup> */}

{/* <RadioGroup
              onChange={(e) => {
                const value = e.target.value; // Access the value from event.target.value
                console.log("Radio value changed:", value); // Debugging
                handleOptionChange(currentQuestion.questionId, value);
              }}
              value={selectedAnswers[currentQuestion.questionId] ? selectedAnswers[currentQuestion.questionId].toString() : ''}
            >
              <Stack spacing={4}>
                {currentQuestion.options.map((option) => (
                  <Radio key={option.optionId} value={option.optionId.toString()} colorScheme="pink">
                    {option.option_text}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup> */}

<RadioGroup
      onChange={(value: string) => {
        console.log("Radio value changed:", value); // Debugging
        handleOptionChange(currentQuestion.questionId, value);
      }}
      value={selectedAnswers[currentQuestion.questionId] ? selectedAnswers[currentQuestion.questionId].toString() : ''}
    >
      <Stack spacing={4}>
        {currentQuestion.options.map((option) => (
          <Radio key={option.optionId} value={option.optionId.toString()} colorScheme="pink">
            {option.option_text}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>

      </Box>
      <Stack direction="row" justify="space-between" mt={8}>
        <Button
          onClick={handlePrevious}
          isDisabled={currentQuestionIndex === 0}
          colorScheme="gray"
          size="lg"
          bgColor="pink.500"
          color='white'
        >
          Previous
        </Button>
        {currentQuestionIndex === testDetails.questions.length - 1 ? (
          <Button
            onClick={handleSubmit}
            color='white'
            colorScheme="pink"
            size="lg"
            isDisabled={!selectedAnswers[currentQuestion.questionId]}
            bgColor="green.500"
          >
            Submit
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            colorScheme="pink"
            size="lg"
            isDisabled={!selectedAnswers[currentQuestion.questionId]}
            bgColor='purple.500'
            color='white'
          >
            Next
          </Button>
        )}
      </Stack>
    </Box>
    </>
  );
};

export default ExamPage;

