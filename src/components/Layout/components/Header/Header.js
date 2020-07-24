import React from "react";
import { Link } from "gatsby";
import {
  Grid,
  Toolbar,
  AppBar,
  Menu,
  MenuItem,
  Typography,
  Hidden,
  IconButton,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Navlink from "./components/NavLink";
import Favicon from '../../../../images/icons/favicon.png'
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#00707C",
    height: 50,
    width: "100%",
  },
  main: {
    display: "flex",
    justifyContent: "space-around",
    flexGrow: 1,
  },
  mainLink: {
    color: "#fff",
    textDecoration: "none",
    display: "contents",
  },
}));

const Header = () => {
  const classes = useStyles();

  const links = [
    { text: "About", link: "#home" },
    { text: "Our Process", link: "#process" },
    { text: "Testimonials", link: "#testimonials" },
    { text: "Contact", link: "#contact" },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: "var(--simple-blue)" }}>
      <Toolbar>
        <Grid container>
          <Grid item xs>
            <Box height="100%" display="flex">
              <Link className={classes.mainLink} to="#home">
                <Typography style={{ alignSelf: "center" }} variant="h5">
                  SIMPLE S<span><img src={Favicon} height='18px' /></span>UL
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Hidden only="xs">
            <Grid item xs>
              <div className={classes.main}>
                {links.map((link, i) => (
                  <Navlink key={i} color="#fff" main link={link.link}>
                    {link.text}
                  </Navlink>
                ))}
              </div>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <IconButton
              aria-controls="responsive-menu"
              style={{ float: "right" }}
              onClick={handleClick}
            >
              <MenuIcon
                style={{ color: "white" }}
                aria-controls="responsive-menu"
              />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              id="responsive-menu"
            >
              {links.map((link, i) => (
                <MenuItem key={i * -1}>
                  <Navlink key={i} color={"#000"} link={link.link}>
                    {link.text}
                  </Navlink>
                </MenuItem>
              ))}
            </Menu>
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
