import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TopSVG from "./components/TopSVG/TopSVG";
import BottomSVG from "./components/BottomSVG/BottomSVG";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 150,
    width: "100%",
    background: "var(--simple-blue)",
    justifyContent: 'center'
  },
}));

const Banner = ({ children, id }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={0}>
        <Grid direction="column" alignItems="flex-end" container>
          <TopSVG />
        </Grid>

        <Grid item xs={12}>
          <Grid id={id} className={classes.root} container alignItems="center" justify="center" direction='column' >
            {children}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <BottomSVG />
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
