import apiClient from "./apiClient";
import { ProductResponse, Product } from "@/pages/transactions/type/productType";

export const getProducts = async (): Promise<Product[]> => {
    const response = await apiClient.get<ProductResponse>('/products')
    return response.data.data
}