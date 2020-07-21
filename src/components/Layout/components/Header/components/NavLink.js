import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'gatsby'

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
    <Link className={classes.link} to={link}>
      {children}
    </Link>
  );
};

export default NavLink;
