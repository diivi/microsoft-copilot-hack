import { Box, Skeleton } from "@mui/material";

const SkeletonLoading = () => {
  return (
    <>
      <Box className="flex flex-col items-start gap-4 w-full">
        <Skeleton variant="circular" width={120} height={120} />
        <Box height={20}></Box>
        <Skeleton variant="rounded" className="w-full" height={20} />
        <Skeleton variant="rounded" className="w-full" height={20} />
        <Skeleton variant="rounded" className="w-full" height={20} />
        <Skeleton variant="rounded" className="w-full" height={20} />
      </Box>
    </>
  );
};

export default SkeletonLoading;
