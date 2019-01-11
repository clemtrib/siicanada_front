import React from "react"
import styled from "styled-components"
import LightBox from "./lightBox"
import { Container, TextContainer, H1arrow } from "./styles"

const ContactListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    p {
        display: block;
        font-size: 16px;
    }

    > div {
        width: 25%;
        margin: 0;
        padding: 20px;

        @media (max-width: 768px) {
            width: 100%;
            margin: 20px 0 0 0;
            padding: 20px;
        }
    }
`

const ContactList = () => {
  const elements = [
    {
      id: 1,
      title: "Address",
      type: "address",
      icon: "home.png",
      data: "2060 rue de la Montagne, Montréal, QC, H3G 1Z7"
    }, {
      id: 2,
      title: "Phone",
      type: "phone",
      icon: "phone.png",
      data: "+1 514 416-3491"
    }, {
      id: 3,
      title: "Email",
      type: "email",
      icon: "email.png",
      data: "contact@siicanada.com"
    }
  ]

  return (
    <TextContainer>
      <Container>
        <H1arrow>Nous contacter</H1arrow>
        <ContactListContainer>
          {elements.map((content/*, i*/) =>
            <LightBox key={content.id} content={content} />
          )}
        </ContactListContainer>
      </Container>
    </TextContainer>
  )
}

export default ContactList
