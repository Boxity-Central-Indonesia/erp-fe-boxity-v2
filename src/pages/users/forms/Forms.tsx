import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormSelectCompany } from "./Select"
import { User } from "../type/userType"
import React from "react"


export const FormsUser: React.FC<User> = ({
    setName,
    setEmail,
    setUsername,
    setPassword,
    setpassword_confirmation,
    setGender,
    setno_handphone,
    errors
}) => {
   
    return (
        <>
            <div className="grid grid-cols-2 w-full items-center gap-3">
                <div>
                    <Label className="" htmlFor="name">Nama</Label>
                    <Input className="mt-1" id="name" type="text" placeholder="nama" onChange={(e) => setName(e.target.value)}/>
                    {errors.name && <p className="text-red-600 text-sm mt-2">{errors.name}</p>}
                </div>
                <div>
                    <Label className="" htmlFor="email">Email</Label>
                    <Input className="mt-1" id="email" type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    {errors.email && <p className="text-red-600 text-sm mt-2">{errors.email}</p>}
                </div>
                <div>
                    <Label className="" htmlFor="username">Username</Label>
                    <Input className="mt-1" id="username" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    {errors.username && <p className="text-red-600 text-sm mt-2">{errors.username}</p>}
                </div>
                <div>
                    <Label className="">Gender</Label>
                    <FormSelectCompany setGender={setGender}/>
                    {errors.gender && <p className="text-red-600 text-sm mt-2">{errors.gender}</p>}
                </div>
                <div>
                    <Label className="" htmlFor="no_handphone">Nomor handphone</Label>
                    <Input className="mt-1" id="no_handphone" type="text" placeholder="Nomor handphone" onChange={(e) => setno_handphone(e.target.value)}/>
                    {errors.no_handphone && <p className="text-red-600 text-sm mt-2">{errors.no_handphone}</p>}
                </div>
                <div>
                    <Label className="" htmlFor="password">Password</Label>
                    <Input className="mt-1" id="password" type="password" placeholder="*******" onChange={(e) => setPassword(e.target.value)}/>
                    {errors.password && <p className="text-red-600 text-sm mt-2">{errors.password}</p>}
                </div>
                <div>
                    <Label className="" htmlFor="password_confirmation">Konfirmasi password</Label>
                    <Input className="mt-1" id="password_confirmation" type="password_confirmation" placeholder="*******" onChange={(e) => setpassword_confirmation(e.target.value)}/>
                    {errors.password_confirmation && <p className="text-red-600 text-sm mt-2">{errors.password_confirmation}</p>}
                </div>
            </div>
        </>
    )
}