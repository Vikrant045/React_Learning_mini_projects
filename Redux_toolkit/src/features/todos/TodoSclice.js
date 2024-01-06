import {createSlice, nanoid} from '@reduxjs/toolkit'  // import slice 

const initialState ={                           // initial state of slice
    todos: [{id:1 , text: "hello vikrant"}]
}

// create Slice 

export const todoSlice = createSlice(
    {
        name: 'todo',  // name of the slice
        initialState,  // initial state of the slice

        reducers:{     // stores the functionalities of the all slices

            addTodo: (state,action)=>{   // addTodo function , (state = initial or current state)
                const todo ={            //  action = properties this function takes as arguments
                    id:  nanoid(),
                    text: action.payload.text
                }
                state.todos.push(todo);
            },

            removeTodo: (state,action)=>{
                state.todos= state.todos.filter((todo)=> todo.id !== action.payload.id)
            },
        }
    }
)

export const  {addTodo, removeTodo} = todoSlice.actions; 
export default todoSlice.reducer;