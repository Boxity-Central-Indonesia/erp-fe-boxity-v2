import { createPayments } from "@/services/paymentServices"
import { showToast } from "@/components/commons/toast/Toast"
import { formSchemaPaymentsCreate } from "../forms/FormsSchema"
import { ZodError } from "zod";

interface SubmitCreateProps {
    dataBody: Record<string, any>
    setRefresh: any
    refresh: boolean
    setOpenModal:any
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
        formSchemaPaymentsCreate.parse(dataBody);

        // If validation passes, proceed with creating the order
        const response = await createPayments({ dataBody });

        if (response === 201) {
            setRefresh(!refresh); // Toggle the `refresh` state
            setOpenModal(false); // Close the modal
            setErrors({}); // Clear any previous errors
            setLoading(false)
            showToast({
                icon: "success",
                title: "Faktur tagihan berhasil dibuat"
            })
        } else {
            console.error("Failed to create faktur tagihan:", response);
            throw new Error("Failed to create faktur tagihan");
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
        } else {
            // Handle other errors (e.g., network issues)
            console.error("Error during faktur tagihan creation:", error);
        }
    }
}