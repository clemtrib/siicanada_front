import React from "react"

import style from './app.css'

import ContactListItem from './contactListItem'

export default class ContactList extends React.Component {
    render() {

        const ads = [
            {
                title: "Address",
                icon: "home.png",
                data: `2060 rue de la Montagne, Montréal, QC, H3G 1Z7`
            }, {
                title: "Phone",
                icon: "phone.png",
                data: "+1 514 416-3491"
            }, {
                title: "Email",
                icon: "email.png",
                data: "contact@siicanada.com"
            }
        ]

        const list = ads.map((item) =>
            <ContactListItem title={item.title} icon={item.icon} data={item.data} />
        );

        return (
            <div className={style.intro}>
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
