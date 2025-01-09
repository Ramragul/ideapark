
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