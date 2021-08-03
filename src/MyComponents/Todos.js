import React from 'react';
import Todo from "./Todo";

function Todos(props) {
    return(
        <div className="container">
            <h3 className="text-center">Todos List</h3> 
            {/* <Todo todo={props.todos[0]}/> */}
            {props.todos.map(todo => { /* to use loops in JSX,we use map. Know more:- https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx */
                                       /* todo in above line refers to first task of todos object made in App.js */
                return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })}
            
        </div>
    )
}

export default Todos;