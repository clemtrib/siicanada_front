import React from "react"

import style from './app.css'

import ContactList from './contactList'
import ContactForm from './contactForm'
import Map from './map'

export default class Contact extends React.Component {
    render() {
        return (
            <div className={style.large}>
                <ContactList />
                <Map />
                <ContactForm />
            </div>
        );
    }
}