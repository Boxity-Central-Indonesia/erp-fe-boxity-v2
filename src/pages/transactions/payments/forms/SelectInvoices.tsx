import Select, { SingleValue } from "react-select";
import { Label } from "@/components/ui/label";

interface SelectInvoiceProps {
    dataInvoices: []
    setSelectDataInvoices: any
}

interface Option {
    label: string;
    value: string;
}

export const SelectInvoices: React.FC<SelectInvoiceProps> = ({
    dataInvoices,
    setSelectDataInvoices
}) => {

    const handleChangeInvoices = (option: SingleValue<Option>) => {
        setSelectDataInvoices(option?.value)
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
    )
}