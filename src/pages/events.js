import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import Section from "../components/Section"

export default props => (
  <Layout>
    <Section
      css={css`
        height: 100vh;
      `}
    >
      Hello There
    </Section>
  </Layout>
)
