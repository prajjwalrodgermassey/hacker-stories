KINDLY VIEW THESE NOTES IN RAW FORMAT TO UNDERSTAND:-
These are my personalized notes which I've drafted for my convenience and better understanding of some core concepts.

1) App.js is an JS document therefore must follow all the rules of the JS.

2) JS code in ReactJS that is inside the HTML tag is not known to the code outside of the tag.
	
	For example:- 
	<div> function fun() {return "i am inside div"} </div>
	This function fun will not be known to the code outside of the div tag.
	
	On the other hand:-
	function fun(){return "i am outside div tag"}
	<div> { fun() } </div>.
	This function fun will be known to the div tag and other tags [fun() is global]

3) JS in ReactJS that is inside the HTML tag should make sense.
	
	For example:-
	const greeting = "how are you"
	function fun(){
		return  <div> {greeting} </div> 
		}
	The above code makes sense perfectly as there is no syntactical error.
	
	On the other hand :-
	function fun (){
		<div> { return {greeting} } </div>
		}
	This doesn't make any sense as the 'return' inside the <div> tag does not have any function to which it can return. It is like using the return statement withour any function.
	
	On the other hand :-
	function fun (){
		<div> { 
			function notsofun(){
			return greeting } 
			}
		</div>
	The above code will run as the 'return' statement is associated with the 'notsofun()' function.

4) We cannot declare a variable inside the HTML tag we can only declare functions and return from them but those functions will also be not accessible outside the HTML tag.		  
	
	For Example :- 
	function Fun(){
		<div>
		    { 
      			function notsofun(){ 
      			notsofun();
      			return "not so fun";
    			}
    		    }
  		</div>

  	return (<div>{"it is ultimate fun"}</div>)
	}
	In the above example the function 'Fun()' can be rendered but the function 'notsofun()' is declared inside the <div> tag and therefore cannot be accessed beyond that tag.
	
*****
JUST A QUICK IMPORTANT TIP:- Always remember that while using App.js file in src folder while using ReactJS all the HTML tags will be placed inside the *"return"* statement. The tags outside the "return" statement of a function will never be read by the interpreter they will be skipped or will cause an error in one way or another.
One way to better understand is that App.js is a JavaScript file and not an HTML file so in order to use the HTML tags you have to make them a part of the JavaScript BY MAKING THEM A PART OF THE "RETURN" STATEMENT OF A FUNCTION OR ELSE THOSE TAGS WILL NEVER BE READ. LIKE YOU USE <SCRIPT> TAG TO MAKE JAVASCRIPT A PART OF THE HTML FILE.
*****	
	
5) States are used to make our pages interactive. To manage states we use some predefined functions in JavaScript which are called 'HOOKS'. One such hook is called 'useState' which is used to specify the initial state. The reutrn value of the 'useState' hook is an array which is destructured into an array variable, whose first element is the 'current state', and the 2nd element is the function that is used to update the state.  	
	For Example :- const [searchTerm, setSearchTerm] = React.useState("")
	We have to use import {useState} from the 'react'
	searchTerm is the current value of state.
	Whereas, setSearchTerm is a 'function' that is used to update the state.

***** 
IMPORTANT :- Whenever a state is updated the component associated with it automatically re-renders with the updated state.
*****	
	
6) We have used "props" (properties) objects to communicate and share data between the componenets. Props are immutable and are uni-directional meaning only the parent component can send data to the child component. Props are objects.
	For Example :- function handleSearch(event){
				setSearchTerm(event.target.value);}	
		       <List list={handleSearch}/>
	In the above example we have sent handleSearch 'function' as a part of the 'PROP' object to the List component. We can now use this handleSearch in List component like :- prop.list.
	
7) But 'props' are unidirectional we can only send information from parent component to child component. In order to set up a communication from child to parent component we use "CALLBACK HANDLERS" using callback handler we can communicate with parent component from the child component.
	
	For Example :-  function handleSearch(event){
				setSearchTerm(event.target.value)};
				
			<List onSearch={handleSearch}>
			function List(props)
			{
				return(
				<input type="text" onChange={props.onSearch}/>
				)
			}
	
	In the above example handleSearch function is in the parent component but it is passed as 'onSearch' property of the prop object to the List component where it is associated with the input element(s) onChange property. So the handleSearch function is invoked from the child component (List) and is executed in the parent component (App). The event passed to the 'handleSearch' function is the event associated with the input element, which is in the child component (List).
	
8) Controlled Component :- Controlled component is the component whose value is in sync with the state of the react dom. So in order to make a component a controlled component we use the state(s) current and initial value to control the behaviour/value of the component.

	For example :- const [searchTerm, setSearchTerm] = React.useState("")
			const handleSearch = (event)=>{
  				return ( setSearchTerm(event.target.value)
  				)};	
  			 <Search onSearch={handleSearch} search={searchTerm}/>
  			 const Search = (props)=>{
  
			return(
  			<div>
    			<label htmlFor='search'> SEARCH </label>
    			<input type="text" id="search" onChange={props.onSearch value={props.search}/>
     			</div>
  );
  
 ***** 			By passing the value of the 'searchTerm' state to the Search component and then using that value to change the value attribute of the input element we control the internal value of the input element using the react state 'searchTerm'. Therefore the 'search' component is a controlled component as the value of its element is controlled by the 'searchTerm' state. *****
	
	
9) useEffect() hook :- we are using useEffect hook to capture the side-effect caused by the change in the state and then using that change to perform some action accordingly. The useEffect() takes 2 parameters:- a) the first one is a function that performs certain task that we want to do and b) second is the optional parameter called "Dependency Array" we pass elements in this array and if any of the element of this array changes then only the useEffect() hook is executed.

	For Example :- const[searchTerm,setSearchTerm] = React.useState("react")
		       
		       React.useEffect(()=>{console.log("a change in searchTerm")},[searchTerm]); 
		 
	Everytime the state changes the component re-renders and whenever the searchTerm is changed useEffect hook is executed. Passing an "Empty Dependency Array" will cause the useEffect hook to run only at the time when the component is initially mounted for the first time WHEREAS passing "No Dependency Array" will cause the useEffect hook to run everytime the component re-renders.

****** IMPORTANT :- THE STATE IS JUST A PLAIN JAVASCRIPT OBJECT THAT IS USED BY "REACTJS" TO STORE THE CURRENT SITUATION OF THE COMPONENT.******
****** IMPORTANT :- THE SIDE EFFECT IS ANYTHING THAT AFFECTS SOMETHING THAT IS OUTSIDE OF THE SCOPE OF THE FUNCTION. FOR EXAMPLE:- IN THE ABOVE CASE THE "console.log()" FUNCTION IS A SIDE-EFFECT AS IT PRINTS ONTO THE CONSOLE WINDOW (WHICH IS OUTSIDE OF THE SCOPE OF THE FUNCTION DECLARED IN "useEffect" hook.******
	
	
	
	
	
	
	
