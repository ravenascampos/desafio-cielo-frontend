import { AppBar, Box, Divider, Drawer, Grid, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Menu } from "../Menu";
import { useColorMode } from "@/context/ColorModeContext/ColorModeContext.provider";

export function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  }
  const [colorMode, toggleColorMode] = useColorMode();
  const drawerWidth = 200

  return (
    <Box
      sx={{
        bgcolor: 'background.default'
      }}
    >
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: isMobile ? '100%' : `calc(100% - ${drawerWidth}px)`
        }}
      >
        <Grid
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
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
            (<Toolbar>
              <Typography variant="h2">Frontend Challenge Cielo + Ada</Typography>
            </Toolbar>)
          }
        </Grid>
        <Grid
          display='flex'
          flexDirection='row'
          alignItems='center'
          gap={2}
        >
          <IconButton onClick={toggleColorMode} color='primary'>
            {colorMode === 'dark' ? <DarkModeIcon/> : <LightModeIcon/>}
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
              '& .MuiDrawer-paper': { boxSizing: 'border-box'},
            }}
          > 
          <Toolbar/>
          <Divider/>
          <Menu/>
          </Drawer>
      </Box>
    </Box>
    
  )
}
