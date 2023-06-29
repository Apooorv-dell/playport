
import create from "./http-service";

export interface User {
  id: number;
  title: string;
}



export default  create("/posts");
