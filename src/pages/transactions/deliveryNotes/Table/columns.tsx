// src/features/payments/columns.ts
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { DeliveryNote } from "../../type/deliveryNotes";

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
}: columnsProps): ColumnDef<DeliveryNote>[] => [
        {
            accessorKey: "number",
            header: "Number",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("number")}</div>
            ),
        },
        {
            accessorFn: (row) => row.warehouse.name,
            id: 'warehouse_name',
            header: "Gudang",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("warehouse_name")}</div>
            ),
        },
        {
            accessorFn: (row) => row.vendor.name,
            id: 'vendor_name',
            header: "Vendor",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("vendor_name")}</div>
            ),
        },
        {
            accessorKey: "date",
            header: "Tanggal",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("date")}</div>
            ),
        },
        // {
        //     id: "actions",
        //     enableHiding: false,
        //     cell: ({ row }) => {
        //         const order = row.original;
        //         return (
        //             <div className="py-2.5">
        //                 <Eye className="w-5 h-5 text-primary"/>
        //             </div>
        //         );
        //     },
        // },
    ];
