import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Stack } from '@mui/material';

import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

import AssignmentIcon from '@mui/icons-material/Assignment';

export default function TaskTile(props) {
    const theme = useTheme()
    return (
        <Card sx={{
            display: 'flex',
            borderRadius: "16px",
            height: "100%"
        }}
        >
            <CardActionArea>
                <Link to="/tasks">
                    <CardContent
                        sx={{
                            px: "1.5rem",
                            py: "2rem"
                        }}
                    >
                        <Stack
                            direction="row-reverse"
                            justifyContent="space-between"
                            alignItems="center"
                            mb={'0.5rem'}
                        >
                            <AssignmentIcon sx={{ color: "grey" }} />
                            <Typography
                                noWrap
                                fontSize={"1.2rem"}
                                align='left'
                                color={theme.palette.secondary.main}
                            >
                                {props.title}
                            </Typography>

                        </Stack>
                        <Typography
                            color="#1F1F21"
                            align='left'
                            fontSize={"0.8rem"}
                        >
                            {props.description}
                        </Typography>
                    </CardContent>
                </Link>
            </CardActionArea>

        </Card>
    );
}