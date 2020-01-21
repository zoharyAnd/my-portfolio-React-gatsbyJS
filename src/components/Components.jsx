import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// React icons
import { FaLinkedinIn, FaGooglePlusG, FaSkype,  FaGithub } from 'react-icons/fa';
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// Sections for this page
import AboutSection from "./Sections/AboutSection.jsx";
import ExpertiseSection from "./Sections/ExpertiseSection";
import ProjectSection from "./Sections/ProjectSection";
import ContactSection from "./Sections/ContactSection";

import componentsStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class Components extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        const mainClass = "main-content";
        const profileWrapper = "profile-wrapper";
        const theTitle = "titleBold";
        const btnSocial = "btnSocial";
        return (
            <div>
                <Header
                    brand="Zohary Andrianome"
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="transparent"
                    changeColorOnScroll={{
                        height: 50,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax small filter image="images/profile-bg.jpg" />
                <div className={classNames(classes.main, classes.mainRaised, mainClass)}>
                    <div>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                {/* title and name */}
                                <GridItem xs={12} sm={12} md={6}>
                                    <div className={classes.profile}>
                                        <div>
                                            <img src="images/profile-img.jpg" alt="..." className={imageClasses} />
                                        </div>
                                        <div className={classNames(classes.name, profileWrapper)}>
                                            <h3 className={classNames(classes.title,theTitle)}>Zohary Andrianome</h3>
                                            <h6>SOFTWARE DEVELOPER</h6>
                                            {/* linkedin */}
                                            <Button
                                                href="https://www.linkedin.com/in/zohary-andrianome"
                                                target="_blank"
                                                color="transparent"
                                                className={classNames(classes.navLink, btnSocial)}
                                            >
                                                <FaLinkedinIn/>
                                            </Button>
                                            {/* github */}
                                            <Button
                                                href="https://github.com/zoharyAnd"
                                                target="_blank"
                                                color="transparent"
                                                className={classNames(classes.navLink, btnSocial)}
                                            >
                                                <FaGithub/>
                                            </Button>
                                            {/* google + */}
                                            <Tooltip
                                                title="zoharyandrianome@gmail.com"
                                                placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
                                                classes={{ tooltip: classes.tooltip }}
                                                >
                                                <Button
                                                    target="_blank"
                                                    color="transparent"
                                                    className={classNames(classes.navLink, btnSocial)}
                                                >
                                                <FaGooglePlusG/>     
                                                </Button>
                                            </Tooltip>
                                            {/* skype */}
                                            <Tooltip
                                                title="Follow me on Skype: zohary.andrianome"
                                                placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
                                                classes={{ tooltip: classes.tooltip }}
                                                >
                                                <Button
                                                    color="transparent"
                                                    target="_blank"
                                                    className={classNames(classes.navLink, btnSocial)}
                                                >
                                                    <FaSkype/>
                                                </Button>
                                            </Tooltip>
                                        </div>
                                        <div>
                                            <a className="btnResume" href="images/Zohary Andrianome Resume.pdf" target="_blank">View my resume</a>
                                        </div>
                                    </div>
                                </GridItem>
                                <AboutSection />
                                <ExpertiseSection />
                            </GridContainer>

                            <ProjectSection />
                            <ContactSection/>
                            
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            // end return
        );
    }
}
  
export default withStyles(componentsStyle)(Components);
