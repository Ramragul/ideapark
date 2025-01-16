// Version 1 : simple ui

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Spinner,
//   Button,
//   Divider,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import axios from 'axios';

// import { useAuth } from '@/contexts/AuthContext';
// export const DocumentViewPage: React.FC = () => {
//   const [documents, setDocuments] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   const {authState} = useAuth();

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`https://admee.in:3003/api/ip/partner/${authState.institute}/documents`); // Adjust endpoint
//         setDocuments(response.data.documents || []);
//       } catch (error) {
//         console.error('Error fetching documents:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDocuments();
//   }, []);

//   return (
//     <Box bgGradient="linear(to-br, teal.400, green.300)" minH="100vh" p={6}>
//       <Box bg="white" p={6} maxW="800px" mx="auto" borderRadius="md" shadow="lg">
//         <Text fontSize="2xl" fontWeight="bold" textAlign="center" color="teal.600">
//           View Uploaded Documents
//         </Text>
//         <Divider my={4} />
//         {loading ? (
//           <Spinner size="xl" />
//         ) : (
//           <VStack align="stretch" spacing={4}>
//             {documents.map((doc) => (
//               <HStack
//                 key={doc.id}
//                 p={4}
//                 bg={useColorModeValue('gray.100', 'gray.700')}
//                 borderRadius="md"
//                 shadow="sm"
//                 justify="space-between"
//               >
//                 <Text>{doc.name}</Text>
//                 <Button colorScheme="blue" size="sm" onClick={() => window.open(doc.url, '_blank')}>
//                   View
//                 </Button>
//               </HStack>
//             ))}
//           </VStack>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default DocumentViewPage;



// Version 2 : Enhancement to Version 1

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Spinner,
//   Divider,
//   Button,
//   useColorModeValue,
//   Flex,
// } from '@chakra-ui/react';
// import axios from 'axios';

// import { useAuth } from '@/contexts/AuthContext';

// export const DocumentViewPage: React.FC = () => {
//   const [documents, setDocuments] = useState<any[]>([]);
//   const [selectedDoc, setSelectedDoc] = useState<any | null>(null);
//   const [loading, setLoading] = useState(false);

//   const { authState } = useAuth();

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`https://admee.in:3003/api/ip/partner/${authState.institute}/documents`); // Adjust endpoint
//         setDocuments(response.data.documents || []);
//       } catch (error) {
//         console.error('Error fetching documents:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDocuments();
//   }, []);

//   return (
//     <Flex bgGradient="linear(to-br, teal.500, green.400)" minH="100vh" p={6} direction="row">
//       {/* Left Sidebar */}
//       <Box
//         w="30%"
//         bg={useColorModeValue('white', 'gray.800')}
//         p={4}
//         borderRadius="md"
//         shadow="lg"
//         overflowY="auto"
//       >
//         <Text fontSize="2xl" fontWeight="bold" mb={4} color="teal.600" textAlign="center">
//           Documents
//         </Text>
//         <Divider mb={4} />
//         {loading ? (
//           <Spinner size="xl" />
//         ) : (
//           <VStack align="stretch" spacing={4}>
//             {documents.map((doc) => (
//               <HStack
//                 key={doc.id}
//                 p={3}
//                 bg={selectedDoc?.id === doc.id ? 'teal.100' : useColorModeValue('gray.100', 'gray.700')}
//                 borderRadius="md"
//                 shadow="sm"
//                 cursor="pointer"
//                 onClick={() => setSelectedDoc(doc)}
//                 color="white"
//                 _hover={{ bg: 'teal.200', transform: 'scale(1.02)' }}
//               >
//                 <Text fontWeight="medium" isTruncated>
//                   {doc.name}
//                 </Text>
//               </HStack>
//             ))}
//           </VStack>
//         )}
//       </Box>

//       {/* Right Document Viewer */}
//       <Box
//         w="70%"
//         ml={4}
//         bg={useColorModeValue('white', 'gray.800')}
//         p={6}
//         borderRadius="md"
//         shadow="lg"
//         overflow="auto"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//       >
//         {selectedDoc ? (
//           <Box w="full" h="full">
//             <Text fontSize="2xl" fontWeight="bold" mb={4} color="teal.600">
//               {selectedDoc.name}
//             </Text>
//             <iframe
//               src={selectedDoc.document_url}
//               width="100%"
//               height="500px"
//               style={{ border: 'none', borderRadius: '8px' }}
//               title={selectedDoc.name}
//             />
//           </Box>
//         ) : (
//           <Text fontSize="xl" color="gray.500">
//             Select a document from the list to view here.
//           </Text>
//         )}
//       </Box>
//     </Flex>
//   );
// };

// export default DocumentViewPage;



// Version 3 : Enhanced design , clone of 2

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Spinner,
//   Divider,
//   Button,
//   useColorModeValue,
//   Flex,
// } from '@chakra-ui/react';
// import axios from 'axios';

// import { useAuth } from '@/contexts/AuthContext';

// export const DocumentViewPage: React.FC = () => {
//   const [documents, setDocuments] = useState<any[]>([]);
//   const [selectedDoc, setSelectedDoc] = useState<any | null>(null);
//   const [loading, setLoading] = useState(false);

//   const { authState } = useAuth();

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`https://admee.in:3003/api/ip/partner/${authState.institute}/documents`); // Adjust endpoint
//         setDocuments(response.data.documents || []);
//       } catch (error) {
//         console.error('Error fetching documents:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDocuments();
//   }, []);

//   return (
//     <Flex bgGradient="linear(to-br, teal.500, green.400)" minH="100vh" p={6} direction="row">
//       {/* Left Sidebar */}
//       <Box
//         w="30%"
//         bg={useColorModeValue('white', 'gray.800')}
//         p={4}
//         borderRadius="md"
//         shadow="lg"
//         overflowY="auto"
//       >
//         <Text fontSize="2xl" fontWeight="bold" mb={4} color="teal.600" textAlign="center">
//           Documents
//         </Text>
//         <Divider mb={4} />
//         {loading ? (
//           <Spinner size="xl" />
//         ) : (
//           <VStack align="stretch" spacing={4}>
//             {documents.map((doc) => (
//               <HStack
//                 key={doc.id}
//                 p={3}
//                 bg={selectedDoc?.id === doc.id ? 'teal.100' : useColorModeValue('gray.100', 'gray.700')}
//                 borderRadius="md"
//                 shadow="sm"
//                 cursor="pointer"
//                 onClick={() => setSelectedDoc(doc)}
//                 _hover={{ bg: 'teal.200', transform: 'scale(1.02)' }}
//               >
//                 <Text fontWeight="medium" isTruncated>
//                   {doc.name}
//                 </Text>
//               </HStack>
//             ))}
//           </VStack>
//         )}
//       </Box>

//       {/* Right Document Viewer */}
//       <Box
//         w="70%"
//         ml={4}
//         bg={useColorModeValue('white', 'gray.800')}
//         p={6}
//         borderRadius="md"
//         shadow="lg"
//         overflow="auto"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//       >
//         {selectedDoc ? (
//           <Box w="full" h="full">
//             <Text fontSize="2xl" fontWeight="bold" mb={4} color="teal.600">
//               {selectedDoc.name}
//             </Text>
//             <iframe
//               src={selectedDoc.document_url}
//               width="100%"
//               height="500px"
//               style={{ border: 'none', borderRadius: '8px' }}
//               title={selectedDoc.name}
//             />
//           </Box>
//         ) : (
//           <Text fontSize="xl" color="gray.500">
//             Select a document from the list to view here.
//           </Text>
//         )}
//       </Box>
//     </Flex>
//   );
// };

