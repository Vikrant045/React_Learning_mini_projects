import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDo(){
    let[Todos, setTodos] = useState([{task:"sample text",id:uuidv4()}]);
    let[newTodo,setnewTodo] = useState("");

    let updateTodo_value=(event)=>{
       setnewTodo(event.target.value);
    }
    let addnewTodo=()=>{
        setTodos([...Todos, { task:newTodo, id:uuidv4()}]);
        setnewTodo("");
    }
    return (
        <div>
            <input type="text" placeholder="Add Task" 
            value={newTodo} onChange={updateTodo_value} /> 
            <br /><br />
            <button onClick={addnewTodo}>Add</button>
            <br/> <br/>
            <ul>
                {
                    Todos.map((todo)=>(
                        <li key={todo.id}>{todo.task}</li>
                    ))
                }
            </ul>
        </div>
    );
}