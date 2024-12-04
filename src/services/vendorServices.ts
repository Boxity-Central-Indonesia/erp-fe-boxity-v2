import apiClient from "./apiClient";
import { Vendor } from "@/pages/transactions/type/orderType";

interface Response {
    status: number
    data: Vendor[]
}

export const getVendors = async (): Promise<Vendor[]> => {
    const response = await apiClient.get<Response>('/vendors');
    return response.data.data; // Hanya mengembalikan `data` yang berupa `Order[]`
};


