import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import React from "react"


type ModalHeadingProps = {
    modalTitle: string,
    modalDescriptions: string,
}


export const ModalHeading:React.FC<ModalHeadingProps> = ({
    modalTitle,
    modalDescriptions
}) => {
    return (
        <>
            <DialogHeader className="border-b">
                <DialogTitle className="">{modalTitle}</DialogTitle>
                <DialogDescription className="pb-3">
                    {modalDescriptions}
                </DialogDescription>
            </DialogHeader>
        </>
    )
}