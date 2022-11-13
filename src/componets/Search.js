// Create a search bar component
// Import React
// Create a function called Search
// Return a div with a class of search
// Inside the div, create an input with a type of text and a placeholder of Search
// Create a button with a type of submit
// Export the Search component
// Import the Search component into App.js
// Render the Search component inside the App component

import React from "react";

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <button type="submit">Submit</button>
    </div>
  );
}

export default Search;