import React ,{useState} from "react";
import { useTodo } from "../contexts";
 export default function TodoForm(){
    const [todo_msg,setTodo_msg]= useState("")
    const {addTodo}= useTodo()

    const add=(e)=>{
        e.preventDefault
        if(!todo_msg){
            return
        }

        addTodo({todo:todo_msg, comleted:false})
        setTodo_msg("")
    }
    return(
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo_msg}
                onChange={(e)=>setTodo_msg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
 }