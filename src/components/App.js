import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  console.log(items)

  // callback function to pass to ItemForms
  function addItem(itemObj) {
    console.log("in app", itemObj)
    setItems([...items, itemObj])
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList onItemFormSubmit={addItem} items={items} />
    </div>
  );
}

export default App;
