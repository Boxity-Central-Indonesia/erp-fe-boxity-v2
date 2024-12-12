import { Modal } from "@/components/commons/modal/Modal";
import React, { useState, useEffect } from "react";
import { BtnCreate } from "./BtnCreate";
import { FormsDeliveryNotes } from "../forms/Forms";
import { FooterDeliveyNotes } from "../forms/Footer";
import { getVendors } from "@/services/vendorServices";
import { getWarehouse } from "@/services/warehouseServices";

// Types for API response
interface Vendor {
    id: number;
    name: string;
}

interface Warehouse {
    id: number;
    name: string;
}

interface Option {
    value: number;
    label: string;
}

// Row data interface for delivery notes
interface RowData {
    order_id: string | undefined;
    product_id: string | undefined;
    quantity: string | undefined;
}

interface CreateDeliveryNotesProps {
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
    refresh: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateDeliveryNotes: React.FC<CreateDeliveryNotesProps> = ({
    setRefresh,
    refresh,
    setLoading,
}) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [errors, setErrors] = useState<Record<string, string | undefined>>({});
    const [noRef, setNoRef] = useState<string | undefined>(undefined);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [selectVendor, setSelectVendor] = useState<string | undefined>(undefined);
    const [selectWarehouse, setSelectWarehouse] = useState<string | undefined>(undefined);
    const [details, setDetails] = useState<string | undefined>(undefined);
    const [dataOrder, setDataOrder] = useState<RowData[]>([]);
    const [dataProduct, setDataProduct] = useState<any[]>([]); // Should be typed
    const [qty, setQty] = useState<number | null>(null);
    const [selectOrder, setSelectOrder] = useState<string | undefined>('');
    const [selectProduct, setSelectProduct] = useState<string | undefined>('');
    const [dataVendor, setDataVendor] = useState<Option[]>([]);  // Type as Option[]
    const [dataWarehouse, setDataWarehouse] = useState<Option[]>([]); // Type as Option[]
    const [rows, setRows] = useState<RowData[]>([
        { order_id: undefined, product_id: undefined, quantity: undefined },
    ]);

    // Fetch vendors and warehouse data
    useEffect(() => {
        const getData = async () => {
            try {
                // Fetch vendors
                const vendors: Vendor[] = await getVendors();
                const newVendor: Option[] = vendors.map((item: Vendor) => ({
                    value: item.id,
                    label: item.name,
                }));
                setDataVendor(newVendor);

                // Fetch warehouses
                const warehouses: Warehouse[] = await getWarehouse();
                const newWarehouse: Option[] = warehouses.map((item: Warehouse) => ({
                    value: item.id,
                    label: item.name,
                }));
                setDataWarehouse(newWarehouse);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle error, maybe set error state
            }
        };

        getData();
    }, []);

    return (
        <>
            <Modal
                open={openModal}
                setOpenModal={setOpenModal}
                width="max-w-2xl"
                modalTitle="Tambah pengiriman barang"
                modalDescriptions="Tambah pengiriman barang baru"
                componetsTriger={<BtnCreate setOpenModal={setOpenModal} />}
                modalBodyComponents={
                    <FormsDeliveryNotes
                        date={date}
                        setDate={setDate}
                        dataVendor={dataVendor}
                        setSelectVendor={setSelectVendor}
                        dataWarehouse={dataWarehouse}
                        setSelectWarehouse={setSelectWarehouse}
                        setNoref={setNoRef}
                        setDetails={setDetails}
                        setRows={setRows}
                        rows={rows}
                        errors={errors}
                    />
                }
                modalBodyFooter={
                    <FooterDeliveyNotes
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
                    />
                }
            />
        </>
    );
};
