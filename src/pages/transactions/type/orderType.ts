export interface Vendor {
    id: number;
    name: string;
    address: string;
    phone_number: string;
    email: string;
    date_of_birth: string;
    created_at: string | null;
    updated_at: string;
    transaction_type: string;
    user_created: number | null;
    user_updated: number;
}

// Define the structure for the Product object
export interface Product {
    id: number;
    name: string;
    quantity: number;
    price_per_unit: number;
    total_price: number;
}

// Define the structure for the Invoice object
export interface Invoice {
    id: number;
    order_id: number;
    total_amount: string;
    paid_amount: string;
    balance_due: string;
    invoice_date: string;
    due_date: string;
    status: string;
    created_at: string;
    updated_at: string;
    kode_invoice: string;
}

// Define the structure for the main Order object
export interface Order {
    id: number;
    no_ref: string;
    kode_order: string;
    vendor: Vendor[];
    products: Product[];
    warehouse: string | null;
    invoices: Invoice[];
    total_price: number;
    order_status: string;
    order_type: string;
    taxes: number;
    shipping_cost: number;
    created_at: string;
}

// Define the structure for the full response data
export interface OrderResponse {
    status: number;
    data: Order[];
}


export interface formsOrder {
    
}