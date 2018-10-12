import React from "react"

import style from './app.css'
import { Large, H1arrow } from "./styles";

import LightBox from './lightBox'

export default class ContactList extends React.Component {
    render() {

        const elements = [
            {
                id: 1,
                title: "Address",
                type: "address",
                icon: "home.png",
                data: `2060 rue de la Montagne, Montréal, QC, H3G 1Z7`
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
            <Large className={`${style.text}`}>
                <div className={style.container}>
                    <H1arrow>Nous contacter</H1arrow>
                    <div className={style.contactListItems}>
                        {elements.map((content, i) =>
                            <LightBox key={i} content={content} />
                        )}
                    </div>
                </div>
            </Large>
        );
    }
}
