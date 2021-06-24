import React from "react";
import Banner from "../Banner/Banner";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HusbandWifeIcon from "../SvgIcons/HusbandWife/HusbandWifeIcon";
import FamilyIcon from "../SvgIcons/Family/FamilyIcon";
const ProcessBanner = () => {
  const useStyles = makeStyles({
    headers: {
      color: "white",
    },
    grid: {
      marginTop: ".5rem",
    },
  });
  const classes = useStyles();
  return (
    <Banner id="testimonials">
      <Grid item xs="auto">
        <Typography className={classes.headers} variant="h5">
          Starting at $225
        </Typography>
      </Grid>
      <Grid className={classes.grid} item xs="auto">
        <Grid container alignItems="center">
          <FamilyIcon width="1.5rem" color="white" />
          <Box ml={1}>
            <Typography className={classes.headers} variant="h6">
              Family Discounts Available
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs="auto">
        <Grid className={classes.grid} container alignItems="center">
          <HusbandWifeIcon
            style={{ color: "red" }}
            width="1.5rem"
            color="white"
          />
          <Box ml={1}>
            <Typography className={classes.headers} variant="h6">
              Couples Discounts Available
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Banner>
  );
};

export default ProcessBanner;
