import Card from "./Card"




function Deck(props) {
  console.log(props.data);
  return (
    <section className="deck">
      <h2 className="portfolio-headings"> {props.headerName} </h2>
      {props.data.map((element) => {
        return (
          <Card key={element.id} img={element.img} heading={element.heading} text={element.text} />
        );
      })}
    </section>);
}

export default Deck