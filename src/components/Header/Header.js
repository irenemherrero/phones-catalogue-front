import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import { ToolbarButtonContainer, CustomLogoIcon, AppName } from './header.style'

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Link to="/phones">
          <ToolbarButtonContainer>
          <CustomLogoIcon/>
          <AppName> Phones catalogue </AppName>
          </ToolbarButtonContainer>
        </Link>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
