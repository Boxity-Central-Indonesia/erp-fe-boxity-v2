// src/features/payments/columns.ts
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Invoice } from "../../type/invoicesType";

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
}: columnsProps): ColumnDef<Invoice>[] => [
    {
        accessorFn: (row) => row.order?.kode_order,
        id: 'kode_order',
        header: "Kode order",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("kode_order")}</div>
        ),
    },
    {
        accessorKey: "kode_invoice",
        header: "Koda tagihan",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("kode_invoice")}</div>
        ),
    },
    {
        accessorKey: "invoice_date",
        header: "Tanggal tagihan",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("invoice_date")}</div>
        ),
    },
    {
        accessorKey: "due_date",
        header: "Tanggal jatuh tempo",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("due_date")}</div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("status")}</div>
        ),
    },
    {
        accessorKey: "balance_due",
        header: "Sisa tagiahan",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("balance_due")}</div>
        ),
    },
    {
        accessorKey: "total_amount",
        header: "Total tagihan",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("total_amount")}</div>
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
