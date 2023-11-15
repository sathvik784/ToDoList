import React from "react";
import HomePageCard from "./HomePageCard";
import gif from "./HomePageGif";
import Navbar from "./HomePageNavBar";

const HomePageList = ({ cards }) => {
    return(
        <div>
            {cards.map(card => (
                <HomePageCard id={card.id} cardData={card}/>
                )
            )}
        </div>
    );
}

export default HomePageList;