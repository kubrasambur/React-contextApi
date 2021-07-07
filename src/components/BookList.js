import React from "react";
import Book from "./Book";
import "./BookList.css";
import BookContext from "../contexts/BookContext";


// 1 - ) Default value ---> this.context
// - Context nesnesini oluşturduk
// başlangıç değerini verdik ve export ettik
// ilgili componenta import ettik
// context type yardımıyla contexti ilgili componente atadık
// this.context yardımıyla ilgili veriye ulaştık.

export default class BookList extends React.Component {
  static contextType = BookContext;

  render() {
    const books = this.context;

    return (
      <section className="page-section" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">BookFolio</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <button
              type="button"
              className="btn btn-sm btn-info"
              style={{ marginTop: "-70px" }}
            >
              Change Theme
            </button>
          </div>
          <div className="row">
            {books.map((book, i) => {
              return <Book book={book} key={i} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}
