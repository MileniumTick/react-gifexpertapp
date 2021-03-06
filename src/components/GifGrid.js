import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types'




export const GifGrid = ({ category, origen }) => {


    const { data:images, loading } = useFetchGifs(category, origen);
    
    return (
        <>
            <h3 className='animate__animated animate__fadeIn animate__repeat-2 animate_faster'>{category}</h3>

            { loading && <p className='animate__animated animate__flash'>Loading...</p> }
            <div className='card-grid'>
                    {
                        images.map(img => (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
            </div>
        </>

    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    origen: PropTypes.bool.isRequired
}