import React from "react";
import InfoCard from "./InfoCard";
import { Grid } from "@material-ui/core";
import FamilyIcon from "../../../SvgIcons/Family/FamilyIcon";
import HusbandWifeIcon from "../../../SvgIcons/HusbandWife/HusbandWifeIcon";

const InfoSection = () => {
  const infoCards = [
    { icon: <FamilyIcon width='4rem' color='var(--simple-blue' />, header: "Family Discounts", text: "Simple family. Simple Soul. Get $25 off each of the first two scans, $50 off each of the third and fourth, and $75 off for any additional scans for your immediate family." },
    { icon: <HusbandWifeIcon width='4rem' color='var(--simple-blue' />, header: "Couples Discounts", text: "Find your Simple Soul with your soulmate and get $25 off each scan." },
  ];
  return (
    <Grid spacing={5} style={{ marginTop: ".5em" }} container justify="center">
      {infoCards.map((card, i) => (
        <Grid item xs={12} key={`card-${i}`}>
          <InfoCard icon={card.icon} header={card.header} text={card.text} />
          </Grid>
      ))}
    </Grid>
  );
};

export default InfoSection;
