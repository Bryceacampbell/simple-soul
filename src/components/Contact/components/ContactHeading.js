import React from "react";
import {Typography} from '@material-ui/core'
const ContactHeading = ({ text }) => {
  return (
    <div>
      <Typography
        style={{
          color: "#00707C",
          marginBottom: 20,
        }}
        variant="h4"
      >
        Get in touch.
      </Typography>
    </div>
  );
};

export default ContactHeading;
