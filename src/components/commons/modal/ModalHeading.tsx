import React from "react";
import * as Dialog from "@radix-ui/react-dialog";



type ModalHeadingProps = {
    modalTitle: string,
    modalDescriptions: string,
}

export const ModalHeading: React.FC<ModalHeadingProps> = ({
    modalTitle,
    modalDescriptions
}) => {
    return (
        <>
            <div className="border-b">
                <Dialog.Title className="m-0 text-lg font-semibold text-mauve12">
                    {modalTitle}
                </Dialog.Title>
                <Dialog.Description className="mb-5 text-[15px] leading-normal text-mauve11">
                    {modalDescriptions}
                </Dialog.Description>
            </div>
        </>
    )
}