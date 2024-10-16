import { formSchemaUserForEdit } from "../forms/formSchme";
import { userPayloadForEdit } from "../type/userType";
import { updateUser } from "@/services/userServices";

export const submitEdit = async ({
    id, // Tambahkan id untuk mengupdate user yang spesifik
    name,
    email,
    username,
    no_handphone,
    gender,
    setErrors,
    setOpenModal,
    setRefresh,
    refresh,
    setLoading
}: userPayloadForEdit, toast: any): Promise<void> => {

    
    // Siapkan form data
    const formData = {
        name,
        email,
        username,
        no_handphone,
        gender,
    };

    try {
        // Validasi data menggunakan Zod
        formSchemaUserForEdit.parse(formData);

        // Panggil updateUser dengan id dan formData
        await updateUser(id, formData);

        setOpenModal(false)
        setRefresh(() => !refresh)
        toast({
            title: "User berhasil diupdate"
        })
        setLoading(false)
    } catch (validationError: any) {
        // Tangani error validasi dari Zod
        if (validationError.errors) {
            const zodErrors = validationError.errors.reduce((acc: any, error: any) => {
                acc[error.path[0]] = error.message;
                return acc;
            }, {});

            setOpenModal(true)
            setLoading(false)
            setErrors(zodErrors); // Set error ke state
        } else {
            console.error("Error saat submit form:", validationError);
            setLoading(false)
            setOpenModal(true)

        }
    }
};
