import { Input } from "@/components/ui/input"
import { Table } from "@tanstack/react-table"; // Import the correct type from react-table


type propsInputSearch = {
    table: Table<any>,
    placeholder: string,
    valueGetColumns: string
}

export const InputSearch:React.FC<propsInputSearch> = ({table, placeholder, valueGetColumns}) => {
    return (
        <>
            <Input
                placeholder={placeholder}
                value={(table.getColumn(valueGetColumns)?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                    table.getColumn(valueGetColumns)?.setFilterValue(event.target.value)
                }
                className="max-w-xl mb-3"
            />
        </>
    )
}