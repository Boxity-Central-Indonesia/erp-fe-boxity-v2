import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import { ModalHeading } from "./ModalHeading";

type modalProps = {
    width: string,
    modalTitle: string,
    modalDescriptions: string,
    modalBodyComponents: React.ReactNode,
    modalBodyFooter: React.ReactNode,
    componetsTriger: React.ReactNode,
    open: boolean
    setOpenModal: any
    setErrors: any
}

export const Modal: React.FC<modalProps> = ({
    width,
    modalTitle,
    modalDescriptions,
    modalBodyComponents,
    modalBodyFooter,
    componetsTriger,
    open,
    setOpenModal,
    setErrors
}) => {
    return (
        <Dialog.Root open={open}>
            {componetsTriger}
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-blackA6 z-30 data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide" />
            </Dialog.Portal>
            <Dialog.Content className={`${width} fixed z-40 left-1/2 top-1/2 max-h-[85vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow data-[state=closed]:animate-contentHide`}>
                <ModalHeading modalTitle={modalTitle} modalDescriptions={modalDescriptions} />
                <ModalBody>
                    {modalBodyComponents}
                </ModalBody>
                <ModalFooter setOpenModal={setOpenModal} setErrors={setErrors}>
                    {modalBodyFooter}
                </ModalFooter>
            </Dialog.Content>
        </Dialog.Root>
    )
}