import React from "react"
import Deck from "../components/Deck";
import data from "../components/data";

const Portfolio = ({ deckName }) => {

    let categories = []

    for (let i = 0; i < data.length; i++) {
        categories.push(data[i].headerName)
    }

    let uniqueCategories = [...new Set(categories)]

    return (
        <div className="page">
            <h1 className="page-headings">Portfolio</h1>
            {uniqueCategories.map((catName, index) => {
                return (
                    <Deck key={index} headerName={catName} data={data.filter((img) => img.headerName === catName)} />

                )
            })}
        </div>
    )
}


export default Portfolio;