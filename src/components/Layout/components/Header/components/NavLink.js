import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const NavLink = ({ link, children, color, main }) => {
  const useStyles = makeStyles({
    link: {
      textDecoration: "none",
      color: color,
      fontFamily: 'Montserrat',
      marginTop: main ? '.5em' : 'initial'
    }
  });
  const classes = useStyles();
  return (
    <a className={classes.link} href={link}>
      {children}
    </a>
  );
};

export default NavLink;
