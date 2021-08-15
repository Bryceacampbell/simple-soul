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
  Box
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
    <>
      {/* <AppBar position="sticky">
        <Toolbar>
          <Grid container>
            <Grid item xs>
              <Typography>Visit <a href="www.cellcore.com">www.cellcore.com</a> and use our code EIHN0LSF</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar> */}
      <AppBar position="sticky" style={{ backgroundColor: "var(--simple-blue)" }}>
        {/* <Grid container style={{ backgroundColor: "#beddda", color: "#000000", textAlign: "center" }}>
          <Grid item xs={12} md={6}>
            <Typography>Visit <a href="https://www.cellcore.com/pages/register-customer" target="_blank" rel="noreferrer" style={{ color: "var(--simple-blue)", fontWeight: 'bold' }}>cellcore.com</a> and use our code <strong>EIHN0LSF</strong></Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography><a href="https://go.globalhealingcenter.com/c/2733531/528221/5534" target="_blank" rel="noreferrer" style={{ color: "var(--simple-blue)" }}>10% off Oxy-Powder</a></Typography>
          </Grid>
        </Grid> */}
        <Toolbar>
          <Grid container>
            <Grid item xs>
              <Box height="100%" display="flex">
                <Link className={classes.mainLink} to="#home">
                  <Typography style={{ alignSelf: "center" }} variant="h5">
                    SIMPLE S<span><img src={Favicon} height='18px' alt='simple-soul'/></span>UL
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
                  {/* <Button variant='outlined' id="528221" style={{ padding: '0.5em', border }}>
                    <a href="https://go.globalhealingcenter.com/c/2733531/528221/5534" target="_blank" style={{ color: "#fff", textDecoration: "none", }}>10% off Oxy-Powder</a>
                  </Button> */}
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
    </>
  );
};

export default Header;
