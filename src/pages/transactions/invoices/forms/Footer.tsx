import React from "react";
import { Button } from "@/components/ui/button";
import { SubmitCreate } from "../create/Submit";

interface FooterInvoicesProps {
    date: Date | undefined;
    dueDate: Date | undefined;
    status: string;
    selectOrder: string;
    setLoading: any;
    setRefresh: any;
    setErrors: any;
    refresh: any;
    setOpenModal: any;
}

export const FooterInvoices: React.FC<FooterInvoicesProps> = ({
    date,
    dueDate,
    status,
    selectOrder,
    setOpenModal,
    setRefresh,
    setLoading,
    setErrors,
    refresh
}) => {
    const handleSubmit = () => {
        const formattedDate = date ? date.toISOString().split("T")[0] : null; // Format date
        const formattedDueDate = dueDate ? dueDate.toISOString().split("T")[0] : null; // Format dueDate

        const dataBody = {
            order_id: selectOrder,
            status: status,
            invoice_date: formattedDate,
            due_date: formattedDueDate,
        };

        SubmitCreate({
            dataBody: dataBody,
            setErrors: setErrors,
            setOpenModal: setOpenModal,
            setRefresh: setRefresh,
            setLoading: setLoading,
            refresh: refresh
        })
    };

    return (
        <>
            <Button onClick={() => handleSubmit()}>Simpan invoices</Button>
        </>
    );
};
