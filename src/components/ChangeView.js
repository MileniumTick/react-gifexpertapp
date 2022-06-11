import React from 'react'


export const ChangeView = ({origen, setOrigen}) => {

    
    const handleSticker = () => {
        setOrigen(false);
    }

    const handleGif = () => {
        setOrigen(true);
        
    }


    if (origen) {
        return <button onClick={() => handleSticker()} className="btn btn-primary">Gif</button>;
      } else {
        return <button onClick={() => handleGif()} className="btn btn-primary">Stickers</button>;
      }
  
}