// export default DocumentViewPage;


// Version 4 : 

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Spinner,
//   Divider,
//   Button,
//   Collapse,
//   useDisclosure,
//   useColorModeValue,
//   Flex,
//   IconButton,
//   useBreakpointValue,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useDisclosure as useDrawerDisclosure,
// } from '@chakra-ui/react';
// import { ChevronDownIcon, ChevronUpIcon, HamburgerIcon } from '@chakra-ui/icons';
// import axios from 'axios';

// import { useAuth } from '@/contexts/AuthContext';

// export const DocumentViewPage: React.FC = () => {
//   const [documents, setDocuments] = useState<any[]>([]);
//   const [selectedDoc, setSelectedDoc] = useState<any | null>(null);
//   const [loading, setLoading] = useState(false);
//   const { authState } = useAuth();
  
//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`https://admee.in:3003/api/ip/partner/${authState.institute}/documents`);
//         setDocuments(response.data.documents || []);
//       } catch (error) {
//         console.error('Error fetching documents:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDocuments();
//   }, [authState.institute]);

//   // Group documents by subject
//   const groupedBySubject = documents.reduce((acc, doc) => {
//     const subject = doc.subject || 'Others';
//     if (!acc[subject]) acc[subject] = [];
//     acc[subject].push(doc);
//     return acc;
//   }, {});

//   // Drawer for mobile view
//   const { isOpen, onOpen, onClose } = useDrawerDisclosure();

//   const renderDocumentContent = (doc: any) => {
//     const fileExtension = doc.document_url.split('.').pop()?.toLowerCase();

//     if (fileExtension === 'pdf') {
//       return (
//         <iframe
//           src={doc.document_url}
//           width="100%"
//           height="500px"
//           style={{ border: 'none', borderRadius: '8px' }}
//           title={doc.name}
//         />
//       );
//     } else if (fileExtension === 'docx') {
//       // Use Google Docs Viewer for Word documents
//       const googleDocsViewerUrl = `https://docs.google.com/gview?url=${doc.document_url}&embedded=true`;
//       return (
//         <iframe
//           src={googleDocsViewerUrl}
//           width="100%"
//           height="500px"
//           style={{ border: 'none', borderRadius: '8px' }}
//           title={doc.name}
//         />
//       );
//     } else {
//       return <Text>No preview available for this document type.</Text>;
//     }
//   };

//   return (
//     <Flex
//       bgGradient="linear(to-br, purple.500, yellow.400)"
//       minH="100vh"
//       p={6}
//       direction={['column', 'row']}
//     >
//       {/* Left Sidebar - Subjects */}
//       <Box
//         w={['100%', '30%']}
//         bg={useColorModeValue('white', 'gray.800')}
//         p={4}
//         borderRadius="md"
//         shadow="lg"
//         overflowY="auto"
//         display="flex"
//         flexDirection="column"
//       >
//         <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600" textAlign="center">
//           Document Topics
//         </Text>
//         <Divider mb={4} />
//         {loading ? (
//           <Spinner size="xl" />
//         ) : (
//           <VStack align="stretch" spacing={4}>
//             {Object.keys(groupedBySubject).map((subject) => (
//               <SubjectSection
//                 key={subject}
//                 subject={subject}
//                 documents={groupedBySubject[subject]}
//                 onDocumentClick={setSelectedDoc}
//               />
//             ))}
//           </VStack>
//         )}
//       </Box>

//       {/* Mobile Drawer for Sidebar */}
//       <IconButton
//         aria-label="Open Menu"
//         icon={<HamburgerIcon />}
//         onClick={onOpen}
//         display={['block', 'none']}
//         position="absolute"
//         top="20px"
//         left="20px"
//         zIndex="1"
//       />

//       <Drawer
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         size="lg"
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Document Topics</DrawerHeader>
//           <DrawerBody>
//             {loading ? (
//               <Spinner size="xl" />
//             ) : (
//               <VStack align="stretch" spacing={4}>
//                 {Object.keys(groupedBySubject).map((subject) => (
//                   <SubjectSection
//                     key={subject}
//                     subject={subject}
//                     documents={groupedBySubject[subject]}
//                     onDocumentClick={setSelectedDoc}
//                   />
//                 ))}
//               </VStack>
//             )}
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>

//       {/* Right Document Viewer */}
//       <Box
//         w={['100%', '70%']}
//         ml={[0, 4]}
//         bg={useColorModeValue('white', 'gray.800')}
//         p={6}
//         borderRadius="md"
//         shadow="lg"
//         overflow="auto"
//         display="flex"
//         justifyContent="flex-start"
//         alignItems="flex-start"
//         flexDirection="column"
//       >
//         {selectedDoc ? (
//           <Box w="full" h="full">
//             <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600">
//               {selectedDoc.name}
//             </Text>
//             {renderDocumentContent(selectedDoc)}
//           </Box>
//         ) : (
//           <Text fontSize="xl" color="gray.500">
//             Select a document from the list to view here.
//           </Text>
//         )}
//       </Box>
//     </Flex>
//   );
// };

// // Component to render each subject with its documents
// const SubjectSection: React.FC<any> = ({ subject, documents, onDocumentClick }) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box>
//       <HStack justify="space-between" onClick={onToggle} cursor="pointer" _hover={{ bg: 'purple.200' }} p={2} borderRadius="md">
//         <Text fontWeight="bold" color="purple.600">{subject}</Text>
//         <IconButton
//           aria-label="Toggle Documents"
//           icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
//         />
//       </HStack>
//       <Collapse in={isOpen}>
//         <VStack align="stretch" spacing={2} pl={4}>
//           {documents.map((doc) => (
//             <Button
//               key={doc.id}
//               variant="link"
//               color="yellow.400"
//               onClick={() => onDocumentClick(doc)}
//               _hover={{ textDecoration: 'underline' }}
//             >
//               {doc.name}
//             </Button>
//           ))}
//         </VStack>
//       </Collapse>
//     </Box>
//   );
// };

// export default DocumentViewPage;



// version 4 - working fine , few design glitches

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Spinner,
//   Divider,
//   Button,
//   Collapse,
//   useDisclosure,
//   useColorModeValue,
//   Flex,
//   IconButton,
//   useBreakpointValue,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useDisclosure as useDrawerDisclosure,
// } from '@chakra-ui/react';
// import { ChevronDownIcon, ChevronUpIcon, HamburgerIcon } from '@chakra-ui/icons';
// import axios from 'axios';

// import { useAuth } from '@/contexts/AuthContext';

// export const DocumentViewPage: React.FC = () => {
//   const [documents, setDocuments] = useState<any[]>([]);
//   const [selectedDoc, setSelectedDoc] = useState<any | null>(null);
//   const [loading, setLoading] = useState(false);
//   const { authState } = useAuth();
  
