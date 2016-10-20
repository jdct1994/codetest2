/******************** Display the date and time ********************/

console.log(Date());
var date = new Date(); // Use the Date() function to get the date
var day = date.getDay(); // Use getDay() to get the number of the day of the week
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var output = "Today is ";
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var hour = date.getHours();

if (hour <= 12) { // Attach AM or PM to the hour
	hour = hour.toString() + ' AM';
} else {
	hour = (hour - 12).toString() + ' PM';
}

 /* Display the output */
output += days[date.getDay()] + '. ';
output += "The current time is " + hour;
output += " : " + minutes;
output += " : " + seconds;
document.getElementById("question1").innerHTML = output;

/******************** Display "Origin Code Academy Rocks!" as a scrolling string ********************/

var header = "Origin Code Academy Rocks! ";
var totalLength = header.length;
var timing = setInterval(timer, 100); // set the timer to 100 milliseconds

function timer() {
	var lastCharacter = header.charAt(totalLength - 1); // Get the last character of the string
	var remainding = header.substring(0, totalLength - 1); // Get the remainding characters
	header = lastCharacter + remainding; // Set header to the new value
	document.getElementById("question2").innerHTML = header; // Attach header to the HTML
}

/******************** Output the bubble-sorted result in the console ********************/   
var numbers = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
sort(numbers);

function sort(numbers){ //function for sorting an array of numbers from greatest to least
	var i;
	var j;
	for (i = numbers.length - 1; i >= 0; i--) {		
    	for (j = 0; j <= i; j++){
    		if (numbers[j + 1] > numbers[j]){
    			var x = numbers[j];
    			numbers[j] = numbers[j + 1];
    			numbers[j + 1] = x;
			}		
		}
	}
}

console.log("Bubble-sorted result: " + numbers); 

/******************** jQuery ********************/

// This function makes the first word bold
$(".boldFirst").each(function(){
	var firstWord = $(this);
	firstWord.html(firstWord.html().replace(/^(\w+)/, '<b>$1</b>'));
});

// This function adds text when the button is clicked
$(".click").click(function() {
	$(".clickText").append("<p>This is a click event</p>");
});

// This function adds text when the button is double clicked
$(".doubleClick").dblclick(function() {
	$(".doubleClickText").append("<p>This is a double-click event</p>");
});

// This function changes the background color of the div when the button is clicked
$(".changeColor").click(function() {
	$(".colorChangeDiv").css("background-color", "white");
});