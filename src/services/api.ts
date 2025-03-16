import axios from "axios";

/**
 * axios instance configured for my laravel backend
 * @param baseURL - the base URL for the backend API
 * @param withCredentials - ensures my cookies are sent with the request [incliding csrf token]
 **/

const api = axios.create({
  baseURL: process.env.Next_PUBLIC_API_URL,
});


export default api;