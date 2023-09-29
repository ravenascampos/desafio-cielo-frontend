import { Card, CardContent, Divider, Grid, Typography} from '@mui/material'
import { cardHomeProps } from './cardHome.types';

export function CardHome({ title, icon, subtitle, text }: cardHomeProps) {
  return (
    <Card
      sx={{ 
        width: 300,
        padding: '15px'
       }}
    >
      <CardContent>
            <Grid
              display='flex'
              alignItems='center'
              gap={1}
              mb={2}
            >
              {icon}
              <Typography
                textAlign='start'
                variant='h3'
                fontWeight={600}
              >{title}</Typography>
            </Grid>
            <Divider/>
          <Grid
            display='flex'
            direction='row'
            alignItems='center'
            justifyContent='center'
            mb={4}
            mt={4}
          >
            <Typography
              textAlign='center'
              variant='h2'
              fontWeight={700}
            >{text}</Typography>
          </Grid>   
          <Grid
            display='flex'
            direction='row'
            flexWrap='wrap'
            justifyContent='flex-end'
            mt={2}
          >
         <Typography textAlign='end' variant='h4'>{subtitle}</Typography>
        </Grid> 
      </CardContent>
    </Card>
  )
}