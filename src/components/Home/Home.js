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
            Founded on the principles of Holistic Medicine we look at the mind, body and soul. 
            Taking us back to our roots in keeping life simple. When the body is well balanced 
            with proper nutrition, adequate exercise as well as rest, quality sleep and wholesome 
            engagement for the mind the soul is happy. Looking at nourishing all systems to better 
            optimize your health!!
          </Typography>
          
          <Typography variant="h6">
            We are each so uniquely different. What works for one definitely doesn’t works for us all. 
            Diving deep in your specific journey with your health we take a view at all different angles. 
            Looking to identify key components to help improve your body’s ability to perform properly.
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
