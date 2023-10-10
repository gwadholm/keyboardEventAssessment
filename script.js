/*Set up a letter array and create variables for working the body and ol DOM elements*/
const letterArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const body = document.querySelector('body');
const list = document.querySelector('ol');

/*Choosing the randomLetter and returning it to a variable to use in the key event */
const randomLetter = function() {
  return letterArray[Math.floor(Math.random() * 25)];
};

/*set initial secret Letter */
let secretLetter = randomLetter();

 /*The key event that triggers the message*/
 body.addEventListener('keyup', function(e){
  if (e.key === secretLetter) {
    const winnerMessage = document.createElement('li');
    winnerMessage.textContent = "You pressed the secret key - " + secretLetter;
    list.append(winnerMessage);
    secretLetter = randomLetter();
  }
});

