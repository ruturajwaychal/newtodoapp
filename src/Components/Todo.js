import React, { useState } from "react";
import "../App.css";

const Todo = () => {
  const [inputdata, setInputdata] = useState("");
  const [item, setItem] = useState([]);

  const addItem = () => {
    if (!inputdata) {
    } else {
      setItem([...item, inputdata]);
      setInputdata("");
    }
  };

  const deleteItem = (id) => {
    const updateItem = item.filter((ele, index) => {
      return index !== id;
    });
    setItem(updateItem);
  };

  const removeAll = () => {
    setItem([]);
  };

  return (
    <div className="main-div">
      <div className="center-div">
        <figure>
          <h1 className="heading"> 🗒️ ToDo List</h1>
          <figcaption>Add Your Items Here...!!</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder=" ✍️ Add Items"
            value={inputdata}
            onChange={(event) => setInputdata(event.target.value)}
          />
          <i
            className="fa fa-plus add-btn"
            title=" Add item"
            onClick={addItem}
          ></i>
        </div>

        <div className="showItems">
          {item.map((ele, index) => {
            return (
              <div className="eachItem" key={index}>
                <h3>{ele}</h3>
                <i
                  className="far fa-trash-alt add-btn"
                  title="Delete Item"
                  onClick={() => deleteItem(index)}
                ></i>
              </div>
            );
          })}
        </div>
        <div className="showItems">
          <button
            className="btn effect04"
            data-sm-link-text="Remove All"
            onClick={removeAll}
          >
            <span>Check List</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
