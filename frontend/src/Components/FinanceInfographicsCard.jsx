import { Card, Typography, Box } from "@mui/material";
import DoughnutInfoCard from "./DoughnutInfoCard";
import MonthlyLimitsComponent from "./MonthlyLimitsComponent";
import useData from "../hooks/swrHook";
import SkeletonLoading from "./ui/SkeletonLoading";

const FinanceInfoCard = () => {
  const { data, isLoading, isError, updateData } = useData(
    "http://20.198.105.30:8000/getusertags/",
    {},
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
      sx={{ borderRadius: "10px" }}
      className="flex flex-col items-center p-2 pt-8"
    >
      {isLoading ? (
        <SkeletonLoading />
      ) : data ? (
        <>
          <DoughnutInfoCard tagsData={data.tags} />
          <MonthlyLimitsComponent tagsData={data.tags} />
        </>
      ) : (
        <Box className="flex w-full items-center justify-center">
          <Typography variant="button">No Data To Display</Typography>
        </Box>
      )}
    </Card>
  );
};

export default FinanceInfoCard;
