import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const StepCircles = ({ icon, name }) => {
  const useStyles = makeStyles(() => ({
    roundedDiv: {
      borderRadius: "50%",
      background: "var(--simple-blue)",
      width: "6rem",
      height: "6rem",
      marginRight: "auto",
      marginLeft: "auto",
      marginBottom: 10,
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
  }));
  const classes = useStyles();

  return (
    <>
      <div className={classes.roundedDiv}>{icon}</div>
      <h5
        style={{
          margin: "0",
          fontFamily: "Montserrat",
          fontSize: "1.5em",
          textAlign: 'center',
          fontWeight: '200'
        }}
      >
        {name}
      </h5>
    </>
  );
};

export default StepCircles;
