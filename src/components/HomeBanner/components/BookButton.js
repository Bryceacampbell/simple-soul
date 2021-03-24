import React from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    borderColor: "#ccc",
  },
  typography: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 8,
  },
  link: {
    textDecoration: "none",
  },
}));

const BookButton = ({ state, link, name }) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.typography}>{state}</Typography>
      <a target="_blank" href={link} className={classes.link}>
        <Button className={classes.button} variant="outlined">
          Book With {name}
        </Button>
      </a>
    </>
  );
};

export default BookButton;
