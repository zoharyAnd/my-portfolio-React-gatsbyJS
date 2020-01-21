/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    // creation of a fields->slug for each node coffee 
    if(node.internal.type === 'RealisationItemsJson'){
        const value = (node.title).replace(/ /g,"-").toLowerCase();
        createNodeField({
            node, 
            name: `slug`,
            value: value,
        })
    }
    else if (node.internal.type === 'FoodartJson'){
      const value = (node.title).replace(/ /g,"-").toLowerCase();
        createNodeField({
            node, 
            name: `slug`,
            value: value,
        })
    }
}

// create a detail page for each node realisation
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
  
    const projectdetail = path.resolve(`./src/pages/projectdetail.js`)
    // const foodartdetail = path.resolve(`./src/pages/foodartdetail.js`)
    return graphql(
      `
        {
            allRealisationItemsJson {
                edges {
                  node {
                    date
                    description
                    fields {
                      slug
                    }
                    image
                    technologies
                    title
                    link
                    briefs
                  }
                }
            },
            allFoodartJson {
              edges {
                node {
                  title
                  image
                  directions
                  ingredients
                  reference
                  fields {
                    slug
                  }
                }
              }
            }                             
        }
      `
    ).then(result => {
      if (result.errors) {
        throw result.errors
      }
  
      // Create project detail pages.
      const projects = result.data.allRealisationItemsJson.edges
  
      projects.forEach((project, index) => {
        const previous = index === projects.length - 1 ? null : projects[index + 1].node
        const next = index === 0 ? null : projects[index - 1].node
        
        createPage({
          path: project.node.fields.slug,
          component: projectdetail,
          context: {
            slug: project.node.fields.slug,
            title: project.node.title,
            date: project.node.date,
            link: project.node.link,
            description: project.node.description,
            image: project.node.image,
            technologies: project.node.technologies,
            briefs: project.node.briefs,
            previous,
            next,
          },
        })
      })

      //create recipe detail pages
      // const recipes = result.data.allFoodartJson.edges
  
      // recipes.forEach((recipe, index) => {
      //   const previous = index === recipes.length - 1 ? null : recipes[index + 1].node
      //   const next = index === 0 ? null : recipes[index - 1].node
        
      //   createPage({
      //     path: recipe.node.fields.slug,
      //     component: foodartdetail,
      //     context: {
      //       slug: recipe.node.fields.slug,
      //       title: recipe.node.title,
      //       image: recipe.node.image,
      //       directions: recipe.node.directions,
      //       ingredients: recipe.node.ingredients,
      //       reference: recipe.node.reference,
      //       previous,
      //       next,
      //     },
      //   })
      // })
      
      return null
    })

  }