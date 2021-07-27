import './App.css';
import Header from "./MyComponents/Header"
import Todos from "./MyComponents/Todos"
// import Todo from "./MyComponents/Todo"
import Footer from "./MyComponents/Footer"

function App() {
  let todos = [
    {
      sno:1,
      title:"Buy Apples",
      desc:"Go to the market"
    },
    {
      sno:2,
      title:"Buy Sports Shoes",
      desc:"Go to the mall"
    },
    {
      sno:3,
      title:"Buy Vicks",
      desc:"Go to medical"
    }
  ]
  return (
    <> {/* write anything in App.js inside a tag. Here we used <></> */}
        <Header title="My Todos List" searchBar={true}/> {/* here we are passing title to Header.js */} {/* Also,we set searchBar as a boolean variable */}
        <Todos todos={todos}/>
        <Footer/>
    </>
  );
}

export default App;
