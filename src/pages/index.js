import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import parkSignImg from "../assets/images/park_sign_night.jpg"
import SectionImageLeft from "../components/SectionImageLeft"
import Section from "../components/Section"
import heroImage from "../assets/images/cactus_landscape2.jpg"

library.add(faPhone, faEnvelope)

export default props => (
  <Layout>
    <Section>
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
    </Section>
    <SectionImageLeft
      css={css`
        box-shadow: 0 0 20px 20px black;
      `}
      sideMargins="5vw"
      image={parkSignImg}
      imageAlt="RV Park Sign"
      textTitle="It all started... "
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </SectionImageLeft>
  </Layout>
)
