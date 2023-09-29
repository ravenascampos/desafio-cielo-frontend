import { Box, Typography } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';

type Props = {
  title: React.ReactNode;
}

export function PieChartDashboard({title}:Props) {
  return (
    <Box>
      <Typography>{title}</Typography>
      <PieChart
        width={400}
        height={200}
        series={[{
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ]
        }]}
      />
    </Box>
  )
}