//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`https://admee.in:3003/api/ip/partner/${authState.institute}/documents`);
//         setDocuments(response.data.documents || []);
//       } catch (error) {
//         console.error('Error fetching documents:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDocuments();
//   }, [authState.institute]);

//   // Group documents by subject
//   const groupedBySubject = documents.reduce((acc, doc) => {
//     const subject = doc.subject || 'Others';
//     if (!acc[subject]) acc[subject] = [];
//     acc[subject].push(doc);
//     return acc;
//   }, {});

//   // Drawer for mobile view
//   const { isOpen, onOpen, onClose } = useDrawerDisclosure();

//   const renderDocumentContent = (doc: any) => {
//     const fileExtension = doc.document_url.split('.').pop()?.toLowerCase();

//     if (fileExtension === 'pdf') {
//       return (
//         <iframe
//           src={doc.document_url}
//           width="100%"
//           height="500px"
//           style={{ border: 'none', borderRadius: '8px' }}
//           title={doc.name}
//         />
//       );
//     } else if (fileExtension === 'docx') {
//       // Use Google Docs Viewer for Word documents
//       const googleDocsViewerUrl = `https://docs.google.com/gview?url=${doc.document_url}&embedded=true`;
//       return (
//         <iframe
//           src={googleDocsViewerUrl}
//           width="100%"
//           height="500px"
//           style={{ border: 'none', borderRadius: '8px' }}
//           title={doc.name}
//         />
//       );
//     } else {
//       return <Text>No preview available for this document type.</Text>;
//     }
//   };

//   return (
//     <Flex
//       bgGradient="linear(to-br, purple.500, yellow.400)"
//       minH="100vh"
//       p={6}
//       direction={['column', 'row']}
//     >
//       {/* Left Sidebar - Subjects */}
//       <Box
//         w={['100%', '30%']}
//         bg={useColorModeValue('white', 'gray.800')}
//         p={4}
//         borderRadius="md"
//         shadow="lg"
//         overflowY="auto"
//         display="flex"
//         flexDirection="column"
//       >
//         <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600" textAlign="center">
//           Document Topics
//         </Text>
//         <Divider mb={4} />
//         {loading ? (
//           <Spinner size="xl" />
//         ) : (
//           <VStack align="stretch" spacing={4}>
//             {Object.keys(groupedBySubject).map((subject) => (
//               <SubjectSection
//                 key={subject}
//                 subject={subject}
//                 documents={groupedBySubject[subject]}
//                 onDocumentClick={setSelectedDoc}
//               />
//             ))}
//           </VStack>
//         )}
//       </Box>

//       {/* Mobile Drawer for Sidebar */}
//       <IconButton
//         aria-label="Open Menu"
//         icon={<HamburgerIcon />}
//         onClick={onOpen}
//         display={['block', 'none']}
//         position="absolute"
//         top="20px"
//         left="20px"
//         zIndex="1"
//       />

//       <Drawer
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         size="lg"
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Document Topics</DrawerHeader>
//           <DrawerBody>
//             {loading ? (
//               <Spinner size="xl" />
//             ) : (
//               <VStack align="stretch" spacing={4}>
//                 {Object.keys(groupedBySubject).map((subject) => (
//                   <SubjectSection
//                     key={subject}
//                     subject={subject}
//                     documents={groupedBySubject[subject]}
//                     onDocumentClick={setSelectedDoc}
//                   />
//                 ))}
//               </VStack>
//             )}
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>

//       {/* Right Document Viewer */}
//       <Box
//         w={['100%', '70%']}
//         ml={[0, 4]}
//         bg={useColorModeValue('white', 'gray.800')}
//         p={6}
//         borderRadius="md"
//         shadow="lg"
//         overflow="auto"
//         display="flex"
//         justifyContent="flex-start"
//         alignItems="flex-start"
//         flexDirection="column"
//       >
//         {selectedDoc ? (
//           <Box w="full" h="full">
//             <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600">
//               {selectedDoc.name}
//             </Text>
//             {renderDocumentContent(selectedDoc)}
//           </Box>
//         ) : (
//           <Text fontSize="xl" color="gray.500">
//             Select a document from the list to view here.
//           </Text>
//         )}
//       </Box>
//     </Flex>
//   );
// };

// // Component to render each subject with its documents
// const SubjectSection: React.FC<any> = ({ subject, documents, onDocumentClick }) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box>
//       <HStack justify="space-between" onClick={onToggle} cursor="pointer" _hover={{ bg: 'purple.200' }} p={2} borderRadius="md">
//         <Text fontWeight="bold" color="purple.600">{subject}</Text>
//         <IconButton
//           aria-label="Toggle Documents"
//           icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
//         />
//       </HStack>
//       <Collapse in={isOpen}>
//         <VStack align="stretch" spacing={2} pl={4}>
//           {documents.map((doc) => (
//             <Button
//               key={doc.id}
//               variant="link"
//               color="yellow.400"
//               onClick={() => onDocumentClick(doc)}
//               _hover={{ textDecoration: 'underline' }}
//             >
//               {doc.name}
//             </Button>
//           ))}
//         </VStack>
//       </Collapse>
//     </Box>
//   );
// };

// export default DocumentViewPage;


// version 5 : Enhancement to 4

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Spinner,
//   Divider,
//   Button,
//   Collapse,
//   useDisclosure,
//   useColorModeValue,
//   Flex,
//   IconButton,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
// } from '@chakra-ui/react';
// import { ChevronDownIcon, ChevronUpIcon, HamburgerIcon } from '@chakra-ui/icons';
// import axios from 'axios';

// import { useAuth } from '@/contexts/AuthContext';

// export const DocumentViewPage: React.FC = () => {
//   const [documents, setDocuments] = useState<any[]>([]);
//   const [selectedDoc, setSelectedDoc] = useState<any | null>(null);
//   const [loading, setLoading] = useState(false);
//   const { authState } = useAuth();
  
//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`https://admee.in:3003/api/ip/partner/${authState.institute}/documents`);
//         setDocuments(response.data.documents || []);
//       } catch (error) {
//         console.error('Error fetching documents:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDocuments();
//   }, [authState.institute]);

//   // Group documents by subject
//   const groupedBySubject = documents.reduce((acc, doc) => {
//     const subject = doc.subject || 'Others';
//     if (!acc[subject]) acc[subject] = [];
//     acc[subject].push(doc);
//     return acc;
//   }, {});

