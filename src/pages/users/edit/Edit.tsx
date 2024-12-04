import { Modal } from "@/components/commons/modal/Modal"
import { IconEdit } from "./IconEdit"
import { FormsUser } from "../forms/Forms"
import React, { useState } from "react"
import { objectErrors } from "../type/userType"
import { FooterUser } from "../forms/Footer"


type editProps = {
    id: string
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
    refresh: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditUsers: React.FC<editProps> = ({ 
    id,
    refresh,
    setRefresh,
    setLoading
}) => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [username, setUserName] = useState<string>('')
    const [no_handphone, setno_handphone] = useState<string>('')
    const [gender, setGender] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [password_confirmation, setpassword_confirmation] = useState<string>('')
    const [errors, setErrors] = useState<objectErrors>({})
    const [openModal, setOpenModal] = useState<any>()


    return (
        <>
            <Modal
                componetsTriger={<IconEdit
                    id={id}
                    setName={setName}
                    setEmail={setEmail}
                    setUsername={setUserName}
                    setGender={setGender}
                    setno_handphone={setno_handphone}
                    setOpenModal={setOpenModal}
                />}
                open={openModal}
                modalTitle="Edit pengguna"
                modalDescriptions="Edit pengguna yang dipilih"
                width="max-w-2xl"
                setOpenModal={setOpenModal}
                setErrors={setErrors}
                modalBodyComponents={
                    <FormsUser
                        setName={setName}
                        setEmail={setEmail}
                        setUsername={setUserName}
                        setno_handphone={setno_handphone}
                        setGender={setGender}
                        setPassword={setPassword}
                        setpassword_confirmation={setpassword_confirmation}
                        errors={errors}
                        name={name}
                        email={email}
                        username={username}
                        gender={gender}
                        no_handphone={no_handphone}
                        password={password}
                        password_confirmation={password_confirmation}
                        setErrors={setErrors}
                        edit={false}
                    />
                }
                modalBodyFooter={<FooterUser
                    id={id}
                    name={name}
                    email={email}
                    username={username}
                    no_handphone={no_handphone}
                    gender={gender}
                    password={password}
                    password_confirmation={password_confirmation}
                    setErrors={setErrors}
                    labelBtn="Simpan perubahan"
                    edit={true}
                    setOpenModal={setOpenModal}
                    refresh={refresh}
                    setRefresh={setRefresh}
                    setLoading={setLoading}
                />}
            />
        </>
    )
}