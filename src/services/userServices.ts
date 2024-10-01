import apiClient from './apiClient'; // Pastikan untuk mengimpor apiClient, bukan axios

import { userForm } from '@/pages/users/type/userType';


// Tipe untuk respons API yang mengandung status dan data pengguna
export type ApiResponse<T> = {
    status: number;
    data: T;
};

// Fungsi untuk mengambil daftar pengguna
export const getUsers = async (): Promise<userForm[]> => {
    const response = await apiClient.get<ApiResponse<userForm[]>>('/users');

    if (response.status === 200) {
        return response.data.data;
    }

    throw new Error('Failed to fetch users');
};

// Fungsi untuk menambah pengguna baru
export const createUser = async (user: Partial<userForm>): Promise<userForm> => {
    const { name, email, username, gender, no_handphone, password, password_confirmation } = user;

    const response = await apiClient.post<ApiResponse<userForm>>('/users', {
        name,
        email,
        username,
        gender,
        no_handphone,
        password,
        password_confirmation,
    });

    if (response.status === 201) {
        return response.data.data;
    }

    throw new Error('Failed to create user');
};

// Fungsi untuk mengedit data pengguna
// export const updateUser = async (id: string, user: Partial<User>): Promise<User> => {
//     const response = await apiClient.put<ApiResponse<User>>(`/users/${id}`, user);

//     if (response.status === 200) {
//         return response.data.data;
//     }

//     throw new Error('Failed to update user');
// };

// // Fungsi untuk menghapus pengguna
// export const deleteUser = async (id: string): Promise<void> => {
//     const response = await apiClient.delete<ApiResponse<null>>(`/users/${id}`);

//     if (response.status !== 204) {
//         throw new Error('Failed to delete user');
//     }
// };
