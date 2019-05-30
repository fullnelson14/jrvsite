import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/cactus_landscape2.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      css={css`
        text-align: center;

        position: relative;
        h2,
        h3 {
          color: #ffdd80;
        }
      `}
    >
      <Img fluid={data.file.childImageSharp.fluid} alt="Desert Landscape" />
      <div
        css={css`
          background-color: #000000c7;
          height: 15%;
          width: 35%;
          padding: 10px;
          position: absolute;
          bottom: 50px;
        `}
      >
        <h2>Welcome to the Family!</h2>
        <h3>We're glad to have you.</h3>
      </div>
    </div>
  )
}
