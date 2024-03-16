import React, { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundColor = theme === 'light' ? '#FBE1E1' : '#F65050';
    }, [theme]);
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    const themeContextValue = {
        theme,
        toggleTheme,
    };
    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeProvider;