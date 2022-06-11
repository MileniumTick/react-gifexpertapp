import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifExpertApp } from '../GifExpertApp'


describe('Pruebas en <GifExpertApp />', () => {
    
        const setCategories = jest.fn();
        const setOrigen = jest.fn();
        
        test('Debe de mostrarse correctamente', () => {
            const wrapper = shallow(<GifExpertApp origen={setOrigen} categories={setCategories}/>);
            expect(wrapper).toMatchSnapshot();
        })

        test('Debe de mostrar una lista de categorias', () => {

            const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
            const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('GifGrid').length).toBe(categories.length);
            
        })
})