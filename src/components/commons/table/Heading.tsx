import React from "react"
import { Create } from "./Create"
import { HideColumns } from "./HideColumns"
import { InputSearch } from "./InputSearch"

type headingProps = {
    labelCreate: string,
    table: any,
    valueGetColumns: string,
    plachoderForSearch: string,
    modalBodyFooter: any
    modalBodyComponents: any
}

export const Heading: React.FC<headingProps> = ({
    labelCreate,
    table,
    valueGetColumns,
    plachoderForSearch,
    modalBodyFooter,
    modalBodyComponents
}) => {
    return (
        <>
            <div className="flex justify-between px-4">
                <InputSearch
                    table={table}
                    valueGetColumns={valueGetColumns}
                    placeholder={plachoderForSearch}
                />
                <div className="space-x-3">
                    <HideColumns table={table} />
                    {/* <Create
                        label={labelCreate}
                        modalBodyComponens={modalBodyComponents}
                        modalBodyFooter={modalBodyFooter}
                    /> */}
                </div>
            </div>
        </>
    )
}