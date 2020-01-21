import React from "react"

import { graphql, StaticQuery } from "gatsby";
import GridContainer from "components/Grid/GridContainer.jsx";

// core components
import Header from "components/Header/Header.jsx";
import HeaderFoodArt from "components/Header/HeaderFoodArt.jsx";


import 'typeface-roboto';
import 'typeface-roboto-slab';

class FoodArt extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const recipes =  this.props.data.allFoodartJson.nodes.map((node, index) => 
        {
            if (node.title.length > 20){
                node.title = node.title.substring(0, 20)+" ...";
            }
            else node.title = node.title;

            return ([
                <a href={"/"+node.fields.slug} className="card" key={index}>  
                    <div className="card-image">
                            <img src={node.image}  alt={node.id} />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{node.title}</h2>
                        <p>{node.ingredients.substring(0, 100)+" ..."}</p>
                        <p>{node.directions.substring(0, 100)+" ..."}</p>
                        <p>{node.reference}</p>
                    </div>
                </a>
            ]);
       })

        return (
            <div className="foodart-pages" style={{backgroundImage: "url(images/foodart/board.jpg)", backgroundRepeat: "no-repeat"}}>
                <Header
                    brand="Food Art"
                    rightLinks={<HeaderFoodArt />}
                    fixed
                    color="transparent"
                    changeColorOnScroll={{
                        height: 50,
                        color: "white"
                    }}
                />
                <div className="custom-container custom-containerFluid">
                    <GridContainer justify="center">
                        <div className="card-wrapper recipes-wrapper">
                            {recipes}
                        </div>
                    </GridContainer> 
                </div>
            </div>
           
            
        );//end return
    }//end render
}

export default () => (
    <StaticQuery 
    query = {
        graphql`
        query {
            allFoodartJson {
                nodes {
                  directions
                  image
                  ingredients
                  reference
                  title
                  fields {
                      slug
                  }
                }
              }
        }
    `}
    render = {
        (data) => (<FoodArt data={data}/>)
    }
    

    />
) 