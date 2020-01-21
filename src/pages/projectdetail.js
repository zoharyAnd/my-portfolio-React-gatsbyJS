import React from "react"

// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";

// nodejs library that concatenates classes
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// @material-ui/core components
import "assets/scss/material-kit-react.scss?v=1.4.0";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import backgroundProfile from "../../public/images/profile-bg.jpg";
import Badge from "components/Badge/Badge.jsx";


class ProjectDetail extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const currentProject = this.props.pathContext;
        
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
                    
                />
                <Parallax small filter image={backgroundProfile} />
              
                
                <div className="detail-wrapper">
                    <GridContainer justify="center">
                        <div className="project-content">
                            <GridContainer className="project-header">
                                <GridItem xs={12} sm={12} md={4} lg={4} className="project-image">
                                    <img
                                        src={"../"+currentProject.image}
                                        alt={currentProject.slug}
                                        className="pImgRaised"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={8} lg={8}>
                                    <h2 className="project-title">{currentProject.title}</h2>
                                    <h5 className="project-date">{currentProject.date}</h5>
                                    {/* <h5>
                                        <a className="project-link" href={currentProject.link} className="demoLink">View demo</a>
                                    </h5> */}
                                    <div className="badge-wrapper">
                                        {
                                            currentProject.technologies === undefined ? <div></div> : currentProject.technologies.split(',').map(function(item, key){
                                                return <Badge key={key}>{item}</Badge>
                                            })
                                        }
                                    </div>
                                </GridItem>
                            </GridContainer>
                            
                            
                            <div className="description-wrapper" dangerouslySetInnerHTML={{__html: currentProject.description}} />
                            
                        </div>
                    </GridContainer>
                </div>
                
                <Footer />

          </div>
      );
    }
}


export default withStyles(componentsStyle)(ProjectDetail);