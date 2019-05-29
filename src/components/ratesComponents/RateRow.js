import React from "react"
import { css } from "@emotion/core"

export default props => (
  <div
    css={css`
      display: flex;
      justify-content: space-around;
      margin: 30px 0;
    `}
  >
    <div
      css={css`
        width: 65%;
        display: flex;
        flex-direction: column;
        h5 {
          font-size: 35px;
        }
        p {
          font-size: 18px;
        }
      `}
    >
      <h5>{props.title}</h5>
      <p>{props.subtitle}</p>
    </div>
    <div
      css={css`
        font-size: 40px;
        align-self: center;
        text-align: right;
        width: 25%;
      `}
    >
      ${props.price}.00
    </div>
  </div>
)
