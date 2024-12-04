import { Button } from "@/components/ui/button"
import { submitCreate } from "../create/Submit"

interface FooterOrderProps {
    selectedOrderType: string
    dataReferensi: string
    dataSelectVendor: string
    dataSelectWarehouse: string
    details: string
    setRefresh: any
    refresh: any
    setOpenModal: any
    setErrors: any
    setLoading: any
}

export const FooterOrder: React.FC<FooterOrderProps> = ({
    selectedOrderType,
    dataReferensi,
    dataSelectVendor,
    dataSelectWarehouse,
    details,
    setRefresh,
    refresh,
    setOpenModal,
    setErrors,
    setLoading
}) => {

    const handleSubmit = () => {
        const dataBody = {
            vendor_id: dataSelectVendor,
            warehouse_id: dataSelectWarehouse,
            status: 'pending',
            details,
            order_type: selectedOrderType,
            no_ref: dataReferensi,
            products: []

        }

        submitCreate({
            dataBody: dataBody, 
            setRefresh: setRefresh, 
            refresh: refresh,
            setOpenModal: setOpenModal,
            setErrors: setErrors,
            setLoading: setLoading
        })
    }

    return(
        <>
             <div className="flex items-center space-x-2">
                {/* {edit && (
                    <Delete
                        id={id}
                        setOpenModal={setOpenModal}
                        setLoading={setLoading}
                        setRefresh={setRefresh}
                        refresh={refresh}
                    />
                )} */}
                <Button onClick={() => handleSubmit()}>Simapan Pesanan</Button>
            </div>
        </>
    )
}