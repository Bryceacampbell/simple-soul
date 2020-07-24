import React from "react";
import { motion, useAnimation } from "framer-motion";
import useInView from "react-cool-inview";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  roundedDiv: {
    borderRadius: "50%",
    background: "var(--simple-blue)",
    width: "6rem",
    height: "6rem",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 10,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
}));
const StepsCircles = ({ icon, name, animationDuration }) => {
  const classes = useStyles();

  const controls = useAnimation();

  const startAnimation = () => {
    controls.start("open");
  };

  const { ref } = useInView({
    onEnter: startAnimation,
    unobserveOnEnter: true,
    rootMargin: '0px 0px'
  });
  const stepVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        delay: animationDuration,
        duration: 0.5,
      },
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
      style={{ display: "inline-block" }}
    >
      <div className={classes.roundedDiv}>{icon}</div>
      <h5
        style={{
          margin: "0",
          fontFamily: "Montserrat",
          fontSize: "1.5em",
          textAlign: "center",
          fontWeight: "200",
        }}
      >
        {name}
      </h5>
    </motion.div>
  );
};

export default StepsCircles;
