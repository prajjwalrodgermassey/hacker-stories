import logo from './logo.svg';
import './App.css';

const title = "react";
const list = [
             { title:"react",
               url:"https://reactjs.org",
               objectId:"0",
               author:"js author",
               num_comments:"23",
               points:"57",
             },
             {
               title:'redux',
               url:"https://redux.js.org/",
               objectId:"1",
               author:"redux author",
               num_comments:"1",
               points:"50",
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

      <List/>

    </div>
  );
}

function List(){

  return list.map(function(item){
   return(
   <div key={item.objectId}>
      <span><a href={item.url}>{item.title}</a></span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
   );
  })
}

export default App;
