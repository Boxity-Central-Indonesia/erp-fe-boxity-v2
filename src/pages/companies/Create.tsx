import { Modal } from "@/components/commons/modal/Modal"
import React from "react"


type createCompanyProps = {
    modalBodyFooter: any
    modalBodyComponens: any
}


export const CreateCompany: React.FC<createCompanyProps> = ({
    modalBodyFooter,
    modalBodyComponens
}) => {
    return(
        <>
            <Modal
                label="Tambah perusahaan"
                modalTitle="Tambah perusahaan"
                modalDescriptions="Tambah perusahaan cabang baru"
                width="max-w-xl"
                modalBodyComponents={modalBodyComponens}
                modalBodyFooter={modalBodyFooter}
            />
        </>
    )
}