import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Prueba de <GifGridItem />', () => {

    const title = 'Titulo del Gif';
    const url = 'https://media1.giphy.com/media/3o7btLqYhQnZqgXWqc/giphy.gif';

    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);

    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de terner un parrafo con el title', () => {

        const p = wrapper.find('p').text().trim();

        expect(p).toBe(title);

    })

    test('Debe de terner una imagen con el url', () => {
            
            const img = wrapper.find('img').prop('src');
            const alt = wrapper.find('img').prop('alt');
    
            expect(img).toBe(url);
            expect(alt).toBe(title);
    
        }
    )

    test('debe tener animate_fadeIn', () => { 

        const div = wrapper.find('div').first().prop('className');

        expect(div).toContain('animate__bounceIn');
     })
});