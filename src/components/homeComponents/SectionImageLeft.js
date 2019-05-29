import React from "react"
import { css } from "@emotion/core"

export default props => (
  <div
    css={css`
      padding: 50px ${props.sidPadding};
      border-top: 3px solid #ffe7a7;
      border-bottom: 3px solid #464542;
    `}
  >
    <div
      css={css`
        display: flex;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
      `}
    >
      <div
        css={css`
          img {
            max-width: 300px;
            transform: rotate(-90deg);
            box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.4);
          }
        `}
      >
        <img src={props.image} alt={props.imageAlt} />
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
