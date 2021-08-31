import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Hair from "../../SvgIcons/Hair/Hair";
import NinetyDay from "../../SvgIcons/NinetyDay/NinetyDay";
import PieChartIcon from "@material-ui/icons/PieChart";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ScanIcon from "../../SvgIcons/Scan/Scan";
import { AnimatePresence } from "framer-motion";
import Step from "./AnimatedStepsCircles";
import MobileSteps from "./StepCircles";
const useStyles = makeStyles(() => ({
  iconFont: {
    fontSize: "3.5em",
    color: "white",
  },
}));

const Steps = ({ inView }) => {
  const classes = useStyles();
  const steps = [
    { id: 1, name: "Collect", icon: <Hair color="#fff" width="3em" /> },
    { id: 2, name: "Analyze", icon: <ScanIcon width="3rem" color="#fff" /> },
    {
      id: 3,
      name: "Results",
      icon: <PieChartIcon className={classes.iconFont} />,
    },
    {
      id: 4,
      name: "Optimize Wellness",
      icon: <AssignmentIcon className={classes.iconFont} />,
    },
    {
      id: 5,
      name: "90 Day Review",
      icon: <NinetyDay color="#fff" width="3em" />,
    },
  ];
  return (
    <>
      <Hidden smDown>
        <AnimatePresence>
          {inView && (
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="space-around"
              style={{ textAlign: "center" }}
            >
              {steps.map((step, i) => {
                return (
                  <Grid item xs key={step.name}>
                    <Step
                      name={step.name}
                      icon={step.icon}
                      animationDuration={i * 0.3}
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </AnimatePresence>
      </Hidden>
      <Hidden mdUp>
        <Grid container direction="row" justifyContent="space-around">
          {steps.map((step, i) => (
            <Grid item xs key={`${step.name}-mobile`}>
              <MobileSteps icon={step.icon} name={step.name} />
            </Grid>
          ))}
        </Grid>
      </Hidden>
    </>
  );
};

export default Steps;
