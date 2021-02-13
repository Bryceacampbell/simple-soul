import React from "react";
import Banner from "../Banner/Banner";
import { Grid, Container, Typography, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BookButton from "./components/BookButton";

const useStyles = makeStyles((theme) => ({
  buttonGrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  },
}));

const buttons = [
  {
    state: "AZ",
    name: "Arian",
    link: "https://square.site/book/LDPMM9HFN2MY3/simple-soul-az-2-gilbert-az",
  },
  {
    state: "AZ",
    name: "Heather",
    link: "https://square.site/book/2TM3B1F3R9Z9C/simple-soul-gilbert-az",
  },
  {
    state: "UT",
    name: "Rachel",
    link: "https://square.site/book/5KJCPAZA587D1/simplesoulut-ld-draper-ut",
  },
];

const HomeBanner = () => {
  const classes = useStyles();
  return (
    <Banner id="process">
      <Container>
        <Grid
          style={{
            height: "100%",
            width: "80%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
          }}
          item
          xs={12}
        >
          <Typography style={{ color: "white" }} align="center" variant="h6">
            Want to learn more?
          </Typography>
          <Typography
            style={{ color: "white" }}
            align="center"
            variant="h6"
            gutterBottom
          >
            Book an appointment today!
          </Typography>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {buttons.map(({ name, state, link }) => (
                    <Grid item xs={4} className={classes.buttonGrid}>
                      <BookButton name={name} link={link} state={state} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Banner>
  );
};

export default HomeBanner;
