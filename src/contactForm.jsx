import React from "react"

import style from './app.css'

import { Colors, FlexOuter } from "./styles"
import styled from 'styled-components'

const ContactFormContainer = styled.div`
    width: 100%;
    background: ${Colors.lightblue};
    padding: 90px 0 100px;
    text-align: center;
    color: ${Colors.white};
`

export default class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            object: "",
            message: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {

        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })

    }

    handleSubmit(event) {
        alert(`A form was submitted: ${this.state.name} <${this.state.email}>`)
        console.log(this.state)
        event.preventDefault()
    }

    render() {
        return (
            <ContactFormContainer>
                <div className={style.container}>
                    <form onSubmit={this.handleSubmit}>
                        <FlexOuter>
                            <li>
                                <label htmlFor="name">Name:</label>
                                <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                            </li>
                            <li>
                                <label htmlFor="email">Email:</label>
                                <input type="text" value={this.state.email} onChange={this.handleChange} />
                            </li>
                            <li>
                                <label htmlFor="phone">Phone:</label>
                                <input name="phone" type="text" value={this.state.phone} onChange={this.handleChange} />
                            </li>
                            <li>
                                <label htmlFor="object">Object:</label>
                                <input name="object" type="text" value={this.state.object} onChange={this.handleChange} />
                            </li>
                            <li>
                                <label htmlFor="message">Message:</label>
                                <textarea name="message" value={this.state.message} onChange={this.handleChange} />
                            </li>
                            <li>
                                <input type="submit" value="Submit" />
                            </li>
                        </FlexOuter>
                    </form>
                </div>
            </ContactFormContainer>
        );
    }
}
