/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
// import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// React icons
import { FaLinkedinIn, FaGooglePlusG, FaSkype, FaGithub } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  let anchorElBottom = null;
  
  return (
    <List className={classes.list}>
      {/* about link */}
      <ListItem className={classes.listItem}>
        <Button
          href="./#about-section"
          color="transparent"
          className={classes.navLink}
        >
          About
        </Button>
      </ListItem>
      {/* skills link */}
      <ListItem className={classes.listItem}>
        <Button
          href="./#skills-section"
          color="transparent"
          className={classes.navLink}
        >
          Skills
        </Button>
      </ListItem>
      {/* project link */}
      <ListItem className={classes.listItem}>
        <Button
          href="./#project-section"
          color="transparent"
          className={classes.navLink}
        >
          Projects
        </Button>
      </ListItem>
      {/* contact link */}
      <ListItem className={classes.listItem}>
        <Button
          href="./#contact-section"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Contact me
        </Button>
      </ListItem>
      {/* linkedin icon */}
      <ListItem className={classes.listItem}>
        <Tooltip
          title="Follow me on Linkedin"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/in/zohary-andrianome"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaLinkedinIn/>
          </Button>
        </Tooltip>
      </ListItem>
      {/* github */}
      <ListItem className={classes.listItem}>
        <Tooltip
          title="Follow me on Github"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://github.com/zoharyAnd"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaGithub/>
          </Button>
        </Tooltip>
      </ListItem>
      {/* googleplus icon */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="zoharyandrianome@gmail.com"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
             target="_blank"
             color="transparent"
             className={classes.navLink}
          >
          <FaGooglePlusG/>     
          </Button>
        </Tooltip>
      </ListItem>
      {/* skype icon */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on Skype: zohary.andrianome"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <FaSkype/>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
