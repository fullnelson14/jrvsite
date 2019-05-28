import React from "react"
import { css } from "@emotion/core"

export default props => (
  <div
    css={css`
      margin: 0 ${props.sideMargins} 0 ${props.sideMargins};
    `}
  >
    {props.children}
  </div>
)
