import { submitCreate } from "../create/submit";
import { submitEdit } from "../edit/submit";
import { userPayloadForFooter } from "../type/userType";
import { Delete } from "../delete/Delete";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
// import { Loading } from "@/components/commons/loading/Loading";
// import { useState } from "react";

export const FooterCompany: React.FC<userPayloadForFooter> = ({
    id,
    name,
    email,
    username,
    no_handphone,
    gender,
    password,
    password_confirmation,
    setErrors,
    labelBtn,
    edit,
    setOpenModal,
    setRefresh,
    refresh,
    setLoading
}) => {

    const { toast } = useToast()

    const handleSubmit = () => {
        setLoading(true)
        if (edit === true) {
            submitEdit({
                id,
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
            }, toast)
        } else {
            submitCreate({
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
            }, toast)
        }

    };


    return (
        <>
            <div className="flex items-center space-x-2">
                {edit && (
                    <Delete
                        id={id}
                        setOpenModal={setOpenModal}
                        setLoading={setLoading}
                        setRefresh={setRefresh}
                        refresh={refresh}
                    />
                )}
                <Button onClick={() => handleSubmit()}>{labelBtn}</Button>;
            </div>
        </>
    )
};
