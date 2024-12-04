interface Invoice {
    id: number;
    order_id: number;
    total_amount: string; // Use string for monetary values to avoid floating-point precision issues
    paid_amount: string;
    balance_due: string;
    invoice_date: string; // ISO 8601 date string
    due_date: string; // ISO 8601 date string
    status: string; // E.g., "Lunas", "Belum Lunas"
    created_at: string; // ISO 8601 date-time string
    updated_at: string; // ISO 8601 date-time string
    kode_invoice: string;
}

export interface Payment {
    id: number;
    invoice_id: number;
    amount_paid: number; // Payment amount in numeric format
    payment_method: string; // E.g., "online", "cash"
    payment_date: string; // ISO 8601 date string
    created_at: string; // ISO 8601 date-time string
    updated_at: string; // ISO 8601 date-time string
    kode_payment: string; // Payment code in string format
    invoice: Invoice; // Nested Invoice object
}


export interface PaymentResponse {
    status: number;
    data: Payment[]
}