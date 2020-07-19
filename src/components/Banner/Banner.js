import React from "react";
import { Grid, Container, Typography, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TopSVG from "./components/TopSVG/TopSVG";
import BottomSVG from "./components/BottomSVG/BottomSVG";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 150,
    width: "100%",
    background: "var(--simple-blue)",
  },
  half: {
    position: "absolute",
    left: "25%",
  },
  right: {
    top: 50,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={0}>
        <Grid direction="column" alignItems="flex-end" container>
          <TopSVG />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.root}>
            <Container>
              <Grid container alignItems="center">
                <Grid item xs={12}>
                  <Box mt={3}>
                    <Typography
                      style={{ color: "white" }}
                      align="center"
                      variant="h5"
                    >
                      Want to learn more?
                    </Typography>
                    <Typography
                      style={{ color: "white" }}
                      align="center"
                      variant="h5"
                      gutterBottom
                    >
                      Schedule an appointment today!
                    </Typography>
                    <Box display="flex" justifyContent="center">
                      <Button style={{color: 'white', borderColor: '#ccc'}} variant="outlined">
                        Schedule Appointment
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Grid>
        <Grid item xs={12}>
          <BottomSVG />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
