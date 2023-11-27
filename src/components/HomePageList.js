import React from "react";
import HomePageCard from "./HomePageCard";
import gif from "./HomePageGif";
import Navbar from "./HomePageNavBar";
import '../styles/Card.css';

const HomePageList = ({ cards }) => {
    return(
        <ul>
            {cards.map(card => (
                <HomePageCard class = "homeCard" id={card.id} cardData={card}/>
                )
            )}
      </ul>
   
    );
}

export default HomePageList;