//   // Drawer for mobile view
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const renderDocumentContent = (doc: any) => {
//     const fileExtension = doc.document_url.split('.').pop()?.toLowerCase();

//     if (fileExtension === 'pdf') {
//       return (
//         <iframe
//           src={doc.document_url}
//           width="100%"
//           height="500px"
//           style={{ border: 'none', borderRadius: '8px' }}
//           title={doc.name}
//         />
//       );
//     } else if (fileExtension === 'docx') {
//       // Use Google Docs Viewer for Word documents
//       const googleDocsViewerUrl = `https://docs.google.com/gview?url=${doc.document_url}&embedded=true`;
//       return (
//         <iframe
//           src={googleDocsViewerUrl}
//           width="100%"
//           height="500px"
//           style={{ border: 'none', borderRadius: '8px' }}
//           title={doc.name}
//         />
//       );
//     } else {
//       return <Text>No preview available for this document type.</Text>;
//     }
//   };

//   return (
//     <Flex
//       bgGradient="linear(to-br, purple.500, yellow.400)"
//       minH="100vh"
//       p={6}
//       direction={['column', 'row']}
//     >
//       {/* Left Sidebar - Subjects */}
//       <Box
//         w={['100%', '30%']}
//         bg={useColorModeValue('white', 'gray.800')}
//         p={4}
//         borderRadius="md"
//         shadow="lg"
//         overflowY="auto"
//         display={['none', 'flex']}
//         flexDirection="column"
//       >
//         <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600" textAlign="center">
//           Document Topics
//         </Text>
//         <Divider mb={4} />
//         {loading ? (
//           <Spinner size="xl" />
//         ) : (
//           <VStack align="stretch" spacing={4}>
//             {Object.keys(groupedBySubject).map((subject) => (
//               <SubjectSection
//                 key={subject}
//                 subject={subject}
//                 documents={groupedBySubject[subject]}
//                 onDocumentClick={setSelectedDoc}
//               />
//             ))}
//           </VStack>
//         )}
//       </Box>

//       {/* Mobile Drawer for Sidebar */}
//       <IconButton
//         aria-label="Open Menu"
//         icon={<HamburgerIcon />}
//         onClick={onOpen}
//         display={['block', 'none']}
//         position="absolute"
//         top="20px"
//         left="20px"
//         zIndex="1"
//       />

//       <Drawer
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         size="full"  // Full-width drawer on mobile
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Document Topics</DrawerHeader>
//           <DrawerBody>
//             {loading ? (
//               <Spinner size="xl" />
//             ) : (
//               <VStack align="stretch" spacing={4}>
//                 {Object.keys(groupedBySubject).map((subject) => (
//                   <SubjectSection
//                     key={subject}
//                     subject={subject}
//                     documents={groupedBySubject[subject]}
//                     onDocumentClick={setSelectedDoc}
//                   />
//                 ))}
//               </VStack>
//             )}
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>

//       {/* Right Document Viewer */}
//       <Box
//         w={['100%', '70%']}
//         ml={[0, 4]}
//         bg={useColorModeValue('white', 'gray.800')}
//         p={6}
//         borderRadius="md"
//         shadow="lg"
//         overflow="auto"
//         display="flex"
//         justifyContent="flex-start"
//         alignItems="flex-start"
//         flexDirection="column"
//       >
//         {selectedDoc ? (
//           <Box w="full" h="full">
//             <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600">
//               {selectedDoc.name}
//             </Text>
//             {renderDocumentContent(selectedDoc)}
//           </Box>
//         ) : (
//           <Text fontSize="xl" color="gray.500">
//             Select a document from the list to view here.
//           </Text>
//         )}
//       </Box>
//     </Flex>
//   );
// };

// // Component to render each subject with its documents
// const SubjectSection: React.FC<any> = ({ subject, documents, onDocumentClick }) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box>
//       <HStack justify="space-between" onClick={onToggle} cursor="pointer" _hover={{ bg: 'purple.200' }} p={2} borderRadius="md">
//         <Text fontWeight="bold" color="purple.600" pl={4}>{subject}</Text>
//         <IconButton
//           aria-label="Toggle Documents"
//           icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
//         />
//       </HStack>
//       <Collapse in={isOpen}>
//         <VStack align="stretch" spacing={2} pl={6}>
//           {documents.map((doc) => (
//             <Button
//               key={doc.id}
//               variant="link"
//               color="yellow.400"
//               onClick={() => onDocumentClick(doc)}
//               _hover={{ textDecoration: 'underline' }}
//             >
//               {doc.name}
//             </Button>
//           ))}
//         </VStack>
//       </Collapse>
//     </Box>
//   );
// };

// export default DocumentViewPage;


// version 6 - Enhancement to 4

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Spinner,
//   Divider,
//   Button,
//   Collapse,
//   useDisclosure,
//   useColorModeValue,
//   Flex,
//   IconButton,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
// } from '@chakra-ui/react';
// import { HamburgerIcon } from '@chakra-ui/icons';
// import axios from 'axios';

// import { useAuth } from '@/contexts/AuthContext';

// export const DocumentViewPage: React.FC = () => {
//   const [documents, setDocuments] = useState<any[]>([]);
//   const [selectedDoc, setSelectedDoc] = useState<any | null>(null);
//   const [loading, setLoading] = useState(false);
//   const { authState } = useAuth();
  
//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`https://admee.in:3003/api/ip/partner/${authState.institute}/documents`);
//         setDocuments(response.data.documents || []);
//       } catch (error) {
//         console.error('Error fetching documents:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDocuments();
//   }, [authState.institute]);

//   // Group documents by subject
//   const groupedBySubject = documents.reduce((acc, doc) => {
//     const subject = doc.subject || 'Others';
//     if (!acc[subject]) acc[subject] = [];
//     acc[subject].push(doc);
//     return acc;
//   }, {});

//   // Drawer for mobile view
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const renderDocumentContent = (doc: any) => {
//     const fileExtension = doc.document_url.split('.').pop()?.toLowerCase();

//     if (fileExtension === 'pdf') {
//       return (
//         <iframe
//           src={doc.document_url}
//           width="100%"
//           height="500px"
//           style={{ border: 'none', borderRadius: '8px' }}
//           title={doc.name}
//         />
//       );
//     } else if (fileExtension === 'docx') {
//       // Use Google Docs Viewer for Word documents
//       const googleDocsViewerUrl = `https://docs.google.com/gview?url=${doc.document_url}&embedded=true`;
//       return (
//         <iframe
//           src={googleDocsViewerUrl}
//           width="100%"
//           height="500px"
//           style={{ border: 'none', borderRadius: '8px' }}
//           title={doc.name}
//         />
//       );
//     } else {
//       return <Text>No preview available for this document type.</Text>;
//     }
//   };

//   return (
//     <Flex
//       bgGradient="linear(to-br, purple.500, yellow.400)"
//       minH="100vh"
//       p={6}
//       direction={['column', 'row']}
//     >
//       {/* Left Sidebar - Subjects */}
//       <Box
//         w={['100%', '30%']}
//         bg={useColorModeValue('white', 'gray.800')}
//         p={4}
//         borderRadius="md"
//         shadow="lg"
//         overflowY="auto"
//         display={['none', 'flex']}
//         flexDirection="column"
//       >
//         <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600" textAlign="center">
//           Document Topics
//         </Text>
//         <Divider mb={4} />
//         {loading ? (
//           <Spinner size="xl" />
//         ) : (
//           <VStack align="stretch" spacing={4}>
//             {Object.keys(groupedBySubject).map((subject) => (
//               <SubjectSection
//                 key={subject}
//                 subject={subject}
//                 documents={groupedBySubject[subject]}
//                 onDocumentClick={(doc) => {
//                   setSelectedDoc(doc);
//                   onClose();  // Close the menu when a document is selected
//                 }}
//               />
//             ))}
//           </VStack>
//         )}
//       </Box>

//       {/* Mobile Drawer for Sidebar */}
//       <IconButton
//         aria-label="Open Menu"
//         icon={<HamburgerIcon />}
//         onClick={onOpen}
//         display={['block', 'none']}
//         position="absolute"
//         top="20px"
//         left="20px"
//         zIndex="1"
//         bg="purple.500"
//         color="white"
//         _hover={{ bg: 'purple.400' }}
//       />

//       <Drawer
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         size="full"  // Full-width drawer on mobile
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Document Topics</DrawerHeader>
//           <DrawerBody>
//             {loading ? (
//               <Spinner size="xl" />
//             ) : (
//               <VStack align="stretch" spacing={4}>
//                 {Object.keys(groupedBySubject).map((subject) => (
//                   <SubjectSection
//                     key={subject}
//                     subject={subject}
//                     documents={groupedBySubject[subject]}
//                     onDocumentClick={(doc) => {
//                       setSelectedDoc(doc);
//                       onClose();  // Close the menu on selection
//                     }}
//                   />
//                 ))}
//               </VStack>
//             )}
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>

//       {/* Right Document Viewer */}
//       <Box
//         w={['100%', '70%']}
//         ml={[0, 4]}
//         bg={useColorModeValue('white', 'gray.800')}
//         p={6}
//         borderRadius="md"
//         shadow="lg"
//         overflow="auto"
//         display="flex"
//         justifyContent="flex-start"
//         alignItems="flex-start"
//         flexDirection="column"
//       >
//         {selectedDoc ? (
//           <Box w="full" h="full">
//             <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600">
//               {selectedDoc.name}
//             </Text>
//             {renderDocumentContent(selectedDoc)}
//           </Box>
//         ) : (
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             height="100%"
//             color="gray.500"
//             fontSize="xl"
//           >
//             <Text>Select a document from the left to view</Text>
//           </Box>
//         )}
//       </Box>
//     </Flex>
//   );
// };

// // Component to render each subject with its documents
// const SubjectSection: React.FC<any> = ({ subject, documents, onDocumentClick }) => {
//   return (
//     <Box>
//       <HStack justify="flex-start" cursor="pointer" p={2} borderRadius="md">
//         <Text fontWeight="bold" color="purple.600" pl={4}>
//           {subject}
//         </Text>
//       </HStack>
//       <VStack align="stretch" spacing={2} pl={6}>
//         {documents.map((doc) => (
//           <Button
//             key={doc.id}
//             variant="link"
//             color="yellow.400"
//             onClick={() => onDocumentClick(doc)}
//             _hover={{ textDecoration: 'underline' }}
//           >
//             {doc.name}
//           </Button>
//         ))}
//       </VStack>
//     </Box>
//   );
// };

// export default DocumentViewPage;


// version 7 : enhancement to 6

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Spinner,
//   Divider,
//   Button,
//   Collapse,
//   useDisclosure,
//   useColorModeValue,
//   Flex,
//   IconButton,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useBreakpointValue,
// } from '@chakra-ui/react';
// import { HamburgerIcon } from '@chakra-ui/icons';
// import axios from 'axios';

// import { useAuth } from '@/contexts/AuthContext';

// export const DocumentViewPage: React.FC = () => {
//   const [documents, setDocuments] = useState<any[]>([]);
//   const [selectedDoc, setSelectedDoc] = useState<any | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);
//   const { authState } = useAuth();

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`https://admee.in:3003/api/ip/partner/${authState.institute}/documents`);
//         setDocuments(response.data.documents || []);
//       } catch (error) {
//         console.error('Error fetching documents:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDocuments();
//   }, [authState.institute]);

//   // Group documents by subject
//   const groupedBySubject = documents.reduce((acc, doc) => {
//     const subject = doc.subject || 'Others';
//     if (!acc[subject]) acc[subject] = [];
//     acc[subject].push(doc);
//     return acc;
//   }, {});

//   // Drawer for mobile view
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   // Toggle subject expansion
//   const toggleSubject = (subject: string) => {
//     setExpandedSubjects(prev => 
//       prev.includes(subject) ? prev.filter(s => s !== subject) : [...prev, subject]
//     );
//   };

//   const renderDocumentContent = (doc: any) => {
//     const fileExtension = doc.document_url.split('.').pop()?.toLowerCase();

//     if (fileExtension === 'pdf') {
//       return (
//         <iframe
//           src={doc.document_url}
//           width="100%"
//           height="500px"
//           style={{ border: 'none', borderRadius: '8px' }}
//           title={doc.name}
//         />
//       );
//     } else if (fileExtension === 'docx') {
//       // Use Google Docs Viewer for Word documents
//       const googleDocsViewerUrl = `https://docs.google.com/gview?url=${doc.document_url}&embedded=true`;
//       return (
//         <iframe
//           src={googleDocsViewerUrl}
//           width="100%"
//           height="500px"
//           style={{ border: 'none', borderRadius: '8px' }}
//           title={doc.name}
//         />
//       );
//     } else {
//       return <Text>No preview available for this document type.</Text>;
//     }
//   };

//   return (
//     <Flex
//       bgGradient="linear(to-br, purple.500, yellow.400)"
//       minH="100vh"
//       p={6}
//       direction={['column', 'row']}
//     >
//       {/* Left Sidebar - Subjects */}
//       <Box
//         w={['100%', '30%']}
//         bg={useColorModeValue('white', 'gray.800')}
//         p={4}
//         borderRadius="md"
//         shadow="lg"
//         overflowY="auto"
//         display={['none', 'flex']}
//         flexDirection="column"
//       >
//         <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600" textAlign="left">
//           Document Topics
//         </Text>
//         <Divider mb={4} />
//         {loading ? (
//           <Spinner size="xl" />
//         ) : (
//           <VStack align="stretch" spacing={4}>
//             {Object.keys(groupedBySubject).map((subject) => (
//               <SubjectSection
//                 key={subject}
//                 subject={subject}
//                 documents={groupedBySubject[subject]}
//                 expanded={expandedSubjects.includes(subject)}
//                 onSubjectClick={() => toggleSubject(subject)}
//                 onDocumentClick={(doc) => {
//                   setSelectedDoc(doc);
//                   onClose();  // Close the menu when a document is selected
//                 }}
//               />
//             ))}
//           </VStack>
//         )}
//       </Box>

//       {/* Mobile Drawer for Sidebar */}
//       <IconButton
//         aria-label="Open Menu"
//         icon={<HamburgerIcon />}
//         onClick={onOpen}
//         display={['block', 'none']}
//         position="absolute"
//         top="20px"
//         left="20px"
//         zIndex="1"
//         bg="purple.500"
//         color="white"
//         _hover={{ bg: 'purple.400' }}
//       />

//       <Drawer
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         size="full"  // Full-width drawer on mobile
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Document Topics</DrawerHeader>
//           <DrawerBody>
//             {loading ? (
//               <Spinner size="xl" />
//             ) : (
//               <VStack align="stretch" spacing={4}>
//                 {Object.keys(groupedBySubject).map((subject) => (
//                   <SubjectSection
//                     key={subject}
//                     subject={subject}
//                     documents={groupedBySubject[subject]}
//                     expanded={expandedSubjects.includes(subject)}
//                     onSubjectClick={() => toggleSubject(subject)}
//                     onDocumentClick={(doc) => {
//                       setSelectedDoc(doc);
//                       onClose();  // Close the menu on selection
//                     }}
//                   />
//                 ))}
//               </VStack>
//             )}
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>

//       {/* Right Document Viewer */}
//       <Box
//         w={['100%', '70%']}
//         ml={[0, 4]}
//         bg={useColorModeValue('white', 'gray.800')}
//         p={6}
//         borderRadius="md"
//         shadow="lg"
//         overflow="auto"
//         display="flex"
//         justifyContent="flex-start"
//         alignItems="flex-start"
//         flexDirection="column"
//       >
//         {selectedDoc ? (
//           <Box w="full" h="full">
//             <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600">
//               {selectedDoc.name}
//             </Text>
//             {renderDocumentContent(selectedDoc)}
//           </Box>
//         ) : (
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             height="100%"
//             color="gray.500"
//             fontSize="xl"
//           >
//             <Text>Select a document from the left to view</Text>
//           </Box>
//         )}
//       </Box>
//     </Flex>
//   );
// };

// // Component to render each subject with its documents
// const SubjectSection: React.FC<any> = ({ subject, documents, expanded, onSubjectClick, onDocumentClick }) => {
//   return (
//     <Box>
//       <HStack justify="flex-start" cursor="pointer" p={2} borderRadius="md" onClick={onSubjectClick}>
//         <Text fontWeight="bold" color="purple.600" pl={4} textAlign="left">
//           {subject}
//         </Text>
//       </HStack>
//       <Collapse in={expanded}>
//         <VStack align="stretch" spacing={2} pl={6}>
//           {documents.map((doc) => (
//             <Button
//               key={doc.id}
//               variant="link"
//               color="yellow.400"
//               onClick={() => onDocumentClick(doc)}
//               _hover={{ textDecoration: 'underline' }}
//             >
//               {doc.name}
//             </Button>
//           ))}
//         </VStack>
//       </Collapse>
//     </Box>
//   );
// };

// export default DocumentViewPage;


// Version 8 : working version, few design glitches

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Spinner,
//   Divider,
//   Button,
//   Collapse,
//   useDisclosure,
//   useColorModeValue,
//   Flex,
//   IconButton,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
 
// } from '@chakra-ui/react';
// import { HamburgerIcon } from '@chakra-ui/icons';
// import axios from 'axios';

// import { useAuth } from '@/contexts/AuthContext';

// export const DocumentViewPage: React.FC = () => {
//   const [documents, setDocuments] = useState<any[]>([]);
//   const [selectedDoc, setSelectedDoc] = useState<any | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);
//   const { authState } = useAuth();

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`https://admee.in:3003/api/ip/partner/${authState.institute}/documents`);
//         setDocuments(response.data.documents || []);
//       } catch (error) {
//         console.error('Error fetching documents:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDocuments();
//   }, [authState.institute]);

