// version 1 : working version

// import React from 'react';
// import { Box, Text, Button, Link, VStack, Heading, HStack, Divider } from '@chakra-ui/react';

// import sampleFile from '../files/testFormat.xlsx'

// export const UploadFileDetailsPage = () => {
//   // Sample file URL (you can replace this with your actual file URL)
//   //const sampleFileUrl = '../files/testFormat.xlsx';
//   const sampleFileUrl = '/files/testFormat.xlsx';

//   return (
//     <Box p={5}>
//       <Heading as="h2" size="xl" mb={4}>
//         Upload Excel File Format Explanation
//       </Heading>

//       <Text fontSize="lg" mb={4}>
//         To ensure that your data uploads correctly, please follow the Excel file format outlined below. 
//         Download the sample file to view the exact structure you need to follow.
//       </Text>

//       <VStack spacing={4} align="flex-start" mb={6}>
//         <Heading as="h3" size="md">Excel Sheet Format</Heading>
//         <Text fontSize="md">
//           1. The first column should contain the <strong>User ID</strong>.
//         </Text>
//         <Text fontSize="md">
//           2. The second column should contain the <strong>Test Name</strong>.
//         </Text>
//         <Text fontSize="md">
//           3. The third column should contain the <strong>Score</strong> for the test.
//         </Text>
//         <Text fontSize="md">
//           4. Additional columns may be added if necessary (e.g., <strong>Test Date</strong>, <strong>Status</strong>).
//         </Text>
//       </VStack>

//       <Divider />

//       <HStack mt={6} spacing={4}>
//         <Button colorScheme="teal" size="lg" onClick={() => window.location.href = sampleFileUrl}>
//           Download Sample File
//         </Button>
//         <Text fontSize="lg">
//           Please ensure your file follows this format to avoid any upload issues.
//         </Text>
//       </HStack>
//     </Box>
//   );
// };

// export default UploadFileDetailsPage;




// Version 2 : Design Enhancement

// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Heading,
//   Select,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   VStack,
//   Text,
//   HStack,
// } from '@chakra-ui/react';

// export const UploadFileDetailsPage = () => {
//   // Sample file data (this can be replaced with real API data if necessary)
//   const sampleFileData = {
//     excel: [
//       { id: '1', userId: 'U001', testName: 'Math Test', score: '85' },
//       { id: '2', userId: 'U002', testName: 'Science Test', score: '92' },
//     ],
//     csv: [
//       { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
//       { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
//     ],
//   };

//   const [selectedFormat, setSelectedFormat] = useState('excel');

//   const handleFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedFormat(event.target.value);
//   };

//   const downloadFile = () => {
//     const fileUrls: Record<string, string> = {
//       excel: '/files/testFormat.xlsx',
//       csv: '/files/sample.csv',
//     };
//     const url = fileUrls[selectedFormat];
//     if (url) {
//       window.open(url, '_blank');
//     } else {
//       alert('No file available for the selected format.');
//     }
//   };

//   return (
//     <Box p={6} maxW="1200px" mx="auto">
//       <Heading as="h2" size="xl" mb={4} textAlign="center" color="teal.500">
//         File Format Guidelines
//       </Heading>

//       <VStack spacing={4} align="stretch">
//         {/* Dropdown to select file format */}
//         <Box>
//           <Text fontSize="lg" mb={2} fontWeight="semibold">
//             Select File Format:
//           </Text>
//           <Select
//             placeholder="Choose a format"
//             value={selectedFormat}
//             onChange={handleFormatChange}
//             colorScheme="teal"
//             bg="white"
//           >
//             <option value="excel">Excel File</option>
//             <option value="csv">CSV File</option>
//           </Select>
//         </Box>

//         {/* Table displaying sample data */}
//         <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
//           <Heading as="h3" size="md" mb={4}>
//             Sample {selectedFormat.toUpperCase()} Data
//           </Heading>
//           <Table variant="striped" colorScheme="teal">
//             <Thead>
//               <Tr>
//                 {Object.keys(sampleFileData[selectedFormat][0]).map((key) => (
//                   <Th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Th>
//                 ))}
//               </Tr>
//             </Thead>
//             <Tbody>
//               {sampleFileData[selectedFormat].map((row) => (
//                 <Tr key={row.id}>
//                   {Object.values(row).map((value, index) => (
//                     <Td key={index}>{value}</Td>
//                   ))}
//                 </Tr>
//               ))}
//             </Tbody>
//           </Table>
//         </Box>

