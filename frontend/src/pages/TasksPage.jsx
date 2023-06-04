import TaskCard from "../Components/tasks/TaskCard"
import { CircularProgress, Grid } from "@mui/material";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

import { useState } from "react";
import TaskDialog from "../Components/tasks/TaskDialog";

import useData from "../hooks/swrHook";

export default function TasksPage() {
    const { data, isLoading } = useData(
        "https://task-mgmt.azurewebsites.net/Task", {
        owner_id: "abdc"
    }
    );

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    return (
        <Stack direction={"column"}>
            <TaskDialog open={open} handleOpen={handleOpen} handleClose={handleClose} isEdit={false} />
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems={"flex-end"}
                pb={"2rem"}>
                <Typography
                    fontSize={"1.5rem"}
                    align="left"
                >
                    Add a new task
                </Typography>
                <IconButton
                    onClick={handleOpen}
                    sx={{
                        "&:focus": {
                            outline: "none",
                        },
                    }}>
                    <AddIcon fontSize="inherit" />
                </IconButton>
            </Stack>
            {
                isLoading
                    ?
                    <CircularProgress />
                    :
                    <Stack gap={2} direction="column">
                        <Stack gap={2}>
                            <Typography
                                fontSize={"1rem"}
                                align="left"
                                pb={"0.5rem"}
                            >
                                In Progress:
                            </Typography>
                            <Grid container spacing={2}>
                                {
                                    data?.filter(task => !task.isCompleted).map((task) => {
                                        return (
                                            <Grid item xs={12} sm={6} md={4} key={task.id}>
                                                <TaskCard
                                                    key={task.id}
                                                    id={task.id}
                                                    title={task.title}
                                                    description={task.description}
                                                    completed={task.isCompleted}
                                                    dateCreated={task.dateCreated}
                                                    dueDate={task.dueDate}
                                                />
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Stack>

                        <Stack gap={2}>
                            <Typography
                                fontSize={"1rem"}
                                align="left"
                                pb={"0.5rem"}
                            >
                                Completed:
                            </Typography>
                            <Grid container spacing={2}>
                                {
                                    data?.filter(task => task.isCompleted).map((task) => {
                                        return (
                                            task.isCompleted ?
                                                <Grid item xs={12} sm={6} md={4} key={task.id}>
                                                    <TaskCard
                                                        key={task.id}
                                                        title={task.title}
                                                        id={task.id}
                                                        description={task.description}
                                                        completed={task.isCompleted}
                                                        dateCreated={task.dateCreated}
                                                        dueDate={task.dueDate} />
                                                </Grid>
                                                : null
                                        )
                                    })
                                }
                            </Grid>
                        </Stack>
                    </Stack>
            }
        </Stack >
    )
}