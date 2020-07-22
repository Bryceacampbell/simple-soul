import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Steps from "./components/Steps";
import piechart from "../../images/piechart.jpg";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import useInView from "react-cool-inview";

const useStyles = makeStyles(() => ({
  root: {
    padding: 20,
    marginBottom: 40,
  },
}));

const Process = () => {
  const imgVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
    closed: {
      x: 300,
      opacity: 0,
    },
  };

  const controls = useAnimation();

  const startAnimation = () => {
    controls.start("open");
  };

  const { ref, inView } = useInView({
    onEnter: startAnimation,
    unobserveOnEnter: true,
   rootMargin: '-200px 0px'
  });

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
              color: "#00707C",
            }}
          >
            Our Process
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
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div ref={ref}>
            <AnimatePresence>
              {inView && (
                <motion.img
                  variants={imgVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  src={piechart}
                  alt="Epigenetic Indicators Chart"
                  width="350"
                />
              )}
            </AnimatePresence>
          </div>
        </Grid>
      </Grid>
      <Steps inView={inView} variants={imgVariants} />
    </Container>
  );
};

export default Process;
