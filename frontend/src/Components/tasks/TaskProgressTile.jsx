import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Stack } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";


import useData from "../../hooks/swrHook";

export default function TaskProgressTile() {
    const { data } = useData(
        "https://task-mgmt.azurewebsites.net/Task",
        {
            owner_id: "abdc"
        }
    )

    const [tasksCompleted, setTasksCompleted] = useState(0)

    useEffect(() => {
        if (data) {
            setTasksCompleted(data.filter(task => task.isCompleted).length)
        }
    }, [])

    const theme = useTheme()
    return (
        <Card
            sx={{
                display: "flex",
                borderRadius: "16px",
                backgroundColor: "#BCDBA5",
            }}
        >
            <CardActionArea
                onClick={() => {
                    console.log("click");
                }}
            >
                <Link to="/tasks">
                    <CardContent
                        sx={{
                            px: "1.5rem",
                            py: "2rem",
                        }}
                    >
                        <Typography
                            fontSize={"1.2rem"}
                            align="left"
                            color={theme.palette.secondary.main}
                        >
                            tasks completed
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems={"flex-end"}
                            mb={"0.5rem"}
                        >
                            <Typography
                                fontFamily={"Cutive"}
                                fontSize={"5rem"}
                                align="left"
                                color={theme.palette.text.secondary}
                            >
                                {data?.filter(task => task.isCompleted).length}
                            </Typography>
                            <Typography
                                fontFamily={"Cutive"}
                                fontSize={"2rem"}
                                align="left"
                                color={theme.palette.text.secondary}
                            >
                                /{data?.length}
                            </Typography>
                        </Stack>
                        <LinearProgress
                            variant="determinate"
                            value={tasksCompleted / data?.length * 100}
                            color="secondary"
                        />
                    </CardContent>
                </Link>
            </CardActionArea>
        </Card>
    );
}
