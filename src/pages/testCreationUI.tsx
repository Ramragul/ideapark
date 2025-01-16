import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Textarea,
  VStack,
  HStack,
  Heading,
} from "@chakra-ui/react";

interface Question {
  question: string;
  options: string[];
  correctOption: string;
  marks: number;
  category: string;
  subject: string;
}

export const TestCreationUI: React.FC = () => {
  const [testName, setTestName] = useState("");
  const [validity, setValidity] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    question: "",
    options: ["", "", "", ""],
    correctOption: "",
    marks: 0,
    category: "",
    subject: "",
  });
  const [isPreview, setIsPreview] = useState(false);

  const handleAddQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      question: "",
      options: ["", "", "", ""],
      correctOption: "",
      marks: 0,
      category: "",
      subject: "",
    });
  };

  const handleEditQuestion = (index: number) => {
    const questionToEdit = questions[index];
    setCurrentQuestion(questionToEdit);
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleDeleteQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handlePreview = () => {
    setIsPreview(true);
  };

  const handleSubmitTest = () => {
    alert("Test submitted successfully!");
    console.log("TestName "+testName);
    console.log("Test Validity" +validity);
    console.log("Questions" +JSON.stringify(questions))
    setQuestions([]);
    setTestName("");
    setValidity("");
    setIsPreview(false);
  };

  const handleContinue = () => {
    setIsPreview(false);
  };

  return (
    <Box p={5} maxWidth="1200px" mx="auto">
      <Heading mb={5}>Test Creation</Heading>
      {!isPreview ? (
        <VStack spacing={5} align="stretch">
          <FormControl>
            <FormLabel>Test Name</FormLabel>
            <Input
              placeholder="Enter test name"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Validity</FormLabel>
            <Input
              placeholder="Enter validity period"
              value={validity}
              onChange={(e) => setValidity(e.target.value)}
            />
          </FormControl>

          <Heading size="md">Add Questions</Heading>
          <FormControl>
            <FormLabel>Question</FormLabel>
            <Textarea
              placeholder="Enter question"
              value={currentQuestion.question}
              onChange={(e) =>
                setCurrentQuestion({ ...currentQuestion, question: e.target.value })
              }
            />
          </FormControl>

          {currentQuestion.options.map((option, index) => (
            <FormControl key={index}>
              <FormLabel>Option {index + 1}</FormLabel>
              <Input
                placeholder={`Enter option ${index + 1}`}
                value={option}
                onChange={(e) => {
                  const newOptions = [...currentQuestion.options];
                  newOptions[index] = e.target.value;
                  setCurrentQuestion({ ...currentQuestion, options: newOptions });
                }}
              />
            </FormControl>
          ))}

          <FormControl>
            <FormLabel>Correct Option</FormLabel>
            <Input
              placeholder="Enter correct option"
              value={currentQuestion.correctOption}
              onChange={(e) =>
                setCurrentQuestion({
                  ...currentQuestion,
                  correctOption: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl>
            <FormLabel>Marks</FormLabel>
            <Input
              type="number"
              placeholder="Enter marks"
              value={currentQuestion.marks}
              onChange={(e) =>
                setCurrentQuestion({
                  ...currentQuestion,
                  marks: parseInt(e.target.value) || 0,
                })
              }
            />
          </FormControl>

          <FormControl>
            <FormLabel>Category</FormLabel>
            <Input
              placeholder="Enter category"
              value={currentQuestion.category}
              onChange={(e) =>
                setCurrentQuestion({ ...currentQuestion, category: e.target.value })
              }
            />
          </FormControl>

          <FormControl>
            <FormLabel>Subject</FormLabel>
            <Input
              placeholder="Enter subject"
              value={currentQuestion.subject}
              onChange={(e) =>
                setCurrentQuestion({ ...currentQuestion, subject: e.target.value })
              }
            />
          </FormControl>

          <HStack spacing={4}>
            <Button colorScheme="blue" onClick={handleAddQuestion}>
              Add Question
            </Button>
            <Button colorScheme="green" onClick={handlePreview}>
              Preview Questions
            </Button>
          </HStack>
        </VStack>
      ) : (
        <VStack spacing={5} align="stretch">
          <Heading size="md">Preview Questions</Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Question</Th>
                <Th>Options</Th>
                <Th>Correct Option</Th>
                <Th>Marks</Th>
                <Th>Category</Th>
                <Th>Subject</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {questions.map((q, index) => (
                <Tr key={index}>
                  <Td>{q.question}</Td>
                  <Td>{q.options.join(", ")}</Td>
                  <Td>{q.correctOption}</Td>
                  <Td>{q.marks}</Td>
                  <Td>{q.category}</Td>
                  <Td>{q.subject}</Td>
                  <Td>
                    <Button
                      size="sm"
                      colorScheme="yellow"
                      onClick={() => handleEditQuestion(index)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="red"
                      ml={2}
                      onClick={() => handleDeleteQuestion(index)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          <HStack spacing={4}>
            <Button colorScheme="green" onClick={handleSubmitTest}>
              Submit Test
            </Button>
            <Button colorScheme="blue" onClick={handleContinue}>
              Continue Question Creation
            </Button>
          </HStack>
        </VStack>
      )}
    </Box>
  );
};

export default TestCreationUI;
