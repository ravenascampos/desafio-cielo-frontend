import { Box, CircularProgress } from "@mui/material";

export function LoadingDetails() {
  return (
    <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%'
    }}
    >
      <CircularProgress
        color="primary"
        sx={{
          width: '100px',
          height: '100px',
          margin: '0 auto',
        }}
      />
    </Box>
  )
}