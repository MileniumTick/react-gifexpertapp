import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import {AddCategory} from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => { 

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategorie={ setCategories }/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategorie={ setCategories }/>);
    })
    
    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe de cambiar la caja de texto', () => {
            
            const input = wrapper.find('input');

            const value = 'Hola Mundo';

            input.simulate('change', { target: { value } });

            expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de ejecutar onSubmit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() {} });

        expect(setCategories).not.toHaveBeenCalled();

    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        //1. simular el  inputChange
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', { target: { value } });

        //2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() {} });

        //3. setCategories debe de haber sido llamado
        expect(setCategories).toHaveBeenNthCalledWith( 1, expect.any(Function));

        //4. el valor del input debe de estar vacio
        expect(wrapper.find('input').prop('value')).toBe('');

    })
 })