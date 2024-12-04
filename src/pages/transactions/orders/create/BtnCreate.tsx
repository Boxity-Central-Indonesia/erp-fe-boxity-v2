import { Button } from "@/components/ui/button"
import { getVendors } from "@/services/vendorServices";
import { getWarehouse } from "@/services/warehouseServices";

type BtnCreateProps = {
    setOpenModal: any
    setDataOrder: any
    setDataWarehouse: any
}

export const BtnCreate: React.FC<BtnCreateProps> = ({
    setOpenModal,
    setDataOrder,
    setDataWarehouse
}) => {

    const handleClick = async () => {
        setOpenModal(true)

        const vendors = await getVendors()
        const warehouse = await getWarehouse()

        setDataOrder(vendors)
        setDataWarehouse(warehouse)
    }

    return (
        <>
            <Button onClick={handleClick}>Tambah order</Button>
        </>
    )
}