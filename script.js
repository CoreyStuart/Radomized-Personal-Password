let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let special = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ":", ';', '<', '=', '>', '?', '@', '[', ']']
let results = [];



let generateBtn = document.querySelector("#generate");


function generatePassword() {
  let options = confirmation();
  let passwordSelection = [];
let randomPassword = [];
  if (options.specialChar) {
    passwordSelection = passwordSelection.concat(special);
    randomPassword.push(random(special));
    console.log(special);
  }
  if (options.numbersChar) {
    passwordSelection = passwordSelection.concat(numbers);
    randomPassword.push(random(numbers));
    console.log(randomPassword);
  }
  if (options.lowerChar) {
    passwordSelection = passwordSelection.concat(lower);
    randomPassword.push(random(lower));
    console.log(randomPassword);
  }
  if (options.upperChar) {
    passwordSelection = passwordSelection.concat(upper);
    randomPassword.push(random(upper));
    console.log(randomPassword);
  }

   for (let i = 0; i < options.length; i++) {
    results[i] = passwordSelection[Math.floor(passwordSelection.length * Math.random())];
     console.log(results);
   }
  return results.join("");
}

function random(array) {
  let randomChar = Math.floor(Math.random() * array.length);
  let charElement = array[randomChar]
  return charElement;
}

function confirmation() {
  let selection = parseInt(prompt("How long would you like the password to be between 12 to 128 characters?"), 10);
  if (!selection) {
    return;
  }
  else if (selection < 12 || selection > 128) {
    alert("Invalid. You know what you did.")

    confirmation();
  }
  else {


    let num = confirm("Would you like to use numbers?")
    
    let low = confirm("Would you like to use lower casing?")
    

    let up = confirm("Would you like to use upper casing?")
    
    let spec = confirm("Would you like to use special characters?")
    
    if (!num && !low && !up && !spec) {
      alert("Invalid. Need to choose one")
    }

    console.log(results);

    var passwordObject = {
      length: selection,
      numbersChar: num,
      lowerChar: low,
      upperChar: up,
      specialChar: spec,
    }
    console.log(passwordObject);

    return passwordObject;
  }

}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

