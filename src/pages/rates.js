import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import RateRow from "../components/RateRow"
import Section from "../components/Section"

export default () => (
  <Layout>
    <Section sideMargins="5vw">
      <div
        css={css`
          text-align: center;
          font-size: 30px;
        `}
      >
        Park Rates
      </div>
      <RateRow
        title="Daily"
        subtitle="Includes Electrical and Sales Tax"
        price="30"
      />
      <RateRow
        title="Weekly"
        subtitle="Includes Electrical and Sales Tax"
        price="190"
      />
      <RateRow
        title="Monthly"
        subtitle="Plus Electrical billed @ $.18 per kilowatt with $3/Month Service Fee"
        price="300"
      />
      <RateRow
        title="Annual"
        subtitle="Plus Electrical billed @ $.18 per kilowatt with $3/Month Service Fee"
        price="1,350"
      />
      <RateRow
        title="Resident"
        subtitle="Plus Electrical billed per APS Residential Schedule"
        price="2,000"
      />
    </Section>
  </Layout>
)
