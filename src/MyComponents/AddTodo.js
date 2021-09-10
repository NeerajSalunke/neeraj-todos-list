import React, { useState } from 'react';


function AddTodo(props) {

    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");

    const submit = (e) => {
        e.preventDefault(); /* page wont reload */
        if(title.length===0 || desc.length===0)
        {
            alert("Please give Title and Description");
        }
        else 
        {
            props.add(title,desc);
            setTitle("");
            setDesc("");
        }
           
    }

    return (
        <div className="container">
            <h4>Add Todo</h4>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo;