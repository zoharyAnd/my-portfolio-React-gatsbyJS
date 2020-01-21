import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import aboutStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";



class AboutSection extends React.Component {
  render() {
    const { classes } = this.props;
    const aboutClass = "about-content";
    const theTitle = "titleBold";
    return (
      <div className={classNames(classes.section, aboutClass)} id="about-section">
        <GridContainer justify="center" className="about-resume">
          <GridItem xs={12} sm={12} md={8} >
            <h2 className={classNames(classes.title, theTitle)}>About me</h2>
            <h5 className={classes.description}>
            I am a motivated and driven software developer, striving for a constructive journey in the software development world. My objectives are to nurture new skills and gather experiences, meanwhile producing meticulous and great quality work. <br/>
            I am particularly keen on building and maintaining modern web and mobile applications. The integration of the Machine Learning approach in different projects has been my latest area of interest. <br/>
            I have faith in hard work and team spirit and I am convinced that they are the keys to great achievements.
            </h5>
          </GridItem>
        </GridContainer>
        
      </div>
    );
  }
}

export default withStyles(aboutStyle)(AboutSection);
