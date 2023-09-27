import {Button, Card, CardActions, CardContent, Chip, Divider, Grid, Typography} from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function CardHome() {
  return (
    <Card
    sx={{ 
      maxWidth: 300,
      padding: '20px'
     }}
    >
      <CardContent>
            <Grid
              display='flex'
              justifyContent='flex-end'
              gap={1}
              mb={4}
            >
              <Typography>25/09/2023</Typography>
              <CalendarMonthIcon/>
            </Grid>
          <Grid
            display='flex'
            direction='row'
            justifyContent='space-between'
            mb={2}
            mt={2}
          >
            <Typography>Ganhos:</Typography>
            <Typography>R$ 400,00</Typography>
          </Grid> 
          <Divider/>   
          <Grid
            display='flex'
            direction='row'
            flexWrap='wrap'
            justifyContent='flex-start'
            mt={2}
            gap={1}
          >
            <Chip
              label='Aprovado' 
              icon={<CheckCircleIcon fontSize='small'/>} 
              color='success'
            />
            <Chip
              label='Crédito à vista'
              icon={<LocalOfferIcon fontSize='small'/>}
            />
            <Chip
              label='Mastercard'
              icon={<CreditCardIcon fontSize='small'/>}
            />
        </Grid> 
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button>  
          Detalhes
          <AddIcon fontSize='small'/>
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardHome