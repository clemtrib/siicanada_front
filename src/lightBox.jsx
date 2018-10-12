import React from "react"
import { Colors, H3, P } from "./styles"
import styled from "styled-components"

const LightBoxElem = styled.div`
    transition: all 500ms ease-in-out;
    -webkit-transition: all 500ms ease-in-out;
    -moz-transition: all 500ms ease-in-out;
    -o-transition: all 500ms ease-in-out;
    background-color: ${Colors.white};
    -webkit-box-shadow: 0px 3px 0px 0px ${Colors.lightgrey};
    -moz-box-shadow: 0px 3px 0px 0px ${Colors.lightgrey};
    box-shadow: 0px 3px 0px 0px ${Colors.lightgrey};
    padding: 20px 0;

    :hover, :focus {
        transform: translate(0, -15px);
        -webkit-transform: translate(0, -15px);
        -ms-transform: translate(0, -15px);
        -webkit-box-shadow: 0px 3px 0px 0px ${Colors.darkblue};
        -moz-box-shadow: 0px 3px 0px 0px ${Colors.darkblue};
        box-shadow: 0px 3px 0px 0px ${Colors.darkblue};
    }
`

export default class LightBox extends React.Component {
    render() {
        return (
            <LightBoxElem>
                <H3>{this.props.content.title}</H3>
                <P>{this.props.content.data}</P>
            </LightBoxElem>
        );
    }
}
