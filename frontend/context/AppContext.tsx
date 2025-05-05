"use client"

import { createContext, ReactNode, useContext, useState } from "react";


interface AppContextType {
    isInView: boolean;
    setView: React.Dispatch<React.SetStateAction<boolean>>;
    isPointer: boolean;
    setIsPointer: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
    
    const [isInView, setView] = useState<boolean>(false)
    const [isPointer, setIsPointer] = useState<boolean>(false);

    return (
        <AppContext.Provider value={{ isInView, setView, isPointer, setIsPointer }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export default AppProvider