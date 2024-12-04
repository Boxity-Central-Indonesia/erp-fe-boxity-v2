interface Warehouse {
    id: number;
    name: string;
    address: string;
    capacity: number;
    created_at: string; // ISO 8601 date-time string
    updated_at: string; // ISO 8601 date-time string
    user_created: number;
    user_updated: number | null;
    description: string | null;
}

interface Vendor {
    id: number;
    name: string;
    address: string;
    phone_number: string;
    email: string;
    date_of_birth: string | null; // ISO 8601 date string or null
    created_at: string; // ISO 8601 date-time string
    updated_at: string; // ISO 8601 date-time string
    transaction_type: string; // E.g., "inbound"
    user_created: number;
    user_updated: number | null;
}

interface Order {
    id: number;
    no_ref: string | null;
    vendor_id: number;
    warehouse_id: number | null;
    status: string; // E.g., "pending"
    details: string;
    total_price: string; // Monetary value as string
    created_at: string; // ISO 8601 date-time string
    updated_at: string; // ISO 8601 date-time string
    taxes: string | null;
    shipping_cost: string | null;
    order_status: string; // E.g., "Completed"
    order_type: string; // E.g., "Direct Order"
    kode_order: string;
    vendor: Vendor;
}

interface Product {
    id: number;
    name: string;
    code: string;
    image_product: string; // URL string
    description: string | null;
    weight: string; // Weight as string
    animal_type: string; // E.g., "ayam hidup"
    age: string | null;
    health_status: string; // E.g., "1"
    price: string; // Monetary value as string
    type: string; // E.g., "ayam hidup"
    subtype: string | null;
    size: string | null;
    color: string | null;
    brand: string | null;
    model: string | null;
    sku: string | null;
    stock: number;
    image: string | null; // URL or null
    video: string | null; // URL or null
    raw_material: number;
    unit_of_measure: string; // E.g., "kg"
    warehouse_id: number;
    created_at: string; // ISO 8601 date-time string
    updated_at: string; // ISO 8601 date-time string
    category_id: number | null;
    user_created: number;
    user_updated: number | null;
}

interface DeliveryNoteItem {
    id: number;
    delivery_note_id: number;
    order_id: number;
    product_id: number;
    created_at: string; // ISO 8601 date-time string
    updated_at: string; // ISO 8601 date-time string
    quantity: number;
    order: Order;
    product: Product;
}

export interface DeliveryNote {
    id: number;
    number: string; // Delivery note number
    date: string; // ISO 8601 date string
    warehouse_id: number;
    vendor_id: number;
    details: string | null;
    created_at: string; // ISO 8601 date-time string
    updated_at: string; // ISO 8601 date-time string
    warehouse: Warehouse;
    vendor: Vendor;
    delivery_note_items: DeliveryNoteItem[];
}

export interface DeliveryNoteResponse {
    status: number
    data: DeliveryNote[]
}
