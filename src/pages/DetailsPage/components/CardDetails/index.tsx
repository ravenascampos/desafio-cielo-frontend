import { Card, Grid, Typography } from "@mui/material";
import { ReactNode } from "react";


type cardDetailsProps = {
  cardBrand: ReactNode;
  truncatedCardNumber: ReactNode;
}
export function CardDetails({cardBrand, truncatedCardNumber}:cardDetailsProps) {
  return (
    <Card
      sx={{
        marginTop: '24px',
        width: '300px',
        padding: '40px',
        borderRadius: '12px',
        background: 'linear-gradient(45deg, #6366F1 0.92%, #9FA1FF 98.55%, #9FA1FF 98.55%)',
        boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.16)'
      }}
    >
      <Grid
        container
        display='flex'
        direction='column'
        mt={2}
        gap={8}
      >
        <Grid
          item
          display='flex'
          justifyContent='center'
        >
          <Typography variant="h2" fontWeight={700}>{truncatedCardNumber}</Typography>
        </Grid>
        <Grid
          item
          display='flex'
          justifyContent='flex-end'
        >
          <Typography variant="h3">{cardBrand}</Typography>
        </Grid>
      </Grid>
    </Card>
  )
}
