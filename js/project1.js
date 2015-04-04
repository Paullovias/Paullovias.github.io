function tNumsPlus5(number){
	"use strict";
	var snumber = (number+'').toString().split('');
	var fnumber = "";
	for (var i=0;i<snumber.length;i++){
		fnumber = fnumber + (((parseInt(snumber[i],10)) + 5)%10).toString();
	}
	console.log(fnumber);
	return(fnumber);
}

function tNumsPlus5Alt(number){
	// Created in class 04.01.15
	"use strict";
	var result = "", digit;
	number = String(number);
	// Traverse string and process digits
	for(var i = 0; i < number.length; i++){
		// process the current digit
		digit = (Number(number[i]) +5) % 10;
		console.log(digit);
	}
	return result;
}

function isArmstrong(number){
	"use strict";
	if(number.toString().length != 3){
		console.log("Number is not of correct form.");
		return("Number is not of corret form.");
	} else {	
		var snumber = (number+'').toString().split('');
		var digits = [];
		for (var i=0;i<snumber.length;i++){
			digits[i]=Math.pow((parseInt(snumber[i],10)),3);
		}
		var arm = 0;
		for (var i = 0; i<digits.length; i++){
			arm = arm + digits[i];
		}
		if(arm == number){
			console.log(true);
			return(true);
		} else {		
			console.log(false);
			return(false);
		}
	}
}

function isArmstrongMod(number){
	"use strict";
	if(number.toString().length != 3){
		console.log("Number is not of correct form.");
		return("Number is not of correct form.");
	} else {
		var snumber = (number+'').toString().split('');
		var digits = [];
		for (var i=0;i<snumber.length;i++){
			digits[i]=Math.pow((parseInt(snumber[i],10)),3);
		}
		var arm = 0;
		for (var i = 0; i<digits.length; i++){
			arm = arm + digits[i];
		}
		if(arm == number){
			return(true);
		} else {
			return(false);
		}
	}
}

function allArmstrong3s(){
	"use strict";
	var allArm = [];
	for (i=100; i<1000; i++){
		if(isArmstrongMod(i)){
			allArm[allArm.length] = i;
		}
	}
	var string = "";
	for (var i = 0; i < allArm.length; i++){
		string = string + " " + allArm[i];
	}
	console.log(string.trim());
	return(string.trim());
}

function formatTelNum(number){
	"use strict";
	if(number.toString().length != 10){
		console.log("Number is not of correct form.");
		return("Number is not of correct form.");
	} else {
		var snumber = (number+'').toString().split('');
		var fnumber = "(";
		for(i=0; i<3; i++){	
			fnumber = fnumber + snumber[i];
		}
		fnumber = fnumber + ") ";
		for(i=3; i<6; i++){
			fnumber = fnumber + snumber[i];
		}
		fnumber = fnumber + "-";
		for(i=6; i<10; i++){	
			fnumber = fnumber + snumber[i];
		}
		console.log(fnumber);
		return(fnumber);
	}
}

var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");

button1.onclick = function(){
	console.log('Calling tNumsPlus5');
	document.getElementById('problem1out').innerHTML = "Output: " + tNumsPlus5(document.getElementById('inputBox1').value);
};

button2.onclick = function(){
	console.log('Calling isArmstrong');
	document.getElementById('problem2out').innerHTML = "Output: " + isArmstrong(document.getElementById('inputBox2').value);
};

button3.onclick = function(){
	console.log('Calling allArmstrong3s');
	document.getElementById('problem3out').innerHTML = "Output: " + allArmstrong3s();
};

button4.onclick = function(){
	console.log('Calling formatTelNum');
	document.getElementById('problem4out').innerHTML = "Output: " + formatTelNum(document.getElementById('inputBox4').value);
};