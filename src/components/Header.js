import React from "react"
import { css } from "@emotion/core"
import LinkButton from "./headerComponents/LinkButton"
import logoImg from "../assets/images/LogoEdit.png"
import { Link } from "gatsby"
import headerBackground from "../assets/images/cactus_landscape1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const transitionTime = `300ms`
const baseStyles = css`
  height: 15%;
`
const smallStyles = css`
  height: 10%;

  div.smaller {
    height: 100%;
  }
  .small-text {
    font-size: 16px;
  }
`

export default class Header extends React.Component {
  state = {
    baseState: true,
  }
  componentDidMount() {
    window.addEventListener("scroll", this.resizeOnScroll)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.resizeOnScroll)
  }

  resizeOnScroll = () => {
    const resizeAt = 10
    if (document.documentElement.scrollTop > resizeAt) {
      this.setState({ baseState: false })
    } else {
      this.setState({ baseState: true })
    }
  }

  render() {
    const { baseState } = this.state
    return (
      <header
        css={css`
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          z-index: 10;
          background: no-repeat center/100% url(${headerBackground});
          transition-duration: ${transitionTime};
          border-bottom: 2px solid #bd2d00;

          ${baseState ? baseStyles : smallStyles}
        `}
      >
        <div
          css={css`
            padding: 0 85px;
            height: 70%;
            transition-duration: ${transitionTime};
            background-color: #ff3d00;
          `}
          className="smaller"
        >
          <Link to="/">
            <img
              src={logoImg}
              alt="JR's RV Park"
              css={css`
                max-height: 60px;
              `}
            />
          </Link>
        </div>
        <div
          css={css`
            padding: 0 30px 0 60px;
            height: 100%;
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(0, 0, 0, 0.65) 16%
            );
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-around;
              p {
                padding: 5px;
                font-size: 20px;
                color: #ffdd80;
                font-weight: bold;
                color: #ffdd80;
              }
              p,
              a {
                text-decoration: none;
                color: #ffdd80;
                transition-duration: ${transitionTime};
                &:hover {
                  color: #bd6800;
                }
              }
            `}
          >
            <p className="small-text">
              <FontAwesomeIcon icon="phone" /> (928) 927 - 5774
            </p>
            <a
              href="mailto:jrsrvpark@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="small-text">
                <FontAwesomeIcon icon="envelope" /> jrsrvpark@gmail.com
              </p>
            </a>
          </div>
          <LinkButton to="/" bigSize={baseState}>
            Home
          </LinkButton>
          <LinkButton to="/rates" bigSize={baseState}>
            Rates/Amenities
          </LinkButton>
          <LinkButton to="/" bigSize={baseState}>
            Events
          </LinkButton>
        </div>
      </header>
    )
  }
}
