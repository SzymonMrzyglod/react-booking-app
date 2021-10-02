import React from "react";
import style from "./Header.module.css"
import Searchbar from "./Searchbar/Searchbar";

function Header(){
    return ( 
        <header className={style.header}>
            <Searchbar />
        </header>
     );
}
 
export default Header;