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
	
10) Custom (user-defined) Hooks :- Naming convention for custom hook is that you need to use "use" as prefix as the name of the custom hook. The second convention is that the custom hook should always return an array[]. The custom hook will always use the predefined hooks of react that are useState() and useEffect().	

	For Example :- function useSemiPersistentState( key, initialState)
			{
  			const [value, setValue] = React.useState(localStorage.getItem(key) || initialState);

  			React.useEffect(()=>{localStorage.setItem(key,value)},[key, value]);

  			return [value, setValue];
			}
			
	This is our custom hook useSemiPersistentState() it takes to arguments the key and the initialState to set the initial state and key is used as the identifier in the localStorage while getting and setting the item. This hook is reusable because of the 2 arguments otherwise the localStorage key and intialState would have been same for all the states that are declared using this custom hook. Using these 2 arguments we can supply our custom initial state and key as identifier for the localStorage of browser.
	
	using this custom hook in program:-
	const [searchTerm, setSearchTerm] = useSemiPersistentState(localStorage.getItem('search'), "react" );
	In the above statement we use our custom hook useSemiPersistentState.
	The state (searchTerm) declared using the above line will have the key as search and intial state as react which will uniquely identify this particular state(searchTerm) from rest of the states that will be declared using this custom hook.
	
***** FUN FACT :- Whenever we completely the erase the contents of the search box in this app and then refresh it it will set it back to the inital state that is "react" and will not use the localStorage, any idea why, it is happening because if we look closely in our custom hook we have used logical OR (||) operator in useState hook which will set the initial state. So when we completely erase the contents of the search box it results in an empty string, WHICH CORRESPONDS TO A FALSEY VALUE IN JAVASCRIPT, therefore the inital state will be set with the string "React" which is a truthy value.

11) Fragments :- Fragments are empty tags "<></>" which are used to wrap the other html elements inside the component. Until now we have used "<div></div>" tag to wrap the other html tags or "<span></span>" tag. All the other tags are wrapped inside the <div> tag, thus this <div> tag is called top level component. 
We can also use a list to wrap multiple components side by side but we will have to supply "key" attribute to all the elements that are being used in the list. This sure helps us get rid of the <div> tag but makes our code more elaborate. So therefore, JSX provides us with FRAGMENTS "<></>" which can be used to wrap multiple top level elements side-by-side. Fragments themselves dont render  anyhting on the screen.

	For Example:- 1) const Search = (props)=>{
  
 		 return(
  			<>
    			<label htmlFor='search' > SEARCH </label>
   			<input type="text" id="search"  onChange={props.onSearch} value={props.search}/>
  			</>
  		       );
		     } 
		     
		     2) const Search = (props)=>{
  
 		 return(
  			<div>
    			<label htmlFor='search' > SEARCH </label>
   			<input type="text" id="search"  onChange={props.onSearch} value={props.search}/>
  			</div>
  		       );
		     }
			
		     3) const Search = (props)=>{
  
 		 return(
  			[
    			<label htmlFor='search' key="1"> SEARCH </label>,
   			<input key="2" type="text" id="search"  onChange={props.onSearch} value={props.search}/>
  			]
  		       );
		     }
	
	All the 3 examples given above will render the same output on the screen, we are just using 3 different ways to wrap top-level elements side-by-side.
	
12) Composition in react components:- We can also use the reactJS components as normal we use normal HTML Tags i.e. alongwith opening and closing tags. The contents between the opening and closing tags can be passed along as the "children" property of the props which can be further used in the child component wherever we want to render it.
	For Example :- <Inputwithlabel onInputChange={handleSearch} value={searchTerm} id="search" label="Search" isFocused >
       			<strong>Search :</strong> 
      			</Inputwithlabel>
      			
      			const Inputwithlabel = ({id,label,onInputChange,value, children, type="text", isFocused})=>{
  
  			const inputRef = React.useRef(null);

  			React.useEffect(()=>{
    			if (isFocused && inputRef.current){
      			inputRef.current.focus();
    			}
  			},[isFocused])

 			 return(
  			<>
  			  <label htmlFor={id} > {children} </label>&nbsp;
   			 <input type={type} id={id}  onChange={onInputChange} value={value} autoFocus={isFocused} ref={inputRef} />
  			</>
  			);
			}
			
	In our above example we have our component as Inputwithlabel which the "Search" as its contents we have passed this content as "children" to the child component and we have used it to render the desired content wherever we want to in the child component.

***** We can also pass other components as "children" property to the child component.*****

13) useRef() HOOK :- useRef hook is used to create a "MUTABLE" reference object. Whose ".current" property is initialized with the passed arguments (inital value). Then this reference object is passed to the reserved "ref" attribute of the JSX element and the elemetn('s') instance is assigned to the changeable ".cuurent" property of the reference object.

	For Example :-  const Inputwithlabel = ({id,label,onInputChange,value, children, type="text", isFocused})=>{
  
  			const inputRef = React.useRef(null);
  			
			React.useEffect(()=>{
    			if (isFocused && inputRef.current){
      			inputRef.current.focus();
    			}
  			},[isFocused])

 			 return(
  			<>
   			 <label htmlFor={id} > {children} </label>&nbsp;
   			 <input type={type} id={id}  onChange={onInputChange} value={value} autoFocus={isFocused} ref={inputRef} />
  			</>
  			);
			} 
			
	In the above exmple we have used useRef() HOOK to create a reference object, and have initialized its current property with null. Then we have passed this object to the "ref" attribute of the input JSX element. It is the place where the instance of the input element is assigned to the ".cuurent" of the reference object. Here we are using this ".current" property to access or to reference the DOM element "input" and set focus to it. useEffect() HOOK will be called after the input element renders.    











	
	
