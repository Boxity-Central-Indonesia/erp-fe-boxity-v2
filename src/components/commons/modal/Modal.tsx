import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ModalBody } from "./ModalBody"
import React from "react"
import { ModalFooter } from "./ModalFooter"


type modalProps = {
  label: string,
  width: string,
  modalTitle: string,
  modalDescriptions: string,
  modalBodyComponents: any,
  modalBodyFooter: any,
}

import { ModalHeading } from "./ModalHeading"

export const Modal: React.FC<modalProps> = ({
  label,
  width,
  modalTitle,
  modalDescriptions,
  modalBodyComponents,
  modalBodyFooter
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{label}</Button>
      </DialogTrigger>
      <DialogContent className={`${width}`}>
        <ModalHeading modalTitle={modalTitle} modalDescriptions={modalDescriptions} />
        <ModalBody>
          {modalBodyComponents}
        </ModalBody>
        <div className="border-t">
          <ModalFooter>
            {modalBodyFooter}
          </ModalFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
