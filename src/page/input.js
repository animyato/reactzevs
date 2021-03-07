import React from "react";

function Input({error, changeValue, inputValue, ToDoList, addToDo, changeFilter, addError}){

    function inputchange(event){
        changeValue(event.target.value);
    };

    function submitFunction(event){
        event.preventDefault();
        if(inputValue !== ""){
            addToDo([
                ...ToDoList,
                { id: Math.random() * 1000,
                text: inputValue,
                done: 1,
                date: new Date().toLocaleString()  
                },
            ]);
            addError("");
        }else{
            addError("Input field is empty!");
        }
        changeValue("");
    };

    function filterChange(event){
        changeFilter(event.target.value);
    };
    

    return(
        <div>
            <form>
                <input onChange={inputchange} className="addtotable" type="text" value={inputValue} placeholder="What do you want to do..."></input>
                <input onClick={submitFunction} className="button" type="submit" name="submit" value="&#10003;"></input>
                <div className="select">
                    <select onChange={filterChange} name="filter" className="filters">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
            <h3>{error}</h3>
        </div>
    );
}

export default Input;