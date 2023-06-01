import { Card } from "@mui/material";
import DoughnutInfoCard from "./DoughnutInfoCard";
import MonthlyLimitsComponent from "./MonthlyLimitsComponent";

const FinanceInfoCard = () => {
  return (
    <Card
      sx={{ bgcolor: "#EEEEE9" }}
      className="flex flex-col mx-5 my-2 items-center p-4 pt-8"
    >
      <DoughnutInfoCard />
      <MonthlyLimitsComponent />
    </Card>
  );
};

export default FinanceInfoCard;
