import React from "react"

import style from './app.css'

export default class Map extends React.Component {
    render() {
        const iframe = {
            __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.558170849537!2d-73.5797741849268!3d45.49884133915307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a66cb68096f%3A0x16d986194e20a264!2sSii+Canada!5e0!3m2!1sfr!2sca!4v1538686751303" frameborder="0" style="border:0"></iframe>'
        }
        return (
            <div className={style.large}>
                <div className={style.iframe} dangerouslySetInnerHTML={iframe} />
            </div>
        );
    }
}
