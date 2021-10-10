import React from "react";
import style from "./Header.module.css"
import withMousePosition from "../../hoc/withMousePosition";

function Header(props){
    const paralaxStyles = {
        transform: `translate(${props.mouseX / -20}px, ${props.mouseY / 120}px)`
    };

    return ( 
        <header className={style.header}>
                <div 
                className = {style.headerImage}
                style={paralaxStyles}>
                </div>
            {props.children}
        </header>
     );
}
 
export default withMousePosition(Header);