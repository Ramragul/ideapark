import { CatalogueQuery } from "../App";
import { Category } from "./useCatalogueCategory";
import useData from "./useData";

export interface OrderItem {
    id: string; // Assuming each item has a unique ID
    name: string;
    quantity: number;
    price: number;
    imageURL : string;
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