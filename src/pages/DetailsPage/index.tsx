import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CardDetails } from "./components/CardDetails";
import { TextDetails } from "./components/TextDetails";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ErrorIcon from '@mui/icons-material/Error';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import PaidIcon from '@mui/icons-material/Paid';
import SellIcon from '@mui/icons-material/Sell';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ContactlessIcon from '@mui/icons-material/Contactless';
import { Header } from "@/components/Header";
import * as dayjs from 'dayjs'
import { useParams } from "react-router-dom";
import { useTransactionDetails } from "@/hooks/DetailsTransaction/useTransactionsDetails";
import { LoadingDetails } from "./components/LoadingDetails";
import { ErrorDetails } from "./components/ErrorDetails";

export function DetailsPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { id } = useParams();
    const { data: transaction, isLoading, isError} = useTransactionDetails(id);

    if (isLoading) {
      return <LoadingDetails/>
    }
    if (isError) {
      return <ErrorDetails title={'Não foi possível buscar os detalhes da transação'}/>
    }
    if (!transaction) {
      return <ErrorDetails title={'Transação não encontrada'} />
    }

  return (
    <Box>
      <Header/>
      <Grid
        container
        flexDirection='column'
        gap={6}
        alignItems='stretch'
        marginTop='64px'
        marginBottom='64px'
        marginLeft={isMobile ? '50px' : '200px'}
        width={isMobile ? '100%' : `calc(100% - 200px)`}
    >
      <Grid
        item
        mt={6}
      >
        <Typography variant='h1'>Detalhes</Typography>
      </Grid>
      <Grid
        display='flex'
        flexDirection='column'
        alignItems={isMobile ? 'flex-start' : 'center'}
      >
        <Grid
        justifyContent='center'
        alignItems='center'
      >
        <TextDetails
            icon={<ReceiptIcon color='primary'/>}
            title='ID'
            text={transaction.id} />
          <Divider />
          <TextDetails
            icon={<CalendarMonthIcon color='primary'/>}
            title='Data'
            text={dayjs(transaction.date).format('DD/MM/YYYY')} />
          <Divider />
            {
              transaction.status === 'Aprovada' ? (
              <TextDetails
                icon={<CheckCircleIcon color='success'/>}
                title='Status'
                text={transaction.status} />
              ) : transaction.status === 'Pendente' ? (
                <TextDetails
                  icon={<PendingIcon color='warning'/>}
                  title='Status'
                  text={transaction.status} />
              ) : (
                <TextDetails
                  icon={<ErrorIcon color='error'/>}
                  title='Status'
                  text={transaction.status} />
              )
            }
          <Divider />
          <TextDetails
            icon={<PaidIcon color='primary'/>}
            title='Valor da compra'
            text={new Intl.NumberFormat('pt-BR', {
              style: 'currency', currency: 'BRL'
            }).format(transaction.grossAmount)} />
          <Divider />
          <TextDetails
            icon={<TrendingUpIcon color='primary'/>}
            title='Valor recebido'
            text={new Intl.NumberFormat('pt-BR', {
              style: 'currency', currency: 'BRL'
            }).format(transaction.netAmount)} />
          <Divider />
          <TextDetails
            icon={<TrendingDownIcon color='primary'/>}
            title='Valor da Taxa MDRFee'
            text={new Intl.NumberFormat('pt-BR', {
              style: 'currency', currency: 'BRL'
            }).format(transaction.mdrFeeAmount)} />
          <Divider />
          <TextDetails
            icon={<SellIcon color='primary'/>}
            title='Tipo de pagamento'
            text={transaction.paymentType} />
          <Divider />
          <TextDetails
            icon={<PointOfSaleIcon color='primary'/>}
            title='Meio de pagamento'
            text={transaction.channel} />
          <Divider />
          <TextDetails
            icon={<ContactlessIcon color='primary'/>}
            title='Código do canal'
            text={transaction.channelCode} />
          <Divider />
          <TextDetails
            icon={<RequestQuoteIcon color='primary'/>}
            title='Códido de autorização'
            text={transaction.authorizationCode} />
          <Divider />
      </Grid>
      <Grid>
      <CardDetails
        cardBrand={transaction.cardBrand}
        truncatedCardNumber={`**** **** **** ${transaction.truncatedCardNumber}`}
      />
      </Grid>
    </Grid>
      </Grid>
      
    </Box>
    
  )
}