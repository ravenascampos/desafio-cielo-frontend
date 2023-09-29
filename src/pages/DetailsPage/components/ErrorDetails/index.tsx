import { Box, Button, Card, Link, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  title: ReactNode;
}
export function ErrorDetails({title}:Props) {
  return (
    <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}
    >
      <Card
        sx={{
          padding: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography
          variant='h2'
          sx={{
            marginBottom: '20px'
          }}
        >{title}</Typography>
        <Link
          underline='none'
          component={RouterLink}
          to='/items/'
        >
          <Button variant='contained'>
            Voltar
          </Button>
        </Link>
      </Card>
    </Box>
  )
}