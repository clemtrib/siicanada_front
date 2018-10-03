import React from "react"

import style from './app.css'

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
            <div className={style.contactForm}>
                <div className={style.container}>
                    <form onSubmit={this.handleSubmit}>
                        <ul className={style.flexOuter}>
                            <li>
                                <label for="name">Name:</label>
                                <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                            </li>
                            <li>
                                <label for="email">Email:</label>
                                <input type="text" value={this.state.email} onChange={this.handleChange} />
                            </li>
                            <li>
                                <label for="phone">Phone:</label>
                                <input name="phone" type="text" value={this.state.phone} onChange={this.handleChange} />
                            </li>
                            <li>
                                <label for="object">Object:</label>
                                <input name="object" type="text" value={this.state.object} onChange={this.handleChange} />
                            </li>
                            <li>
                                <label for="message">Message:</label>
                                <textarea name="message" value={this.state.message} onChange={this.handleChange} />
                            </li>
                            <li>
                                <input type="submit" value="Submit" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}
