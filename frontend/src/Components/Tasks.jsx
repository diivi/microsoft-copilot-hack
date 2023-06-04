// import { FaUser } from 'react-icons/fa';

import { Box, CircularProgress, Grid } from "@mui/material";

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
    <>
      <div className="flex flex-row items-center p-4">
        <div className="text-2xl px-2">{/* <FaUser /> */}</div>
        <div className="flex flex-col">
          <h4>{greeting}, Ary Bha</h4>
          <h1>{formattedDate}</h1>
        </div>
      </div>


      <Box padding={"2rem"}>
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
    </>
  );
};

export default Tasks;
