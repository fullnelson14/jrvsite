import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const MapModule = props => (
  <div className={props.className}>FIND US ON THIS SHNAZZY MAP</div>
)

const StyledMapModule = styled(MapModule)`
  background-color: grey;
`

export default StyledMapModule
