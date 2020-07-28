import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Steps from "./components/Steps";
import piechart from "../../images/piechart.jpg";
import { motion, useAnimation } from "framer-motion";
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
      x: 25,
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
    rootMargin: '-200px -20px'
  });

  const classes = useStyles();
  return (
    <Container style={{ marginBottom: 80 }}>
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12} sm={6}>
          <br></br>
          <Typography
            variant="h4"
            gutterBottom
            style={{
              color: "var(--simple-blue)",
            }}
          >
            How we scan
          </Typography>
          <Typography variant="h6" gutterBottom>
            After setting up an appointment you can plan on your on about and hour and fifteen minutes the day 
            of your scan. There is no special prep needed. We use the bulb of your hair. Unaffected by shampoos 
            or hair dye, or other outside environmental factors. Small tweezers are used to grab 3-4 hair bulbs, 
            that’s it!! Bulbs are placed on the scanner and we receive your report back on the computer in roughly 
            12-15min. From there we carefully go through your report analyzing all the info. Three very specific 
            pages are given to us first. Your immune system, gut health and cardiovascular system. Each page is 
            detailed with key nutrients needed to properly function each of those systems. As well as looking over 
            any frequencies or environmental issues that could be causing the system to not perform its best. From 
            there we look deeper into specific vitamins, minerals, fatty acids, antioxidants as well as good 
            additives that could be affecting you. At the end the report compiles with priority how you can best 
            optimizes your health. It tells us exactly where the body is lacking the most and what foods will help 
            to bring those deficiencies up. It will also guide us to what foods you should avoid as well as food 
            sensitivities as over time they create imbalances in our system.
          </Typography>
          <Typography variant="h6" gutterBottom>
          Your guided with a 90 protocol on how to eat specifically for you body!
          </Typography>
          <Typography variant="h6" gutterBottom>
          The goal is to attack those areas lacking the most nutritionally to help them carry out there specific 
          function better. We rescan in 90 days and see if better balanced has been achieved in all areas of the 
          mind, body and soul.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div ref={ref}>
            <motion.img
              variants={imgVariants}
              initial="closed"
              animate={controls}
              src={piechart}
              alt="Epigenetic Indicators Chart"
              width="350"
            />
          </div>
        </Grid>
      </Grid>
      <Steps inView={inView} variants={imgVariants} />
    </Container>
  );
};

export default Process;
