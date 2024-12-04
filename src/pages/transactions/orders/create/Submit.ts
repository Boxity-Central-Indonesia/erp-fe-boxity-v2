import { createOrders } from "@/services/orderServices";
import { formSchemaOrderCreate } from "../forms/FormSchem";
import { ZodError } from "zod";
import { showToast } from "@/components/commons/toast/Toast";

interface SubmitCreateProps {
    dataBody: Record<string, any>; // Flexible type, can be replaced with a specific type if known
    setRefresh: any; // Function to update state
    refresh: any;
    setOpenModal: any;
    setErrors: any; // Function to handle form errors
    setLoading: any
}

export const submitCreate = async ({
    dataBody,
    setRefresh,
    refresh,
    setOpenModal,
    setErrors,
    setLoading
}: SubmitCreateProps): Promise<void> => {
    setLoading(true)
    try {
        // Validate the dataBody using Zod schema
        formSchemaOrderCreate.parse(dataBody);

        // If validation passes, proceed with creating the order
        const response = await createOrders({ dataBody });

        if (response === 201) {
            setRefresh(!refresh); // Toggle the `refresh` state
            setOpenModal(false); // Close the modal
            setErrors({}); // Clear any previous errors
            setLoading(false)
            showToast({
                icon: "success",
                title: "Pesanan berhasil dibuat"
            })
        } else {
            console.error("Failed to create order:", response);
            throw new Error("Failed to create order");
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
            console.error("Error during order creation:", error);
        }
    }
};
