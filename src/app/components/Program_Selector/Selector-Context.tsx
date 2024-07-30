"use client"

import { createContext, useContext, useState } from "react";

interface Type {
    selected : number;
    setSelected : (newValue : number) => void;
}

const defaultValue: Type = {
    selected : 1,
    setSelected : () => {}
}

const selectorContext = createContext<Type>(defaultValue);

export const SelectorProvider = ({ children }: { children: React.ReactNode }) => {
    const [selected, setSelected] = useState(1);

    return (
        <selectorContext.Provider value={{ selected, setSelected }}>
            {children}
        </selectorContext.Provider>
    );
}

export const useSelectorContext = () => useContext(selectorContext);