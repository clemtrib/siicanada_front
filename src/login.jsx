import React from "react"
import styled from "styled-components"
import { Colors, Container, FlexOuter } from "./styles"
import config from "./config/config"

const ContactFormContainer = styled.div`
    width: 100%;
    background: ${Colors.lightblue};
    padding: 90px 0 100px;
    text-align: center;
    color: ${Colors.white};
`

export default class ContactForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {

    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })

  }

  handleSubmit(event) {
    console.log(this.state, config.urlBack)
    event.preventDefault()
  }

  render() {
    const { email, password } = this.state
    return (
      <ContactFormContainer>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <FlexOuter>
              <li>
                <label htmlFor="email">Email:</label>
                <input name="email" type="email" value={email} onChange={this.handleChange} />
              </li>
              <li>
                <label htmlFor="password">Password:</label>
                <input name="password" type="password" value={password} onChange={this.handleChange} />
              </li>
              <li>
                <input type="submit" value="Submit" />
              </li>
            </FlexOuter>
          </form>
        </Container>
      </ContactFormContainer>
    )
  }
}
