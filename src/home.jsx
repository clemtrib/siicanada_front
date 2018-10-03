import React from 'react'

import style from './app.css'

export default class Home extends React.Component {
    render() {
        return (
            <div className={style.intro}>
                <div className={`${style.container}`}>
                    <div className={style.row}>
                        <h1 className={style.arrow}>Votre partenaire technologique sur Montréal et Toronto</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor quis quam id feugiat. Donec tincidunt condimentum urna, laoreet consequat elit lobortis non. Fusce sagittis cursus tortor, consectetur ultricies nulla eleifend non. Quisque massa felis, elementum sit amet tincidunt ac, vulputate quis augue. Curabitur non odio elementum, cursus augue quis, placerat odio. Ut ultrices purus quis mauris porttitor tempor. Donec ultricies tristique neque, vel accumsan justo pretium efficitur.</p>
                        <p>Donec tempus sagittis nibh, sit amet porttitor arcu lacinia sed. Sed hendrerit mi sem, bibendum ullamcorper ante gravida ac. Quisque vel mi nisl. Vestibulum at sodales ligula, nec rhoncus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget magna et ex ullamcorper vestibulum. Etiam quis aliquam magna.</p>
                        <p>Quisque venenatis scelerisque nibh nec molestie. Integer euismod condimentum nulla in tristique. Donec enim mi, hendrerit vitae bibendum vitae, tempor id dolor. Proin lobortis lacus fringilla hendrerit finibus. Quisque maximus convallis leo eu hendrerit. Phasellus a purus porta, luctus justo sed, fermentum magna. Duis quam lacus, ultricies aliquam vehicula vel, condimentum ut lorem. Donec in placerat augue, quis consectetur ligula.</p>
                    </div>
                </div>
            </div>
        )
    }
}
