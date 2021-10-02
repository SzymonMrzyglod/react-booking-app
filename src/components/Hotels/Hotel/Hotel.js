import React from "react";
import style from "./Hotel.module.css";
import img from "../../../assets/images/hotel.jpg"

function Hotel() {
    return(
        <div className={style.hotelContainer}>
            <div className={style.hotelGeneral}>
                <div className={style.hotelImage}>
                    <img 
                    src={img} 
                    alt=""
                    className={style.img}
                    />
                </div>
                <div className={style.hotelInfo}>
                    <h2>Tytuł</h2>
                    <p>Miasto</p>
                </div>
                <div className={style.hotelInfo}>
                    <p>Ocena: <strong>8.3</strong></p>
                    <a href="#" className='btn btn-primary'>Pokaż</a>
                </div>
            </div>

            <div className={style.hotelDescription}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias natus quas asperiores hic sapiente! Odit assumenda aperiam ut necessitatibus beatae.</p>
                
            </div>
        </div>
    );
};

export default Hotel;