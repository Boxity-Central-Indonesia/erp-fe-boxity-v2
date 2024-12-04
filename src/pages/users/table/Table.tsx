import { TableComponents } from "@/components/commons/table/Table"
import { CreateUser } from "../create/Create"
import { userForm } from "../type/userType"
import { createColumns } from "./columns"

type TableUserProps = {
    data: userForm[]
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
            <CreateUser
                label="User"
                setRefresh={setRefresh}
                refresh={refresh}
                setLoading={setLoading}
            />
        </>
    )
}

export const TableUser:React.FC<TableUserProps> = ({
    data,
    setRefresh,
    refresh,
    setLoading,
}) => {

    const columns = createColumns({ setRefresh, refresh, setLoading });


    return(
        <>
            <TableComponents 
                columns={columns} 
                data={data} 
                componentsHeading={componentsHeading({setRefresh, refresh, setLoading})}/>
        </>
    )
}