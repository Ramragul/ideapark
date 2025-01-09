// Verson 1 : state updates are not working fine

// import React, { useState } from 'react';
// import { 
//   Box, Button, FormControl, FormLabel, Input, Heading, VStack, Text 
// } from '@chakra-ui/react';

// import usePostData from '../hooks/usePostData';

// export const ResetPasswordPage: React.FC = () => {
//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [stage, setStage] = useState(1); // 1: Enter mobile, 2: Enter OTP, 3: Reset password
//  // const { postData, isLoading, error } = usePostData();
//   const { postData: sendOtp,responseData:sendOtpRespone, isLoading: isSending } = usePostData('/api/ip/reset/password/send-otp');
//   const { postData: verifyOtp , responseData: verifyOtpResponse,isLoading: isVerification } = usePostData('/api/ip/reset/password/verify-otp');
//   const { postData: resetPassword ,responseData : resetPasswordResponse,  isLoading: isResetting,error } = usePostData('/api/ip/reset/password');

//   const handleSendOtp = async () => {
//    await sendOtp({'mobile' : mobile });
//     if (sendOtpRespone?.status === 200) setStage(2);
//   };

//   const handleVerifyOtp = async () => {
//    await verifyOtp( {'mobile': mobile, 'otp': otp });
//     if (verifyOtpResponse?.status === 200) setStage(3);
//   };

//   const handleResetPassword = async () => {
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     await resetPassword({ 'mobile':mobile, 'password': password });
//     if (resetPasswordResponse?.status === 200) alert("Password reset successfully!");
//   };

//   return (
//     <Box maxW="md" mx="auto" mt="10" p="5" borderWidth="1px" borderRadius="lg" boxShadow="lg">
//       <Heading mb="6" textAlign="center" color="purple.500">
//         Reset Password
//       </Heading>
//       <VStack spacing="4">
//         {stage === 1 && (
//           <>
//             <FormControl id="mobile" isRequired>
//               <FormLabel>Mobile Number</FormLabel>
//               <Input
//                 type="text"
//                 placeholder="Enter your mobile number"
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//               />
//             </FormControl>
//             <Button
//               colorScheme="purple"
//               width="full"
//               onClick={handleSendOtp}
//               isLoading={isSending}
//             >
//               Send OTP
//             </Button>
//           </>
//         )}

//         {stage === 2 && (
//           <>
//             <FormControl id="otp" isRequired>
//               <FormLabel>OTP</FormLabel>
//               <Input
//                 type="text"
//                 placeholder="Enter OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//               />
//             </FormControl>
//             <Button
//               colorScheme="purple"
//               width="full"
//               onClick={handleVerifyOtp}
//               isLoading={isVerification}
//             >
//               Verify OTP
//             </Button>
//           </>
//         )}

//         {stage === 3 && (
//           <>
//             <FormControl id="password" isRequired>
//               <FormLabel>New Password</FormLabel>
//               <Input
//                 type="password"
//                 placeholder="Enter new password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormControl>
//             <FormControl id="confirmPassword" isRequired>
//               <FormLabel>Confirm Password</FormLabel>
//               <Input
//                 type="password"
//                 placeholder="Confirm new password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </FormControl>
//             <Button
//               colorScheme="purple"
//               width="full"
//               onClick={handleResetPassword}
//               isLoading={isResetting}
//             >
//               Reset Password
//             </Button>
//           </>
//         )}
//       </VStack>
//       {error && <Text color="red.500">{error}</Text>}
//     </Box>
//   );
// };

// export default ResetPasswordPage;


// Version 2 :

// import React, { useState, useEffect } from 'react';
// import { Box, Button, FormControl, FormLabel, Input, Heading, VStack, Text } from '@chakra-ui/react';
// import usePostData from '../hooks/usePostData';

// import { useNavigate } from 'react-router-dom';

// import successAnimation from '../animations/success.json';
// import errorAnimation from '../animations/error.json';
// import loadingAnimation from '../animations/loading.json';
// import Lottie from 'lottie-react';

