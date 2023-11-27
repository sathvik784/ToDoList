import React from "react";
import '../styles/Card.css';
import gif from "./HomePageGif";

const HomePageCard = ({ cardData }) => {
    return(
        <div className="homeCard">
            <h1>{cardData.header}</h1>
            <p>{cardData.info}</p>
        </div>
    );
}

export default HomePageCard;