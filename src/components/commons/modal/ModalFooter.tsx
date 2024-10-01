import React from "react"
import { DialogFooter } from "@/components/ui/dialog"

type ModalFooterProops = {
    children: React.ReactNode
}

export const ModalFooter: React.FC<ModalFooterProops> = ({ children }) => {
    return (
        <>
            <DialogFooter>
                <div className="mt-4">
                    {children}
                </div>
            </DialogFooter>
        </>
    )
}