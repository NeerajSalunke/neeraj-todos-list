import React from 'react';
import Todo from "./Todo";

function Search(props) {
    let myStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        minHeight: "70vh",
        // width:"500px"
    }
    return (
        <>
            <div className="container my-3" style={myStyle}>
                {
                    props.todos.map(todo => { 
                        if(todo.title.includes(props.searchTerm))
                        {
                            return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                        }
                    })
                }

            </div>
        </>
    )
}

export default Search;