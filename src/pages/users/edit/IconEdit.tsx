import { DialogTrigger } from "@radix-ui/react-dialog"
import React from "react"
import { getUserById } from "../show/getUserById"

type iconEditProps = {
    id: string,
    setName: any,
    setEmail: any,
    setUsername: any,
    setGender: any,
    setno_handphone: any,
    setOpenModal: any,
}

export const IconEdit: React.FC<iconEditProps> = ({
    id,
    setName,
    setEmail,
    setUsername,
    setGender,
    setno_handphone,
    setOpenModal
}) => {



    const handleClick = async () => {
        setOpenModal(true)
        try {
            const user = await getUserById(id); // Mendapatkan user object
            setName(user.name); // Mengambil dan set properti name
            setEmail(user.email); // Mengambil dan set properti email
            setUsername(user.username); // Mengambil dan set properti username
            setGender(user.gender ?? ''); // Mengambil dan set properti gender
            setno_handphone(user.no_handphone); // Mengambil dan set properti no_handphone
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }
    

    return (
        <>
            <DialogTrigger className="cursor-pointer" onClick={() => handleClick()} asChild>
                <svg className="w-5 h-5 text-primary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                </svg>
            </DialogTrigger>
        </>
    )
}