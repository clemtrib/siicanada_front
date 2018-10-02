import React from "react"

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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Email:
                    <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                </label>
                <label>
                    Phone:
                    <input name="phone" type="text" value={this.state.phone} onChange={this.handleChange} />
                </label>
                <label>
                    Object:
                    <input name="object" type="text" value={this.state.object} onChange={this.handleChange} />
                </label>
                <label>
                    Message:
                    <textarea name="message" value={this.state.message} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}