import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
const Toolbar = () => {
    const themeContext = useContext(ThemeContext);
    const { theme, toggleTheme } = themeContext;
    return (
        <div>
            <h2>Toolbar</h2>
            <button
                style={{ backgroundColor: theme }}
                onClick={toggleTheme}
            >
                Change Theme
            </button>
        </div>
    );
};
export default Toolbar;