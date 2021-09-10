import React from 'react';

function Todo(props) {
    let todoStyle={
        innerWidth:"50px"
    }
    return(
        <>
        <div style={todoStyle}>
            <h4>{props.todo.title}</h4>
            <p>{props.todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
        </div>
        <hr/>
        </>
    )
}

export default Todo;