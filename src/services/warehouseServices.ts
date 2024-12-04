import apiClient from "./apiClient";
import { Warehouse } from "@/pages/transactions/type/warehouseType";

interface Response {
    status: number
    data: Warehouse[]
}

export const getWarehouse = async (): Promise<Warehouse[]> => {
    const response = await apiClient.get<Response>('/warehouses');
    return response.data.data; // Hanya mengembalikan `data` yang berupa `Order[]`
};


