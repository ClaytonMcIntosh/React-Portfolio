import React from "react"
import Deck from "../components/Deck";

const Portfolio = ({ deckName }) => {
    return (
        <div className="page">
            <h1>Portfolio</h1>
            <Deck deckName="Web Development" />
        </div>
    )
}

export default Portfolio;

