import { getRegisteredStyles } from "@emotion/utils"

import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import eventsImage from "../../assets/images/olcoupledancing.jpg"
import parkImage from "../../assets/images/desertrvwithsuv.jpg"

const Container = styled.div`
  height: 70vh;
  display: flex;
  background-color: #292929;
`
const HalfBlocks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const BlockLink = styled.div`
  background: no-repeat center/100%
    url(${props => (props.background ? props.background : "")});
  background-size: cover;
  width: 70%;
  height: 70%;
`

const TextCover = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  transition-duration: 400ms;
  &:hover {
    background-color: transparent;
  }
`

export default () => (
  <Container>
    <HalfBlocks>
      <BlockLink background={parkImage}>
        <TextCover />
      </BlockLink>
    </HalfBlocks>
    <HalfBlocks>
      <BlockLink background={eventsImage}>
        <TextCover />
      </BlockLink>
    </HalfBlocks>
  </Container>
)
