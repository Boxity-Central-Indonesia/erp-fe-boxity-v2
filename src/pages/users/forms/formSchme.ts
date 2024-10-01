import z from "zod"


export const formSchemaUser = z.object({
    name: z.string().min(3, { message: "Nama harus memiliki minimal 3 karakter" }).nonempty({ message: "Nama harus diisi" }),
    email: z.string().email({ message: "Email tidak valid" }).nonempty({ message: "Email harus diisi" }),
    username: z.string().min(3, { message: "Username harus memiliki minimal 3 karakter" }).nonempty({ message: "Username harus diisi" }),
    gender: z.string().nonempty({ message: "Gender harus diisi" }),
    no_handphone: z.string().nonempty({ message: "Nomor handphone harus diisi" }),
    password: z.string().min(6, { message: "Password harus memiliki minimal 6 karakter" }).nonempty({ message: "Password harus diisi" }),
    password_confirmation: z.string().min(6, { message: "Konfirmasi password harus memiliki minimal 6 karakter" }).nonempty({ message: "Konfirmasi password harus diisi" }),
})
.refine((data) => data.password === data.password_confirmation, {
    message: "Password dan konfirmasi password harus sama",
    path: ["password_confirmation"], // Mengacu ke field yang salah
});
