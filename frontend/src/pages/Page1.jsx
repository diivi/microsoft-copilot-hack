import Tasks from "../Components/Tasks";
import PersonalFin from "../Components/PersonalFin";
import Weather from "../Components/Weather";
import Url from "../Components/Url";

import Box from "@mui/material/Box";
import { Grid } from "@mui/material";


const Page1 = () => {
  return (
    <Box marginTop={"4rem"}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Tasks />
          <PersonalFin />
        </Grid>
        <Grid item sm={12} md={6}>
          <Weather />
          <Url />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page1;
