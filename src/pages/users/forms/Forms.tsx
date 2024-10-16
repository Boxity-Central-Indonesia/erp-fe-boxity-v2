import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormSelectCompany } from "./Select";
import React from "react";
import { User } from "../type/userType";


export const FormsUser: React.FC<User> = ({
    setName,
    setEmail,
    setUsername,
    setPassword,
    setpassword_confirmation,
    setGender,
    setno_handphone,
    edit,
    errors,
    name,
    email,
    username,
    no_handphone,
    gender,
}) => {
    return (
        <>
            <div className="grid grid-cols-2 w-full items-center gap-3">
                <div>
                    <Label htmlFor="name">Nama</Label>
                    <Input
                        className="mt-1"
                        id="name"
                        type="text"
                        placeholder="nama"
                        onChange={(e) => setName(e.target.value)}
                        value={name ?? ''}
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-2">{errors.name}</p>}
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        className="mt-1"
                        id="email"
                        type="email"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email ?? ''}
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-2">{errors.email}</p>}
                </div>
                <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                        className="mt-1"
                        id="username"
                        type="text"
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username ?? ''}
                    />
                    {errors.username && <p className="text-red-600 text-sm mt-2">{errors.username}</p>}
                </div>
                <div>
                    <Label>Gender</Label>
                    <FormSelectCompany setGender={setGender} gender={gender}/>
                    {errors.gender && <p className="text-red-600 text-sm mt-2">{errors.gender}</p>}
                </div>
                <div>
                    <Label htmlFor="no_handphone">Nomor handphone</Label>
                    <Input
                        className="mt-1"
                        id="no_handphone"
                        type="text"
                        placeholder="Nomor handphone"
                        onChange={(e) => setno_handphone(e.target.value)}
                        value={no_handphone ?? ''}
                    />
                    {errors.no_handphone && <p className="text-red-600 text-sm mt-2">{errors.no_handphone}</p>}
                </div>
                {edit && (
                    <>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                className="mt-1"
                                id="password"
                                type="password"
                                placeholder="*******"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className="text-red-600 text-sm mt-2">{errors.password}</p>}
                        </div>
                        <div>
                            <Label htmlFor="password_confirmation">Konfirmasi password</Label>
                            <Input
                                className="mt-1"
                                id="password_confirmation"
                                type="password"
                                placeholder="*******"
                                onChange={(e) => setpassword_confirmation(e.target.value)}
                            />
                            {errors.password_confirmation && <p className="text-red-600 text-sm mt-2">{errors.password_confirmation}</p>}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
