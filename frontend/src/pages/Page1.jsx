import Tasks from "../Components/Tasks";
import PersonalFin from "../Components/PersonalFin";
import Weather from "../Components/Weather";
import Url from "../Components/Url";
import Grid from '@mui/material/Unstable_Grid2';


const Page1 = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={7}>
        <Tasks />
        <PersonalFin />
      </Grid>
      <Grid item sm={12} md={5}>
        <Weather />
        <Url />
      </Grid>
    </Grid>
  );
};

export default Page1;
