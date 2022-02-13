import logo from './logo.svg';
import './App.css';

const title = "react";
const list = [
             { title:"react",
               url:"https://reactjs.org"
             },
             {
               title:'redux',
               url:"https://redux.js.org/"
             }
             ]

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>welcome to the world of {title}</h2>
      <label htmlFor = "search ">Search</label>
      <input type = "text" id = "search" />
      <hr/>

      {list.map(item =>{
            return <div> {item.title + "strong"}</div>;
      })}

    </div>
  );
}

export default App;