// export const ResetPasswordPage: React.FC = () => {
//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [stage, setStage] = useState(1); // 1: Enter mobile, 2: Enter OTP, 3: Reset password
//   const { postData: sendOtp, responseData: sendOtpRespone, isLoading: isSending } = usePostData('/api/ip/reset/password/send-otp');
//   const { postData: verifyOtp, responseData: verifyOtpResponse, isLoading: isVerification } = usePostData('/api/ip/reset/password/verify-otp');
//   const { postData: resetPassword, responseData: resetPasswordResponse, isLoading: isResetting, error } = usePostData('/api/ip/reset/password');


//   const [loading, setLoading] = useState<boolean>(true);
//   const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);
//   const [showAnimation, setShowAnimation] = useState(false);

//   const navigate = useNavigate ();


//   useEffect(() => {
//     // Transition to stage 2 if OTP is successfully sent
//     if (sendOtpRespone?.status === 200) {
//         alert("Otp has been sent to your mail, Please check and enter the otp")
//       setStage(2);
     
//     }
//     else if (verifyOtpResponse?.status === 500) {
//         alert("We are facing an internal server issue, please try again later")
//     }

//   }, [sendOtpRespone]);

//   useEffect(() => {
//     // Transition to stage 3 if OTP is successfully verified
//     if (verifyOtpResponse?.status === 200) {
//         alert("Otp has been Verified Successfully")
//       setStage(3);
//     }

//     else if (verifyOtpResponse?.status === 401) {
//         alert("Invalid otp !! Please enter the valid otp")
//     }
//     else if (verifyOtpResponse?.status === 500) {
//         alert("We are facing an internal server issue, please try again later")
//     }

//   }, [verifyOtpResponse]);

//   useEffect(() => {
//     // Show success message after password reset
//     if (resetPasswordResponse?.status === 200) {
//         setAnimationType('success');
//         setTimeout(() => {
//           navigate('/login'); // Navigate to home page after 3 seconds
//         }, 3000);
//       } else if (resetPasswordResponse?.status == 500) {
//         setShowAnimation(false)
//   alert("Error occured during reset,please try again")
//       }
//       else if (resetPasswordResponse?.status != 404) {
//         setShowAnimation(false)
//   alert("Error occured during reset,please try again")
//       }
//   }, [resetPasswordResponse]);

//   const handleSendOtp = async () => {
   
//     //setAnimationType('loading');
//     await sendOtp({ 'mobile': mobile });
    
//   };

//   const handleVerifyOtp = async () => {
//     //setAnimationType('loading');
//     await verifyOtp({ 'mobile': mobile, 'otp': otp });
//   };

//   const handleResetPassword = async () => {
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     setShowAnimation(true);
//     setAnimationType('loading');
//     await resetPassword({ 'mobile': mobile, 'password': password });
//   };

//   return (
//     <Box maxW="md" mx="auto" mt="10" p="5" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      
//       {showAnimation && (
      
//       <Box
//         position="fixed"
//         top="50%"
//         left="50%"
//         transform="translate(-50%, -50%)"
//         zIndex="1000"
//         bg="rgba(0, 0, 0, 0.5)" // Optional: To dim the background
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         width="100vw"
//         height="100vh"
//       >
//         {animationType === 'loading' && (
//           <Lottie
//             animationData={loadingAnimation}
//             loop={false}
//             autoplay={true}
//             style={{ width: '150px', height: '150px' }}
//           />
//         )}
//         {animationType === 'success' && (
//           <Box textAlign="center">
//             <Lottie
//               animationData={successAnimation}
//               loop={false}
//               autoplay={true}
//               // style={{ width: '150px', height: '150px' }}
//             />
//             <Text mt={4} fontSize="lg" color="white">
//               Password has been resetted successfully.
             
