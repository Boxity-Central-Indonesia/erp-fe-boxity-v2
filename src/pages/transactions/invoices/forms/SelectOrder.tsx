import Select, { SingleValue } from "react-select";
import { Label } from "@/components/ui/label";
import React from "react";

interface SelectOrderProps {
    dataOrder: any
    setSelectDataOrder: any
}

interface Option {
    label: string;
    value: string;
}

export const SelectOrder: React.FC<SelectOrderProps> = ({
    dataOrder,
    setSelectDataOrder
}) => {

    const handelChangeOrder = (option: SingleValue<Option>) => {
        setSelectDataOrder(option?.value)
    }

    return (
        <>
            <div>
                <Label htmlFor="name">Pilih order</Label>
                <Select
                    onChange={handelChangeOrder}
                    name="kode-order"
                    options={dataOrder}
                    placeholder="Pilih kode order"
                    isClearable
                    className="mt-2"
                />
                {/* {errors.vendor_id && <p className="text-red-600 text-sm mt-2">{errors.vendor_id}</p>} */}
            </div>
        </>
    )
}