const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15
let password1El = document.getElementById("password-1-el")
let password2El = document.getElementById("password-2-el")

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function getRandomPassword1() {
    let randomPassword = ""
    for (let i =0; i < passwordLength; i++){
    randomPassword += getRandomCharacter()
    password1El.textContent = randomPassword
    }
}

function getRandomPassword2() {
    let randomPassword = ""
    for (let i =0; i < passwordLength; i++){
    randomPassword += getRandomCharacter()
    password2El.textContent = randomPassword
    }
}

function generate() {
    getRandomCharacter()
    getRandomPassword1()
    getRandomPassword2()

}

function copyFunction1() {
    let copyText = password1El.textContent;
    navigator.clipboard.writeText(copyText).then(
    function () {
      alert("Copied Succesfully);")
    }
  );
    console.log(copyText)
}

function copyFunction2() {
  let copyText = password2El.textContent;
  navigator.clipboard.writeText(copyText).then(
  function () {
    alert("Copied Succesfully);")
  }
);
  console.log(copyText)
}