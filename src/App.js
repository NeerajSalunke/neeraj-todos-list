import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"
import Todos from "./MyComponents/Todos"
// import Todo from "./MyComponents/Todo"
import Footer from "./MyComponents/Footer"

function App() {
  
  return (
    <> {/* write anything in App.js inside a tag. Here we used <></> */}
        <Header title="My Todos List"/> {/* here we are passing title to Header.js */}
        <Todos/>
        {/* <Todo/> */}
        <Footer/>
    </>
  );
}

export default App;
