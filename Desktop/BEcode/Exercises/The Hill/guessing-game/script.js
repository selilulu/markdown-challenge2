

 document.getElementById("btn").addEventListener("click", function(){

    var randomNumber = Math.floor((Math.random()*22)+1);
    var givenNumber = document.getElementById("guess").value;

    if ( randomNumber==givenNumber){
        alert('Awesome! You are so good!'+ randomNumber + ' was correct.' )
    }
    else if (randomNumber !== givenNumber){
        alert('Bummer... You guessed '+ givenNumber + 'and the secret number was'+ randomNumber )
    }

 });




