import './App.css';
import Header from "./MyComponents/Header"
import AddTodo from './MyComponents/AddTodo';
import Todos from "./MyComponents/Todos"
// import Todo from "./MyComponents/Todo"
import Footer from "./MyComponents/Footer"
import About from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") == null) {
    initTodo = []; //if there is no local storage, we initialize a new array.
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I called todo:", todo);

    setTodos(todos.filter((e) => {
      return e !== todo; /* return e which are not equal to todo */
    }));
    /*learn more about filter:- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter */
    /*learn more about filter:- https://www.w3schools.com/jsref/jsref_filter.asp */
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addToTodos = (title, desc) => {
    console.log("title:" + title + "\ndesc:" + desc);
    let sno;
    if (todos.length === 0) sno = 0;
    else sno = todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo); /* setTodos is a function which will set the value of todos */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); /* localStorage is a key-value pair. values are always string */
  }, [todos])

  return (
    <> {/* write anything in App.js inside a tag. Here we used <></> */}
      <Router basename={process.env.PUBLIC_URL}> {/* Header and Footer have to be displayed every time. AddTodo and Todos are to be displayed when endpoint is / */}
        <Header title="Neeraj's Todos List" searchBar={true} /> {/* here we are passing title to Header.js */} {/* Also,we set searchBar as a boolean variable */}
        <Switch> {/* this switch code is copied from website:- https://reactrouter.com/web/guides/quick-start*/}
          {/* later i did some changes in this switch */}
          <Route exact path="/" render={() => { /* i want to render AddTodo and Todos when endpoint is / */
            return (
              <>
                <AddTodo add={addToTodos} />
                <Todos todos={todos} onDelete={onDelete} /> {/* here we are passing todos object to Todos.js . todos object is written inside {} .  */}
              </>)
          }}>

          </Route>
          <Route exact path="/about" render={() => {
            return (
              <>
                <About />
              </>
            )
          }}>

          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
