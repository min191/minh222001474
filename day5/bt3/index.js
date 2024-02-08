function guessNumber() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var guessInput = document.getElementById("guessInput");
    var message = document.getElementById("message");
    var guess = parseInt(guessInput.value);

    if (guess === randomNumber) {
        message.innerHTML = "NỔ HŨ RỒIIIIIII!";
    } else {
        message.innerHTML = "haizzzz còn đúng cái nịt.";
    }
}