/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
              >
                Zohary Andrianome
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/#about-section"
                className={classes.block}
              >
                About
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/#skills-section"
                className={classes.block}
              >
                Skills
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/#project-section"
                className={classes.block}
              >
                Projects
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          by{" "}
          <a
            href="/"
            className={aClasses}
          >
            Zohary Andrianome
          </a>
          , &copy; {1900 + new Date().getYear()}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
