import { userDelete } from "../type/userType"
import { AlertDialogDelete } from "./AlertDialogDelete"

export const Delete: React.FC<userDelete> = ({
    id,
    setOpenModal,
    setLoading,
    setRefresh,
    refresh
}) => {


    return (
        <>
            <AlertDialogDelete
                id={id}
                setOpenModal={setOpenModal}
                setLoading={setLoading}
                setRefresh={setRefresh}
                refresh={refresh}
            />
        </>
    )
}   