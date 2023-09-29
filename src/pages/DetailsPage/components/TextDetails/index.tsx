import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

type Props = {
  title: React.ReactNode;
  text: React.ReactNode;
  icon?: React.ReactNode;
  color?: String;
}

export function TextDetails({ title, text, icon, color }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      flexWrap={isMobile ? 'wrap' : 'nowrap' }
      rowSpacing={isMobile ? 2 : 0}
      mt={2}
      mb={2}
      columnSpacing={isMobile ? 0 : 6}
    >
      <Grid
        item
        display='flex'
        flexDirection='row'
        alignItems='center'
        gap={4}
      >
          {icon}
        <Typography variant='h3' fontWeight={700} {...color}>
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        display='flex'
        flexDirection='row'
        alignItems='center'
      >
        <Typography variant='h3' {...color}>
          {text}
        </Typography>
      </Grid>
    </Grid>
  )
}
