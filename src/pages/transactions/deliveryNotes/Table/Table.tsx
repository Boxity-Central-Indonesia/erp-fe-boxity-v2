import { TableComponents } from "@/components/commons/table/Table"
import { DeliveryNote } from "../../type/deliveryNotes"
import { createColumns } from "./columns"
import { CreateDeliveryNotes } from "../create/Create"

type TableDeliveryNotesProps = {
    data: DeliveryNote[]
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
            <CreateDeliveryNotes
                setRefresh={setRefresh}
                refresh={refresh}
                setLoading={setLoading}
            />
        </>
    )
}

export const TableDeliveryNotes:React.FC<TableDeliveryNotesProps> = ({
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