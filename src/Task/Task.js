import { useState, useEffect } from "react";

function Task() {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    // load list items from localStorage on initial render
    const storedListItems = localStorage.getItem("listItems");
    if (storedListItems) {
      setListItems(JSON.parse(storedListItems));
    }
  }, []);

  useEffect(() => {
    // save list items to localStorage whenever the list changes
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }, [listItems]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    setListItems([...listItems, inputValue]);
    setInputValue("");
  };

  const handleDeleteItem = (index) => {
    setListItems(listItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
