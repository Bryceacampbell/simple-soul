import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AboutSection from "./components/AboutSection/AboutSection";
import teamData from './teamData';

const useStyles = makeStyles(() => ({
  root: {
    padding: 20,
    marginBottom: 40
  },
  button: {
    background: "var(--simple-blue)",
    color: "#fff",
    float: "right",
    marginRight: 20,
  },
}));

const Team = () => {
  const classes = useStyles();

  return (
    <Container id="home" style={{ marginBottom: 80 }}>
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            gutterBottom
            style={{
              color: "var(--simple-blue)",
            }}>Team Simple Soul</Typography>
        </Grid>
        {teamData.map((member, i) => (
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <AboutSection imgRight={i % 2 == 0 ? false : true} img={member.img} title={member.name}>
                <br></br>
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{
                    color: "var(--simple-blue)",
                  }}
                >
                  {member.name}
                </Typography>
                <Typography paragraph gutterBottom>{member.p1}</Typography>
                <Typography paragraph gutterBottom>{member.p2}</Typography>
              </AboutSection>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Team;