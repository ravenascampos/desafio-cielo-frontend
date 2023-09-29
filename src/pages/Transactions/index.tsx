import {Header} from "@/components/Header";
import { useTransactions } from "@/services/transactions/transaction.hooks";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CardTransactions } from "./components/CardTransactions";
import * as dayjs from 'dayjs'

export function Transactions() {
  const {data} = useTransactions();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box>
      <Header/>
      <Grid
        container
        flexDirection='column'
        gap={6}
        alignItems='flex-start'
        marginTop='64px'
        marginBottom='64px'
        marginLeft={isMobile ? '50px' : '200px'}
        width={`calc(100% - 200px)`}
      >
        <Grid
          item
          mt={6}
        >
          <Typography variant='h1'>Transações</Typography>
        </Grid>
        <Grid
          item
          container
          display='flex'
          flexDirection='row'
          xs='auto'
          justifyContent={isMobile ? 'center' : 'flex-start'}
          flexWrap='wrap'
          columnGap={4}
          rowGap={4}
        >
          {data?.map((item) => (
          <CardTransactions
            key={item.id}
            date={dayjs(item.date).format('DD/MM/YYYY')}
            netAmount={new Intl.NumberFormat('pt-BR', {
              style: 'currency', currency: 'BRL'
            }).format(item.netAmount)}
            status={item.status}
            paymentType={item.paymentType}
            cardBrand={item.cardBrand}
            id={item.id}
          />
        ))}
        </Grid>
      </Grid>
    </Box>
  )
}