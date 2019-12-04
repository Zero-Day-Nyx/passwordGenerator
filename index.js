//element grabbers
var lengthEl = document.getElementById("passLength")
var specialEl = document.getElementById("special")
var numbersEl = document.getElementById("numbers")
var lowerEl = document.getElementById("lower")
var upperEl = document.getElementById("upper")
var submit = document.getElementById("submit")
var generatedPass = document.getElementById("newPass")

//options arrays
var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];

var numberSet = [0123456789];

var specChar = ["!@#$%&*"];

var passOptions = [""]

// values for check boxes
var lowerChecked = lowerEl.checked;
var upperChecked = upperEl.checked;
var numbersChecked = numbersEl.checked;
var specialChecked = specialEl.checked;

//length value
var length = parseInt(lengthEl.value);



//event listener
submit.addEventListener("click", function(){

    if (lowerChecked){
        passOptions += lowerChar
    };
    if (upperChecked){
        passOptions += upperChar
    };
    if (numbersChecked){
        passOptions += numberSet
    };
    if (specialChecked){
        passOptions += specChar
    };
    
//if length input is outside 8-128 chars then error appears
if (length < 8 || length > 128){
    alert ("Password length must be between 8 - 128 characters.")
};

// if no options are chosen an error appears
if (!lowerChecked && !upperChecked && !numbersChecked && !specialChecked) {
    alert("Please select at least one option for your password.")
};

generatedPass.textContent = Generate(); 

})

//password generator function
function generate(){

}