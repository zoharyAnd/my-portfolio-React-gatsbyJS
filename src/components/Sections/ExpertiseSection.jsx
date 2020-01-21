import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import front from "@material-ui/icons/Devices";
import back from "@material-ui/icons/LaptopMac";
import smartphone from "@material-ui/icons/DeveloperMode";
import security from "@material-ui/icons/Security";
import storage from "@material-ui/icons/Storage";
import wallpaper from "@material-ui/icons/Wallpaper";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";

import aboutStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ExpertiseSection extends React.Component {
    render() {
      const { classes } = this.props;
      
      return (
        <GridContainer justify="center" id="skills-section">
            <h2 className="titleBold">Skills and Expertise</h2>
            <GridContainer className="expertise-wrapper">
            
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  title="Front-end Development"
                  description="Development, integration and maintenance of web-responsive application interfaces. Cross-browser testing and optimisation."
                  icon={front}
                  iconColor="rose"
                  vertical
                />
                <div className="skills-container">
                    Sass
                    <CustomLinearProgress variant="determinate" color="info" value={95} />
                    NodeJs
                    <CustomLinearProgress variant="determinate" color="info" value={70} />
                    AngularJS 
                    <CustomLinearProgress variant="determinate" color="info" value={82} />
                    ReactJS 
                    <CustomLinearProgress variant="determinate" color="info" value={87} />
                    Gatsby 
                    <CustomLinearProgress variant="determinate" color="info" value={75} />
                    HTML5, CSS3, Bootsrap
                    <CustomLinearProgress variant="determinate" color="info" value={(95)} />
                    Javascript, JQuery 
                    <CustomLinearProgress variant="determinate" color="info" value={80} />
                    
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  title="Back-end Development "
                  description="Development, testing and maintenance of web APIs and server side functionalities of web applications. Later experiences in deep learning."
                  icon={back}
                  iconColor="primary"
                  vertical
                />
                <div className="skills-container">
                    Dotnet MVC 
                    <CustomLinearProgress variant="determinate" color="info" value={95} />
                    C#, ASPNet, VB.NET 
                    <CustomLinearProgress variant="determinate" color="info" value={(75)} />
                    Drupal
                    <CustomLinearProgress variant="determinate" color="info" value={70} />
                    Laravel
                    <CustomLinearProgress variant="determinate" color="info" value={82} />
                    PHP 
                    <CustomLinearProgress variant="determinate" color="info" value={65} />
                    Java 
                    <CustomLinearProgress variant="determinate" color="info" value={78} />
                    Python 
                    <CustomLinearProgress variant="determinate" color="info" value={60} />
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  title="Mobile Development"
                  description="Front and back-end development of cross-platform and native Android applications."
                  icon={smartphone}
                  iconColor="success"
                  vertical
                />
                <div className="skills-container">
                    Xamarin 
                    <CustomLinearProgress variant="determinate" color="info" value={90} />
                    Android Native
                    <CustomLinearProgress variant="determinate" color="info" value={65} />
                    Flutter
                    <CustomLinearProgress variant="determinate" color="info" value={50} />
                    JQuery Mobile 
                    <CustomLinearProgress variant="determinate" color="info" value={(95)} />
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  title="Database Management"
                  description="Design and administration of relational databases. Later 
                  experiences on Big data analysis and classification."
                  icon={storage}
                  iconColor="info"
                  vertical
                />
                <div className="skills-container">
                    SQL, MySQL
                    <CustomLinearProgress variant="determinate" color="info" value={(95)} />
                    SQLite 
                    <CustomLinearProgress variant="determinate" color="info" value={90} />
                    Oracle, Access
                    <CustomLinearProgress variant="determinate" color="info" value={65} />
                    GraphQL
                    <CustomLinearProgress variant="determinate" color="info" value={50} />
                    MongoDB
                    <CustomLinearProgress variant="determinate" color="info" value={50} />
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  title="Cyber Security"
                  description="Basics on development and testing of web applications 
                  using best practices in web security."
                  icon={security}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  title="Graphics and Design"
                  description="Inpecting and building assets and animations used for user interfaces."
                  icon={wallpaper}
                  iconColor="rose"
                  vertical
                />
                <div className="skills-container">
                    Adobe Photoshop
                    <CustomLinearProgress variant="determinate" color="info" value={(95)} />
                    Adobe Xd
                    <CustomLinearProgress variant="determinate" color="info" value={90} />
                    Adobe Illustrator and Animate
                    <CustomLinearProgress variant="determinate" color="info" value={65} />
                </div>
              </GridItem>
            </GridContainer>
        </GridContainer>
      );
    }
  }
  
  export default withStyles(aboutStyle)(ExpertiseSection);