import React from 'react';
import Todo from "../MyComponents/Todo"

function Todos(props) {
    return(
        <div className="container">
            <h3>Todos List</h3> 
            {/* {props.todos}             */}
            <todo todo={props.todos[0]}/>
        </div>
    )
}

export default Todos;