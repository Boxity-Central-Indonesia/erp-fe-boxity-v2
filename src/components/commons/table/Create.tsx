import { Modal } from "../modal/Modal"

type createProps = {
    label: string
    modalBodyFooter: any
    modalBodyComponens: any
}

export const Create: React.FC<createProps> = ({ 
    label,
    modalBodyComponens,
    modalBodyFooter 
}) => {
    return (
        <>
            <Modal
                label={`Tambah ${label}`}
                modalTitle={`Tambah ${label}`}
                modalDescriptions="Tambah user baru"
                width="max-w-xs"
                modalBodyFooter={modalBodyComponens}
                modalBodyComponents={modalBodyFooter}
            />
        </>
    )
}