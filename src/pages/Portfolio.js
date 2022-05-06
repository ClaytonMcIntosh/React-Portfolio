import React from "react"
import Deck from "../components/Deck";

const Portfolio = ({ deckName }) => {
    return (
        <div className="page">
            <h1 className="page-headings">Portfolio</h1>
            <Deck deckName="instaTest" headerName="Instagram Test" />
            <Deck deckName="webDev" headerName="Web Development"/>
        </div>
    )
}


export default Portfolio;

