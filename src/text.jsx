import React from "react"
import { Container, TextContainer, H1arrow } from "./styles"

const Text = ({ title, content } = {}) => {
  return (
    <TextContainer>
      <Container>
        <H1arrow>{title}</H1arrow>
        <div>
          {content}
        </div>
      </Container>
    </TextContainer>
  )
}

export default Text
