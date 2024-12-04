import { FormsUser } from "../forms/Forms"
import { useState } from "react"
import { FooterUser } from "../forms/Footer"
import { objectErrors } from "../type/userType"
import { BtnCreate } from "./BtnCreate"
import { Modal } from "@/components/commons/modal/Modal"

type createProps = {
    label: string
    setRefresh: React.Dispatch<React.SetStateAction<boolean >>
    refresh: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateUser: React.FC<createProps> = ({
    label,
    setRefresh,
    refresh,
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
                open={openModal}
                componetsTriger={<BtnCreate setOpenModal={setOpenModal}/>}
                modalTitle={`Tambah ${label}`}
                modalDescriptions="Tambah user baru"
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
                        no_handphone={no_handphone}
                        gender={gender}
                        password={password}
                        password_confirmation={password_confirmation}
                        setErrors={setErrors}
                        edit={true}
                    />
                }
                modalBodyFooter={<FooterUser 
                    id={''}
                    name={name}
                    email={email}
                    username={username}
                    no_handphone={no_handphone}
                    gender={gender}
                    password={password}
                    password_confirmation={password_confirmation}
                    setErrors={setErrors}
                    labelBtn="Tambah user"
                    edit={false}
                    setOpenModal={setOpenModal}
                    setRefresh={setRefresh}
                    refresh={refresh}
                    setLoading={setLoading}
                />}
            />
        </>
    )
}