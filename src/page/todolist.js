import React from "react";

function ToDos({ToDoList, addToDo, filter}){

    function deleteFunction(dos){
        addToDo(ToDoList.filter((i) => i.id !== dos.id));
    };

    function completionFunction(dos){
        addToDo(ToDoList.map((i) => {
            if(i.id === dos.id){
                if(i.done === 1){
                    return{
                        ...i, done: 0
                    };
                }else{
                    return{
                        ...i, done: 1
                    };
                }
            }
            return i;
        }));
    };

    return(
        <table>
            <tbody>
            {ToDoList.map(ToDo => (
                <div className={`${ToDo.done === 0 && filter === "completed" ? "show" : ToDo.done === 1 && filter === "uncompleted" ? "show": filter === "all" ? "show" : "hide"}`}>
                    <tr className={`todoRow ${ToDo.done === 0 ? "todoRowDone" : ""}`} key={ToDo.id}>
                        <td>
                            <h2 className={`${ToDo.done === 0 ? "completed" : "notcompleted"}`}>{ToDo.text}</h2>
                            <p>{ToDo.date}</p>
                        </td>
                        <td className="buttonalign">
                            <input onClick={completionFunction.bind(this, ToDo)} className="buttonv2" type="submit" name="submit" value="&#10003;"></input>
                            <input onClick={deleteFunction.bind(this, ToDo)} className="buttonv3" type="submit" name="submit" value="&#10005;"></input>
                        </td>
                    </tr>
                </div>
            ))}
            </tbody>
        </table>
    );
}

export default ToDos;
