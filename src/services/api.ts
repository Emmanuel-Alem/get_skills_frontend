import axios from "axios";

/**
 * Create an axios instance
 * @param baseURL - the base URL for the backend API
 * @param withCredentials - ensures my cookies are sent with the request [incliding csrf token]
 **/

const api = axios.create({
  baseURL: process.env.Next_PUBLIC_API_URL,
  withCredentials: true,
});


export default api;