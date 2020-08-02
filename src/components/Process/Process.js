import React from "react";
import {
  Grid,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Steps from "./components/Steps";
import piechart from "../../images/piechart.jpg";
import { motion, useAnimation } from "framer-motion";
import useInView from "react-cool-inview";
import { AddCircle } from "@material-ui/icons";

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
    rootMargin: "-200px -20px",
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
          <Typography paragraph gutterBottom>
            We use small tweezers to grab 3-4 hair bulbs, which are then placed on
            our scanner. Your report is sent back in roughly 12-15 minutes.
            Then, we thoroughly analyze all the information in the report and
            develop a 90 day personalized health optimization plan.

          </Typography>
          <Typography paragraph>
            Simple Soul specializes in the first 3 pages of the report which
            gives us specific information on:
          </Typography>
          <List style={{ listStyleType: "circle" }}>
            {["Immune System", "Gut Health", "Cardiovascuar System"].map(
              (item, ind) => (
                <ListItem>
                  <ListItemIcon>
                    <AddCircle style={{color:'var(--simple-blue)'}} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "h6",
                    }}
                  >
                    {item}
                  </ListItemText>
                </ListItem>
              )
            )}
          </List>
          <Typography paragraph gutterBottom>
            You're guided with a 90 protocol on how to eat specifically for your
            body!
          </Typography>
          <Typography paragraph gutterBottom>
           We rescan in 90 days and see if a better balance has been achieved in all areas of the mind, body and soul.
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
