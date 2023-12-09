import { useEffect, useState } from "react";
import "./App.css";
import { MdDeleteOutline } from "react-icons/md";

function App() {
  const [inputList, setInputList] = useState();
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    if (!inputList) {
    } else {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList("");
    }
  };

  document.onkeyup = (e) => {
    if (e.key == "Enter") {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList("");
    }
  };

  const deleteItem = (id) => {
    const updateditems = items.filter((elem, ind) => {
      return ind != id;
    });
    setItems(updateditems);
  };

  const deleteAll = () => {
    setItems([]);
  };

  return (
    <div className="firstDiv">
      <div className="main_div">
        <h1 className="heading">ToDo List</h1>

        <input
          type="text"
          value={inputList}
          placeholder="Add a Item"
          onChange={itemEvent}
        />
        <button className="btn" onClick={listOfItems}>
          +
        </button>

        <ol className="list">
          {items.map((allitem, ind) => {
            return (
              <li key={ind}>
                {allitem}
                <div className="deleteBtn" onClick={() => deleteItem(ind)}>
                  <MdDeleteOutline />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <div>
        <button className="dltAll" onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
}
export default App;
