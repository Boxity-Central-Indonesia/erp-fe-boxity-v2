import apiClient from "./apiClient";
import { OrderResponse, Order } from "@/pages/transactions/type/orderType";

interface CreateOrdersRequest {
    dataBody: {}; // Ganti `any` dengan tipe spesifik jika diketahui
}

export const getOrders = async (): Promise<Order[]> => {
    const response = await apiClient.get<OrderResponse>('/orders');
    return response.data.data; // Hanya mengembalikan `data` yang berupa `Order[]`
};


export const createOrders = async (dataBody: CreateOrdersRequest) => {
    const response = await apiClient.post('/orders', dataBody.dataBody);

    if (response.data.status === 201) {
        return response.data.status;
    }

    throw new Error("Failed to create order");
};

