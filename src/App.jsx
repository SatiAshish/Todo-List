import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {

    const [inputList, setInputList] = useState();
    const [Items, setItems] = useState([]);

    let itemEvent = (event) => {
        setInputList(event.target.value);
    }

    let listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList('');
    }

    const deleteItems = (id) => {
        console.log("deleted");

        setItems((oldItems) =>{
            return oldItems.filter((arrElem, index)=>{
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className= "main-div">
                <div className='center-div'>
                    <br/>
                    <h1> ToDo List </h1>
                    <br/>
                    <input type="text"
                    placeholder="Add a item" 
                    onChange={itemEvent}
                    value = {inputList}
                    />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {Items.map( (itemValue, index) => {
                            return(
                                <ToDoList key={index} 
                                id={index} 
                                text = {itemValue} 
                                onSelect={deleteItems}
                                />
                            )
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;