import apiClient from "./apiClient";


export type Companies = {
    id: number
    name: string
    email: string
    address: string
    phone_number: string
}

export type ApiResponse<T> = {
    status: number
    data: T
}


export const getCompanies = async (): Promise<Companies[]> => {
    const response = await apiClient.get<ApiResponse<Companies[]>>('/companies')

    if(response.status === 200) {
        return response.data.data
    }

    throw new Error('Failed to fetch users'); 
}