import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category, origen) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category, origen)
            .then(imgs => setState({ data: imgs, loading: false }))
    }, [ category, origen ]);


    return state;

}
