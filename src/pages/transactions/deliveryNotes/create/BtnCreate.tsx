import { Button } from "@/components/ui/button";


type BtnCreateProps = {
    setOpenModal: any
}


export const BtnCreate: React.FC<BtnCreateProps> = ({
    setOpenModal
}) => {
    const handleClick = () => {
        setOpenModal(true)
    }


    return (
        <>
            <Button onClick={handleClick}>Tambah pengiriman barang</Button>
        </>
    )
}