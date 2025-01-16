


import useData from "./useData";



export interface list {
    type: string;
    
  }



//const useDesignCatalogue = (catalogueQuery : CatalogueQuery , apiPath : string) => useData <Catalogue>("/api/cc/designcatalogue",
const useGetList = ( apiPath : string) => useData(apiPath,
{
  
},
[]
);

console.log("List data received from DB " +JSON.stringify(useGetList))
export default useGetList;