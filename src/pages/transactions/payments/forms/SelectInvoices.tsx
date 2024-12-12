import React from "react";
import Select, { SingleValue } from "react-select";
import { Label } from "@/components/ui/label";

// Define the correct types for the options
interface InvoiceOption {
    value: number; // the value is of type number
    label: string;
}

interface SelectInvoiceProps {
    dataInvoices: InvoiceOption[];
    setSelectDataInvoices: React.Dispatch<React.SetStateAction<number | undefined>>; // Set state type for number or undefined
}

export const SelectInvoices: React.FC<SelectInvoiceProps> = ({
    dataInvoices,
    setSelectDataInvoices
}) => {

    // Define the handleChangeInvoices to match the type of dataInvoices
    const handleChangeInvoices = (option: SingleValue<InvoiceOption>) => {
        setSelectDataInvoices(option?.value); // Set the selected invoice value (which is a number)
    }

    return (
        <>
            <div>
                <Label htmlFor="name">Pilih faktur tagihan</Label>
                <Select
                    onChange={handleChangeInvoices}
                    name="kode-order"
                    options={dataInvoices}
                    placeholder="Pilih faktur tagihan"
                    isClearable
                    className="mt-2"
                />
            </div>
        </>
    );
};
