import React from "react"
import { css } from "@emotion/core"
import heroImage from "../../assets/images/cactus_landscape2.jpg"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => {
  return (
    <div
      css={css`
        text-align: center;

        padding: 25vh 0 10vh 0;
        background: no-repeat center/100% url(${heroImage});
        h2,
        h3 {
          color: #ffdd80;
        }
      `}
    >
      <div
        css={css`
          background-color: #000000c7;
          height: 100%;
          width: 35%;
          padding: 10px;
        `}
      >
        <h2>Welcome to the Family!</h2>
        <h3>We're glad to have you.</h3>
      </div>
    </div>
  )
}
