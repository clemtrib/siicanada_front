import React from "react"
import { Large } from "./styles"
import ContactList from "./contactList"
import ContactForm from "./contactForm"
import Map from "./map"

const Contact = () => {
  return (
    <Large>
      <ContactList />
      <Map />
      <ContactForm />
    </Large>
  )
}

export default Contact
