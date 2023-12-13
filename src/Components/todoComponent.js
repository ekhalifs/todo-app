import React, { useContext, useState } from "react";
import { TodoContext } from "../Contexts/TodoContext";

const TodoComponent = () =>{
    const {todos, addTodo, removeTodo} = useContext(TodoContext);
    const [task, setTask] = useState('');

    const onFormSubmit = (e) =>{
        e.preventDefault();
        if(task.trim() !== ''){
            addTodo(task);
        }
        setTask('')
    }
    
    const removeTask = (event) => {
        const id = event.target.id;
        removeTodo(id);
    }
    return(
        <div>
            <div>
                <form className="ui form" onSubmit={onFormSubmit}>
                    <label htmlFor="addTodo">Add Todo</label>
                    <input type="text" className="ui input" id="addTodo"
                    onChange={(event) => setTask(event.target.value)}
                    value={task} style={{width:'50%'}}/>
                    <input type="submit" value='Add Todo' className="ui button primary" />
                </form>
            </div>
            <br />
            <br />
            <div>
                <ul className="ui list">
                    {
                        todos.length ? todos.map((todo) =>{
                            return (
                            <div key={todo.id} className="ui container" style={{background:'black',color:'white'}}>
                                <li className="item" >{todo.duty} 
                                <span style={{color:"red"}} onClick={removeTask} id={todo.id}>&#10006;</span></li>
                            </div>
                            )
                        }):(
                            <p>You have no todos</p>
                        )
                    }
                    
                </ul>
            </div>
            <div className="ui grid">
                <div className="two column large screen only row">
                    <div className="column">
                        <div className="ui segmnet">
                            <p>heeyyy</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default TodoComponent;