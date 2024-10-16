import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "@/services/authServices";
import { getToken } from "@/services/cookie";

type AuthContextType = {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string, password_confirmation: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    isLoading: boolean;
};

type User = {
    email: string;
    name: string;
    token: string;
};

export const useAuth = (): AuthContextType => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const token = getToken(); // Ambil token dari cookie
            if (token) {
                const currentUser = await authService.getCurrentUser();
                if (currentUser) {
                    setUser(currentUser);
                }
            }
            setIsLoading(false);
        };

        fetchUser();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            await authService.login(email, password);
            const currentUser = await authService.getCurrentUser();
            setUser(currentUser);
            navigate("/"); // Redirect setelah login berhasil
        } catch (error) {
            console.error("Failed to login", error);
            // Tambahkan logika untuk menampilkan pesan error ke user jika diperlukan
        }
    };

    const register = async (name: string, email: string, password: string, password_confirmation: string) => {
        try {
            await authService.register(name, email, password, password_confirmation);
        } catch (error) {
            console.error("Failed to register", error);
        }
    };

    const logout = async () => {
        try {
            await authService.logout();
            setUser(null);
            navigate("/login"); // Redirect ke halaman login setelah logout
        } catch (error) {
            console.error("Failed to logout", error);
        }
    };

    return {
        user,
        login,
        register,
        logout,
        isAuthenticated: getToken() != null, // Cek apakah token ada, bukan hanya user
        isLoading,
    };
};
