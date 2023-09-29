import {ThemeOptions} from '@mui/material';

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    background: { default: '#f7eeed' },
    text: { primary: '#360a14' },
    primary: { main: '#820263' },
    secondary: { main: '#ad336d' },
    success: { main: '#90be6d' },
    error: { main: '#ef233c' },
    warning: { main: '#fdc921'}
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
        background: '#ffd2fc',
        color: '#262223',
        borderBottom: 'solid 1px #ad336d'
       }
      }
    },
    MuiButton: {
      variants: [
        {
          props: {variant: 'contained'},
          style: {
            color: '#ffd2fc',
            fontWeight: 700,
            borderRadius: '10px'
        }
        },
        {
          props: { variant: 'text' },
          style: { fontWeight: 700 }
        }
      ]
    },
    MuiCard: {
      styleOverrides: {
        root: { 
          background: '#ffd2fc',
          border: 'solid 1px #ad336d',
          borderRadius: '20px'
        }
      }
    },
    MuiDivider: {
      variants: [
        {
          props: { variant: 'middle' },
          style: { background: '#ad336d' }
        },
        {
          props: { variant: 'fullWidth' },
          style: { background: '#ad336d' }
        }
      ]
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          '& .MuiDrawer-paper': {
            background: '#ffd2fc',
          },
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: { color: '#360a14' },
      }
    },
  }
}