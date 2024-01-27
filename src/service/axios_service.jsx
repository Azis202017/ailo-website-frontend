import axios from "axios";
const baseUrl = axios.create({
  baseURL : 'https://notable-moth-accurately.ngrok-free.app'
});
export default baseUrl;