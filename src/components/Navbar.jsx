import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Navbar() {
  const { theme, ToggleTheme } = useContext(ThemeContext); // Access theme and ToggleTheme from context
   
  // Define styles dynamically based on the theme
  const navbarStyle = {
    backgroundColor: 'transparent',
    color: theme === 'light' ? '#fff' : '#000',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: 'auto',
    padding: '15px',
    display: 'flex',
    zIndex: '1000',
  };

  const innerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Spread items to the edges (left and right)
    width: '70vw',
    alignItems: 'center',
    margin: '0 auto',
    borderRadius: '8px',
    padding: '10px',
    backdropFilter: 'blur(10px)',
    backgroundColor: theme === 'light' ? 'white' : 'black', // Adjust background color based on theme
    color: theme === 'light' ? 'black' : 'white', // Adjust text color based on theme
  };

  const logoStyle = {
    fontSize: '1.5rem',
    color: theme === 'light' ? 'black' : 'white', // Adjust logo color based on theme
    fontFamily: 'sans-serif',
    cursor: 'pointer', // Make logo clickable (optional)
  };

  const buttonStyle = {
    background: '#0077ff',
    borderRadius: '6px',
    height: 'auto',
    padding: '5px',
    fontFamily: 'sans-serif',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div>
      <div className="cont" style={navbarStyle}>
        <div style={innerStyle}>
          {/* Logo aligned to the left */}
          <p style={logoStyle}>Jobmailer.io</p>
          {/* Buttons aligned to the right */}
          <div style={{ display: 'flex', gap: '20px' }}>
            
            <p style={buttonStyle}>Generate Emails</p>
            <button
              onClick={ToggleTheme}
              style={{
                cursor: 'pointer',
                padding: '5px 10px',
                borderRadius: '4px',
                background: theme === 'light' ? 'white' : 'black',
              }}
            >
              {theme === 'light' ? 'light' : 'dark'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
