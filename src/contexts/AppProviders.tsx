'use client';

import React from "react";
import { UserProvider } from "./UserContext";

export default function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <UserProvider>
            {/* Envolva outros contextos aqui */}
            {children}
        </UserProvider>
    );
}
