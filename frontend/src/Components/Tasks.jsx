import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import avatarImg from "../assets/avatar.jpg";

import TaskTile from "./tasks/TaskTile";
import TaskProgressTile from "./tasks/TaskProgressTile";

import useData from "../hooks/swrHook";

const Tasks = () => {

  const { data, isLoading } = useData(
    "https://task-mgmt.azurewebsites.net/Task",
    {
      owner_id: "abdc"
    }
  )
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  return (
    <Box>
      <Box>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <Avatar alt="Aemy Sharp" src={avatarImg} sx={{ width: 94, height: 94 }} />
          <Stack direction="column" spacing={0}>
            <Typography
              fontSize={"1.25rem"}
              component="span"
              fontFamily={"Roboto"}
              color={"#1F1F21"}
            >{greeting},
              <Typography
                fontSize={"1.25rem"}
                component="span"
                fontWeight={"bold"}
                fontFamily={"Roboto"}
                color={"#1F1F21"}
              > Aryaman!
              </Typography>
            </Typography>
            <Typography
              fontSize={"2rem"}
              component="div"
              fontWeight={"bold"}
              fontFamily={"Roboto"}
              color={"#00285A"}
            >{formattedDate}
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box marginTop={"2rem"}>
        {isLoading ? <CircularProgress /> :
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <TaskProgressTile />
            </Grid>
            {
              data?.filter(task => !task.isCompleted).slice(0, 3).map((task) => {
                return (
                  <Grid item xs={12} sm={12} md={6} key={task.id}>
                    <TaskTile
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      description={task.description}
                    />
                  </Grid>
                )
              })
            }
          </Grid>
        }
      </Box>
    </Box>
  );
};

export default Tasks;
