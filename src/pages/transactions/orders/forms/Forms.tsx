import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import Select, { SingleValue } from "react-select";
import { SetStateAction, useEffect, useState } from "react";
import { Vendor } from "../../type/orderType";

interface FormOrderProps {
    dataOrder: Vendor[]
    dataWarehouse: []
    setDataOrderType: React.Dispatch<React.SetStateAction<string | undefined>>
    setDataReferensi: React.Dispatch<React.SetStateAction<string | undefined>>
    dataOrderType: string
    dataReferensi: string
    setDataSelectVendor: React.Dispatch<React.SetStateAction<string | undefined>>
    setDataSelectWarehouse: React.Dispatch<React.SetStateAction<string | undefined>>
    setSelectedOrderType: React.Dispatch<React.SetStateAction<string | undefined>>
    selectedOrderType: string | undefined
    setDetails: React.Dispatch<React.SetStateAction<string | undefined>>
    errors: Record<string, string | undefined>
}

interface Option {
    label: string;
    value: string;
}


export const FormOrder: React.FC<FormOrderProps> = ({
    dataOrder,
    dataWarehouse,
    dataOrderType,
    dataReferensi,
    setDataOrderType,
    setDataReferensi,
    setDataSelectVendor,
    setDataSelectWarehouse,
    setSelectedOrderType,
    selectedOrderType,
    setDetails,
    errors
}) => {

    const [orderOption, setDataOrderOption] = useState<any>()
    const [warehouseOption, setDataWarehouseOption] = useState<any>()
    const [useWarehouse, setUseWarehouse] = useState<boolean>(false)

    useEffect(() => {
        const vendor = dataOrder?.map((item: { id: number; name: string }) => ({
            value: item.id,
            label: item.name
        }))
        const warehouse = dataWarehouse?.map((item: { id: number; name: string }) => ({
            value: item.id,
            label: item.name
        }))
        setDataOrderOption(vendor)
        setDataWarehouseOption(warehouse)
        console.log(dataOrder)
    }, [dataOrder])


    const handelChangeOrder = (option: SingleValue<Option>) => {
        setDataSelectVendor(option?.value);
        setSelectedOrderType(option?.value);
    
        // Convert option?.value to a number if it's a string, and ensure proper comparison
        const newData = dataOrder.find((item: Vendor) => item.id === Number(option?.value));
    
        // Check if newData exists and transaction_type is not undefined
        if (newData && newData.transaction_type !== undefined) {
            if (newData.transaction_type === 'supplier') {
                setUseWarehouse(true);
                return;
            }
        }
    
        setUseWarehouse(false);
    };
    
    

    const handleChangeWarehouse = (option: SingleValue<Option>) => {
        setDataSelectWarehouse(option?.value)
    }

    const handleOrderTypeChange = (event: { target: { value: SetStateAction<string | undefined>; }; }) => {
        setSelectedOrderType(event.target.value);
    };

    return (
        <>
            <div className="grid grid-cols-2 w-full items-center gap-3">
                <div>
                    <Label htmlFor="name">Pilih vendor</Label>
                    <Select
                        onChange={handelChangeOrder}
                        name="kode-order"
                        options={orderOption}
                        placeholder="Pilih kode order"
                        isClearable
                        className="mt-3"
                    />
                    {errors.vendor_id && <p className="text-red-600 text-sm mt-2">{errors.vendor_id}</p>}
                </div>
                <div>
                    <Label htmlFor="name">Pilih gudang</Label>
                    <Select
                        name="kode-order"
                        options={warehouseOption}
                        onChange={handleChangeWarehouse}
                        placeholder="Pilih gudang"
                        isClearable
                        className="mt-3"
                        isDisabled={useWarehouse}
                    />

                    {errors.warehouse_id && <p className="text-red-600 text-sm mt-2">{errors.warehouse_id}</p>}
                </div>
                <div>
                    <Label htmlFor="name">No referensi</Label>
                    <Input
                        onChange={(e) => setDataReferensi(e.target.value)}
                        className="mt-1"
                        id="name"
                        type="text"
                        placeholder="no referensi"
                    />
                    {errors.no_ref && <p className="text-red-600 text-sm mt-2">{errors.no_ref}</p>}
                </div>

                <div className="">
                    <Label>Tipe order</Label>
                    <div className="flex items-center gap-3 h-full mt-2">
                        <div className="flex gap-2">
                            <input
                                type="radio"
                                name="orderType"
                                value="Production Order"
                                checked={selectedOrderType === "Production Order"}
                                onChange={handleOrderTypeChange}
                            />
                            <Label htmlFor="production">Production order</Label>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="radio"
                                name="orderType"
                                value="Direct Order"
                                checked={selectedOrderType === "Direct Order"}
                                onChange={handleOrderTypeChange}
                            />
                            <Label htmlFor="direct">Direct order</Label>
                        </div>
                    </div>
                    {errors.order_type && <p className="text-red-600 text-sm mt-2">{errors.order_type}</p>}
                </div>

                <div className="col-span-2">
                    <Label htmlFor="name">Detail</Label>
                    <Textarea onChange={(e) => setDetails(e.target.value)} className="mt-1" placeholder="Type your message here." />
                    {/* {errors.name && <p className="text-red-600 text-sm mt-2">{errors.name}</p>} */}
                </div>

                <div className="col-span-2">
                    <Label htmlFor="name">Pilih produk</Label>
                    <Select
                        name="kode-order"
                        options={[]}
                        placeholder="Pilih produk"
                        isClearable
                        className="mt-3"
                    />
                    {/* {errors.name && <p className="text-red-600 text-sm mt-2">{errors.name}</p>} */}
                </div>
            </div>
        </>
    )
}