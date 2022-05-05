import Card from "./Card"
import { instaTest } from "./data";

function Deck() {
  return (
    <section className="deck">
      {instaTest.map((element) => {
        return (
            <Card img={element.img} heading={element.heading} text={element.text} />
        );
      })}
    </section>);
}

export default Deck
