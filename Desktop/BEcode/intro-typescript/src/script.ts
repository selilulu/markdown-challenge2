(function() {
    (<HTMLInputElement>document.getElementById('guess-form')).addEventListener("submit", compareUserGuess);

    function compareUserGuess (event :Event) {
        event.preventDefault();
        //use types everywhere
        const secretNumber = generateSecretNumber();
        //instead of parseFloat method to return a string to a number we can use :any like that const userNumber :any=
        const userNumber=parseFloat( (<HTMLInputElement>document.getElementById('guess')).value);
        //(<HTMLInputElement>....insert the code in here like above ....)

        if (secretNumber == userNumber) {
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        } else {
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }
    }

    function generateSecretNumber() {
        const secretNumber = getRandomArbitrary(1, 22);

        return secretNumber;
    }

    function getRandomArbitrary(min :number, max :number) {
        return Math.round(Math.random() * (max - min) + min);
    }
})();