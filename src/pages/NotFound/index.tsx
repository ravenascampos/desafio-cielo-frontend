
import { Button, Grid, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import darkImg  from '../../../images/notFoun-dark.png';
import { Link as RouterLink } from "react-router-dom";
// import lightImg from '../../../images/notFound-light.png'


export function NotFound() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
      <img src={darkImg} alt='logo ada_store_challenge em dark mode' width={isMobile ? '250px' : '400px'}/>
        {/* {
        colorMode === 'dark' ?
          <img src={darkImg} alt='logo ada_store_challenge em dark mode' width={isMobile ? '250px' : '350px'}/> : 
          <img src={lightImg} alt='logo ada_store_challenge em dark light' width={isMobile ? '250px' : '350px'}/>
      } */}
      </Grid>
      <Grid>
      <Link
					component={RouterLink}
					to='/'
				>
        <Button variant='contained'>Voltar para a Home</Button>
      </Link>
      </Grid>
    </Grid>
    
  )
}

