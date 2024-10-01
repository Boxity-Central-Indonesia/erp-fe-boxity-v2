import { InputSearch } from "./InputSearch"
import { HideColumns } from "./HideColumns"

type headingProps = {
    table: any,
    valueGetColumns: string,
    placeholderForSearch: string, // corrected typo
    children: React.ReactNode, // corrected typo
}

export const Heading: React.FC<headingProps> = ({
    table,
    valueGetColumns,
    placeholderForSearch, // corrected typo
    children, // corrected typo
}) => {
    return (
        <div className="flex justify-between px-4">
            <InputSearch
                table={table}
                valueGetColumns={valueGetColumns}
                placeholder={placeholderForSearch} // corrected typo
            />
            <div className="space-x-3">
                <HideColumns table={table} />
                {children}
            </div>
        </div>
    )
}
