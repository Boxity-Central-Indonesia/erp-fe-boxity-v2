// src/features/payments/columns.ts
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { userForm } from "../type/userType";
import { EditUsers } from "../edit/Edit";

type columnsProps = {
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
    refresh: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

// Export the columns table directly
export const createColumns = ({
    setRefresh,
    refresh,
    setLoading
}: columnsProps): ColumnDef<userForm>[] => [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("name")}</div>
        ),
    },
    {
        accessorKey: "username",
        header: "Username",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("username")}</div>
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
        accessorKey: "gender",
        header: "Gender",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("gender") ?? '--'}</div>
        ),
    },
    {
        accessorKey: "no_handphone",
        header: "No. HP",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("no_handphone") ?? '--'}</div>
        ),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const user = row.original;
            return (
                <div className="py-2.5">
                    <EditUsers id={user.id} setRefresh={setRefresh} refresh={refresh} setLoading={setLoading}/>
                </div>
            );
        },
    },
];
