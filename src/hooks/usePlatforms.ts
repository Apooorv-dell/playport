import useData from "./useData";

export interface Platform{
    id:number;
    name:string;
    slug:string;
    
}

const usePlatfroms = () => useData<Platform>("/platforms/lists/parents")
 
export default usePlatfroms;