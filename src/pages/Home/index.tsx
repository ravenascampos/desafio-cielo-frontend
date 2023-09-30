import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Header } from "@/components/Header";
import { CardHome } from "./CardHome";
import ReceiptIcon from '@mui/icons-material/Receipt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useSummary } from "@/services/summary/summary.hooks";



export function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const {data} = useSummary();
  console.log(data)

  return (
    <Box>
       <Header/>
       <Grid
          marginTop='80px'
          marginLeft={isMobile ? '30px' : '200px'}
          mb={6}
        >
          <Typography
          textAlign='start'
          variant='h1'
          fontWeight={700}
          >
            Resumo
          </Typography>
        </Grid>
      <Grid
        container
        flexDirection='row'
        gap={6}
        alignItems='flex-start'
        marginBottom='64px'
        marginLeft={isMobile ? '30px' : '200px'}
        width={`calc(100% - 200px)`}
      >
        <Grid>
          <CardHome
            title={'Minhas transações'}
            icon={<ReceiptIcon color='primary'/>}
            text={data?.totalQuantity}
            subtitle={'Aprovadas, negadas e pendentes'}
          />
        </Grid>
        <Grid>
          <CardHome
            title={'Minhas vendas'}
            icon={<MonetizationOnIcon color='primary'/>}
            text={new Intl.NumberFormat('pt-BR', {
              style: 'currency', currency: 'BRL'
            }).format(data?.totalAmount)}
            subtitle={'ganhos líquidos e taxas'}
          />
        </Grid>
        <Grid>
          <CardHome
            title={'Meus lucros'}
            icon={<TrendingUpIcon color='primary'/>}
            text={new Intl.NumberFormat('pt-BR', {
              style: 'currency', currency: 'BRL'
            }).format(data?.totalNetAmount)}
            subtitle={'Apenas ganhos líquidos'}
          />
        </Grid>
    </Grid>
    </Box>
    
    
  )
}