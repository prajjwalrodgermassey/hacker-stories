These are my personalized notes which are I've drafted to for my convenience and better understanding of some core concepts

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
		  
