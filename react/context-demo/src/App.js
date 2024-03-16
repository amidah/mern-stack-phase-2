import React from 'react';
import Toolbar from './Toolbar';
import ThemeProvider from './ThemeProvider';
const App = () => {
  return (
    <div>
      <h1>Context Demo</h1>
      <ThemeProvider>
        <Toolbar />
      </ThemeProvider>
    </div>

  );
};
export default App;
