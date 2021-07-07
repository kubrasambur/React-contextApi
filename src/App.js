import "./App.css";
import React from "react";
import BookList from "./components/BookList";
import BookContextProvider from "./contexts/BookContext";

class App extends React.Component {
  render() {
    return (
      <div>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      </div>
    );
  }
}

export default App;
