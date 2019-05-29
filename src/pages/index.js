import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import parkSignImg from "../assets/images/park_sign_night.jpg"
import SectionImageLeft from "../components/homeComponents/SectionImageLeft"
import Section from "../components/Section"
import HeroBanner from "../components/homeComponents/HeroBanner"
import HomeNavSection from "../components/homeComponents/HomeNavSection"
import ContactSection from "../components/homeComponents/ContactSection"

library.add(faPhone, faEnvelope)

export default props => (
  <Layout>
    <Section>
      <HeroBanner />
    </Section>
    <SectionImageLeft
      css={css`
        box-shadow: 0 0 20px 20px black;
      `}
      sidePadding="5vw"
      image={parkSignImg}
      imageAlt="RV Park Sign"
      textTitle="It all started... "
    >
      Is branched in my up strictly remember. Songs but chief has ham widow
      downs. Genius or so up vanity cannot. Large do tried going about water
      defer by. Silent son man she wished mother. Distrusts allowance do
      knowledge eagerness assurance additions to. Picture removal detract
      earnest is by. Esteems met joy attempt way clothes yet demesne tedious.
      Replying an marianne do it an entrance advanced. Two dare say play when
      hold. Required bringing me material stanhill jointure is as he. Mutual
      indeed yet her living result matter him bed whence.{" "}
    </SectionImageLeft>
    <Section>
      <HomeNavSection />
    </Section>
    <Section>
      <ContactSection />
    </Section>
  </Layout>
)
