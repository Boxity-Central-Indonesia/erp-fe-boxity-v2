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
    const [dataOrder, setDataOrder] = useState<any>()
    const [dataWarehouse, setDataWarehouse] = useState<any>(null)
    const [dataReferensi, setDataReferensi] = useState<string>('')
    const [dataOrderType, setDataOrderType] = useState<string>('')
    const [dataSelectVendor, setDataSelectVendor] = useState<string>('')
    const [dataSelectWarehouse, setDataSelectWarehouse] = useState<any>(null)
    const [selectedOrderType, setSelectedOrderType] = useState("");
    const [details, setDetails] = useState<string>("")
    const [errors, setErrors] = useState<object>({})

    useEffect(() => {
        setDataReferensi('')
        setDataSelectVendor('')
        setDataSelectWarehouse('')
        setSelectedOrderType('')
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
                    />
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