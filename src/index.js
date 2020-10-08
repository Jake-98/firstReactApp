import React from "react";
import ReactDom from "react-dom";

//CSS


// this is a component
// function Greeting() {
//   return <h4>Hallo</h4>;
// }
function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img src='https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg'></img>
);

const Title = () => <h1>Room on the Broom</h1>;

const Author = () => <h4>Julia Donaldson</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
