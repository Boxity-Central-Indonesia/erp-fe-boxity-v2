import apiClient from "./apiClient";
import { Payment, PaymentResponse } from "@/pages/transactions/type/paymentType";

interface CreatePaymentServices {
    dataBody: {};
}


export const getPayments = async (): Promise<Payment[]> => {
    const response = await apiClient.get<PaymentResponse>('/payments');
    return response.data.data; // Hanya mengembalikan `data` yang berupa `Order[]`
};


export const createPayments = async (dataBody: CreatePaymentServices) => {
    const response = await apiClient.post('/payments', dataBody.dataBody)

    return response.data.status
}