import React, { useState } from "react";
import ToDoList from "./components/ToDoList";

const App = () => {

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]); // storing list 

    // get value by typing
    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    // 
    const listOfItem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList("");
    };

    // this will delete the list items
    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrELe, index) => {
                return index !== id;
            });
        })
    }

    return (
        <>
            <div className="main">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="add a item" value={inputList} onChange={itemEvent} />
                    <button onClick={listOfItem}> + </button>
                    <ol>
                        {/* <li> {inputList} </li> */}

                        {
                            items.map((itemval, index) => {
                                return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItem} />;
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;