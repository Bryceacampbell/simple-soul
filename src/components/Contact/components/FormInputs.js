import React from 'react'
import {  TextField, Button } from "@material-ui/core";
const FormInputs = () => {
  const inputs = [
    'Name',
    'Phone',
    'Message'
  ]
  return (
    <div style={{display: 'contents'}}>
      {inputs.map(li => (
        <TextField
        style={{ width: "80%", marginBottom: "1.5em" }}
        size="medium"
        name={li}
        label={li}
        key={li}
      ></TextField>
      ))}
      <div style={{ width: "80%" }}>
            <Button
              style={{
                float: "right",
                backgroundColor: "var(--simple-blue)",
                color: "#fff",
              }}
            >
              Send
            </Button>
          </div>
    </div>
  )
}

export default FormInputs
