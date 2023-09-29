import {Button, Card, CardActions, CardContent, Chip, Divider, Grid, Typography} from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { cardTransactionsProps } from './cardTransactions.types';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ErrorIcon from '@mui/icons-material/Error';

export function CardTransactions({
  date, status, netAmount, paymentType, cardBrand
}:cardTransactionsProps) {
  return (
    <Card
    sx={{ 
      maxWidth: 250,
      padding: '20px'
     }}
    >
      <CardContent>
            <Grid
              display='flex'
              justifyContent='flex-end'
              alignItems='center'
              gap={1}
              mb={4}
            >
              <Typography
                variant='h4'
              >{date}</Typography>
              <CalendarMonthIcon fontSize='small' color='primary'/>
            </Grid>
          <Grid
            display='flex'
            direction='row'
            justifyContent='space-between'
            mb={2}
            mt={2}
          >
            <Typography variant='h3'>Ganhos:</Typography>
            <Typography variant='h3' fontWeight={700}>{netAmount}</Typography>
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
            {
              status === 'Aprovada' ? (
                <Chip
                  label={status}
                  color='success'
                  icon={ <CheckCircleIcon fontSize='small'/> }
                />
              ) : status === 'Pendente' ? (
                <Chip
                  label={status}
                  color='warning'
                  icon={ <PendingIcon fontSize='small'/> }
                />
              ) : (
          <Chip
            label={status}
            color='error'
            icon={ <ErrorIcon fontSize='small'/> }
          />
        )
            }
            <Chip
              label={paymentType}
              icon={<LocalOfferIcon fontSize='small' color='primary'/>}
            />
            <Chip
              label={cardBrand}
              icon={<CreditCardIcon fontSize='small' color='primary'/>}
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