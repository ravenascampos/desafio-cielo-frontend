
import { Button, Grid, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import darkImg  from '../../../images/notFound-dark.png';
import { Link as RouterLink } from "react-router-dom";
import lightImg from '../../../images/notFound-light.png'
import { useColorMode } from "@/context";


export function NotFound() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [colorMode] = useColorMode();
  return (
      <Grid
      container
      flexDirection='column'
      alignItems='center'
      width='100vw'
      sx={{
        position:'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <Grid
        item
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap={2}
        mb={6}
      >
        <Typography
        fontSize= {isMobile ? '1.5rem' : '2rem'}
        >Algo deu errado...</Typography>
        <Typography
          fontSize={isMobile ? '1rem' : '1.5rem'}
        >Não encontramos a página que você procura</Typography>
      </Grid>
      <Grid
        mb={6}
      >
        {
        colorMode === 'dark' ?
          <img src={darkImg} alt='error 404' width={isMobile ? '250px' : '350px'}/> : 
          <img src={lightImg} alt='error 404' width={isMobile ? '250px' : '350px'}/>
      }
      </Grid>
      <Grid>
      <Link
					component={RouterLink}
					to='/'
				>
        <Button
        sx={{ textTransform: 'none' }}
        variant='contained'
      >Voltar para a Home</Button>
      </Link>
      </Grid>
    </Grid>
    
  )
}

