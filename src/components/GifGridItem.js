import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
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
