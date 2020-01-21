import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";

import { graphql, StaticQuery } from "gatsby";

class ProjectSection extends React.Component {
    
    render() {
        const realisations = this.props.data.allRealisationItemsJson.nodes.map((node, index) => 
            {   
                if (node.title.length > 20){
                    node.title = node.title.substring(0, 20)+" ...";
                }
                else node.title = node.title;

                var arrayTechnologies = node.technologies;
                let technologies = arrayTechnologies.split(',');
                const items = technologies.map((item, key) =>
                    <div key={key} className="tags">{item}</div>
                );
                
                return ([
                    <a href={"/"+node.fields.slug} className="card" key={index} >
                        <div className="card-image">
                            <img src={node.image}  alt={node.id} />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{node.title}</h2>
                            <p className="card-date">{node.date}</p>
                            <p className="card-description">{node.briefs.substring(0, 100)+" ..."}</p>
                            
                            <div className="tags-wrapper">
                                {items}
                            </div>
                        </div>
                    </a>
                ]);
            })

        return (
            <GridContainer justify="center" id="project-section">
                 <h2 className="titleBold">Realisations</h2>
                 <div className="card-wrapper">
                    {realisations}
                 </div>
            </GridContainer> 
        );//end return
    }//end render
        
    
}

export default () => (
    <StaticQuery 
    query = {
        graphql`
        query {
            allRealisationItemsJson {
                nodes {
                  title
                  date
                  link
                  description
                  image
                  technologies
                  briefs
                  fields {
                      slug
                  }
                }
            }
        }
    `}
    render = {
        (data) => (<ProjectSection data={data}/>)
    }
    

    />
) 

    


