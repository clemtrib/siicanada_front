import React from 'react'

import style from './app.css'

import Text from './text'

export default class Home extends React.Component {
    render() {
        const content = `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor quis quam id feugiat. Donec tincidunt condimentum urna, laoreet consequat elit lobortis non. Fusce sagittis cursus tortor, consectetur ultricies nulla eleifend non. Quisque massa felis, elementum sit amet tincidunt ac, vulputate quis augue. Curabitur non odio elementum, cursus augue quis, placerat odio. Ut ultrices purus quis mauris porttitor tempor. Donec ultricies tristique neque, vel accumsan justo pretium efficitur.
            Donec tempus sagittis nibh, sit amet porttitor arcu lacinia sed. Sed hendrerit mi sem, bibendum ullamcorper ante gravida ac. Quisque vel mi nisl. Vestibulum at sodales ligula, nec rhoncus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget magna et ex ullamcorper vestibulum. Etiam quis aliquam magna.
            Quisque venenatis scelerisque nibh nec molestie. Integer euismod condimentum nulla in tristique. Donec enim mi, hendrerit vitae bibendum vitae, tempor id dolor. Proin lobortis lacus fringilla hendrerit finibus. Quisque maximus convallis leo eu hendrerit. Phasellus a purus porta, luctus justo sed, fermentum magna. Duis quam lacus, ultricies aliquam vehicula vel, condimentum ut lorem. Donec in placerat augue, quis consectetur ligula.
        `
        return (
            <div className={style.large}>
                <Text title="Votre partenaire technologique sur Montréal et Toronto" content={content} />
            </div>
        )
    }
}
