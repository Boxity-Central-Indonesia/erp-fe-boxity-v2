import apiClient from './apiClient'; // Pastikan untuk mengimpor apiClient, bukan axios

// Tipe untuk objek User individu
export type User = {
    id: string;
    name: string;
    username: string;
    email: string;
};

// Tipe untuk respons API yang mengandung status dan data pengguna
export type ApiResponse<T> = {
    status: number;
    data: T;
};

// Fungsi untuk mengambil daftar pengguna
export const getUsers = async (): Promise<User[]> => {
    const response = await apiClient.get<ApiResponse<User[]>>('/users');

    if(response.status === 200) {
        return response.data.data;
    }

    throw new Error('Failed to fetch users'); 
};



// Fungsi untuk menambah pengguna baru
// export const createUser = async (user: Partial<User>): Promise<User> => {
//     const response = await axios.post<User>('https://api.example.com/users', user);
//     return response.data;
// };

// // Fungsi untuk mengedit data pengguna
// export const updateUser = async (id: string, user: Partial<User>): Promise<User> => {
//     const response = await axios.put<User>(`https://api.example.com/users/${id}`, user);
//     return response.data;
// };

// // Fungsi untuk menghapus pengguna
// export const deleteUser = async (id: string): Promise<void> => {
//     await axios.delete(`https://api.example.com/users/${id}`);
// };
