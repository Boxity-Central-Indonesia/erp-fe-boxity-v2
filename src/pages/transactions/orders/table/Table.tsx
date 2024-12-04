import { TableComponents } from "@/components/commons/table/Table"
import { Order } from "../../type/orderType"
import { createColumns } from "./column"
import { CreateOrders } from "../create/Create"

type TableOrderProps = {
    data: Order[]
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
            <CreateOrders
                setRefresh={setRefresh}
                refresh={refresh}
                setLoading={setLoading}
            />
        </>
    )
}

export const TableOrder:React.FC<TableOrderProps> = ({
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