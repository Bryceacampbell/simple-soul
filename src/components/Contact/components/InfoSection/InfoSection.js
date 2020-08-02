import React from "react";
import InfoCard from "./InfoCard";
import { Grid } from "@material-ui/core";
import FamilyIcon from "../../../SvgIcons/Family/FamilyIcon";
import HusbandWifeIcon from "../../../SvgIcons/HusbandWife/HusbandWifeIcon";

const InfoSection = () => {
  const infoCards = [
    { icon: <FamilyIcon width='4rem' color='var(--simple-blue' />, header: "Family Discounts", text: "Simple family. Simple Soul." },
    { icon: <HusbandWifeIcon width='4rem' color='var(--simple-blue' />, header: "Couples Discounts", text: "Find your Simple Soul with your soul mate." },
  ];
  return (
    <Grid spacing={5} style={{ marginTop: ".5em" }} container justify="center">
      {infoCards.map(card => (
        <Grid item xs={12}>
          <InfoCard icon={card.icon} header={card.header} text={card.text} />
          </Grid>
      ))}
    </Grid>
  );
};

export default InfoSection;
