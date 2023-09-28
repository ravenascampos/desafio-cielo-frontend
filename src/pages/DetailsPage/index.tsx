import { Box, Divider } from "@mui/material";
import CardDetails from "./components/CardDetails";
import TextDetails from "./components/TextDetails";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import PaidIcon from '@mui/icons-material/Paid';
import SellIcon from '@mui/icons-material/Sell';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ContactlessIcon from '@mui/icons-material/Contactless';
import Header from "@/components/Header";

export default function DetailsPage() {
  return (
    <Box>
      <Header/>
      <Box
      sx={{
        border: 'solid',
        borderColor: '#334155',
        borderRadius: '15px',
        maxWidth: '500px',
        minWidth: '250px',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto'
      }}
    >
        <TextDetails
          icon={<ReceiptIcon/>}
          title='ID'
          text='R114606514478703'
        />
        <Divider/>
        <TextDetails
          icon={<CalendarMonthIcon/>}
          title='Data'
          text='2021-05-26'
        />
        <Divider/>
        <TextDetails
          icon={<CheckCircleIcon/>}
          title='Status'
          text='Aprovada'
        />
        <Divider/>
        <TextDetails
          icon={<PaidIcon/>}
          title='Valor da compra'
          text='R$ 80.0'
        />
        <Divider/>
        <TextDetails
          icon={<TrendingUpIcon/>}
          title='Valor recebido'
          text='R$ 76.88'
        />
        <Divider/>
        <TextDetails
          icon={<TrendingDownIcon/>}
          title='Valor da Taxa MDRFee'
          text='R$ -3.12'
        />
        <Divider/>
        <TextDetails
          icon={<SellIcon/>}
          title='Tipo de pagamento'
          text='Crédito à vista'
        />
        <Divider/>
        <TextDetails
          icon={<PointOfSaleIcon/>}
          title='Meio de pagamento'
          text='Super Link / Digitada'
        />
        <Divider/>
        <TextDetails
          icon={<ContactlessIcon/>}
          title='Canal'
          text='15'
        />
        <Divider/>
        <TextDetails
          icon={<RequestQuoteIcon/>}
          title='Códido de autorização'
          text='339150'
        />
        <Divider/>
        <CardDetails/>
    </Box>
    </Box>
    
  )
}