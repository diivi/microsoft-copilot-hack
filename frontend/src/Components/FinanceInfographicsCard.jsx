import { Card } from "@mui/material";
import DoughnutInfoCard from "./DoughnutInfoCard";
import MonthlyLimitsComponent from "./MonthlyLimitsComponent";
import useData from "../hooks/swrHook";
import SkeletonLoading from "./ui/SkeletonLoading";

const FinanceInfoCard = () => {
  const { data, isLoading, isError, updateData } = useData(
    "http://localhost:8000/getusertags/",
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
      className=" flex flex-col mx-5 my-2 items-center p-4 pt-8"
    >
      {isLoading ? (
        <SkeletonLoading />
      ) : data ? (
        <>
          <DoughnutInfoCard tagsData={data.tags} />
          <MonthlyLimitsComponent tagsData={data.tags} />
        </>
      ) : (
        <h1>Error</h1>
      )}
    </Card>
  );
};

export default FinanceInfoCard;
