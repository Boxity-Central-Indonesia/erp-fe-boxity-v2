import { Button } from "@/components/ui/button"
import React from "react"
import { SubmitCreate } from "../create/Submit"

interface FooterDeliveyNotesProps {
    setOpenModal: any
    setErrors: any
    noRef: string
    date: Date | undefined
    selectVendor: any
    selectWarehouse: any
    details: any
    rows: any
    setRefresh: any
    refresh: any
    setLoading: any
}


export const FooterDeliveyNotes: React.FC<FooterDeliveyNotesProps> = ({
    setOpenModal,
    setErrors,
    noRef,
    date,
    selectVendor,
    selectWarehouse,
    details,
    rows,
    setRefresh,
    refresh,
    setLoading
}) => {

    const formattedDate = date ? date.toISOString().split("T")[0] : null; // Format date
    const handleClick = () => {
        const dataBody = {
            number: noRef,
            date: formattedDate,
            warehouse_id: selectWarehouse,
            vendor_id: selectVendor,
            details: details,
            deliveryNoteItems: rows
        }

        console.log(dataBody);

        SubmitCreate({
            dataBody: dataBody,
            setLoading: setLoading,
            setRefresh: setRefresh,
            refresh: refresh,
            setOpenModal: setOpenModal,
            setErrors: setErrors,
        })
        
    }

    return(
        <>
            <Button onClick={handleClick}>Simpan pengiriman barang</Button>
        </>
    )
}