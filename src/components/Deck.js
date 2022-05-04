import Card from "./Card"

const Deck = ({ deckName }) => {
  return (
    <div className="deck">
      <h2>{deckName}</h2>
      <Card />
    </div>
  )
}

export default Deck
