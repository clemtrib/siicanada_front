import React from "react"

import { Large } from "./styles";

import ContactList from "./contactList"
import ContactForm from "./contactForm"
import Map from "./map"

export default class Contact extends React.Component {
    render() {
        return (
            <Large>
                <ContactList />
                <Map />
                <ContactForm />
            </Large>
        );
    }
}
