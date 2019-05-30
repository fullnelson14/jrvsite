import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(e.target.elements.name.value)
    console.log(e.target.elements.email.value)
    console.log(e.target.elements.message.value)
  }
  handleChange = e => {
    const newState = {}
    const nameVal = e.target.name
    newState[nameVal] = e.target.value
    this.setState(newState)
  }
  render() {
    return (
      <div>
        <h3>Send us a line</h3>

        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            E-mail Address:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              cols="30"
              rows="10"
              onChange={this.handleChange}
              value={this.state.message}
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}

export default ContactForm
