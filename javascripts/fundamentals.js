// ----- Parse Data Variables -----



document.writeln("<div id='title1'></div><br />");
document.getElementById("title1").innerHTML = "<h1>Parse Data Variables</h1>";


var stringVal = "6" + 7; // "67"

//var parseInt1 = parseNum("454s32", 10); // parse out the first set up numbers in the string
var a = "10s3";
var c = parseInt(a, 10) + parseInt("5ac34", 10);
var parseInt = parseInt("2.74"); // parse out number around round down
var parseFloat = parseFloat("3.14a44");
document.writeln(c + "<br />");
document.writeln(parseInt + "<br />");
document.writeln(parseFloat + "<br /><br />");

// -----  Functions and passing paramaters -----

document.writeln("<div id='title2'></div><br />");
document.getElementById("title2").innerHTML = "<h1>Functions and passing paramaters</h1>";

var addFunction = function(number1, number2, fn){
	number1 = number1 + 5;
	number1 = number1 + 15;

	return fn(number1, number2);
}

function sum(paramOne, paramTwo){
	return paramOne + paramTwo;
}

function times(paramOne, paramTwo){
	return paramOne * paramTwo;
}

var foo = addFunction(5, 2, sum); // 25  // with function 27
var bar = addFunction(10, 2, times); // 30 // with function 60

document.writeln(foo + " = number1 function <br />");
document.writeln(bar + " = number2 function <br /><br />");

var foo = afterFunction(5, 2);
var bar = afterFunction(11, 4);

function afterFunction(paramaterNum, paramaterTwo){
	paramaterNum = paramaterNum + 1;
	paramaterNum = paramaterNum + 5;
	paramaterNum = paramaterNum * 8;
	return paramaterNum * paramaterTwo;
} 

document.writeln(foo + " = foo (5) function <br />");
document.writeln(bar + " = bar (11) function <br />");

// -----  working with objects  -----

document.writeln("<div id='title3'></div><br />");
document.getElementById("title3").innerHTML = "<h1>Working with objects</h1>";

var index = "This is a tutorial based on objects";

var index1 = index.indexOf("is"); // 2
var index2 = index.indexOf("is", index1 + 1 );
var indexLast =  index.lastIndexOf("tu");
var subString = index.substr(indexLast, 9);


document.writeln(index1 + " = index location of indexOf property <br />");
document.writeln(index2 + " = is location after first index <br />");
document.writeln(indexLast + " = last index of Is <br />");
document.writeln(subString + " = Substring of tu<br />");

var replaceValue = index.replace("objects", "objects for managing strings.");

document.writeln(replaceValue + "<br />");


// ---- Creating Objects ----

document.writeln("<div id='title4'></div><br />");
document.getElementById("title4").innerHTML = "<h1>Creating Objects</h1>";

num = 8;
numString = num.toString(); // "8" is now a string

var person = new Object();

person.getFirstName = "Ben";
person.getLastName = "Fairbanks";
person.getFullName = function() {
	return this.getFirstName + " " + this.getLastName;
};
document.writeln(person.getFullName() + " = Object combining first and last name method<br />");

var team = {
	city : "Houston",
	name : "Rockets",
	slogan : function(){ 
		return this.city + " " + this.name; 
	}
};

document.writeln(team.slogan() + " = Newstyle Object team name<br />");


// ---- Working with arrays ----

document.writeln("<div id='title5'></div><br />");
document.getElementById("title5").innerHTML = "<h1>Working with arrays</h1>";

var testArray = ["texas", "wyoming", "vermont", "california", "ohio", "kansas"];

var arr2 = ["south dakota", "alabama", "new hampshire"];

var together = testArray.concat(arr2); // combine the two arrays
var joinTogether = together.join(", & "); // join the array variables using the passed paramater
var reverseTogether = together.reverse(); // reverse the display order


document.writeln(together + "<br />");
document.writeln(joinTogether + "<br />");
document.writeln(reverseTogether + "<br />");

var sortStates = function (){
	var sortTogether = together.sort(); // sort the elements a-z and 1-10
	return sortTogether;
}
document.writeln(sortStates() + "<br />");


//  ----- Conditions and Decisions ------

document.writeln("<div id='title6'></div><br />");
document.getElementById("title6").innerHTML = "<h1>Conditions and Decisions</h1>";

