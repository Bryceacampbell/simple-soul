import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./components/ImageCard";

const useStyles = makeStyles(() => ({
  root: {
    padding: 20,
  },
  button: {
    background: "var(--simple-blue)",
    color: "#fff",
    float: "right",
    marginRight: 20,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container style={{ marginBottom: 80 }}>
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12} md={6}>
          <br></br>
          <Typography
            variant="h4"
            gutterBottom
            style={{
              color: "var(--simple-blue)",
            }}
          >
            Simple Soul
          </Typography>
          <Typography variant="h6" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
