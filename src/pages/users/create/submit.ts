import { formSchemaUser } from "../forms/formSchme";
import { CreateUserPayload } from "../type/userType";
import { createUser } from "@/services/userServices";

export const submitCreate = async ({
    name,
    email,
    username,
    no_handphone,
    gender,
    password,
    password_confirmation,
    setErrors
}: CreateUserPayload): Promise<void> => {
    const formData = {
        name,
        email,
        username,
        no_handphone,
        gender,
        password,
        password_confirmation,
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
        // Jika validasi berhasil, Anda dapat melakukan tindakan lebih lanjut di sini,
        // seperti mengirim data ke server.
    } catch (validationError: any) {
        // Tangani error validasi dari Zod
        const zodErrors = validationError.errors.reduce((acc: any, error: any) => {
            acc[error.path[0]] = error.message;
            return acc;
        }, {});

        setErrors(zodErrors)
    }
};
