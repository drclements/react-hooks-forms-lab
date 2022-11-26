import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchChange, setSearchChange] = useState("");
  
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchChange(event.target.value)
  }

  // // callback function to pass to ItemForms
  // function addItem(itemObj) {
  //   console.log("in app", itemObj)
  //   setArray([...array, itemObj])
  // }

  const filteredListItems = items.filter((item) => {
    // filter through each item and determine whether the item.name inculdes search
    //.includes, .toLowerCase

    return item.name.toLowerCase().includes(searchChange.toLowerCase())
  })

  const itemsToDisplay = filteredListItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category}
           
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