//   // Group documents by subject
//   const groupedBySubject = documents.reduce((acc, doc) => {
//     const subject = doc.subject || 'Others';
//     if (!acc[subject]) acc[subject] = [];
//     acc[subject].push(doc);
//     return acc;
//   }, {});

//   // Drawer for mobile view
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   // Toggle subject expansion
//   const toggleSubject = (subject: string) => {
//     setExpandedSubjects(prev => 
//       prev.includes(subject) ? prev.filter(s => s !== subject) : [...prev, subject]
//     );
//   };

//   const renderDocumentContent = (doc: any) => {
//     const fileExtension = doc.document_url.split('.').pop()?.toLowerCase();

//     if (fileExtension === 'pdf') {
//       return (
//         <iframe
//           src={doc.document_url}
//           width="100%"
//           height="500px"
//           style={{ border: 'none', borderRadius: '8px' }}
//           title={doc.name}
//         />
//       );
//     } else if (fileExtension === 'docx') {
//       // Use Google Docs Viewer for Word documents
//       const googleDocsViewerUrl = `https://docs.google.com/gview?url=${doc.document_url}&embedded=true`;
//       return (
//         <iframe
//           src={googleDocsViewerUrl}
//           width="100%"
//           height="500px"
//           style={{ border: 'none', borderRadius: '8px' }}
//           title={doc.name}
//         />
//       );
//     } else {
//       return <Text>No preview available for this document type.</Text>;
//     }
//   };

