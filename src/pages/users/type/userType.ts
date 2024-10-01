

export type User = {
    errors: objectErrors
    setName: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setUsername: React.Dispatch<React.SetStateAction<string>>
    setno_handphone: React.Dispatch<React.SetStateAction<string>>
    setGender: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setpassword_confirmation: React.Dispatch<React.SetStateAction<string>>
};

export type CreateUserPayload = {
    name: string;
    email: string;
    username: string;
    no_handphone: string;
    gender: string;
    password: string;
    password_confirmation: string;
    setErrors: React.Dispatch<React.SetStateAction<objectErrors>>;
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
    name: string;
    email: string;
    username: string;
    no_handphone: string;
    gender: string;
    password: string;
    password_confirmation: string;
};