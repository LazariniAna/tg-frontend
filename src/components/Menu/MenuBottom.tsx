'use client'
import React, { useState } from "react";
import { WhatsApp, Instagram, LinearScale } from '@mui/icons-material';

export default function MenuBottom() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        {
            icon: <WhatsApp fontSize="large" />,
            href: "https://wa.me/5551999999999",
            label: "WhatsApp",
            style: 'bg-green-500 hover:bg-green-600'
        },
        {
            icon: <Instagram fontSize="large" />,
            href: "https://www.instagram.com/colegiosoberano/",
            label: "Instagram",
            style: 'bg-gradient-to-r from-[#c96dc6] to-[#FFA500] hover:from-[#eaa8e6] hover:to-[#FFD580]'
        },
    ];

    return (
        <div className="fixed bottom-4 right-4 flex flex-col items-end rounded-full gap-2">
            <div
                className={`flex flex-col items-center gap-2 transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
                    }`}
            >
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="mb-2 flex flex-col justify-center items-center"
                    >
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${item.style} w-12 h-12 text-black p-3 rounded-full shadow-lg flex items-center justify-center`}
                            title={item.label}
                        >
                            {item.icon}
                        </a>
                    </div>
                ))}
            </div>
            <button
                onClick={toggleMenu}
                onMouseEnter={() => setIsOpen(true)}
                className="w-12 h-8 bg-primary hover:bg-primaryLight text-white p-3 rounded-full shadow-lg flex items-center justify-center"
                title="Abrir menu"
            >
                <LinearScale fontSize="large" />
            </button>
        </div>
    );
}
