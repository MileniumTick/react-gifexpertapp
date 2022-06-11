import React from "react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    useFetchGifs.mockReturnValue({
        data: [],
        loading: true
    });

    const category = 'One Punch';
    const origen = false;

    const wrapper = shallow(<GifGrid category={category} origen={origen} />);

    test('Debe de mostrarse correctamente', () => {



        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar items cuando cargan img con nuestro useFetchGifs', () => {

        const gifs = [
            { id: 'ABC', url: 'https://localhost/cualquiercosa/cosa.jpg', title: 'Cualquier cosa' },
            { id: '123', url: 'https://localhost/cualquiercosa/cosa.jpg', title: 'Cualquier cosa' }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} origen={origen} />);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
})
