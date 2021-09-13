import React from 'react';
import Todo from "./Todo";

function Todos(props) {
    let myStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        minHeight: "70vh",
        // width:"500px"
    }
    let yourStyle = {
        fontWeight:"bold",
        minHeight:"70vh",
        textAlign:"center",
    }
    return (
        <>
            <h3 className="text-center my-3">Todos List</h3>
            <div className="container my-3" style={myStyle}>
                {/* <Todo todo={props.todos[0]}/> */}

                {
                    props.todos.length === 0 ? 
                    <div style={yourStyle}>No todos pending!!!</div> 
                        :
                    props.todos.map(todo => { /* to use loops in JSX,we use map. Know more:- https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx */
                        /* todo in above line refers to first task of todos object made in App.js */
                        return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    })
                }

            </div>
        </>
    )
}

export default Todos;