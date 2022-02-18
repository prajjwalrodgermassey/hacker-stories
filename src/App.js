import React from 'react';
import logo from './logo.svg';
import './App.css';

var greeting = "how are you?"
const title = "react";
function setTitle(title)
{
  return title;
}


function App() {

  const [searchTerm, setSearchTerm] = React.useState('');

  const stories = [
    { title:"reactstories(props)",
      url:"https://reactjs.org",
      objectId:"0",
      author:"js author",
      num_comments:"23",
      points:"57",
    },
    {
      title:'reduxstories(props)',
      url:"https://redux.js.org/",
      objectId:"1",
      author:"redux author",
      num_comments:"1",
      points:"50",
    }
    ];

  const handleSearch = (event)=>
    console.log(event.target.value);

  const handleChange = (event)=> 
    setSearchTerm(event.target.value);
      
    // this line will act as return statement. while using arrow functions we can omit return 
                                         // return statement if the function contains single line.

  return (
    <div>
      <h1>Hello World!</h1>
      <h2>welcome to the world of {setTitle("reactjs")}</h2>
      
      {/* <div>{outernotsofun()}</div> */}
      
      <Search onSearch={handleSearch}/>
      <hr/>
      
      <List list={stories}/>
       {/* <Fun /> */}
    </div>
  );
}

const List = props =>  
{
    return (
        <ol>
            {
              props.list.map(item=>
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
    )
  }

const Search = (props)=>{
  
  const [searchTerm, setSearchTerm] = React.useState("");
  function handleChange(event){
    setSearchTerm(event.target.value);
    props.onSearch(event);
  }

  
  
  return(
  <div>
    <label htmlFor='search'> SEARCH </label>
    <input type="text" id="search" onChange={handleChange}/>
    <p>Your search term is : <strong>{searchTerm}.</strong></p>
  </div>
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