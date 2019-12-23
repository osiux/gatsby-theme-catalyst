import React from "react"
import { graphql } from "gatsby"
import PostList from "../components/post-list"

export default ({ data }) => {
  const { allCatalystPost } = data
  return <PostList posts={allCatalystPost.edges} />
}

export const query = graphql`
  query PostsQuery {
    allCatalystPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          excerpt
          slug
          title
          author
          authorLink
          date(formatString: "MMMM DD, YYYY")
          tags
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
