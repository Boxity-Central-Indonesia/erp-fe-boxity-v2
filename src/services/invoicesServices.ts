import apiClient from "./apiClient";
import { Invoice, InvoicesResponse } from "@/pages/transactions/type/invoicesType";

interface CreateInvoicesServices {
    dataBody: {};
}

export const getInvoices = async (): Promise<Invoice[]> => {
    const response = await apiClient.get<InvoicesResponse>('/invoices');
    return response.data.data; // Hanya mengembalikan `data` yang berupa `Order[]`
};


export const createInvoices = async (dataBody: CreateInvoicesServices) => {
    const response = await apiClient.post('/invoices', dataBody.dataBody)

    return response.data.status
}
