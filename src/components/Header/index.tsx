import { AppBar, Avatar, Box, Drawer, Grid, IconButton, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import logo from '../../../images/logo.png';
import avatar from '../../../images/avatar.jpg'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Menu from "../Menu";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  return (
    <Box>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Grid
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          mr={2}
          ml={isMobile ? 0 : 2}
        >
        <Grid>
          { isMobile ?
           ( <Toolbar>
              <IconButton
                onClick={handleMenuToggle}
              >
                <MenuIcon/>
              </IconButton>
            </Toolbar>) :
            (<img src={logo} width='50px'/>)
          }
        </Grid>
        <Grid
          display='flex'
          flexDirection='row'
          alignItems='center'
          gap={2}
        >
          <IconButton>
            <DarkModeIcon/>
          </IconButton>
          <IconButton>
            <Avatar src={avatar}/>
          </IconButton>
        </Grid>
        </Grid>
      </AppBar>
      <Box component='nav'>
          <Drawer
            variant='temporary'
            open={mobileOpen}
            onClose={handleMenuToggle}
            sx={{
              '& .MuiDrawer-paper': { boxSizing: 'border-box', marginTop: '56px' },
            }}
          >
            <Menu/>
          </Drawer>
          <Drawer
            variant='permanent'
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', marginTop: '60px' },
            }}
          >
            <Menu/>
          </Drawer>
      </Box>
    </Box>
    
  )
}
