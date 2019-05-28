import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

export default props => (
  <div
    css={css`
      display: inline-block;
      background-color: #ff3d00;
      border-radius: 20px;
      transition-duration: 400ms;
      font-size: 22px;

      padding: ${props.bigSize ? "10px" : "4px"};
      margin: ${props.bigSize ? "5px 10px" : "4px"};
      &:hover {
        background-color: #bd2d00;
      }
      a {
        text-decoration: none;
        color: black;
      }
    `}
  >
    <Link to={props.to}>{props.children}</Link>
  </div>
)
