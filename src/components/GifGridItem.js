import React from 'react'
import PropTypes from 'prop-types'


export const GifGridItem = ({ title, url }) => {
    return (

        /*Construye un div de cartas en bootstrap*/
        <div className="card animate__animated animate__bounceIn animate__delay-0s">
            <div className="card-body">
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

/*
    1.Enzyme 
    2.Enzyme to json
    3.Debe de mostrar el componente correctamente
        *shallow
        *wrapper
        *wrapper .toMatchSnapshot()
*/


