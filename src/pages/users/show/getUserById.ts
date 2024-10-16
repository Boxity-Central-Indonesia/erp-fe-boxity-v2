import { getUsersByID } from "@/services/userServices";
import { userForm } from "../type/userType";


export const getUserById = async (id: string): Promise<userForm> => {
    const response = await getUsersByID(id);

    // Pastikan bahwa response adalah objek tunggal, bukan array
    if (response && !Array.isArray(response)) {
        return response as userForm; // Memastikan response dikembalikan sebagai objek userForm
    } else {
        throw new Error('Expected a single user object, but received an array or invalid data');
    }
}