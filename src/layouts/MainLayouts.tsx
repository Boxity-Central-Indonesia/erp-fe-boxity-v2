import React from 'react';
import { Navbar } from "@/components/commons/navbar/Navbar";
import { Sidebar } from "@/components/commons/sidebar/Sidebar";
import { Footer } from "@/components/commons/footer/Footer";

type MainLayoutsProps = {
    children: React.ReactNode;
};

export const MainLayouts: React.FC<MainLayoutsProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <main className="bg-slate-50 h-screen ml-64 mt-14 p-4">
                {children}
            </main>
            <Footer />
        </>
    );
};
