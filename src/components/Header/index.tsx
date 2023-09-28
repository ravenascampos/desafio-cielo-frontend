import { AppBar, Avatar, Grid, IconButton } from "@mui/material";
import logo from '../../../images/logo.png';
import avatar from '../../../images/avatar.jpg'
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Header() {
  return (
    <AppBar position='absolute'>
      <Grid
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        mr={2}
        ml={2}
      >
        <Grid>
          <img src={logo} width='50px'/>
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
  )
}
