import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Stack } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import { useTheme } from "@mui/material";

export default function TaskProgressTile() {
    const theme = useTheme()
    return (
        <Card
            sx={{
                display: "flex",
                borderRadius: "16px",
                backgroundColor: "#BCDBA5",
                height: "15rem",
            }}
        >
            <CardActionArea
                onClick={() => {
                    console.log("click");
                }}
            >
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
                            2
                        </Typography>
                        <Typography
                            fontFamily={"Cutive"}
                            fontSize={"2rem"}
                            align="left"
                            color={theme.palette.text.secondary}
                        >
                            /5
                        </Typography>
                    </Stack>
                    <LinearProgress
                        variant="determinate"
                        value={50}
                        color="secondary"
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
