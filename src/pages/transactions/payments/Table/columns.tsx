// src/features/payments/columns.ts
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Payment } from "../../type/paymentType";

type columnsProps = {
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
    refresh: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

// Export the columns table directly
export const createColumns = ({
    setRefresh,
    refresh,
    setLoading
}: columnsProps): ColumnDef<Payment>[] => [
    {
        accessorFn: (row) => row.invoice?.kode_invoice,
        id: 'kode_invoice',
        header: "Kode tagihan",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("kode_invoice")}</div>
        ),
    },
    {
        accessorKey: "kode_payment",
        header: "Koda pembayaran",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("kode_payment")}</div>
        ),
    },
    {
        accessorKey: "payment_method",
        header: "Metode pembayaran",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("payment_method")}</div>
        ),
    },
    {
        accessorKey: "created_at",
        header: "Tanggal terbayar",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("created_at")}</div>
        ),
    },
    {
        accessorKey: "amount_paid",
        header: "Tagihan terbayar",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("amount_paid")}</div>
        ),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const order = row.original;
            return (
                <div className="py-2.5">
                    <Eye className="w-5 h-5 text-primary"/>
                </div>
            );
        },
    },
];
