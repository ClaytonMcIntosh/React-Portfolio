import Card from "./Card"
import { instaTest } from "./data";

function Deck() {
  return (
    <section>
      {instaTest.map((insta) => {
        const { id, img, heading, text } = insta;
        return (
          <div className="deck">
            <p> id: {insta.id} </p>
            <p>  <img src={insta.img} alt="" />  </p>
            <p> heading: {insta.heading} </p>
            <p> text: {insta.text} </p>
            <Card />
          </div>
          );
      })}
    </section>);
}

export default Deck



// import Card from "./Card"

// const Deck = ({ deckName }) => {
//   return (
//     <div className="deck">
//       <h2>{deckName}</h2>
//       <Card />
//     </div>
//   )
// }

// export default Deck