//   return (
//     <Flex
//       bgGradient="linear(to-br, purple.500, yellow.400)"
//       minH="100vh"
//       p={6}
//       direction={['column', 'row']}
//     >
//       {/* Left Sidebar - Subjects */}
//       <Box
//         w={['100%', '25%']}  // Shrinking width for larger screens
//         bg={useColorModeValue('white', 'gray.800')}
//         p={4}
//         borderRadius="md"
//         shadow="lg"
//         overflowY="auto"
//         display={['none', 'flex']}
//         flexDirection="column"
//       >
//         <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600" textAlign="left">
//           Document Topics
//         </Text>
//         <Divider mb={4} />
//         {loading ? (
//           <Spinner size="xl" />
//         ) : (
//           <VStack align="stretch" spacing={4}>
//             {Object.keys(groupedBySubject).map((subject) => (
//               <SubjectSection
//                 key={subject}
//                 subject={subject}
//                 documents={groupedBySubject[subject]}
//                 expanded={expandedSubjects.includes(subject)}
//                 onSubjectClick={() => toggleSubject(subject)}
//                 onDocumentClick={(doc) => {
//                   setSelectedDoc(doc);
//                   onClose();  // Close the menu when a document is selected
//                 }}
//               />
//             ))}
//           </VStack>
//         )}
//       </Box>

//       {/* Mobile Drawer for Sidebar */}
//       <IconButton
//         aria-label="Open Menu"
//         icon={<HamburgerIcon />}
//         onClick={onOpen}
//         display={['block', 'none']}
//         position="absolute"
//         top="20px"
//         left="20px"
//         zIndex="1"
//         bg="purple.500"
//         color="white"
//         _hover={{ bg: 'purple.400' }}
//       />

//       <Drawer
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         size="full"  // Full-width drawer on mobile
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Document Topics</DrawerHeader>
//           <DrawerBody>
//             {loading ? (
//               <Spinner size="xl" />
//             ) : (
//               <VStack align="stretch" spacing={4}>
//                 {Object.keys(groupedBySubject).map((subject) => (
//                   <SubjectSection
//                     key={subject}
//                     subject={subject}
//                     documents={groupedBySubject[subject]}
//                     expanded={expandedSubjects.includes(subject)}
//                     onSubjectClick={() => toggleSubject(subject)}
//                     onDocumentClick={(doc) => {
//                       setSelectedDoc(doc);
//                       onClose();  // Close the menu on selection
//                     }}
//                   />
//                 ))}
//               </VStack>
//             )}
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>

//       {/* Right Document Viewer */}
//       <Box
//         w={['100%', '75%']}  // Shrink the content display section for larger screens
//         ml={[0, 4]}
//         bg={useColorModeValue('white', 'gray.800')}
//         p={6}
//         borderRadius="md"
//         shadow="lg"
//         overflow="auto"
//         display="flex"
//         justifyContent="flex-start"
//         alignItems="flex-start"
//         flexDirection="column"
//       >
//         {selectedDoc ? (
//           <Box w="full" h="full">
//             <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600">
//               {selectedDoc.name}
//             </Text>
//             {renderDocumentContent(selectedDoc)}
//           </Box>
//         ) : (
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             height="100%"
//             color="gray.500"
//             fontSize="xl"
//           >
//             <Text>Select a document from the left to view</Text>
//           </Box>
//         )}
//       </Box>
//     </Flex>
//   );
// };

