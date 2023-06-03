import TaskCard from "../Components/tasks/TaskCard"
import { Grid } from "@mui/material";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

import axios from "axios";
import { useEffect, useState } from "react";
import TaskDialog from "../Components/tasks/TaskDialog";
import RefreshIcon from '@mui/icons-material/Refresh';

export default function TasksPage() {
    const [tasks, setTasks] = useState([]);
    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setIsEdit(false);
    }

    const [refresh, setRefresh] = useState(false);
    const handleRefresh = () => setRefresh(!refresh);

    useEffect(() => {
        axios.get("https://task-mgmt.azurewebsites.net/Task?owner_id=abdc")
            .then((response) => {
                console.log(response);
                setTasks(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [refresh])

    return (
        <Stack direction={"column"} p={"2rem"} >
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
                <Stack direction="row"
                    alignItems={"flex-end"}
                    spacing={1}>

                    <IconButton
                        onClick={handleRefresh}
                        sx={{
                            "&:focus": {
                                outline: "none",
                            },
                        }}>
                        <RefreshIcon fontSize="inherit" />
                    </IconButton>
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
            </Stack>
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
                            tasks.map((task) => {
                                return (
                                    task.isCompleted ? null :
                                        <Grid item xs={12} sm={12} md={6} key={task.id}>
                                            <TaskCard
                                                key={task.id}
                                                id={task.id}
                                                title={task.title}
                                                description={task.description}
                                                completed={task.isCompleted}
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
                            tasks.map((task) => {
                                return (
                                    task.isCompleted ?
                                        <Grid item xs={12} sm={12} md={6} key={task.id}>
                                            <TaskCard key={task.id} title={task.title} id={task.id} description={task.description} completed={task.isCompleted} dueDate={task.dueDate} />
                                        </Grid>
                                        : null
                                )
                            })
                        }
                    </Grid>
                </Stack>
            </Stack>
        </Stack >
    )
}