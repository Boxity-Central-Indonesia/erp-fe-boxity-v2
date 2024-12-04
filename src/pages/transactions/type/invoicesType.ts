interface Vendor {
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

interface Payment {
    id: number;
    invoice_id: number;
    amount_paid: number;
    payment_method: string;
    payment_date: string;
    created_at: string;
    updated_at: string;
    kode_payment: string;
}

interface Order {
    id: number;
    no_ref: string;
    kode_order: string;
    vendor_id: number;
    warehouse_id: number;
    status: string
    details: any
    total_price: string;
    order_status: string;
    order_type: string;
    taxes: number;
    shipping_cost: number;
    created_at: string;
    vendor:Vendor[];

}

export interface Invoice {
    id: number;
    order_id: number;
    total_amount: number;
    paid_amount: number;
    balance_due: number;
    invoice_date: string
    due_date: string;
    status: string;
    created_at: string;
    updated_at: string;
    total_paid: number;
    kode_invoice: string;
    order: Order;
    payment: Payment[]
}

export interface InvoicesResponse {
    status: number;
    data: Invoice[];
}