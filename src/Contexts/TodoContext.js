import React, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({children}) =>{
    const [todos, setTodos] = useState([]);

    const addTodo = (duty) =>{
        setTodos([
            ...todos,
            {id:Math.random(), duty}
        ])
    }
    useEffect(() =>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])

    const removeTodo = (id) =>{
        setTodos(todos.filter((todo) =>{
            return todo.id !== Number(id);
        }))
    }

    return(
        <TodoContext.Provider value={{todos, addTodo, removeTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;