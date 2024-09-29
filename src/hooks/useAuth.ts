import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "@/services/authServices";

type AuthContextType = {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
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
            const currentUser = await authService.getCurrentUser();
            if (currentUser) {
                setUser(currentUser);
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
        logout,
        isAuthenticated: user !== null,
        isLoading,
    };
};
