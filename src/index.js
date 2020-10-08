import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css"; // (.) indicates file is in the same folder

// this is a component
// function Greeting() {
//   return <h4>Hallo</h4>;
// }
function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image className='' />
      <Title className='' />
      <Author className='' />
    </article>
  );
};
const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg'
    alt='Room on the broom'
  ></img>
);

const Title = () => <h1>Room on the Broom</h1>;

const Author = () => <h4>Julia Donaldson</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
