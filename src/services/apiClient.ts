import axios from 'axios';
import { getToken } from './cookie';

// Buat instance axios dengan konfigurasi dasar
const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 10000, // 10 detik
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor untuk request (opsional)
apiClient.interceptors.request.use(config => {
    // Misalnya menambahkan token ke header jika ada
    const token = getToken()
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Interceptor untuk response (opsional)
apiClient.interceptors.response.use(response => {
    return response;
}, error => {
    // Handling error global (misalnya, redirect jika 401)
    if (error.response?.status === 401) {
        // Redirect ke halaman login
        window.location.href = '/login';
    }
    return Promise.reject(error);
});

export default apiClient;
