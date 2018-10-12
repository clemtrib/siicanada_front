import React from "react"
import { Container, TextContainer, H1arrow } from "./styles";

export default class Text extends React.Component {
    render() {
        return (
            <TextContainer>
                <Container>
                    <H1arrow>{this.props.title}</H1arrow>
                    <div>
                        {this.props.content}
                    </div>
                </Container>
            </TextContainer>
        )
    }
}
