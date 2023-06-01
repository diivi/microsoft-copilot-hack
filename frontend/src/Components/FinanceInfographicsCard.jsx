import { Box, Card } from "@mui/material";
import DoughnutChart from "./ui/DoughnutChart";

const FinanceInfoCard = () => {
  return (
    <Card className="h-12">
      <Box>
        <DoughnutChart />
      </Box>
    </Card>
  );
};

export default FinanceInfoCard;
