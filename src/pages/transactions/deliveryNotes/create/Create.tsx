import { Modal } from "@/components/commons/modal/Modal";
import React, { useState, useEffect } from "react"
import { BtnCreate } from "./BtnCreate";
import { FormsDeliveryNotes } from "../forms/Forms";
import { FooterDeliveyNotes } from "../forms/Footer";
import { getVendors } from "@/services/vendorServices";
import { getWarehouse } from "@/services/warehouseServices";

interface CreateDeliveryNotesProps {
    setRefresh: any;
    refresh: boolean;
    setLoading: any;
}

interface RowData {
    order_id: string | undefined;
    product_id: string | undefined;
    quantity: string | undefined;
}

export const CreateDeliveryNotes: React.FC<CreateDeliveryNotesProps> = ({
    setRefresh,
    refresh,
    setLoading
}) => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [errors, setErrors] = useState<object>({})
    const [noRef, setNoRef] = useState<string | undefined>(undefined)
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [selectVendor, setSelectVendor] = useState<string>('')
    const [selectWarehouse, setSelectWarehouse] = useState<string>('')
    const [details, setDetails] = useState<string>('')
    const [dataOrder, setDataOrder] = useState<[]>([])
    const [dataProduct, setDataProduct] = useState<[]>([])
    const [qty, setQty] = useState<number>(0)
    const [selectOrder, setSelectOrder] = useState<string>('')
    const [selectProduct, setSelectProduct] = useState<string>('')
    const [dataVendor, setDataVendor] = useState<[]>([])
    const [dataWarehouse, setDataWarehouse] = useState<[]>([])
    const [rows, setRows] = useState<RowData[]>([
        {order_id: undefined, product_id: undefined, quantity: undefined}
    ]);

    
    useEffect(() => {
        const getData = async () => {
            const vendor = await getVendors()
            const newVendor = vendor.map((item: any) => ({
                value: item.id,
                label: item.name
            }))
            setDataVendor(newVendor)
            const warehouse = await getWarehouse()
            const newWarehouse = warehouse.map((item: any) => ({
                value: item.id,
                label: item.name
            }))
            setDataWarehouse(newWarehouse)
        }
        getData()
    }, [])

    return (
        <>
            <Modal
                open={openModal}
                setOpenModal={setOpenModal}
                width="max-w-2xl"
                modalTitle="Tambah pengiriman barang"
                modalDescriptions="Tambah pengiriman barang baru"
                componetsTriger={<BtnCreate setOpenModal={setOpenModal} />}
                modalBodyComponents={<FormsDeliveryNotes
                    date={date}
                    setDate={setDate}
                    dataVendor={dataVendor}
                    setSelectVendor={setSelectVendor}
                    dataWarehous={dataWarehouse}
                    setSelectWarehouse={setSelectWarehouse}
                    setNoref={setNoRef}
                    setDetails={setDetails}
                    setRows={setRows}
                    rows={rows}
                    errors={errors}
                />}
                modalBodyFooter={<FooterDeliveyNotes
                    setOpenModal={setOpenModal}
                    setErrors={setErrors}
                    noRef={noRef}
                    date={date}
                    selectVendor={selectVendor}
                    selectWarehouse={selectWarehouse}
                    details={details}
                    rows={rows}
                    setLoading={setLoading}
                    setRefresh={setRefresh}
                    refresh={refresh}
                />}
            />
        </>
    )
}

