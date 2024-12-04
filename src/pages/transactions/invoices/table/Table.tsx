import { TableComponents } from "@/components/commons/table/Table"
import { Invoice } from "../../type/invoicesType"
import { createColumns } from "./columns"
import { CreateInvoices } from "../create/Create"

type TableInvoicesProps = {
    data: Invoice[]
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
    refresh: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

type componentsHeadingProps = {
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
    refresh: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}


const componentsHeading:React.FC<componentsHeadingProps> = ({setRefresh, refresh, setLoading}) => {
    return(
        <>
            <CreateInvoices
                setRefresh={setRefresh}
                refresh={refresh}
                setLoading={setLoading}
            />
        </>
    )
}

export const TableInvoices:React.FC<TableInvoicesProps> = ({
    data,
    setRefresh,
    refresh,
    setLoading
}) => {

    const columns = createColumns({ setRefresh, refresh, setLoading });


    return(
        <>
            <TableComponents columns={columns} data={data} componentsHeading={componentsHeading({setRefresh, refresh, setLoading})}/>
        </>
    )
}