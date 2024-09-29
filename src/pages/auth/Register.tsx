import React, { FC, useState } from 'react';
import { useAuth } from '@/hooks/useAuth'; // Sesuaikan dengan path auth hook Anda
import { NavLink } from 'react-router-dom';
import { z } from 'zod';

// Skema validasi Zod
const registerSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export const Register: FC = () => {
    const { login } = useAuth(); // Jika Anda punya fungsi register di useAuth, ganti ini dengan register
    const [name, setName] = useState<string>(''); 
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>(''); 
    const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Menyimpan pesan error

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validasi data menggunakan Zod
        try {
            const formData = { name, email, password, confirmPassword };
            registerSchema.parse(formData); // Jika validasi berhasil, tidak akan ada error

            // Jika validasi berhasil, panggil fungsi register (atau login dalam contoh ini)
            await login(email, password);
        } catch (validationError: any) {
            // Simpan error di state jika validasi gagal
            const zodErrors = validationError.errors.reduce((acc: any, error: any) => {
                acc[error.path[0]] = error.message;
                return acc;
            }, {});
            setErrors(zodErrors);
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="h-14 mr-2" src="https://res.cloudinary.com/du0tz73ma/image/upload/v1724160254/niW7Uq9WEpa80To1Y7OrmgZmTeYIBq-metaYTQtaGVhZGVyLnBuZw_-_fz0qyj.png" alt="logo Boxity" />
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className={`bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-900 rounded-lg block w-full p-2.5 focus:border-primary focus:ring-primary focus:outline-none`}
                                    placeholder="Your name"
                                    required
                                    value={name}
                                    onChange={handleNameChange}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={`bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 rounded-lg block w-full p-2.5 focus:border-primary focus:ring-primary focus:outline-none`}
                                    placeholder="name@company.com"
                                    required
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className={`bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-300'} text-gray-900 rounded-lg block w-full p-2.5 focus:border-primary focus:ring-primary focus:outline-none`}
                                    required
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="••••••••"
                                    className={`bg-gray-50 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} text-gray-900 rounded-lg block w-full p-2.5 focus:border-primary focus:ring-primary focus:outline-none`}
                                    required
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className={`w-full text-white bg-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                            >
                                Register
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <NavLink to="/login" className="font-medium text-primary hover:text-primary hover:underline dark:text-primary">Sign in</NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
