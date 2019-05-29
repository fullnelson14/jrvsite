import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Helmet } from "react-helmet"
import { css } from "@emotion/core"

export default ({ children }) => (
  <div>
    <Helmet defaultTitle="JR's RV Park">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
    <Header />
    <main
      css={css`
        min-height: 100vh;
      `}
    >
      {children}
    </main>

    <Footer />
  </div>
)
