import Select, { SingleValue } from "react-select";
import { Label } from "@/components/ui/label";

interface SelectIputProps {
    data: Option[]
    setSelectData: any
    placeHolder: string | null
    name: string | undefined
    marginTop: string | null
}

interface Option {
    label: string;
    value: number;
}

export const SelectInput: React.FC<SelectIputProps> = ({
    data,
    setSelectData,
    placeHolder,
    name,
    marginTop
}) => {

    const handleChangeInvoices = (option: SingleValue<Option>) => {
        setSelectData(option?.value)
    }

    return (
        <>
            <div>
                <Select
                    onChange={handleChangeInvoices}
                    name={name}
                    options={data}
                    placeholder={placeHolder}
                    isClearable
                    className={`${marginTop??'mt-2'} fixed`}
                />
            </div>
        </>
    )
}