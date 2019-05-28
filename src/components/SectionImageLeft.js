import React from "react"
import { css } from "@emotion/core"

export default props => (
  <div
    css={css`
      display: flex;
      margin: 0 ${props.sideMargins} 0 ${props.sideMargins};
    `}
  >
    <div
      css={css`
        img {
          max-width: 300px;
          transform: rotate(90deg);
          z-index: 0;
        }
      `}
    >
      <img src={props.image} alt={props.imageAlt} />
    </div>
    <div>
      <h5>{props.textTitle}</h5>
      <p>{props.children}</p>
    </div>
  </div>
)
