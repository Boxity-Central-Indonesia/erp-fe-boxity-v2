import { Button } from "@/components/ui/button"
import * as Dialog from "@radix-ui/react-dialog";

type BtnCreateProps = {
    setOpenModal: any
}

export const BtnCreate:React.FC <BtnCreateProps> = ({setOpenModal}) => {
    return (
        <>
            <Dialog.Trigger asChild>
                <Button onClick={() => setOpenModal(true)}>Tambah pengguna</Button>
            </Dialog.Trigger>
        </>
    )
}