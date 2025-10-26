//element grabbers
var lengthEl = document.getElementById("passLength");
var specialEl = document.getElementById("special");
var numbersEl = document.getElementById("numbers");
var lowerEl = document.getElementById("lower");
var upperEl = document.getElementById("upper");
var submit = document.getElementById("submit");
var copy = document.getElementById("copy");
var generatedPass = document.getElementById("newPass");
var lengthNumber = parseInt(lengthEl.value);

//options arrays
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowerChar = "abcdefghijklmnopqrstuvwxyz";

var numberSet = "0123456789";

var specChar = "!@#$%&*";


// values for check boxes
var lowerChecked = lowerEl.checked;
var upperChecked = upperEl.checked;
var numbersChecked = numbersEl.checked;
var specialChecked = specialEl.checked;

//generator event listener
submit.addEventListener("click", function(event){
    event.preventDefault();
    
    var lengthNumber = parseInt(lengthEl.value);
    var passOptions = ""

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

    generatedPass.value = generate(lengthNumber, passOptions);
console.log(generatedPass)


    return; 
});

//password generator function
function generate(lengthNumber, passOptions){

    //Iniitalize final password as blank string
    let password = '';
    
    //Append random character from the passwordOptions
    for (let i = 0; i < lengthNumber; i++) {
            password += passOptions.charAt(Math.floor(Math.random() * passOptions.length))
    };
    return password;
};


function copytoClipboard(){

        /* Get the text field */
        var copyText = document.getElementById("newPass");
    
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);

        console.log(copyText.value);

        return;
};