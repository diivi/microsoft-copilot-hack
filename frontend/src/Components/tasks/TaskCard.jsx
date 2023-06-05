import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import IconButton from '@mui/material/IconButton';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { useState } from "react";
import dayjs from "dayjs";

import TaskDialog from "./TaskDialog";

import { useTheme } from "@mui/material";

import useData from "../../hooks/swrHook";

export default function TaskCard(props) {

    const { deleteData, putData } = useData(
        "https://task-mgmt.azurewebsites.net/Task",
        {
            owner_id: "abdc"
        }
    );
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Card
            sx={{
                display: "flex",
                borderRadius: "16px",
                backgroundColor: props.completed ? "#CE796B" : "#BCDBA5",
                height: "100%",
            }}
        >
            <TaskDialog
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
                title={props.title}
                description={props.description}
                dateCreated={props.dateCreated}
                dueDate={props.dueDate}
                id={props.id}
                completed={props.completed}
                isEdit={true}
            />
            <CardContent
                sx={{
                    width: "100%",
                    px: "1.5rem",
                    py: "2rem",
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems={"flex-end"}
                    mb={"0.5rem"}
                >
                    <Typography
                        noWrap
                        fontSize={"1.5rem"}
                        align="left"
                        color={theme.palette.secondary.main}
                        sx={{
                            textDecoration: props.completed ? "line-through" : "none",
                        }}
                    >
                        {props.title}
                    </Typography>
                    <Stack
                        direction="row"
                        alignItems={"flex-end"}
                        spacing={1}
                    >
                        <IconButton
                            onClick={props.completed ? () => {
                                deleteData(
                                    `https://task-mgmt.azurewebsites.net/Task/${props.id}`,
                                    props.id
                                )
                            } : handleOpen}
                            size="small"
                            sx={{
                                "&:focus": {
                                    outline: "none",
                                },
                            }}>
                            {
                                props.completed ?
                                    <DeleteIcon fontSize="inherit" />

                                    :
                                    <EditIcon fontSize="inherit" />
                            }
                        </IconButton>

                        <IconButton
                            onClick={() => {
                                putData(
                                    `https://task-mgmt.azurewebsites.net/Task/${props.id}`,
                                    {
                                        id: props.id,
                                        title: props.title,
                                        description: props.description,
                                        dueDate: props.dueDate,
                                        dateCreated: props.dateCreated,
                                        isCompleted: !props.completed,
                                        owner_id: "abdc"
                                    }
                                )
                            }}
                            size="small"
                            sx={{
                                "&:focus": {
                                    outline: "none",
                                },
                            }}>
                            {
                                props.completed ?
                                    <RestartAltIcon fontSize="inherit" />
                                    :
                                    <TaskAltIcon fontSize="inherit" />
                            }
                        </IconButton>
                    </Stack>
                </Stack>

                <Typography
                    color="#1F1F21"
                    align='left'
                    fontSize={"0.8rem"}
                    sx={{
                        textDecoration: props.completed ? "line-through" : "none",
                    }}
                >
                    {props.description}
                </Typography>

                <Stack direction={"row"} marginTop={"2rem"} justifyContent={"space-between"}>
                    <Typography
                        padding={"0.5rem"}
                        noWrap
                        color="#1F1F21"
                        align='left'
                        fontSize={"0.8rem"}
                        sx={{
                            textDecoration: props.completed ? "line-through" : "none",
                        }}
                    >
                        Created: <br /> {dayjs(props.dateCreated).format("DD/MM/YYYY")}
                    </Typography>


                    <Typography
                        noWrap
                        padding={"0.5rem"}
                        color="#1F1F21"
                        align='left'
                        fontSize={"0.8rem"}
                        sx={{
                            textDecoration: props.completed ? "line-through" : "none",
                        }}
                    >
                        Deadline: <br /> {dayjs(props.dueDate).format("DD/MM/YYYY") || "No due date"}
                    </Typography>
                </Stack>

            </CardContent>

        </Card>
    );
}
