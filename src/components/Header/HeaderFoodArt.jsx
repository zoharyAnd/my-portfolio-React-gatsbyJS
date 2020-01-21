/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerFoodArtStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderFoodArt({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>Appetizers</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>Main Courses</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>Desserts</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>Categories</Button>
      </ListItem>
      
      
    </List>
  );
}

export default withStyles(headerFoodArtStyle)(HeaderFoodArt);