var far = "turkey";

if (far === "Turkey"){
	document.writeln(far + "<br />");
} else if (far === "turkey"){
	document.writeln(far + "<br />");
} else if (far === "turkeY"){
	document.writeln(far + "<br />");
} else {
	document.writeln("no match for if statement");
}

// Logical AND &&
// Logical OR ||

// yes || yes = true
// yes || no = true
// no || yes = true
// no || no = false

// Logical NOT !

newFoo = 5;

if (!(foo === 5)){
	document.writeln("false <br />")
}

// ------- Loops -----------

document.writeln("<div id='title7'></div><br />");
document.getElementById("title7").innerHTML = "<h1>Loops</h1>";

var statesArray = ["texas", "wyoming", "vermont", "california", "ohio", "kansas"];

// for (var i = 0; i < 10; i = i + 1){

// }
var len = statesArray.length; // by getting the length of the array and passing in the value it doesn't need to look at the length each loop
for (i = 0; i < len; i++){
	var states = statesArray[i];
	document.writeln(states + " & ");
}

document.writeln("<br />");

var loopedStates = []; // new array to have value pushed to
while (statesArray.length > 0){
	var whileStates = statesArray.pop();
	loopedStates.push(whileStates);
	document.writeln(whileStates + "<br />");
}
loopedStates = loopedStates.join(', ')
document.writeln(loopedStates + "<br />");

var secondStates = ["texas", "wyoming", "vermont", "california", "ohio", "kansas"];

do {
	var newStates = secondStates.pop(); // guaranteed to execute atleast once aslong as this is a true value
	document.writeln(newStates + " ");
} while (secondStates.length > 0);

document.writeln("<br />");

// ------ Window Object and Scope -----

document.writeln("<div id='title8'></div><br />");
document.getElementById("title8").innerHTML = "<h1>Window Object and Scope</h1>";

// self invoking function to help keep code protected from global variables
var foo = "Your Mom";
(function (){
	var foo = "Hello, World!"

	var bar = function(){
		foo = "Yep still your mom <br />";
		document.writeln(foo);
	};
	bar();
}());

// -------- Document Selectors -------

document.writeln("<div id='title9'></div><br />");
document.getElementById("title9").innerHTML = "<h1>Document Selectors</h1>";

var listElement = document.getElementById("item1");
var listLi = document.getElementsByTagName("li");
var listShow = document.querySelector("ul"); // another option is querySelectorAll to scan whole document, TagName is live , querySelector is not 

	document.writeln(listElement + "<br />");
	document.writeln(listLi.length + "<br />");
	document.writeln(listShow + "<br />");
	document.writeln(listShow.parentNode.tagName + "<br />");

// ------ Creating and Editing DOM Elements -------

document.writeln("<div id='title10'></div><br />");
document.getElementById("title10").innerHTML = "<h1>Creating and Editing DOM Elements</h1>";

(function(){
	doc = document;
	el = doc.createElement("p"), 
			content = doc.createTextNode("This is the content inside the paragraph tag"),
			idContent = doc.createTextNode("Adding content to a targeted ID");

	var location = doc.getElementById("item4");

	el.appendChild(content);
	el.id = "paragraph";

	doc.writeln(location + " = item4 location<br />");
	doc.body.appendChild(el);

	var para = doc.createElement("p"), 
		idContent = doc.createTextNode("Tag4 Adding content to a targeted ID");
		addParagraph = doc.getElementById("tag1"), 
		replaceId = doc.getElementById("tag2"),
		replaceContent = doc.createTextNode("Tag 77 is a replaced element");

	
	para.appendChild(idContent);
	para.id = "paraTag";

var replacePara = doc.createElement("p");
	replacePara.appendChild(replaceContent);
	replacePara.id = "replacedTag";

	//addParagraph.parentNode.appendChild(para); // append to the end of the parentNode container
	addParagraph.parentNode.insertBefore(para, addParagraph); //1st variable is whats added, 2nd is what its added before
	replaceId.parentNode.replaceChild(replacePara, replaceId); // use the 1st variable content to replace what is found at the second variable id location

	document.writeln(addParagraph + " = add paragraph element type<br />");
	//doc.body.appendChild(para);

	var location = doc.getElementById("tag3"),
		mericaEl = doc.createElement("p");

	mericaEl.id = "America";
	mericaEl.innerHTML = "<strong>innerHTML can be added to use the strong element</strong>";

	location.parentNode.replaceChild(mericaEl, location);

	html = mericaEl.innerHTML; // this sets the DOM element .innerHTML to a string to make the code faster

	html = html + " and you can concat stuff too :)";
	html = html + " and again, "

	mericaEl.innerHTML = html; // this returns the values from the string to the element that is called
 
 	// setInterval will make the delay repeat
	var delayConcat = function (){
		setTimeout(function (){
			mericaEl.innerHTML = mericaEl.innerHTML + " you can delay one too!";
		},2000);
	}
	delayConcat();

}());


