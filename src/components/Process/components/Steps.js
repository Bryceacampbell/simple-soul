import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Hair from "../../SvgIcons/Hair/Hair";
import NinetyDay from "../../SvgIcons/NinetyDay/NinetyDay";
import PieChartIcon from "@material-ui/icons/PieChart";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ScanIcon from '../../SvgIcons/Scan/Scan';

const useStyles = makeStyles(() => ({
  roundedDiv: {
    borderRadius: "50%",
    background: "#00707C",
    width: '6em',
    height: '6em',
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 10,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  iconFont: {
    fontSize: "3.5em",
    color: 'white'
  },
}));

const Steps = () => {
  const classes = useStyles();
  const steps = [
    { id: 1, name: "Collect", icon: <Hair color="#fff" width="3em" /> },
    { id: 2, name: "Analyze", icon: <ScanIcon width='3rem' color='#fff' /> },
    { id: 3, name: "Results", icon: <PieChartIcon className={classes.iconFont} /> },
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
    <Grid container spacing={4} direction="row" style={{ textAlign: "center" }}>
      {steps.map((step) => (
        <Grid item xs={6} md key={step.id}>
          <div className={classes.roundedDiv}>{step.icon}</div>
          <Typography variant="h5">{step.name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Steps;
