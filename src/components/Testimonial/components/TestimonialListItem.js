import React from "react";
import { Typography, Card, CardMedia, Grid } from "@material-ui/core";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { makeStyles } from "@material-ui/core/styles";
import { motion, useAnimation } from "framer-motion";
import useInView from "react-cool-inview";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "100%",
    borderRadius: 10,
  },
  icon: {
    color: "var(--simple-blue)",
    fontSize: 40,
  },
  media: {
    height: 400,
  },
}));

const ListItem = ({ name, review, imgUrl, direction }) => {
  const classes = useStyles();

  const controls = useAnimation();

  const { ref } = useInView({
    onEnter: () => {
      controls.start("open");
    },
    rootMargin: '0px 250px'
  });

  const cardVariants = {
    open: {
      x: 0,
      opacity: 1,
    },
    closed: {
      x: direction === "left" ? -500 : direction === "right" ? 500 : 0,
      opacity: 0,
    },
  };

  return (
    <motion.div transition={{duration: 1}} ref={ref} variants={cardVariants} initial= 'closed' animate={controls} >
      <Card className={classes.root} raised={true}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <CardMedia className={classes.media} image={imgUrl} />
          </Grid>
          <Grid item xs={12} md style={{ padding: "10px 20px 10px 20px" }}>
            <div style={{ display: "inline-flex" }}>
              <FormatQuoteIcon className={classes.icon} />
              <Typography variant="h5" style={{ marginTop: 10 }}>
                {name}
              </Typography>
            </div>
            <Typography variant="body1">{review}</Typography>
          </Grid>
        </Grid>
      </Card>
    </motion.div>
  );
};

export default ListItem;
