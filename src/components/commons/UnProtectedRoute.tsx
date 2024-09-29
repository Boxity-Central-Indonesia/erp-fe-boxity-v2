import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { ThreeDots } from 'react-loader-spinner';

type UnprotectedRouteProps = {
    children: JSX.Element;
};

export const UnprotectedRoute: React.FC<UnprotectedRouteProps> = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <div className='w-screen h-screen flex items-center justify-center'>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#F95B12"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass="" />
        </div>; // Atau komponen loading lain // Atau komponen loading lain
    }

    if (isAuthenticated) {
        // Redirect ke halaman dashboard jika pengguna sudah login
        return <Navigate to="/" />;
    }

    // Jika pengguna belum login, render komponen yang tidak dilindungi
    return children;
};
