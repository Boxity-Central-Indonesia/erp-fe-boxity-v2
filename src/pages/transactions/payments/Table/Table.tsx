import { TableComponents } from "@/components/commons/table/Table"
import { createColumns } from "./columns"
import { Payment } from "../../type/paymentType"
import { CreatePayments } from "../create/Create"

type TableInvoicesProps = {
    data: Payment[]
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
            <CreatePayments
                setRefresh={setRefresh}
                refresh={refresh}
                setLoading={setLoading}
            />
        </>
    )
}

export const TablePayments:React.FC<TableInvoicesProps> = ({
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