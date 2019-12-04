//element grabbers
var lengthEl = document.getElementById("passLength")
var specialEL = document.getElementById("special")
var numbersEL = document.getElementById("numbers")
var lowerEl = document.getElementById("lower")
var upperEl = document.getElementById("upper")
var submit = document.getElementById("submit")

//options arrays
var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];

var numberSet = [0123456789];

var specChar = ["!@#$%&*"];

//event listener
submit.addEventListener("click", function(){
    event.preventDefault();



//length
var length = parseInt(lengthEl.value);
//if length input is outside 8-128 chars then error appears
if (length < 8 || length > 128){
    alert ("Password length must be between 8 - 128 characters.")
};


//generate password
var newPass = ("");
//function genPass() {}

//changing h5 tag to generated password
//h5.textContent = (newPass);



//console logs


})

//