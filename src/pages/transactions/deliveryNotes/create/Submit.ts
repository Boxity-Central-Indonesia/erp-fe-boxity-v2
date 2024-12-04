import { formSchemaDeliveryNotes } from "../forms/FormsSchem"
import { showToast } from "@/components/commons/toast/Toast"
import { ZodError } from "zod"
import { createDeliveryNotes } from "@/services/deliveryNotesServices"

interface SubmitCreateProps {
    dataBody: Record<string, any>
    setRefresh: any
    refresh: boolean
    setOpenModal: any
    setErrors: any
    setLoading: any
}

export const SubmitCreate = async ({
    dataBody,
    setRefresh,
    refresh,
    setOpenModal,
    setErrors,
    setLoading
}: SubmitCreateProps) => {
    setLoading(true)
    try {
        // Validate the dataBody using Zod schema
        formSchemaDeliveryNotes.parse(dataBody);

        // If validation passes, proceed with creating the order
        const response = await createDeliveryNotes({ dataBody });


        if (response === 201) {
            setRefresh(!refresh); // Toggle the `refresh` state
            setOpenModal(false); // Close the modal
            setErrors({}); // Clear any previous errors
            setLoading(false)
            showToast({
                icon: "success",
                title: "Pengiriman barang berhasil dibuat"
            })
        } else {
            console.error("Failed to create pengiriman barang:", response);
            throw new Error("Failed to create pengiriman barang");
        }
    } catch (error) {
        if (error instanceof ZodError) {
            // Handle Zod validation errors
            const errors = error.errors.reduce((acc: Record<string, string>, curr) => {
                acc[curr.path[0]] = curr.message;
                return acc;
            }, {});
            setLoading(false)
            setErrors(errors); // Pass formatted errors to setErrors
            console.log(errors);
        } else {
            // Handle other errors (e.g., network issues)
            console.error("Error during pengiriman barang creation:", error);
        }
    }
}