import { TableComponents } from "@/components/commons/table/Table"
import { Companies } from "@/services/companiesServices"
import {columns} from "./columns"
import { CreateCompany } from "./Create"


type TableCompaniesProps = {
    data: Companies[]
}

const componentsHeading = () => {
    return(
        <>
            <CreateCompany
                label="Perusahaan"
            />
        </>
    )
}

export const TableCompany:React.FC<TableCompaniesProps> = ({
    data
}) => {
    return (
        <>
            <TableComponents columns={columns} data={data} componentsHeading={componentsHeading()}/>
        </>
    )
}