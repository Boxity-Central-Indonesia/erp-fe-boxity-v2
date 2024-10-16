import { Button } from "@/components/ui/button"
import { DialogTrigger } from "@radix-ui/react-dialog"
import * as Dialog from "@radix-ui/react-dialog";

type BtnCreateProps = {
    setOpenModal: any
}

export const BtnCreate:React.FC <BtnCreateProps> = ({setOpenModal}) => {
    return (
        <>
            {/* <DialogTrigger asChild>
                <Button>Tambah pengguna</Button>
            </DialogTrigger> */}
            <Dialog.Trigger asChild>
                <Button onClick={() => setOpenModal(true)}>Tambah pengguna</Button>
            </Dialog.Trigger>
        </>
    )
}