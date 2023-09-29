import { useTransactions } from "@/services/transactions/transaction.hooks";
import { Box } from "@mui/material";
import { Header } from "@/components/Header";



export function Home() {
  const {data} = useTransactions();

  console.log('data', data)
  return (
    <Box>
       <Header/>
      <Box
        sx={{
          position:'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
    </Box>
    </Box>
    
    
  )
}