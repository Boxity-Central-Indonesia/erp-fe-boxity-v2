import Cookies from 'js-cookie';

type cookieType = (token: string) => void

// Menyimpan token
export const setToken:cookieType = (token) => {
    Cookies.set('token', token, { 
        expires: 1, // Cookie berlaku selama 7 hari
        // secure: true, // Hanya kirim cookie melalui HTTPS
        sameSite: 'strict', // Mencegah CSRF
    });
};

// Mengambil token
export const getToken = () => {
    return Cookies.get('token');
};

// Menghapus token
export const removeToken = () => {
    Cookies.remove('token');
};
