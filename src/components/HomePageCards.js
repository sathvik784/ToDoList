import React from "react";

const HomePageCard = ({ card }) => {
    return(
        <div>
            <h1>{card.header}</h1>
            <h2>{card.info}</h2>
        </div>
    );
}

export default HomePageCard;