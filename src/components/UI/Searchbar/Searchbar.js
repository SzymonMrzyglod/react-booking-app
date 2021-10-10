import { useEffect, useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import ThemeContext from "../../../context/themeContext";

const propTypes = {
    onSearch: PropTypes.func.isRequired,
}

function Searchbar(props) {
    const [inputValue, setInputValue] = useState('');
    const theme = useContext(ThemeContext);
    const inputRef = useRef();

    const search = () => {
        props.onSearch(inputValue)
    }

    const handlerKeyDown = (e) => {
        if(e.key === 'Enter'){
            search()
        }
    }

    const focusInput = () => {
        inputRef.current.focus();
    }

    useEffect(()=>{
        focusInput();
    }, []);
    
    return(
        <div className="d-flex"> 
            <input 
                ref={inputRef}
                value={inputValue}
                onKeyDown={handlerKeyDown}
                onChange={e => setInputValue(e.target.value)}
                className="form-control" 
                type="text" 
                placeholder="Szukaj..." />
                <button 
                    onClick={search} 
                    className={`btn btn-${theme.color}`}>
                    Szukaj
                </button>
        </div>
    )
}

Searchbar.propTypes = propTypes;

export default Searchbar;

