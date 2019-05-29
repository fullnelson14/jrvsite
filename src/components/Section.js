import React from "react"
import { css } from "@emotion/core"

export default props => (
  <div
    css={css`
      margin: ${props.topMargin ? props.topMargin : "0"}
        ${props.sideMargins ? props.sideMargins : "0"} 0
        ${props.sideMargins ? props.sideMargins : "0"};
      background-color: ${props.bColor ? props.bColor : "none"};
    `}
  >
    {props.children}
  </div>
)
