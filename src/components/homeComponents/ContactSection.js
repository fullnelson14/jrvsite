import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import ContactForm from "../ContactForm"
import MapModule from "../MapModule"

const Container = styled.div`
  height: 70vh;
  display: flex;
  border-top: 2px solid #f5e0a9;
  border-bottom: 2px solid #eac55d;
  position: relative;
  z-index: 5;

  box-shadow: 0 -20px 25px 20px rgba(0, 0, 0, 0.5);
  background-color: #ffdd80;
`
const LeftDiv = styled.div`
  width: 60%;
`
const RightDiv = styled.div`
  width: 40%;
`

export default () => (
  <Container>
    <LeftDiv>
      <ContactForm />
    </LeftDiv>
    <RightDiv>
      <MapModule />
    </RightDiv>
  </Container>
)
