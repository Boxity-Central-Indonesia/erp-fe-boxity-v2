import { Modal } from "@/components/commons/modal/Modal";
import { useState, useEffect } from "react";
import { BtnCreate } from "./BtnCreate";
import React from "react";
import { FormInvoices } from "../forms/Forms";
import { FooterInvoices } from "../forms/Footer";

interface CreateInvoicesProps {
    setRefresh: any;
    refresh: boolean;
    setLoading: any;
}

export const CreateInvoices: React.FC<CreateInvoicesProps> = ({
    setRefresh,
    setLoading,
    refresh,
}) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [dataOrder, setDataOrder] = useState<any>({});
    const [date, setDate] = React.useState<Date | undefined>(undefined); // Default to `null`
    const [dueDate, setDueDate] = useState<Date | undefined>(undefined); // Default to `null`
    const [status, setStatus] = useState<string>("");
    const [selectDataOrder, setSelectDataOrder] = useState<any>();
    const [errors, setErrors] = useState<object>({})

    useEffect(() => {
        // Reset the state when `refresh` changes
        setDate(undefined); // Reset `date` to null
        setDueDate(undefined); // Reset `dueDate` to null
        setStatus(""); // Reset `status` to an empty string
    }, [refresh]);

    return (
        <>
            <Modal
                open={openModal}
                width="max-w-2xl"
                modalTitle="Tambah faktur tagihan"
                modalDescriptions="Tambah faktur tagihan baru"
                componetsTriger={<BtnCreate setOpenModal={setOpenModal} />}
                setOpenModal={setOpenModal}
                modalBodyComponents={
                    <FormInvoices
                        setDataOrder={setDataOrder}
                        dataOrder={dataOrder}
                        date={date}
                        setDate={setDate}
                        dueDate={dueDate}
                        setDueDate={setDueDate}
                        setStatus={setStatus}
                        setSelectDataOrder={setSelectDataOrder}
                        errors={errors}
                    />
                }
                modalBodyFooter={
                    <FooterInvoices
                        selectOrder={selectDataOrder}
                        date={date}
                        dueDate={dueDate}
                        status={status}
                        setOpenModal={setOpenModal}
                        setLoading={setLoading}
                        setRefresh={setRefresh}
                        setErrors={setErrors}
                        refresh={refresh}
                    />
                }
            />
        </>
    );
};
