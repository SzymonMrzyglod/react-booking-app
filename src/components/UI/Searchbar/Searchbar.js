import React, { useState } from "react";
import PropTypes from "prop-types";

const propTypes = {
    onSearch: PropTypes.func.isRequired,
}

function Searchbar(props) {
    const [inputValue, setInputValue] = useState('');
    
    const search = () => {
        props.onSearch(inputValue)
    }

    const handlerKeyDown = (e) => {
        if(e.key === 'Enter'){
            search()
        }
    }

    return(
        <div className="d-flex"> 
            <input 
                value={inputValue}
                onKeyDown={handlerKeyDown}
                onChange={e => setInputValue(e.target.value)}
                className="form-control" 
                type="text" 
                placeholder="Szukaj..." />
            <button 
                onClick={search} 
                className="btn btn-primary">
                    Szukaj
            </button>
        </div>

    )
}

Searchbar.propTypes = propTypes;

export default Searchbar;