// ----- Modifying Element Styles ------

document.writeln("<div id='title11'></div><br />");
document.getElementById("title11").innerHTML = "<h1>Modifying Element Styles</h1>";

var fooTitle = document.getElementById("foo-title");

// fooTitle.style.color = "red";
// fooTitle.style.textDecoration = "underline";
// fooTitle.style.borderBottom = "1px solid blue";

var style = fooTitle.style;
style.paddingLeft = "20px";

fooTitle.className = " foo-class foo-class2 "; // adds two classes
fooTitle.className = fooTitle.className.replace("foo-class2", ""); // lets you remove a class and replace it with an empty string

fooTitle.classList.add("fake-class-3");
fooTitle.classList.remove("fake-class-3");
fooTitle.classList.toggle("toggle-on-class")

var color = window.getComputedStyle(fooTitle, null).getPropertyValue("color");

document.writeln("<br />" + color + " = orange or getComputedStyle of H1 color<br />");

var getStyle = function(el, cssProperty) {
	if (typeof getComputedStyle !== "undefined") {
		return window.getComputedStyle(el, null).getPropertyValue(cssProperty);
	} else {
		return el.currentStyle[cssProperty];
	}
}

var getColor = getStyle(fooTitle, "color");

document.writeln( getColor + " = this is the browser tested version to check for < IE8 <br />");

// ----- Timers and Animations ----

document.writeln("<div id='title12'></div><br />");
document.getElementById("title12").innerHTML = "<h1>Timers and Animations</h1>";

(function(){
	function timeoutFn(){
		var i = 0;
		var doSomething = function() {
			console.log("The doSomething fundtion has run " + (i + 1) + " times");
			//document.writeln(i + 1);
			i = i + 1;
			if (i < 10) {
				setTimeout(doSomething, 500);
			}
		};
		setTimeout(doSomething, 2000);
	}
	//timeoutFn();

	function intervalFn(){
		var i = 0;
		var doTheThing = function (){
			console.log("The thing is being done " + (i + 1) + " times.");
			i = i + 1;
			if (i >= 10) {
				clearInterval(timer);
			}
		};
		var timer = setInterval(doTheThing, 250);
	}
	//intervalFn();
	

}());

(function(){

	document.writeln("<div id='bouncing-box'></div>");
	var box = document.getElementById("bouncing-box");
	var boxie = box.style;
	boxie.height = "50px";
	boxie.width = "50px";
	boxie.border = "1px solid black";
	boxie.position = "absolute";
	boxie.margin = "10px";
	boxie.left = "0px";

	var speed = 10;

	var moveBox = function (moveBy) {
	
		var square = document.getElementById("bouncing-box"),
			left = square.offsetLeft; // current horizontal position
		
		if (moveBy > 0 && left > 399) {
			clearTimeout(timer);

		} 
		// else if (moveBy < 0 && left < 51) {
		// 	clearTimeout(timer);

		// }

		square.style.left = left + moveBy + "px";
	};

var timer = setInterval(function() {
		moveBox(3);
	}, speed);


}());

// --------  Event Basics -----------

document.writeln("<br /><br /><br />")
document.writeln("<div id='title13'></div><br />");
document.getElementById("title13").innerHTML = "<h1>Event Basics...click me</h1>";

(function(){
	var doc = document;
	var clickTitle = doc.getElementById("title13");

	clickTitle.onclick = function(){
		this.style.color = "red";
		this.style.backgroundColor = "black";
	};


}());

// --------  Standard Event Model -----------

document.writeln("<br />")
document.writeln("<div id='title14'></div><br />");
document.getElementById("title14").innerHTML = "<h1>Standard Event Model</h1>";

