import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";



interface FetchResponse<T> {
    data : T[];
}

const useData = <T>(endpoint : string , requestConfig?:AxiosRequestConfig ,deps?: any[]) => {

    const [data,setData] = useState<T[]>([])
    const [error,setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    
        useEffect (() => {
            const controller = new AbortController();

            setLoading(true)

            apiClient.get<FetchResponse<T>>(endpoint,{signal: controller.signal, ...requestConfig})
            .then(res => {
                console.log("Inside Api call " +JSON.stringify(res.data))
                setData(res.data.data)
                setLoading(false)
            })
            .catch(err => {
              // console.log("Connection Error In Hooks" +err.message)
               if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
            })

            return () => controller.abort();
        },(deps) ?[...deps] : [])
        console.log("Data Received from DB in Hooks:"+JSON.stringify(data))
        return {data,error , isLoading}
}

export default useData;