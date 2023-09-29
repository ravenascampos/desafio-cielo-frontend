import { Box } from "@mui/material";
import { PieChartDashboard } from "./components/PieChart";

export function Dashboard() {
  return (
    <Box>
      <PieChartDashboard
        title='Tipos de pagamentos'
      />
      <PieChartDashboard
      title='Canal'
      />
    </Box>
  )
}