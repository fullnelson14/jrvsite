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
      border-bottom: 2px solid #942401;
      box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.4);
      margin: ${props.bigSize ? "5px 10px" : "5px"};
      align-self: center;
      &:hover {
        background-color: #bd2d00;
        margin-bottom: 3px;
      }
      a {
        display: inline-block;
        padding: 10px 15px;
        text-decoration: none;
        color: black;
      }
    `}
  >
    <Link to={props.to}>{props.children}</Link>
  </div>
)
