import React from "react";


type AuthLayoutProps = {
    children: React.ReactNode;
}

export const AuthLayouts: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};
