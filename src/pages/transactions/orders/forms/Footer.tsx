import { Button } from "@/components/ui/button"
import { submitCreate } from "../create/Submit"
import React from "react"

interface FooterOrderProps {
    selectedOrderType: string | undefined
    dataReferensi: string | undefined
    dataSelectVendor: string | undefined
    dataSelectWarehouse: string | undefined
    details: string | undefined
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
    refresh: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    setErrors: React.Dispatch<React.SetStateAction<{}>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const FooterOrder: React.FC<FooterOrderProps> = ({
    selectedOrderType,
    dataReferensi,
    dataSelectVendor,
    dataSelectWarehouse,
    details,
    setRefresh,
    refresh,
    setOpenModal,
    setErrors,
    setLoading
}) => {

    const handleSubmit = () => {
        const dataBody = {
            vendor_id: dataSelectVendor,
            warehouse_id: dataSelectWarehouse,
            status: 'pending',
            details,
            order_type: selectedOrderType,
            no_ref: dataReferensi,
            products: []

        }

        submitCreate({
            dataBody: dataBody, 
            setRefresh: setRefresh, 
            refresh: refresh,
            setOpenModal: setOpenModal,
            setErrors: setErrors,
            setLoading: setLoading
        })
    }

    return(
        <>
             <div className="flex items-center space-x-2">
                {/* {edit && (
                    <Delete
                        id={id}
                        setOpenModal={setOpenModal}
                        setLoading={setLoading}
                        setRefresh={setRefresh}
                        refresh={refresh}
                    />
                )} */}
                <Button onClick={() => handleSubmit()}>Simapan Pesanan</Button>
            </div>
        </>
    )
}