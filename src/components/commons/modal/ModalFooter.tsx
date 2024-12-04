import React from "react"
import * as Dialog from "@radix-ui/react-dialog";

type ModalFooterProops = {
    children: React.ReactNode
    setOpenModal: any
    setErrors: any
}

export const ModalFooter: React.FC<ModalFooterProops> = ({ children, setOpenModal, setErrors }) => {

    const handleClick = () => {
        setOpenModal(false)
        setErrors({})
    }

    return (
        <>
            <div className="mt-4">
                <Dialog.Close asChild>
                    <button
                        onClick={handleClick}
                        className="absolute right-2.5 top-2.5 h-0 w-0 inline-flex p-3 appearance-none items-center justify-center rounded-md"
                        aria-label="Close"
                    >
                        x
                    </button>
                </Dialog.Close>
                <div className="float-right">
                    {children}
                </div>
            </div>
        </>
    )
}