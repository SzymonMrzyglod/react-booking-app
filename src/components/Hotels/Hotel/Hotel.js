import React from "react";
import PropTypes from "prop-types";
import style from "./Hotel.module.css";
import img from "../../../assets/images/hotel.jpg"

const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
}

function Hotel(props) {
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
                    <h2>{props.name}</h2>
                    <p>{props.city}</p>
                </div>
                <div className={style.hotelInfo}>
                    <p>Ocena: <strong>{props.rating}</strong></p>
                    <a href="#" className='btn btn-primary'>Pokaż</a>
                </div>
            </div>

            <div className={style.hotelDescription}>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

Hotel.propTypes = propTypes;

export default Hotel;