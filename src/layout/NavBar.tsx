import * as React from 'react';
import Box from '@mui/material/Box';
import '../App.css'

const NavBar: React.FC = () => {
    return (
        <Box>
            <div className="header">
                <img src="https://cloudnine.com/wp-content/uploads/2019/07/logo.png" alt="CloudNine" />
                <h1><i>DOCS</i> Analyzer</h1>
            </div>
        </Box>
      );
}

export default NavBar