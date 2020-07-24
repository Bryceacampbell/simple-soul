import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TestimonialList from "./components/TestimonialList";

const useStyles = makeStyles(() => ({
  root: {
    padding: 20,
  },
}));

const Process = () => {
  const classes = useStyles();

  return (
    <Container style={{ marginBottom: 80 }}>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            style={{
              color: "var(--simple-blue)",
            }}
          >
            Customers Love
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            style={{
              color: "#00707C",
            }}
          >
            Simple Soul
          </Typography>
        </Grid>

        <TestimonialList />
      </Grid>
    </Container>
  );
};

export default Process;
