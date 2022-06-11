import { useState } from "react";
import propTypes from "prop-types";

export const AddCategory = ({ setCategorie }) => {

    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim().length > 2) {

            setCategorie(cat => ([input, ...cat]))
            setInput('');

        }

    }


    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleInput} />
        </form>
    </>
}

AddCategory.propTypes = {
    setCategorie: propTypes.func.isRequired
}