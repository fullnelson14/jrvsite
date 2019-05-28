import React from "react"
import { css } from "@emotion/core"
import AddressModule from "./footerComponents/AddressModule"
import desertImg from "../assets/images/desertLandscape.jpg"

export default () => (
  <footer
    css={css`
      width: 100%;
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        background: no-repeat center/100% url(${desertImg});
      `}
    >
      <div
        css={css`
          width: 60%;
        `}
      />
      <div
        css={css`
          width: 40%;
          display: flex;
          padding: 10px 0;
          background-color: #bd6800;
          justify-content: space-around;
          align-items: center;
        `}
      >
        <div>
          <p>"Where Friends Stay!"</p>
        </div>
        <AddressModule />
      </div>
    </div>
    <div
      css={css`
        background-color: #634e3c;
        padding: 5px;
        a {
          color: black;
          transition-duration: 300ms;
          &:hover {
            color: #6b0c07;
          }
        }
      `}
    >
      Built by{" "}
      <a
        href="https://github.com/fullnelson14"
        target="_blank"
        rel="noopener noreferrer"
      >
        Brad Nelson
      </a>{" "}
      | © {new Date().getFullYear()} JR's RV Park
    </div>
  </footer>
)
