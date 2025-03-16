import api from './api';

interface LoginCredentials {
    email: string;
    password: string;
}

interface RegisterData {
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    password: string;
}

/**
 * logs the user in
 * @param credentials obj with email and password
 * @returns a promise that resolves to the login res data
 */
export const login = async (credentials: LoginCredentials) => {
    const response = await api.post('/login', credentials);
    return response.data;   //expected: {message, user, token}
}

/**
 * registers a new user
 * @param data obj with register data
 * @returns a promise that resolves to the register res data
 */
export const register = async(data: RegisterData) => {
    const response = await api.post('/register', data);
    return response.data;   //expected: {message, user, token}
}

/**
 * logs the user out
 * @param token the user's auth token
 * @returns a promise that resolves to the logout res data
 */
export const logout = async (token: string) => {
    const response = await api.post('/logout', null, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

/**
 * fetches the user data
 * @returns a promise that resolves to the user data
 */
export const fetchUser = async () => {
    const  response  = await api.get('/user');
    return response.data;
}

