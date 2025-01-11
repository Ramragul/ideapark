


import useData from "./useData";

export interface  Question  {
    questionId: number;
    category: string;
    questionText: string;
    options: Option[];
  };

  export interface Option  {
    optionId: number;
    questionId: number;
    option_text: string;
    is_correct: boolean;
  };

export interface TestDetails {
    testId: string;
    questions: Question[];
  }



//const useDesignCatalogue = (catalogueQuery : CatalogueQuery , apiPath : string) => useData <Catalogue>("/api/cc/designcatalogue",
const useGetData = ( userId: string | undefined,apiPath : string) => useData(apiPath,
{
    params:{
        userId:userId,
    }
},
[]
);

console.log("data received from DB " +JSON.stringify(useGetData))
export default useGetData;