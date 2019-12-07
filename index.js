//element grabbers
var lengthEl = document.getElementById("passLength")
var specialEl = document.getElementById("special")
var numbersEl = document.getElementById("numbers")
var lowerEl = document.getElementById("lower")
var upperEl = document.getElementById("upper")
var submit = document.getElementById("submit")
var copy = document.getElementById("copy")
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
var lengthNumber = parseInt(lengthEl.value);


//generator event listener
submit.addEventListener("click", function(event){
    event.preventDefault();

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
    console.log(passOptions)
    console.log(lengthNumber)
//if length input is outside 8-128 chars then error appears
if (lengthNumber < 8 || lengthNumber > 128 || !lengthNumber){
    alert ("Password length must be between 8 - 128 characters.")
};

// if no options are chosen an error appears
if (!lowerChecked && !upperChecked && !numbersChecked && !specialChecked) {
    alert("Please select at least one option for your password.")
};

    generatedPass.textContent = generate(length, passOptions);

});


//password generator function
function generate(length, passOptions){

    //Iniitalize final password as blank string
    let password = '';
    
    //Append random character from the passwordOptions
    for (let i = 0; i < length; i++) {
            password += passOptions.charAt(Math.floor(Math.random() * passOptions.length))
    };
    return password;
};

function copytoClipboard(){

        /* Get the text field */
        var copyText = document.getElementById("myInput");
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
        return
};