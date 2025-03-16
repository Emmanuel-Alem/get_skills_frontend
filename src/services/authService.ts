import api from './api';

interface LoginCredentials {
    email: string;
    password: string;
}

// logs the user in using the provided credentials
export const login = async (credentials: LoginCredentials) => {
    api.get('/sanctum/csrf-cookie');
    const response = await api.post('/login', 'credentials');
    return response.data;
}

// logs the user out
export const logout = async () => {
    const response = await api.post('/logout');
    return response.data;
}

// fetches the currently authenticated user
export const fetchUser = async () => {
    const  response  = await api.get('/user');
    return response.data;
}

