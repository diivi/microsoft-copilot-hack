import { Card } from "@mui/material";
import DoughnutInfoCard from "./DoughnutInfoCard";
import MonthlyLimitsComponent from "./MonthlyLimitsComponent";
import useData from "../hooks/swrHook";

const FinanceInfoCard = () => {
  const { data, isLoading, isError, updateData } = useData(
    "http://localhost:8000/getusertags/",
    {
      "Content-Type": "application/json",
      userId: 123456,
    }
  );
  if (!isLoading) {
    console.log(data);
  }
  return (
    <Card
      sx={{ bgcolor: "#EEEEE9", borderRadius: "10px" }}
      className=" flex flex-col mx-5 my-2 items-center p-4 pt-8"
    >
      <DoughnutInfoCard />
      <MonthlyLimitsComponent tagsData={data.tags} />
    </Card>
  );
};

export default FinanceInfoCard;
