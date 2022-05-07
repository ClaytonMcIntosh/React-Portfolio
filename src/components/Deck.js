import Card from "./Card"

function Deck(props) {
  return (
    <section className="deck">
      <h2 className="portfolio-headings"> {props.headerName} </h2>
      {props.data.map((element) => {
        return (
          <Card key={element.id} img={element.img} heading={element.heading} text={element.text} websiteAddress={element.websiteAddress} />
        );
      })}
    </section>);
}

export default Deck