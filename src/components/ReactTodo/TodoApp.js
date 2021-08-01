import React, { useState, useEffect } from "react";
import "./todoStyle.css";

function TodoApp() {
  const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");
    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };
  const [inputdata, setInputdata] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [iseditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  const addItem = () => {
    if (!inputdata) {
      alert("plz fill the data");
    } else if (inputdata && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === iseditItem) {
            return { ...curElem, name: inputdata };
          }
          return curElem;
        })
      );
      setInputdata([]);
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, myNewInputData]);
      setInputdata("");
    }
    console.log("data", items);
  };

  //edit the elements
  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    setInputdata(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  };

  //delete the elements
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id != index;
    });
    setItems(updatedItems);
  };
  //remove all the elements
  const removeAll = () => {
    setItems([]);
  };

  //adding localstorage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todoLogo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputdata}
              onChange={(event) => setInputdata(event.target.value)}
            />
            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItem}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            )}
          </div>
          {/* show our items */}
          <div className="showItems">
            {items.map((curElem, index) => {
              return (
                <>
                  <div className="eachItem" key={index}>
                    <h3>{curElem.name}</h3>
                    <div className="todo-btn">
                      <i
                        className="far fa-edit add-btn"
                        onClick={() => editItem(curElem.id)}
                      ></i>
                      <i
                        className="far fa-trash-alt add-btn"
                        onClick={() => deleteItem(curElem.id)}
                      ></i>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check list</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
