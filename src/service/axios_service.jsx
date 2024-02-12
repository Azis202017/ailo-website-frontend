import axios from "axios";
const customAxios = axios.create({
  baseURL: 'https://7725-2001-448a-20e0-3f81-6d1b-2770-89d9-ecd2.ngrok-free.app'
});
export default customAxios;