//             </Text>
//           </Box>
//         )}
//         {animationType === 'error' && (
//           <Box textAlign="center">
//             <Lottie
//               animationData={errorAnimation}
//               loop={false}
//               autoplay={true}
//               // style={{ width: '150px', height: '150px' }}
//             />
//             <Text mt={4} fontSize="lg" color="white">
//               {error || "An error occurred, please try again."}
//             </Text>
//           </Box>
//         )}
//       </Box>
    
//     )}

//    {!showAnimation &&
//    <>
//       <Heading mb="6" textAlign="center" color="purple.500">
//         Reset Password
//       </Heading>
//       <VStack spacing="4">
//         {stage === 1 && (
//           <>
//             <FormControl id="mobile" isRequired>
//               <FormLabel>Mobile Number</FormLabel>
//               <Input
//                 type="text"
//                 placeholder="Enter your mobile number"
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//               />
//             </FormControl>
//             <Button
//               colorScheme="purple"
//               width="full"
//               onClick={handleSendOtp}
//               isLoading={isSending}
//             >
//               Send OTP
//             </Button>
//           </>
//         )}

//         {stage === 2 && (
//           <>
//             <FormControl id="otp" isRequired>
//               <FormLabel>OTP</FormLabel>
//               <Input
//                 type="text"
//                 placeholder="Enter OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//               />
//             </FormControl>
//             <Button
//               colorScheme="purple"
//               width="full"
//               onClick={handleVerifyOtp}
//               isLoading={isVerification}
//             >
//               Verify OTP
//             </Button>
//           </>
//         )}

//         {stage === 3 && (
//           <>
//             <FormControl id="password" isRequired>
//               <FormLabel>New Password</FormLabel>
//               <Input
//                 type="password"
//                 placeholder="Enter new password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormControl>
//             <FormControl id="confirmPassword" isRequired>
//               <FormLabel>Confirm Password</FormLabel>
//               <Input
//                 type="password"
//                 placeholder="Confirm new password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </FormControl>
//             <Button
//               colorScheme="purple"
//               width="full"
//               onClick={handleResetPassword}
//               isLoading={isResetting}
//             >
//               Reset Password
//             </Button>
//           </>
//         )}
//       </VStack>
//       {error && <Text color="red.500">{error}</Text>}
//       </> }
//     </Box>
//   );
// };

// export default ResetPasswordPage;


// Version 3 : 2 is the working version, this version has toast in place of alerts


import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading, VStack, Text } from '@chakra-ui/react';
import usePostData from '../hooks/usePostData';

import { useNavigate } from 'react-router-dom';

import successAnimation from '../animations/success.json';
import errorAnimation from '../animations/error.json';
import loadingAnimation from '../animations/loading.json';
import Lottie from 'lottie-react';
import { useToast } from '@chakra-ui/react';

