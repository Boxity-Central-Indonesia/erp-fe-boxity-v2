export interface Warehouse {
    id: number; // Unique identifier for the warehouse
    name: string; // Name of the warehouse
    address: string; // Address of the warehouse
    capacity: number; // Storage capacity of the warehouse
    created_at: string; // ISO 8601 date-time string for when the warehouse was created
    updated_at: string; // ISO 8601 date-time string for when the warehouse was last updated
    user_created: number; // ID of the user who created the warehouse
    user_updated: number | null; // ID of the user who last updated the warehouse, nullable
    description: string | null; // Additional description or notes about the warehouse, nullable
}