// // Component to render each subject with its documents
// const SubjectSection: React.FC<any> = ({ subject, documents, expanded, onSubjectClick, onDocumentClick }) => {
//   return (
//     <Box>
//       <HStack justify="flex-start" cursor="pointer" p={2} borderRadius="md" onClick={onSubjectClick}>
//         <Text fontWeight="bold" color="purple.600" pl={4} textAlign="left">
//           {subject}
//         </Text>
//       </HStack>
//       <Collapse in={expanded}>
//         <VStack align="stretch" spacing={2} pl={6} >
//           {documents.map((doc) => (
//             <Button
//               key={doc.id}
//               variant="link"
//               color="yellow.400"
//               onClick={() => onDocumentClick(doc)}
//               _hover={{ textDecoration: 'underline' }}
//               textAlign="left"  // Ensure the content name is left-aligned
//               alignSelf="flex-start"
//             >
//               {doc.name}
//             </Button>
//           ))}
//         </VStack>
//       </Collapse>
//     </Box>
//   );
// };

// export default DocumentViewPage;


// Version 9 : Enhancement of version 8

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Spinner,
//   Divider,
//   Button,
//   Collapse,
//   useDisclosure,
//   useColorModeValue,
//   Flex,
//   IconButton,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
 
// } from '@chakra-ui/react';
// import { HamburgerIcon } from '@chakra-ui/icons';
// import axios from 'axios';

// import { useAuth } from '@/contexts/AuthContext';


// export const DocumentViewPage: React.FC = () => {
//   const [documents, setDocuments] = useState<any[]>([]);
//   const [selectedDoc, setSelectedDoc] = useState<any | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);
//   const { authState } = useAuth();

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`https://admee.in:3003/api/ip/partner/${authState.institute}/documents`);
//         setDocuments(response.data.documents || []);
//       } catch (error) {
//         console.error('Error fetching documents:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDocuments();
//   }, [authState.institute]);

//   // Group documents by subject
//   const groupedBySubject = documents.reduce((acc, doc) => {
//     const subject = doc.subject || 'Others';
//     if (!acc[subject]) acc[subject] = [];
//     acc[subject].push(doc);
//     return acc;
//   }, {});

//   // Drawer for mobile view
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   // Toggle subject expansion
//   const toggleSubject = (subject: string) => {
//     setExpandedSubjects(prev => 
//       prev.includes(subject) ? prev.filter(s => s !== subject) : [...prev, subject]
//     );
//   };

//   const renderDocumentContent = (doc: any) => {
//     const fileExtension = doc.document_url.split('.').pop()?.toLowerCase();

//     if (fileExtension === 'pdf') {
//       return (
//         <iframe
//           src={doc.document_url}
//           width="100%"
//           height="500px"
//           style={{ border: 'none', borderRadius: '8px' }}
//           title={doc.name}
//         />
//       );
//     } else if (fileExtension === 'docx') {
//       // Use Google Docs Viewer for Word documents
//       const googleDocsViewerUrl = `https://docs.google.com/gview?url=${doc.document_url}&embedded=true`;
//       return (
//         <iframe
//           src={googleDocsViewerUrl}
//           width="100%"
//           height="500px"
//           style={{ border: 'none', borderRadius: '8px' }}
//           title={doc.name}
//         />
//       );
//     } else {
//       return <Text>No preview available for this document type.</Text>;
//     }
//   };

//   return (
//     <Flex
//       bgGradient="linear(to-br, purple.500, yellow.400)"
//       minH="100vh"
//       p={6}
//       direction={['column', 'row']}
//     >
//       {/* Left Sidebar - Subjects */}
//       <Box
//         w={['100%', '25%']}  // Shrinking width for larger screens
//         bg={useColorModeValue('white', 'gray.800')}
//         p={4}
//         borderRadius="md"
//         shadow="lg"
//         overflowY="auto"
//         display={['none', 'flex']}
//         flexDirection="column"
//       >
//         <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600" textAlign="left">
//           Document Topics
//         </Text>
//         <Divider mb={4} />
//         {loading ? (
//           <Spinner size="xl" />
//         ) : (
//           <VStack align="stretch" spacing={4}>
//             {Object.keys(groupedBySubject).map((subject) => (
//               <SubjectSection
//                 key={subject}
//                 subject={subject}
//                 documents={groupedBySubject[subject]}
//                 expanded={expandedSubjects.includes(subject)}
//                 onSubjectClick={() => toggleSubject(subject)}
//                 onDocumentClick={(doc : any) => {
//                   setSelectedDoc(doc);
//                   onClose();  // Close the menu when a document is selected
//                 }}
//               />
//             ))}
//           </VStack>
//         )}
//       </Box>

//       {/* Mobile Drawer for Sidebar */}
//       <IconButton
//         aria-label="Open Menu"
//         icon={<HamburgerIcon />}
//         onClick={onOpen}
//         display={['block', 'none']}
//         position="absolute"
//         top="20px"
//         left="20px"
//         zIndex="1"
//         bg="purple.500"
//         color="white"
//         _hover={{ bg: 'purple.400' }}
//       />

//       <Drawer
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         size="full"  // Full-width drawer on mobile
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Document Topics</DrawerHeader>
//           <DrawerBody>
//             {loading ? (
//               <Spinner size="xl" />
//             ) : (
//               <VStack align="stretch" spacing={4}>
//                 {Object.keys(groupedBySubject).map((subject) => (
//                   <SubjectSection
//                     key={subject}
//                     subject={subject}
//                     documents={groupedBySubject[subject]}
//                     expanded={expandedSubjects.includes(subject)}
//                     onSubjectClick={() => toggleSubject(subject)}
//                     onDocumentClick={(doc : any) => {
//                       setSelectedDoc(doc);
//                       onClose();  // Close the menu on selection
//                     }}
//                   />
//                 ))}
//               </VStack>
//             )}
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>

//       {/* Right Document Viewer */}
//       <Box
//         w={['100%', '75%']}  // Shrink the content display section for larger screens
//         ml={[0, 4]}
//         bg={useColorModeValue('white', 'gray.800')}
//         p={6}
//         borderRadius="md"
//         shadow="lg"
//         overflow="auto"
//         display="flex"
//         justifyContent="flex-start"
//         alignItems="flex-start"
//         flexDirection="column"
//       >
//         {selectedDoc ? (
//           <Box w="full" h="full">
//             <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600">
//               {selectedDoc.name}
//             </Text>
//             {renderDocumentContent(selectedDoc)}
//           </Box>
//         ) : (
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             height="100%"
//             color="gray.500"
//             fontSize="xl"
//           >
//             <Text>Select a document from the left to view</Text>
//           </Box>
//         )}
//       </Box>
//     </Flex>
//   );
// };

