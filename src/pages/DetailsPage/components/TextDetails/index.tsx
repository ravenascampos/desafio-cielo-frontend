import { Grid, Typography } from "@mui/material";

type Props = {
  title: React.ReactNode;
  text: React.ReactNode;
  icon?: React.ReactNode;
}

export function TextDetails({ title, text, icon }: Props) {
  return (
    <Grid
      container
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      mt={2}
    >
      <Grid
        item
        display='flex'
        flexDirection='row'
        gap={2}
      >
          {icon}
        <Typography>
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        mb={2}
      >
        <Typography>
          {text}
        </Typography>
      </Grid>
    </Grid>
  )
}
