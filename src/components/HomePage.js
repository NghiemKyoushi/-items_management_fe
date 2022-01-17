import * as React from "react";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";

import Grid from "@mui/material/Grid";
import Setting from "../image/settings.png";
import Home from "../image/home.png";
import Calendar from "../image/calendar.png";
import Avatar_img from "../image/38c6e1a50d33f6c0c1e09eced4229b94.png";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import ItemCard from "./ItemCard";
import DatePresent from "./DatePresent";
import NewItem from "./NewItem";
import { Button } from "@mui/material";
const drawerWidth = 200;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function HomePage() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [checkUser, setCheckUser] = React.useState(false);
  const [nameUser, setNameUser] = React.useState("");
  React.useEffect (() => {
    if (localStorage.getItem("username") !== null) {
      setCheckUser(true);
      setNameUser(localStorage.getItem("username"));
    }
  }, []);
  const logOut = () => {
    console.log("logout");
    localStorage.removeItem("username");
    localStorage.removeItem("uid");
    setCheckUser(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ boxShadow: "none", width: "95%" }}
        position="fixed"
        color="inherit"
        display="flex"
      >
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            style={{ color: "#1fc3ff", fontWeight: "bold" }}
          >
            Welcome to my home
          </Typography>
          <div>
            <input
              type="text"
              className="inputSearch"
              placeholder="Search..."
            />
            <IconButton style={{ marginLeft: -56 }}>
              <SearchIcon />
            </IconButton>
          </div>
          {checkUser ? (
            <div
              style={{
                marginLeft: 300,
                marginTop: 16,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={Avatar_img}
                imgProps={{ height: 10, width: 10 }}
              />
              <p style={{ marginTop: 8 }}>{nameUser}</p>
              <IconButton
                sx={{ color: "#1fc3ff", marginLeft: 2 }}
                onClick={logOut}
              >
                <LogoutIcon />
              </IconButton>
            </div>
          ) : (
            <div className="buttonOnNav">
            <Link to ="/login" style={{textDecoration: "none"}}><Button
                sx={{
                  letterSpacing: 4,
                  height: 38,
                  border: "1px solid white",
                  backgroundColor: "#1fc3ff",
                  borderRadius: "30px",
                  color: "white",
                  fontWeight: "bold",
                }}
                variant="contained"
              >
                Login
              </Button></Link>
              
              <Link to ="/signUp" style={{textDecoration: "none"}}>
              <Button
                sx={{
                  letterSpacing: 4,
                  height: 38,
                  border: "1px solid white",
                  backgroundColor: "#1fc3ff",
                  borderRadius: "30px",
                  color: "white",
                  fontWeight: "bold",
                }}
                variant="contained"
              >
                Sign Up
              </Button>
              </Link>
              
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#1fc3ff",
            color: "white",
            position: "fixed",
          },
        }}
        variant="permanent"
      >
        <DrawerHeader>
          <IconButton size="large" color="inherit" aria-label="open drawer">
            <MenuIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem button>
            <ListItemIcon key={1}>
              <img src={Home} alt="new" height="30px" width="30px" />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon key={2}>
              <img src={Setting} alt="new" height="30px" width="30px" />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon key={3}>
              <img src={Calendar} alt="new" height="30px" width="30px" />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: 8,
          marginLeft: 9,
          p: 2,
          background: "white",
        }}
      >
      {checkUser ? <NewItem /> : ""}
        
        <Grid container spacing={1}>
          <Grid item xs={9}>
            {checkUser ? <ItemCard /> : "Log in to access your home"}
          </Grid>
          <Grid item xs={2}>
            <DatePresent />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
