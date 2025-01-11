
import useData from "./useData";



export interface TestResult {
    testId: number;
    testName: string;
    testTakenDate: string; // ISO date strings are typically represented as strings in TypeScript
    totalMarks: number;
    marksScored: number;
}


//const useDesignCatalogue = (catalogueQuery : CatalogueQuery , apiPath : string) => useData <Catalogue>("/api/cc/designcatalogue",
const useGetTestResults = (apiPath : string) => useData <TestResult>(apiPath,
{
},
[]
);

console.log("data received from DB " +JSON.stringify(useGetTestResults))
export default useGetTestResults;


// import useData from "./useData";

// // Define the TestResult interface
// export interface TestResult {
//   testId: number;
//   testName: string;
//   testTakenDate: string;
//   totalMarks: number;
//   marksScored: number;
// }

// // Define the structure of the API response
// interface ApiResponse {
//   testResults: TestResult[];
// }

// // Modify the hook to expect the ApiResponse structure
// const useGetTestResults = (apiPath: string) => useData<ApiResponse>(apiPath, {}, [])



// export default useGetTestResults;

