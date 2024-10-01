import axios from 'axios';
import { setToken, getToken, removeToken } from './cookie';

const API_URL = 'http://localhost:8000/api';

export const authService = {
    login,
    register,
    logout,
    getCurrentUser,
};

async function login(email: string, password: string) {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const token = response.data.access_token;

    if (token) {
        setToken(token)
    }

    return response.data;
}

async function register(name: string, email: string, password: string, password_confirmation: string) {
    const response = await axios.post(`${API_URL}/register`, { name, email, password, password_confirmation })
}

async function logout() {
    const token = getToken();
    await axios.post(`${API_URL}/logout`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    removeToken()
}

async function getCurrentUser() {
    const token = getToken();
    if (!token) {
        return null;
    }

    const {data} = await axios.get(`${API_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return {
        email: data.data[0].user.email,
        name: data.data[0].user.name,
        token,
    };
}
