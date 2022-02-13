import logo from './logo.svg';
import './App.css';

var greeting = "how are you?"
const title = "react";
function setTitle(title)
{
  return title;
}

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
      <h2>welcome to the world of {setTitle("reactjs")}</h2>
      <label htmlFor = "search ">Search</label>
      <input type = "text" id = "search" />
      {/* <div>{outernotsofun()}</div> */}
      <hr/>

      <List/>
       {/* <Fun /> */}
    </div>
  );
}

function List () 
{
    return (
        <ol>
            {
              list.map(function(item)
              {
                  return (
                      <li key={item.objectId}>
                        <span><a href={item.url}>{item.title}</a></span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>     
              
                      </li>
                  )
              }
              )
            }
        </ol>
    );
}

export default App;

/*function Fun(){

  <div>
    { 
      function Notsofun(){ 
      Notsofun();
      return "not so fun";
      }
    }
  </div>

  return (<div>{"it is ultimate fun"}</div>)
}

function outernotsofun()
{
  return "I'm the outer not so fun function."
}

*/