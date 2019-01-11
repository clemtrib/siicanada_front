import styled from "styled-components"

const Colors = {
    beige: "rgb(229, 227, 223)",
    darkblue: "#005aa2",
    grey: "#f2f2f2",
    lightblue: "#88b4dc",
    lightgrey: "#f0f2f4",
    darkgrey: "#333333",
    white: "#ffffff"
}

const Container = styled.div`   
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;

    @media (min-width: 1200px) {
        width: 1170px;
    }
  
    @media (min-width: 992px) {
        width: 970px;
    }
    
    @media (min-width: 768px) {
        width: 750px;
    }
`
const TextContainer = styled.div`
    padding: 45px 0;
    background: #f3f5f8;
    text-align: center;

    > div > div:first-of-type {
        margin-top: 50px;
    }
`

const Large = styled.div`
    width: 100%;
`

const Middle = styled.div`
    width: 50%;
`

const H1arrow = styled.h1`
    font-size: 15px;
    text-transform: uppercase;
    color: #353535;
    letter-spacing: 1px;
    padding-bottom: 30px;
    font-weight: bold;
    background: url(h1-bg.png) no-repeat center bottom;
`

const H3 = styled.h3`
    display: block;
    color: ${Colors.darkblue};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 20px;
    margin-top: 15px;

    ::after {
        content: " ";
        border: solid 2px ${Colors.darkblue};
        display: block;
        width: 35px;
        margin: 25px auto;
    }
`

const P = styled.p`
    color: #8c9398;
    word-spacing: 1px;
    line-height: 25px;
    font-size: 14px;
`

const FlexOuter = styled.ul`
    list-style-type: none;
    padding: 0;

    li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    
    > li:not(:last-child) {
        margin-bottom: 20px;
    }
    
    li label {
        padding: 8px;
        font-weight: 300;
        letter-spacing: .09em;
        text-transform: uppercase;
    }
    
    > li > label {
        flex: 1 0 120px;
        max-width: 220px;
    }
    
    > li > label + * {
        flex: 1 0 220px;
    }
    
    li input:not([type="checkbox"]),
    li textarea {
        padding: 15px;
        border: none;
    }
    
    li input[type="submit"] {
        margin-left: auto;
        padding: 8px 16px;
        border: none;
        background: ${Colors.darkgrey};
        color: ${Colors.grey};
        text-transform: uppercase;
        letter-spacing: .09em;
        border-radius: 2px;
    }
`

export { Colors, Container, TextContainer, Large, Middle, H1arrow, H3, P, FlexOuter }
