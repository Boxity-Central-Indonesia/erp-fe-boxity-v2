import { formSchemaUser } from "../forms/formSchme";
import { userPayload } from "../type/userType";
import { createUser } from "@/services/userServices";

export const submitCreate = async ({
    name,
    email,
    username,
    no_handphone,
    gender,
    password,
    password_confirmation,
    setErrors,
    setOpenModal,
    setRefresh,
    refresh,
    setLoading
}: userPayload, toast: any): Promise<void> => {

    const formData = {
        name,
        email,
        username,
        no_handphone,
        gender,
        password,
        password_confirmation,
        setOpenModal
    };

    try {
        // Validasi form menggunakan Zod
        formSchemaUser.parse(formData);

        await createUser({
            name,
            email,
            username,
            no_handphone,
            gender,
            password,
            password_confirmation
        })
        setOpenModal(false)
        setRefresh(() => !refresh)
        toast({
            title: "User berhasil dibuat"
        });
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
