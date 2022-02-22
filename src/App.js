import React, { Children } from 'react';
import logo from './logo.svg';
import './App.css';

var greeting = "how are you?"
const title = "react";
function setTitle(title)
{
  return title;
}
// creating custom hook

function useSemiPersistentState( key, initialState)
{
  const [value, setValue] = React.useState(localStorage.getItem(key) || initialState);

  React.useEffect(()=>{localStorage.setItem(key,value)},[key, value]);

  return [value, setValue];
}

function App() {

  const [searchTerm, setSearchTerm] = useSemiPersistentState(localStorage.getItem('search'), "react" );

  const handleSearch = (event)=>{
  return ( setSearchTerm(event.target.value)
  )};
  
  //console.log("render")

//  React.useEffect(()=>{localStorage.setItem('search',searchTerm)}, [searchTerm]);

  const stories = [
    { title:"REACTstories(props)",
      url:"https://reactjs.org",
      objectId:"0",
      author:"js author",
      num_comments:"23",
      points:"57",
    },
    {
      title:'REDUXstories(props)',
      url:"https://redux.js.org/",
      objectId:"1",
      author:"redux author",
      num_comments:"1",
      points:"50",
    }
    ];

  const searchedStories = stories.filter(story => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase()));
  

 // const handleChange = (event)=> 
 //   setSearchTerm(event.target.value);
      
    // this line will act as return statement. while using arrow functions we can omit return 
                                         // return statement if the function contains single line.

  return (
    <div>
      <h1>Hello World! </h1>
      <h2>welcome to the world of {setTitle("reactjs")}</h2>
      
      {/* <div>{outernotsofun()}</div> */}
      
      <Inputwithlabel onInputChange={handleSearch} value={searchTerm} id="search" label="Search">
       <strong>Search :</strong> 
      </Inputwithlabel>
      <p>Your search term is : <strong>{searchTerm}.</strong></p>
      <hr/>
      
      <List list={searchedStories}/>
       {/* <Fun /> */}
    </div>
  );
}

const Inputwithlabel = ({id,label,onInputChange,value, children, type="text"})=>{
  
  return(
  <>
    <label htmlFor={id} > {children} </label>&nbsp;
    <input type={type} id={id}  onChange={onInputChange} value={value}/>
  </>
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