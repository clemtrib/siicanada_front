import React from "react"

import style from './app.css'

import ContactListItem from './contactListItem'

export default class ContactList extends React.Component {
    render() {

        const ads = [
            {
                id: 1,
                title: "Address",
                icon: "home.png",
                data: `2060 rue de la Montagne, Montréal, QC, H3G 1Z7`
            }, {
                id: 2,
                title: "Phone",
                icon: "phone.png",
                data: "+1 514 416-3491"
            }, {
                id: 3,
                title: "Email",
                icon: "email.png",
                data: "contact@siicanada.com"
            }
        ]

        const list = ads.map((item) =>
            <ContactListItem key={item.id} title={item.title} icon={item.icon} data={item.data} />
        );

        return (
            <div className={`${style.large} ${style.text}`}>
                <div className={style.container}>
                    <h1 className={style.arrow}>Nous contacter</h1>
                    <div className={style.contactListItems}>
                        {list}
                    </div>
                </div>
            </div>
        );
    }
}
