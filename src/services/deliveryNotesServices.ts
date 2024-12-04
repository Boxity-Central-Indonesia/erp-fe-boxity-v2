import apiClient from "./apiClient";
import { DeliveryNote, DeliveryNoteResponse } from "@/pages/transactions/type/deliveryNotes";

interface createDeliveryNotesServices {
    dataBody: {}
}

export const getDeliveryNotes = async (): Promise<DeliveryNote[]> => {
    const response = await apiClient.get<DeliveryNoteResponse>('/delivery-notes');
    return response.data.data; 
};


export const createDeliveryNotes = async (dataBody: createDeliveryNotesServices) => {
    const response = await apiClient.post('/delivery-notes', dataBody.dataBody)

    return response.data.status
}