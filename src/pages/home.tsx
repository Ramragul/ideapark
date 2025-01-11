// import useGetData from '../hooks/useGetData';
// import React from 'react'

// export const Home = () => {

//   const { data, error, isLoading } = useGetData( 'test','/api/ip/tests');

//   console.log("Data Received from db" +data)
//   return (
//     <div>home Page</div>
//   )
// }


//import { Radio, RadioGroup } from "@/components/ui/radio";
import { HStack , Text} from "@chakra-ui/react";

export const Home = () => {
  return (
      <HStack gap="6">
<Text>Home Page</Text>
      </HStack>
 
  );
};

export default Home;
