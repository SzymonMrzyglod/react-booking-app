import React, {Component} from "react";
import Hotel from "./Hotel/Hotel";

class Hotels extends Component{
    render(){
        return(
            <div>
                <Hotel />
                <Hotel />
                <Hotel />
            </div>
        )
    }
}

//KOMPONENT FUNKCYJNY
// function Hotels() {
//     return(
//         <div>HOTELS</div>
//     );
// };

export default Hotels;