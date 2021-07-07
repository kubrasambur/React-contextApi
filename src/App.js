import "./App.css";
import React from "react";
import BookList from "./components/BookList";

class App extends React.Component {
  
  render() {
    return (
      <div>
        
        <BookList books />
      </div>
    );
  }
}

export default App;
