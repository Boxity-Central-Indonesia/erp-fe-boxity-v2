// src/features/payments/columns.ts
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { OrderResponse } from "../../type/orderType";

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
}: columnsProps): ColumnDef<OrderResponse>[] => [
    {
        accessorKey: "kode_order",
        header: "Kode transaksi",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("kode_order")}</div>
        ),
    },
    {
        accessorFn: (row) => row.vendor.name, // Use accessorFn to access nested value
        id: "vendorName", // Provide a unique ID since accessorKey is not used
        header: "Vendor Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("vendorName")}</div>
        ),
    },
    {
        accessorFn: (row) => row.vendor.transaction_type, // Use accessorFn to access nested value
        id: "transactionType", // Provide a unique ID since accessorKey is not used
        header: "Tipe",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("transactionType")}</div>
        ),
    },
    {
        accessorKey: "order_type",
        header: "Tipe order",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("order_type")}</div>
        ),
    },
    {
        accessorKey: "total_price",
        header: "Total tagihan",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("total_price")}</div>
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
