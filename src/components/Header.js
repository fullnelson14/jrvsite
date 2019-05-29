import React from "react"
import { css } from "@emotion/core"
import LinkButton from "./headerComponents/LinkButton"
import logoImg from "../assets/images/LogoEdit.png"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const transitionTime = `300ms`
const baseStyles = css`
  height: 15%;
`
const smallStyles = css`
  height: 10%;

  border-bottom: 2px solid #cca96e;
  background-color: #fdf3e2;

  div.smaller {
    height: 100%;
  }
  .small-text {
    p {
      font-size: 18px;
      color: black;
      &:hover {
        color: #bd6800;
      }
    }
  }
`

export default class Header extends React.Component {
  state = {
    baseState: true,
  }
  componentDidMount() {
    window.addEventListener("scroll", this.resizeOnScroll)

    this.homeHeader =
      document.location.pathname === "/"
        ? `background-color: transparent;`
        : `background-color: #fdf3e2;`
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
          ${this.homeHeader}
          transition-duration: ${transitionTime};

          ${baseState ? baseStyles : smallStyles}
        `}
      >
        <div
          css={css`
            padding: 0 85px;
            height: 70%;
            transition-duration: ${transitionTime};
            background-color: #fdf3e2;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
          `}
          className="smaller"
        >
          <Link to="/">
            <img
              src={logoImg}
              alt="JR's RV Park Logo"
              css={css`
                max-height: 60px;
              `}
            />
          </Link>
        </div>
        <div
          css={css`
            padding: 0 0 0 60px;
            height: 100%;
          `}
        >
          <div
            className="small-text"
            css={css`
              display: flex;
              justify-content: space-around;
              transition-duration: ${transitionTime};
              background: linear-gradient(
                77deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(253, 243, 226, 0.9) 25%
              );
              p {
                padding: 5px;
                font-size: 20px;
                font-weight: bold;
              }
              p,
              a {
                text-decoration: none;
                transition-duration: ${transitionTime};
                color: black;
                &:hover {
                  color: #bd6800;
                }
              }
            `}
          >
            <p>
              <FontAwesomeIcon icon="phone" /> (928) 927 - 5774
            </p>
            <a
              href="mailto:jrsrvpark@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <FontAwesomeIcon icon="envelope" /> jrsrvpark@gmail.com
              </p>
            </a>
          </div>
          <div
            css={css`
              display: flex;
              justify-content: space-around;
            `}
          >
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
        </div>
      </header>
    )
  }
}
