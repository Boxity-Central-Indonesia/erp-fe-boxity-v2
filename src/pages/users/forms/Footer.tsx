import { Button } from "@/components/ui/button";
import { submitCreate } from "../create/submit";
import { CreateUserPayload } from "../type/userType";
import React from "react";

export const FooterCompany: React.FC<CreateUserPayload> = ({
    name,
    email,
    username,
    no_handphone,
    gender,
    password,
    password_confirmation,
    setErrors,
}) => {
    const handleSubmit = () => {
        submitCreate({
            name,
            email,
            username,
            no_handphone,
            gender,
            password,
            password_confirmation,
            setErrors
        })
    };

    return <Button onClick={handleSubmit}>Tambah pengguna</Button>;
};
