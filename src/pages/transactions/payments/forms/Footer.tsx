import { Button } from "@/components/ui/button"
import React from "react"
import { SubmitCreate } from "../create/Submit"


interface FooterPaymentsProps {
    date: Date | undefined
    paymentMethod: string | undefined
    amount: string | undefined
    selectDataInvoices: number | undefined
    setReferesh: React.Dispatch<React.SetStateAction<boolean>>
    setErrors: React.Dispatch<React.SetStateAction<Record<string, string | undefined>>>
    refresh: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
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