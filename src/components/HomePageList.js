import React from "react";
import HomePageCard from "./HomePageCards";

const HomePageList = ({ cards }) => {
    return(
        <div>
            {cards.map(card => (
                <HomePageCard id={card.id} cardDate={card}/>
                )
            )}
        </div>
    );
}

export default HomePageList;