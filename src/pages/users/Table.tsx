import { TableComponents } from "@/components/commons/table/Table"
import {columns} from "./columns"
import { User } from "@/services/userServices"
import { CreateUser } from "./create/Create"

type TableUserProps = {
    data: User[]
}


const componentsHeading = () => {
    return(
        <>
            <CreateUser
                label="User"
            />
        </>
    )
}

export const TableUser:React.FC<TableUserProps> = ({
    data
}) => {
    return(
        <>
            <TableComponents columns={columns} data={data} componentsHeading={componentsHeading()}/>
        </>
    )
}