// import { useState } from "react";
// import axios, { AxiosRequestConfig } from "axios";
// import apiClient from "../services/api-client";

// interface PostResponse<T> {
//   data: T;
// }

// const usePostData = <T>(endpoint: string) => {
//   const [data, setData] = useState<T | null>(null);
//   const [error, setError] = useState<string>("");
//   const [isLoading, setLoading] = useState(false);

//   const postData = async (postData: T, requestConfig?: AxiosRequestConfig) => {

//     console.log("Paylod From Hook "+JSON.stringify(postData))
//     setLoading(true);
//     setError("");
//     try {
//       const response = await axios.post<PostResponse<T>>(endpoint, postData, requestConfig);
//       setData(response.data.data);
//     } catch (err) {
//       if (axios.isAxiosError(err)) {
//         setError(err.message);
//       } else {
//         setError("An unexpected error occurred");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { data, error, isLoading, postData };
// };

// export default usePostData;


import { useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, AxiosError } from "axios";

interface PostResponse<T> {
    data: T;
}

interface ApiResponseData {
    message: string;
    // other properties that the API response data might have
  }

interface ResponseData {
    message : string;
    status : number;
    orderId : number;
}

const usePostData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
    const [data, setData] = useState<T | null>(null);
    const [responseData, setResponseData] = useState<ResponseData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setLoading] = useState(false);

    const postData = async (payload: any) => {
        setLoading(true);
        setError(null);

        try {
            console.log("Payload" +payload)
           const response = await apiClient.post<PostResponse<T>>(endpoint, payload, requestConfig);
          // const response = await apiClient.post<PostResponse<ApiResponseData>>(endpoint, payload, requestConfig);
           
            setData(response.data.data);
            console.log("Response from Backend DB:" +JSON.stringify(response))
            //const responseData: ApiResponseData = response
            console.log("Response data Message 7777 " + response.data) 
           
            setResponseData({
                message: "Message",
                status: response.status,
                orderId : 1
              });
              console.log("Response Data" +responseData)
        } catch (err) {
            if (err instanceof AxiosError) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return { data, error, isLoading, postData ,responseData};
};

export default usePostData;

