import React, { useEffect, useState } from "react"
import { Modal } from "@/components/commons/modal/Modal"
import { FormOrder } from "../forms/Forms"
import { BtnCreate } from "./BtnCreate"
import { FooterOrder } from "../forms/Footer"


interface CreateOrdersProps {
    setRefresh: any
    refresh: boolean
    setLoading: any
}



export const CreateOrders: React.FC<CreateOrdersProps> = ({
    setRefresh, 
    refresh,
    setLoading
}) => {

    const [openModal, setOpenModal] = useState<any>()
    const [dataOrder, setDataOrder] = useState<[]>([])
    const [dataWarehouse, setDataWarehouse] = useState<any>(null)
    const [dataReferensi, setDataReferensi] = useState<string | undefined>('')
    const [dataOrderType, setDataOrderType] = useState<string | undefined>(undefined)
    const [dataSelectVendor, setDataSelectVendor] = useState<string | undefined>(undefined)
    const [dataSelectWarehouse, setDataSelectWarehouse] = useState<string | undefined>(undefined)
    const [selectedOrderType, setSelectedOrderType] = useState<string | undefined>(undefined);
    const [details, setDetails] = useState<string | undefined>(undefined)
    const [errors, setErrors] = useState<Record<string, string | undefined>>({});


    useEffect(() => {
        setDataReferensi('')
        setDataSelectVendor(undefined)
        setDataSelectWarehouse(undefined)
        setSelectedOrderType(undefined)
        setDetails('')
    }, [refresh])


    return (
        <>
            <Modal
                open={openModal}
                width="max-w-2xl"
                modalTitle="Tambah pesanan"
                modalDescriptions="Tambah pesanan baru"
                componetsTriger={<BtnCreate setOpenModal={setOpenModal} setDataOrder={setDataOrder} setDataWarehouse={setDataWarehouse} />}
                setOpenModal={setOpenModal}
                modalBodyComponents={
                    <FormOrder
                        dataOrder={dataOrder}
                        dataWarehouse={dataWarehouse}
                        setDataOrderType={setDataOrderType}
                        setDataReferensi={setDataReferensi}
                        setDataSelectWarehouse={setDataSelectWarehouse}
                        setSelectedOrderType={setSelectedOrderType}
                        selectedOrderType={selectedOrderType}
                        setDetails={setDetails}
                        errors={errors}
                        setDataSelectVendor={setDataSelectVendor} 
                        dataOrderType={""} 
                        dataReferensi={""}                    />
                }
                modalBodyFooter={
                    <FooterOrder
                        selectedOrderType={selectedOrderType}
                        dataReferensi={dataReferensi}
                        dataSelectVendor={dataSelectVendor}
                        dataSelectWarehouse={dataSelectWarehouse}
                        details={details}
                        setRefresh={setRefresh}
                        refresh={refresh}
                        setOpenModal={setOpenModal}
                        setErrors={setErrors}
                        setLoading={setLoading}
                    />
                }
            />
        </>
    )
}