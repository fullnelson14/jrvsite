import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/park_sign.JPG/" }) {
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div
      css={css`
        padding: 50px ${props.sidePadding};
        border-top: 3px solid #ffe7a7;
        border-bottom: 3px solid #464542;
        background-color: #fdf3e2;
        position: relative;
        z-index: 5;
        box-shadow: 0 0 25px 40px rgba(0, 0, 0, 0.5);
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            padding: 15px 15px 11px 15px;
            img {
              max-width: 300px;
            }
          `}
        >
          <Img fixed={data.file.childImageSharp.fixed} alt="JR RV Park Sign" />
        </div>
        <div
          css={css`
            padding: 25px;
            h3 {
              margin-bottom: 15px;
              font-size: 30px;
            }
            p {
              line-height: 30px;
            }
          `}
        >
          <h3>{props.textTitle}</h3>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  )
}
