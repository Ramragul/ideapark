// import useGetData from '../hooks/useGetData';
// import React from 'react'

// export const Home = () => {

//   const { data, error, isLoading } = useGetData( 'test','/api/ip/tests');

//   console.log("Data Received from db" +data)
//   return (
//     <div>home Page</div>
//   )
// }


import { Radio, RadioGroup } from "@/components/ui/radio";
import { HStack } from "@chakra-ui/react";

export const Home = () => {
  return (
    <RadioGroup defaultValue="1">
      <HStack gap="6">
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
        <Radio value="3">Option 3</Radio>
      </HStack>
    </RadioGroup>
  );
};

export default Home;
