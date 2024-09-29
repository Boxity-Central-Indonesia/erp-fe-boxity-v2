import React, { createContext, useContext } from 'react';

type ColorContextType = {
    primaryColor: string;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const primaryColor = '#F95B12';

    return (
        <ColorContext.Provider value={{ primaryColor }}>
            {children}
        </ColorContext.Provider>
    );
};

export const useColor = () => {
    const context = useContext(ColorContext);
    if (!context) {
        throw new Error('useColor must be used within a ColorProvider');
    }
    return context;
};
