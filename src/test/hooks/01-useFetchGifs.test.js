import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs"


describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe retornar el estado inicial', async() => {
       
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('', false))
        const { loading, data } = result.current;

        await waitForNextUpdate();
        
        expect(loading).toBe(true);
        expect(data).toEqual([]);
        
    })

    test('debe retornar un arreglo de imagenes y el loading en false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Naruto', false))

         await waitForNextUpdate();

        const { loading, data } = result.current;


        expect(loading).toBe(false);
        expect(data.length).toEqual(10);
    })
})