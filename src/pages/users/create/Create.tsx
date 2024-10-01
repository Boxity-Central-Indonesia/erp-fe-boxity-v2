import { Modal } from "@/components/commons/modal/Modal"
import { FormsUser } from "../forms/Forms"
import { useState } from "react"
import { FooterCompany } from "../forms/Footer"
import { objectErrors } from "../type/userType"

type createProps = {
    label: string
}

export const CreateUser: React.FC<createProps> = ({
    label,
}) => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [username, setUserName] = useState<string>('')
    const [no_handphone, setno_handphone] = useState<string>('')
    const [gender, setGender] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [password_confirmation, setpassword_confirmation] = useState<string>('')
    const [errors, setErrors] = useState<objectErrors>({})

    return (
        <>
            <Modal
                label={`Tambah ${label}`}
                modalTitle={`Tambah ${label}`}
                modalDescriptions="Tambah user baru"
                width="max-w-2xl"
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
                    />
                }
                modalBodyFooter={<FooterCompany 
                    name={name}
                    email={email}
                    username={username}
                    no_handphone={no_handphone}
                    gender={gender}
                    password={password}
                    password_confirmation={password_confirmation}
                    setErrors={setErrors}
                />}
            />
        </>
    )
}