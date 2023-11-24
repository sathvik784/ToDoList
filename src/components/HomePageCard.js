import React from "react";
import '../styles/Card.css';

const HomePageCard = ({ cardData }) => {
    return(
        <div className="container">
            <h1>{cardData.header}</h1>
            <h2>{cardData.info}</h2>
        </div>
    );
}

export default HomePageCard;