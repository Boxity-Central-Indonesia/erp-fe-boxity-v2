import { Button } from "@/components/ui/button"
import React from "react"
import { SubmitCreate } from "../create/Submit"


interface FooterPaymentsProps {
    date: Date | undefined
    paymentMethod: string
    amount: string
    selectDataInvoices: string
    setReferesh: any
    setErrors: any
    refresh: any
    setOpenModal: any
    setLoading: any
}


export const FooterPayments: React.FC<FooterPaymentsProps> = ({
    date,
    paymentMethod,
    amount,
    selectDataInvoices,
    setReferesh,
    setErrors,
    refresh,
    setOpenModal,
    setLoading
}) => {

    const handleSubmit = () => {
        const formattedDate = date ? date.toISOString().split("T")[0] : null; // Format date
        const dataBody = {
           invoice_id: selectDataInvoices,
           amount_paid: amount,
           payment_method: paymentMethod,
           payment_date: formattedDate
        }

        SubmitCreate({
            dataBody: dataBody,
            setRefresh: setReferesh,
            setLoading: setLoading,
            setErrors: setErrors,
            refresh: refresh,
            setOpenModal: setOpenModal
        })
    }

    return (
        <>
            <Button onClick={() => handleSubmit()}>Simpan invoices</Button>
        </>
    )
}