//         {/* Download button */}
//         <HStack spacing={4}>
//           <Button colorScheme="teal" size="lg" onClick={downloadFile}>
//             Download Sample File
//           </Button>
//           <Text fontSize="md" fontWeight="semibold">
//             Make sure your file follows the above format for successful uploads.
//           </Text>
//         </HStack>
//       </VStack>
//     </Box>
//   );
// };

// export default UploadFileDetailsPage;



// Version 3 : Design enhancement to version 2

import React, { useState } from 'react';
import {
  Box,
  Heading,
  Select,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Text,
} from '@chakra-ui/react';

export const FileFormatPage = () => {
  // File data and paths
  const fileData = {
    "Test Creation File": {
      path: "/files/testFormat.xlsx",
      structure: [
        { column: "subject", description: "Specifies the test subject (e.g., Tamil, English, Mathematics, etc.)" },
        { column: "category", description: "Specifies the section category (e.g., Quantitative Aptitude, Logical Reasoning, Mathematics, etc.)" },
        { column: "question_text", description: "The text of the question being asked." },
        { column: "option_1", description: "The first possible answer choice." },
        { column: "option_2", description: "The second possible answer choice." },
        { column: "option_3", description: "The third possible answer choice." },
        { column: "option_4", description: "The fourth possible answer choice." },
        { column: "correct_option", description: "Indicates the correct answer choice(e.g., option_1" },
        { column: "rewarded_marks", description: "The number of marks awarded for correctly answering this question." },

      ],
    },
    "Test User Mapping File": {
      path: "/files/testUserMappingFormat.xlsx",
      structure: [
        { column: "candidateID", description: "The unique user ID (Login ID) for the candidate" },
        { column: "candidateName", description: "The full name of the candidate." },
        { column: "institute", description: "The institution or school where the candidate is enrolled." },
        { column: "eligibleAttempts", description: "The number of attempts the candidate is eligible to make for the test." },
      ],
    },
  };

  // State to track selected file format
  const [selectedFile, setSelectedFile] = useState<keyof typeof fileData | null>(null);

  // Handle file selection
  const handleFileSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFile(event.target.value as keyof typeof fileData);
  };

  // Handle file download
  const handleDownload = () => {
    if (selectedFile && fileData[selectedFile]) {
      const url = fileData[selectedFile].path;
      window.open(url, "_blank");
    }
  };

  return (
    <Box p={6} maxW="800px" mx="auto">
      <Heading as="h1" size="lg" mb={6} textAlign="center" color="teal.600">
        File Format Guidelines
      </Heading>

      <VStack spacing={4} align="stretch">
        {/* Dropdown for selecting file type */}
        <Box>
          <Text fontSize="lg" fontWeight="semibold" mb={2}>
            Select a file format to view:
          </Text>
          <Select
            placeholder="Choose a file format"
            onChange={handleFileSelection}
            bg="white"
            borderColor="teal.400"
            focusBorderColor="teal.600"
          >
            {Object.keys(fileData).map((file) => (
              <option key={file} value={file}>
                {file}
              </option>
            ))}
          </Select>
        </Box>

        {/* Display file structure and download option */}
        {selectedFile && fileData[selectedFile] && (
          <Box borderWidth="1px" borderRadius="lg" p={4} shadow="md" bg="gray.50">
            <Heading as="h3" size="md" mb={4} color="teal.500">
              {selectedFile} Structure
            </Heading>

            {/* Table for file structure */}
            <Table variant="simple" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>Column Name</Th>
                  <Th>Description</Th>
                </Tr>
              </Thead>
              <Tbody>
                {fileData[selectedFile].structure.map((row, index) => (
                  <Tr key={index}>
                    <Td>{row.column}</Td>
                    <Td>{row.description}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>

            {/* Download Button */}
            <Button
              mt={4}
              colorScheme="teal"
              size="md"
              onClick={handleDownload}
            >
              Download {selectedFile}
            </Button>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default FileFormatPage;

