import axios, { CanceledError } from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params:{
    key:"f28970a76e3e43a7a5007c8a0d94969a"
  }

}); 
export {CanceledError}
