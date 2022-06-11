import { useState  } from "react";
import { AddCategory } from "./components/AddCategory";
import { ChangeView } from "./components/ChangeView";
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( {defaultCategories = ['One Punch']} ) => {

    
    const [categories, setCategories] = useState(defaultCategories);
    
    const [origen, setOrigen] = useState(false);

    return <>
        <h2>GifExpertApp</h2>
        <div className="container">
        <AddCategory setCategorie={ setCategories }/>
        <ChangeView origen={origen} setOrigen={setOrigen}/>
        <br/>
        </div>
        <ol>
            {
                categories.map( category => (
                    <GifGrid key={category} category={category} origen={origen}/>
                ))
                
            }
        </ol>

        
    </>
      

}

