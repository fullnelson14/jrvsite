import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

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
  width: 70%;
  height: 70%;
  overflow: hidden;
  position: relative;
  transition-duration: 400ms;
  border-radius: 3px;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.7);
  }
`

const TextCover = props => (
  <div className={props.className}>
    <div>
      <h3>{props.title}</h3>
      <p>{props.children}</p>
    </div>
  </div>
)
const StyledTextCover = styled(TextCover)`
  position: absolute;
  top: 0;

  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  transition-duration: 400ms;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  div {
    background-color: rgba(0, 0, 0, 0.75);
    text-align: center;
    margin: 5px;
    padding: 5px;
    border-radius: 3px;
    transition-duration: 400ms;
    h3,
    p {
      color: #cca96e;
      padding: 5px;
    }
  }
  &:hover {
    div {
      transform: translateY(-20px);
    }
    background-color: transparent;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      desertRv: file(relativePath: { regex: "/desertrvwithsuv.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oldCouple: file(relativePath: { regex: "/olcoupledancing.jpg/" }) {
        childImageSharp {
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <HalfBlocks>
        <BlockLink>
          <Img
            fluid={data.desertRv.childImageSharp.fluid}
            alt="RV in the Desert"
            id="TESTBRAD"
          />
          <Link to="/rates">
            <StyledTextCover title="Park Details">
              Park Rates, Amenities, Rules
            </StyledTextCover>
          </Link>
        </BlockLink>
      </HalfBlocks>
      <HalfBlocks>
        <BlockLink>
          <Img
            fluid={data.oldCouple.childImageSharp.fluid}
            alt="Old Couple Dancing"
          />
          <Link to="/events">
            <StyledTextCover title="Events">
              See what is coming up!
            </StyledTextCover>
          </Link>
        </BlockLink>
      </HalfBlocks>
    </Container>
  )
}