// // Component to render each subject with its documents
// const SubjectSection: React.FC<any> = ({ subject, documents, expanded, onSubjectClick, onDocumentClick }) => {
//   return (
//     <Box>
//       <HStack justify="flex-start" cursor="pointer" p={2} borderRadius="md" onClick={onSubjectClick}>
//         <Text fontWeight="bold" color="purple.600" pl={4} textAlign="left">
//           {subject}
//         </Text>
//       </HStack>
//       <Collapse in={expanded}>
//         <VStack align="stretch" spacing={2} pl={6} >
//           {documents.map((doc : any) => (
//             <Button
//               key={doc.id}
//               variant="link"
//               color="yellow.400"
//               onClick={() => onDocumentClick(doc)}
//               _hover={{ textDecoration: 'underline' }}
//               textAlign="left"  // Ensure the content name is left-aligned
//               alignSelf="flex-start"
//             >
//               {doc.name}
//             </Button>
//           ))}
//         </VStack>
//       </Collapse>
//     </Box>
//   );
// };

// export default DocumentViewPage;


// Version 10 , Enhancement to 9


import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Spinner,
  Divider,
  Button,
  Collapse,
  useDisclosure,
  useColorModeValue,
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
 
} from '@chakra-ui/react';
//import { HamburgerIcon } from '@chakra-ui/icons';
import { SearchIcon } from '@chakra-ui/icons';
import axios from 'axios';

import { useAuth } from '@/contexts/AuthContext';


export const DocumentViewPage: React.FC = () => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);
  const { authState } = useAuth();

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://admee.in:3003/api/ip/partner/${authState.institute}/documents`);
        setDocuments(response.data.documents || []);
      } catch (error) {
        console.error('Error fetching documents:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDocuments();
  }, [authState.institute]);

  

  // Group documents by subject
  const groupedBySubject = documents.reduce((acc, doc) => {
    const subject = doc.subject || 'Others';
    if (!acc[subject]) acc[subject] = [];
    acc[subject].push(doc);
    return acc;
  }, {});

  // Drawer for mobile view
  const { isOpen, onOpen, onClose } = useDisclosure();


  useEffect(() => {
    console.log("Drawer state (isOpen):", isOpen);
  }, [isOpen]);

  const handleOpen = () => {
    console.log("onOpen called");
    onOpen();
  };
  

  // Toggle subject expansion
  const toggleSubject = (subject: string) => {
    console.log("Inside Toggle Subject")
    setExpandedSubjects(prev => 
      prev.includes(subject) ? prev.filter(s => s !== subject) : [...prev, subject]
    );
  };

  const renderDocumentContent = (doc: any) => {
    const fileExtension = doc.document_url.split('.').pop()?.toLowerCase();
    console.log("inside Render docs")
   
   

    if (fileExtension === 'pdf') {
      return (
        <iframe
          src={doc.document_url}
          width="100%"
          height="500px"
          style={{ border: 'none', borderRadius: '8px' }}
          title={doc.name}
        />
      );
    } else if (fileExtension === 'docx') {
      // Use Google Docs Viewer for Word documents
      const googleDocsViewerUrl = `https://docs.google.com/gview?url=${doc.document_url}&embedded=true`;
      return (
        // <iframe
        //   src={googleDocsViewerUrl}
        //   width="100%"
        //    height="500px"
        //   height="500"
        //   style={{ border: 'none', borderRadius: '8px' }}
        //   title={doc.name}
        // />
        <Box width="100%" height={{ base: "500px", md: "75vh", lg: "75vh" }} borderRadius="8px">
        <iframe
          src={googleDocsViewerUrl}
          width="100%"
          height="100%" // Let the height be 100% of the parent Box
          style={{ border: 'none' }}
          title={doc.name}
        />
        </Box>

      );
    } else {
      return <Text>No preview available for this document type.</Text>;
    }
  };

  return (
    <Flex
      bgGradient="linear(to-br, purple.500, yellow.400)"
      minH="100vh"
      p={6}
      direction={['column', 'row']}
    >
      {/* Left Sidebar - Subjects */}
      <Box
        w={['100%', '25%']}  // Shrinking width for larger screens
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        borderRadius="md"
        shadow="lg"
        overflowY="auto"
        display={['none', 'flex']}
        flexDirection="column"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600" textAlign="left">
          Document Topics
        </Text>
        <Divider mb={4} />
        {loading ? (
          <Spinner size="xl" />
        ) : (
          <VStack align="stretch" spacing={4}>
            {Object.keys(groupedBySubject).map((subject) => (
              <SubjectSection
                key={subject}
                subject={subject}
                documents={groupedBySubject[subject]}
                expanded={expandedSubjects.includes(subject)}
                onSubjectClick={() => toggleSubject(subject)}
                onDocumentClick={(doc : any) => {
                  console.log("Inside Document Click");
                  setSelectedDoc(doc);
                  onClose();  // Close the menu when a document is selected
                }}
              />
            ))}
          </VStack>
        )}
      </Box>

      {/* Mobile Drawer for Sidebar */}
      <IconButton
        aria-label="Open Menu"
        icon={<SearchIcon />}
        onClick={handleOpen}
        display={['block', 'none']}
        position="absolute"
        top="13px"
        left="70px"
        bg="purple.500"
        color="white"
        zIndex="popover"
        
        _hover={{ bg: 'purple.400' }}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="full"  // Full-width drawer on mobile
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Document Topics</DrawerHeader>
          <DrawerBody>
            {loading ? (
              <Spinner size="xl" />
            ) : (
              <VStack align="stretch" spacing={4}>
                {Object.keys(groupedBySubject).map((subject) => (
                  <SubjectSection
                    key={subject}
                    subject={subject}
                    documents={groupedBySubject[subject]}
                    expanded={expandedSubjects.includes(subject)}
                    onSubjectClick={() => toggleSubject(subject)}
                    onDocumentClick={(doc : any) => {
                      onClose(); 
                      setSelectedDoc(doc);
                       // Close the menu on selection
                    }}
                  />
                ))}
              </VStack>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Right Document Viewer */}
      <Box
        w={['100%', '75%']}  // Shrink the content display section for larger screens
        ml={[0, 4]}
        bg={useColorModeValue('white', 'gray.800')}
        p={6}
        borderRadius="md"
        shadow="lg"
        overflow="auto"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexDirection="column"
      >
        {selectedDoc ? (
          <Box w="full" h="full">
            <Text fontSize="2xl" fontWeight="bold" mb={4} color="purple.600">
              {selectedDoc.name}
            </Text>
            {renderDocumentContent(selectedDoc)}
          </Box>
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            color="gray.500"
            fontSize="xl"
          >
            <Text>Select a document from the left to view</Text>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

// Component to render each subject with its documents
const SubjectSection: React.FC<any> = ({ subject, documents, expanded, onSubjectClick, onDocumentClick }) => {
  return (
    <Box>
      <HStack justify="flex-start" cursor="pointer" p={2} borderRadius="md" onClick={onSubjectClick}>
        <Text fontWeight="bold" color="purple.600" pl={4} textAlign="left">
          {subject}
        </Text>
      </HStack>
      <Collapse in={expanded}>
        <VStack align="stretch" spacing={2} pl={6} >
          {documents.map((doc : any) => (
            <Button
              key={doc.id}
              variant="link"
              color="yellow.400"
              onClick={() => onDocumentClick(doc)}
              _hover={{ textDecoration: 'underline' }}
              textAlign="left"  // Ensure the content name is left-aligned
              alignSelf="flex-start"
            >
              {doc.name}
            </Button>
          ))}
        </VStack>
      </Collapse>
    </Box>
  );
};

export default DocumentViewPage;






