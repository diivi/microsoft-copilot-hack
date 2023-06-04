import { Box, Card, Skeleton } from "@mui/material";

const SkeletonLoading2 = () => {
  return (
    <>
      <Card className="flex flex-col items-start gap-8 w-full p-4 rounded-md ">
        <Skeleton variant="rounded" className="w-full" height={20} />
        <Skeleton variant="rounded" className="w-full" height={20} />
        <Skeleton variant="rounded" className="w-full" height={20} />
        <Skeleton variant="rounded" className="w-full" height={20} />
      </Card>
    </>
  );
};

export default SkeletonLoading2;
