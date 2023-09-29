import { ThemeOptions } from "@mui/material";
 
export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    background: { default: '#403C3D' },
    text: { primary: '#f7cad0' },
    primary: { main: '#ff5d8f' },
    secondary: { main: '#dc6bad' },
    success: { main: '#90be6d' },
    error: { main: '#d7263d' },
    warning: { main: '#fdd85d'}
  },
  typography: {
    fontFamily: ['Montserrat', 'Helvetica', 'sans-serif'].join(','),
    h1: {
      fontSize: '1.5rem',
      fontFamily: 'Montserrat',
      fontWeight: 700
    },
    h2: {
      fontSize: '1.2rem',
      fontFamily: 'Montserrat',
    },
    h3: {
      fontSize: '1rem',
      fontFamily: 'Montserrat'
    },
    h4: {
      fontSize: '0.875rem',
      fontFamily: 'Montserrat'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
       root: {
        background: '#2C2828',
        color: '#f7cad0',
        borderBottom: 'solid 1px #dc6bad'
       }
      }
    },
    MuiButton: {
      variants: [
        {
          props: {variant: 'contained'},
          style: {
            color: '#2C2828', 
            background: '#dc6bad',
            fontWeight: 700,
            borderRadius: '10px'
          }
        }
      ]
    },
    MuiCard: {
      styleOverrides: {
        root: { 
          background: '#2C2828',
          borderRadius: '20px'
       }
      }
    },
    MuiDivider: {
      variants: [
        {
          props: { variant: 'middle' },
          style: { background: '#dc6bad' }
        },
        {
          props: { variant: 'fullWidth' },
          style: { background: '#dc6bad' }
        }
      ]
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          '& .MuiDrawer-paper': {
            background: '#2C2828',
          }
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: { padding: '10px' }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: { color: '#f7cad0' },
      }
    },
  }
}