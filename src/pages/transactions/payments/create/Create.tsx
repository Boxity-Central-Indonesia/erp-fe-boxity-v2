import { Modal } from "@/components/commons/modal/Modal"
import React, { useState, useEffect } from "react"
import { BtnCreate } from "./BtnCreate";
import { FormPayments } from "../forms/Forms";
import { FooterPayments } from "../forms/Footer";

interface CreatePaymentsProps {
    setRefresh: any;
    refresh: boolean;
    setLoading: any;
}

export const CreatePayments: React.FC<CreatePaymentsProps> = ({
    setRefresh,
    refresh,
    setLoading
}) => {

    const [oepnModal, setOpenModal] = useState<boolean>(false)
    const [dataInvoices, setDataInvices] = useState<[]>([])
    const [selectDataInvoices, setSelectDataInvoices] = useState<string>('')
    const [amount, setAmount] = useState<string>('')
    const [paymentMethod, setPaymentMethod] = useState<string>('')
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [errors, setErrors] = useState<object>({})

    useEffect(() => {
        setSelectDataInvoices('')
        setAmount('')
        setPaymentMethod('')
        setDate(undefined)
    }, [refresh])

    return(
        <>
            <Modal
                open={oepnModal}
                setOpenModal={setOpenModal}
                width="max-w-2xl"
                modalTitle="Tambah pembayaran"
                modalDescriptions="Tambah pembayaran baru"
                componetsTriger={<BtnCreate setOpenModal={setOpenModal}/>}
                modalBodyComponents={
                    <FormPayments 
                        date={date}
                        setDate={setDate}
                        setAmount={setAmount}
                        amount={amount}
                        dataInvoices={dataInvoices}
                        setDataInvoices={setDataInvices}
                        selectDataInvoices={selectDataInvoices}
                        paymentMethod={paymentMethod}
                        setSelectDataInvoices={setSelectDataInvoices}
                        setPaymentMethod={setPaymentMethod}
                        errors={errors}
                    />
                }
                modalBodyFooter={<FooterPayments 
                    date={date}
                    amount={amount}
                    paymentMethod={paymentMethod}
                    selectDataInvoices={selectDataInvoices}
                    setLoading={setLoading}
                    setReferesh={setRefresh}
                    refresh={refresh}
                    setErrors={setErrors}
                    setOpenModal={setOpenModal}
                />}
            />
        </>
    )
}