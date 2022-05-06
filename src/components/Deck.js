import Card from "./Card"
import data from "./data";

function Deck({headerName}) {
  return (
    <section className="deck">
      <h2 className="portfolio-headings"> {headerName} </h2>
      {data.map((element) => {
        return (
          <Card key={element.id} img={element.img} heading={element.heading} text={element.text} />
        );
      })}
    </section>);
}

export default Deck
