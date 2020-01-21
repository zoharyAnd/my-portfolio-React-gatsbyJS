import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import contactStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ContactSection extends React.Component {
    render() {
      const { classes } = this.props;
      
      return (
        <GridContainer justify="center" id="contact-section" className="contact-wrapper">
            <h2 className="titleBold">Contact me</h2>
            <GridItem xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                labelText="Your email address"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    type: "email",
                    name: "email",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                labelText="Object of your message"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    type: "text",
                    name: "object"
                }}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                name="message"
                labelText="Your message"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    type: "text",
                    name: "message"
                }}
                />
            </GridItem>
            <Button type="submit" color="success">Send message</Button>
        </GridContainer>
      );
    }
  }
  
  export default withStyles(contactStyle)(ContactSection);