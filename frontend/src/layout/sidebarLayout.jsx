import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import PaymentsIcon from "@mui/icons-material/Payments";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography
          mt={"3rem"}
          mb={"1rem"}
          fontSize={"1.5rem"}
          variant="h6"
          noWrap
          component="div"
          fontFamily={"Roboto"}
        >
          Swift.
        </Typography>
      </Toolbar>
      <Divider color="rgba(217, 217, 217, 0.26)" />
      <List>
        {[
          ["Dashboard", "/"],
          ["Tasks", "/tasks"],
          ["Finance", "/finance"],
        ].map((text, index) => (
          <Link to={text[1]}>
            <ListItem key={text[0]} disablePadding>
              <ListItemButton alignItems="center">
                <ListItemIcon>
                  {index === 0 ? (
                    <DashboardIcon sx={{ color: "#ffffff" }} />
                  ) : index === 1 ? (
                    <AssignmentIcon sx={{ color: "#ffffff" }} />
                  ) : (
                    <PaymentsIcon sx={{ color: "#ffffff" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text[0]} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          display: { sm: "none" },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#1F1F21",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography
            width={"100%"}
            fontSize={"1.5rem"}
            align="center"
            color={theme.palette.text.secondary}
            variant="h6"
            noWrap
            component="div"
            fontFamily={"Roboto"}
          >
            Swift.
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: "block",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1F1F21",
              color: "#ffffff",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1F1F21",
              color: "#ffffff",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        overflow={"hidden"}
        component="main"
        padding={"2rem"}
        marginTop={{ sm: "1rem", xs: "5rem" }}
        width={"100%"}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
