import React from "react";


export type User = {
    errors: objectErrors
    setName: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setUsername: React.Dispatch<React.SetStateAction<string>>
    setno_handphone: React.Dispatch<React.SetStateAction<string>>
    setGender: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setpassword_confirmation: React.Dispatch<React.SetStateAction<string>>
    name: string
    email: string
    username: string
    no_handphone: string
    gender: string
    password: string
    password_confirmation: string
    edit: boolean
    setErrors: React.Dispatch<React.SetStateAction<objectErrors>>;
};

export type UserForForms = {
    errors: objectErrors
    setName: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setUsername: React.Dispatch<React.SetStateAction<string>>
    setno_handphone: React.Dispatch<React.SetStateAction<string>>
    setGender: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setpassword_confirmation: React.Dispatch<React.SetStateAction<string>>
    name: string
    email: string
    username: string
    no_handphone: string
    gender: string
    password: string
    password_confirmation: string
    setErrors: React.Dispatch<React.SetStateAction<objectErrors>>;
};

export type userPayload = {
    name: string;
    email: string;
    username: string;
    no_handphone: string;
    gender: string;
    password: string;
    password_confirmation: string;
    setErrors: React.Dispatch<React.SetStateAction<objectErrors>>;
    setOpenModal: React.Dispatch<React.SetStateAction<any>>
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
    refresh: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
};

export type userPayloadForEdit = {
    id: string;
    name: string;
    email: string;
    username: string;
    no_handphone: string;
    gender: string;
    setErrors: React.Dispatch<React.SetStateAction<objectErrors>>;
    setOpenModal: React.Dispatch<React.SetStateAction<any>>
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
    refresh: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
};

export type userPayloadForFooter = {
    id: string;
    name: string;
    email: string;
    username: string;
    no_handphone: string;
    gender: string;
    password: string;
    password_confirmation: string;
    setErrors: React.Dispatch<React.SetStateAction<objectErrors>>;
    labelBtn: string
    edit: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<any>>
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
    refresh: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
};


export type objectErrors = {
    name?: string;
    email?: string;
    username?: string;
    no_handphone?: string;
    gender?: string;
    password?: string;
    password_confirmation?: string;
    [key: string]: string | undefined; // Untuk mendukung properti dinamis
};

export type userForm = {
    id: string;
    name: string;
    email: string;
    username: string;
    no_handphone: string;
    gender: string;
    password: string;
    password_confirmation: string;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
    refresh: boolean
};

export type userDelete = {
    id: string
    setOpenModal: React.Dispatch<React.SetStateAction<any>>
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    refresh: boolean
}