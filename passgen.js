// ##############################################################################################
// ##############################################################################################
// ##############################################################################################
//// ####################            PASS GEN                       #############################
// ##############################################################################################
// ##############################################################################################
// ##############################################################################################


// Define the chars we'll use for the pass
const alphanumeric = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  
  const numbers = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
  ];
  
  const symbols = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"
  ];  


// Define min num of chars
let password = [];
let minNumOfAlpha = 4;
let minNumOfNum =4;
let minNumOfSymb = 4;
let minChars = 12;
let maxChars = 20;

// Define HTML content
let lblPassword = document.getElementById("lbl-password");



// Function to generate random index based on length of char set
function randIdx(set) {
    randNum = Math.round(Math.random() * set.length)
    return randNum
}


// Generate alpha characters based on min requested
function genAlpha() {
    for (i = 0; i < minNumOfAlpha; i++) {
        let randIdxNum = randIdx(alphanumeric)
        password.push(alphanumeric[randIdxNum])
    }
}

// Generate num characters based on min requested
function genNumbers()  {
    for (let i = 0; i < minNumOfNum; i++) {
        let randIdxNum = randIdx(numbers)
        password.push(numbers[randIdxNum])
    }
}

// Generate symb characters based on min requested
function genSymbols() {
    for (let i = 0; i < minNumOfSymb; i++){
        let randIdxNum = randIdx(symbols);
        password.push(symbols[randIdxNum])
    }

}


let btnButton = document.getElementById("btn-genpass").addEventListener("click", function() {
    password = []; // Reset the password array
    genNumbers()
    genAlpha()
    genSymbols()
    console.log(password)
    finalPass = password.join("");
    lblPassword.textContent = finalPass;

})









