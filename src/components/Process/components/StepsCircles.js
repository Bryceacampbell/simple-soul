import React from "react";
import { Typography } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import useInView from "react-cool-inview";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  roundedDiv: {
    borderRadius: "50%",
    background: "#00707C",
    width: "6em",
    height: "6em",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 10,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  }
}));
const StepsCircles = ({ icon, name, animationDuration }) => {
  console.log(animationDuration)
  const classes = useStyles();

  const controls = useAnimation();

  const startAnimation = () => {
    controls.start("open");
  };

  const { ref } = useInView({
    onEnter: startAnimation,
    unobserveOnEnter: true,
    threshold: .3
  });
  const stepVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        delay: animationDuration,
        duration: .5
      }
    },
    closed: {
      x: -200,
      opacity: 0,
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={stepVariants}
      initial="closed"
      exit="closed"
      animate={controls}
    >
      <div className={classes.roundedDiv}>{icon}</div>
      <Typography variant="h5">{name}</Typography>
    </motion.div>
  );
};

export default StepsCircles;
