// console.log("connected");

//First and Last Name, Age
var firstName = prompt("What is your First Name?");
var lastName = prompt("What is your Last Name?");
var yourAge = prompt("How old are you?");

//The message will appear below after entering information
alert("Hello, " + firstName + " " + lastName + "!" + " " + "This is your age in months: " + ageInMonths(yourAge)+ "." + " " + "This is your age in days: " + ageInDays(yourAge));

function ageInDays(age) {
	return age * 365;
}

function ageInMonths(age) {
	return age * 12;
}
