
const API_KEY = 'S8Zg4SoQhDgCRykOKQ5mRByGlrH1ved3'


export const getGifs = async (category, origen) => {
    const url = (`https://api.giphy.com/v1/${origen?'stickers':'gifs'}/search?q=${ encodeURI(category) }&limit=10&api_key=${API_KEY}`);
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    
    return gifs;

}
