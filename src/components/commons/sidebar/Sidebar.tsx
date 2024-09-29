import React, { useState } from "react";
import { NavLink } from "react-router-dom";

type MenuItem = {
    label: string;
    icon: React.ReactNode;
    path: string;
    children?: nestedMenu[]; // Nested items
};

type nestedMenu = {
    label: string;
    path: string;
};

export const Sidebar: React.FC = () => {
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

    const menuSide: MenuItem[] = [
        {
            label: 'Dashboard',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6b7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
            ),
            path: '/'
        },
        {
            label: 'Master',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6b7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="4" y1="21" x2="4" y2="14"></line>
                    <line x1="4" y1="10" x2="4" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="3"></line>
                    <line x1="20" y1="21" x2="20" y2="16"></line>
                    <line x1="20" y1="12" x2="20" y2="3"></line>
                    <line x1="1" y1="14" x2="7" y2="14"></line>
                    <line x1="9" y1="8" x2="15" y2="8"></line>
                    <line x1="17" y1="16" x2="23" y2="16"></line>
                </svg>
            ),
            path: "#",
            children: [
                {
                    label: 'Data pengguna',
                    path: "/users"
                },
                {
                    label: 'Data perusahaan',
                    path: "/companies"
                },
                {
                    label: 'Data Karyawan',
                    path: "/employees"
                },
                {
                    label: 'Leads Prospek',
                    path: "/leads"
                },
                {
                    label: 'Aturan pengguna',
                    path: "/rules"
                },
            ]
        }
    ];

    const handleToggle = (label: string) => {
        setOpenMenus(prevState => ({
            ...prevState,
            [label]: !prevState[label]
        }));
    };

    return (
        <aside className="w-64 fixed top-0 left-0 z-40 border h-screen bg-white">
            <div className="mt-20">
                {menuSide.map((item, index) => (
                    <div key={index}>
                        <NavLink
                            to={item.path}
                            className="flex items-center justify-between gap-2 py-2 px-3 hover:bg-gray-100 cursor-pointer"
                            onClick={() => item.children && handleToggle(item.label)}
                            end
                        >
                            <div className="flex items-center gap-3">
                                <div>{item.icon}</div>
                                <span className="text-gray-600 text-sm font-medium">{item.label}</span>
                            </div>
                            {item.children && (
                                <div>
                                    {openMenus[item.label] ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 12h-15"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 4.5v15"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 12h-15"
                                            />
                                        </svg>
                                    )}
                                </div>
                            )}
                        </NavLink>
                        {/* Render nested items if they exist and menu is open */}
                        {item.children && openMenus[item.label] && (
                            <div className="ml-7">
                                {item.children.map((child, childIndex) => (
                                    <NavLink
                                        to={child.path}
                                        className="flex items-center gap-2 py-2 px-3 hover:bg-gray-100"
                                        key={childIndex}
                                    >
                                        <span className="text-gray-600 text-sm font-medium">{child.label}</span>
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </aside>
    );
};
