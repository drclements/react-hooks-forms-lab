import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm( { onItemFormSubmit }) {
  const [ itemName, setItemName] = useState("")
  const [ itemCategory, setItemCategory ] = useState("Produce")
  console.log(itemName)
  
  
  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    }
      console.log(newItem)
      onItemFormSubmit(newItem)

      // function addElements(newItem) {
      //   setArray([...array, newItem])
      // }
      
  }

  return (
    
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={(event) => setItemName(event.target.value) } type="text" name="name" value={itemName}/>
      </label>
      

      <label>
        Category:
        <select onChange={(event) => setItemCategory(event.target.value) } name="category" value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
