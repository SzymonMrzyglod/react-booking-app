import React from "react";
import style from "./Header.module.css"

function Header(props){
    return ( 
        <header className={style.header}>
            {props.children}
        </header>
     );
}
 
export default Header;