export const ResetPasswordPage: React.FC = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [stage, setStage] = useState(1); // 1: Enter mobile, 2: Enter OTP, 3: Reset password
  const { postData: sendOtp, responseData: sendOtpResponse, isLoading: isSending } = usePostData('/api/ip/reset/password/send-otp');
  const { postData: verifyOtp, responseData: verifyOtpResponse, isLoading: isVerification } = usePostData('/api/ip/reset/password/verify-otp');
  const { postData: resetPassword, responseData: resetPasswordResponse, isLoading: isResetting, error } = usePostData('/api/ip/reset/password');


  const [loading, setLoading] = useState<boolean>(true);
  const [animationType, setAnimationType] = useState<'success' | 'error' | 'loading' | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const toast = useToast();


  const navigate = useNavigate ();


  useEffect(() => {
    // Transition to stage 2 if OTP is successfully sent
    if (sendOtpResponse?.status === 200) {
      toast({
        title: "OTP Sent",
        description: "OTP has been sent to your mail. Please check and enter the OTP.",
        status: "info",
        duration: 4000,
        isClosable: true,
      });
      setStage(2);
    } else if (sendOtpResponse?.status === 500) {
      toast({
        title: "Server Error",
        description: "We are facing an internal server issue. Please try again later.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  }, [sendOtpResponse]);

  useEffect(() => {
    // Transition to stage 3 if OTP is successfully verified
    if (verifyOtpResponse?.status === 200) {
      toast({
        title: "OTP Verified",
        description: "OTP has been verified successfully.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setStage(3);
    } else if (verifyOtpResponse?.status === 401) {
      toast({
        title: "Invalid OTP",
        description: "Invalid OTP! Please enter a valid OTP.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
    } else if (verifyOtpResponse?.status === 500) {
      toast({
        title: "Server Error",
        description: "We are facing an internal server issue. Please try again later.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  }, [verifyOtpResponse]);

  useEffect(() => {
    // Show success message after password reset
    if (resetPasswordResponse?.status === 200) {
      setAnimationType('success');
      toast({
        title: "Password Reset Successful",
        description: "Your password has been reset successfully.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate('/login'); // Navigate to home page after 3 seconds
      }, 3000);
    } else if (resetPasswordResponse?.status === 500 || resetPasswordResponse?.status === 404) {
      setShowAnimation(false);
      toast({
        title: "Error",
        description: "An error occurred during the reset. Please try again.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  }, [resetPasswordResponse]);

  const handleSendOtp = async () => {
   
    //setAnimationType('loading');
    await sendOtp({ 'mobile': mobile });
    
  };

  const handleVerifyOtp = async () => {
    //setAnimationType('loading');
    await verifyOtp({ 'mobile': mobile, 'otp': otp });
  };

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setShowAnimation(true);
    setAnimationType('loading');
    await resetPassword({ 'mobile': mobile, 'password': password });
  };

  return (
    <Box maxW="md" mx="auto" mt="10" p="5" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      
      {showAnimation && (
      
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="1000"
        bg="rgba(0, 0, 0, 0.5)" // Optional: To dim the background
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
            loop={false}
            autoplay={true}
            style={{ width: '150px', height: '150px' }}
          />
        )}
        {animationType === 'success' && (
          <Box textAlign="center">
            <Lottie
              animationData={successAnimation}
              loop={false}
              autoplay={true}
              // style={{ width: '150px', height: '150px' }}
            />
            <Text mt={4} fontSize="lg" color="white">
              Password has been resetted successfully.
             
            </Text>
          </Box>
        )}
        {animationType === 'error' && (
          <Box textAlign="center">
            <Lottie
              animationData={errorAnimation}
              loop={false}
              autoplay={true}
              // style={{ width: '150px', height: '150px' }}
            />
            <Text mt={4} fontSize="lg" color="white">
              {error || "An error occurred, please try again."}
            </Text>
          </Box>
        )}
      </Box>
    
    )}

   {!showAnimation &&
   <>
      <Heading mb="6" textAlign="center" color="purple.500">
        Reset Password
      </Heading>
      <VStack spacing="4">
        {stage === 1 && (
          <>
            <FormControl id="mobile" isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                type="text"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </FormControl>
            <Button
              colorScheme="purple"
              width="full"
              onClick={handleSendOtp}
              isLoading={isSending}
            >
              Send OTP
            </Button>
          </>
        )}

        {stage === 2 && (
          <>
            <FormControl id="otp" isRequired>
              <FormLabel>OTP</FormLabel>
              <Input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </FormControl>
            <Button
              colorScheme="purple"
              width="full"
              onClick={handleVerifyOtp}
              isLoading={isVerification}
            >
              Verify OTP
            </Button>
          </>
        )}

        {stage === 3 && (
          <>
            <FormControl id="password" isRequired>
              <FormLabel>New Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl id="confirmPassword" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>
            <Button
              colorScheme="purple"
              width="full"
              onClick={handleResetPassword}
              isLoading={isResetting}
            >
              Reset Password
            </Button>
          </>
        )}
      </VStack>
      {error && <Text color="red.500">{error}</Text>}
      </> }
    </Box>
  );
};

export default ResetPasswordPage;