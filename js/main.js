let theInterval = true; 
let phrase = '';

// Randomly generated response
let btnText = document.querySelector(".eight-ball-text");

function eightBallShake() {
    btnText.classList.add('fade-out')
    let randomNumber = Math.floor(Math.random() * 16) + 1;

    if (randomNumber===1) {
        phrase = "It is certain"; //affirmative 1
    } else if (randomNumber===2) {
        phrase = "Cannot predict now"; //non-committal 1
    } else if (randomNumber===3) {
        phrase = "Ask again later"; //non-committal 2
    } else if (randomNumber===4) {
        phrase = "Very doubtful"; //negative 1
    } else if (randomNumber===5) {
        phrase = "You may rely on it"; //affirmative 2
    } else if (randomNumber===6) {
        phrase = "It is decidedly so"; //affirmative 3
    } else if (randomNumber===7) {
        phrase = "Don't count on it"; //negative 2
    } else if (randomNumber===8) {
        phrase = "Better not tell you now"; //non-committal 3
    } else if (randomNumber===9) {
        phrase = "Signs point to yes"; //affirmative 4
    } else if (randomNumber===10) {
        phrase = "Outlook not so good"; //negative 3
    } else if (randomNumber===11) {
        phrase = "Reply hazy, try again"; //non-committal 4
    } else if (randomNumber===12) {
        phrase = "Outlook good"; //affirmative 5
    } else if (randomNumber===13) {
        phrase = "Yes definitely"; //affirmative 6
    } else if (randomNumber===14) {
        phrase = "My sources say no"; //negative 4
    } else if (randomNumber===15) {
        phrase = "My reply is no"; //negative 5
    } else if (randomNumber===16) {
        phrase = "There is a chance"; //non-committal 5
    } else {
        phrase = "Go ask Otis";
    }

    document.querySelector('#eight-ball').classList.add('eight-ball-animate');
    document.querySelector('.fade-in').classList.add('.fade-out');
    
    if (theInterval) {
        theInterval = false;
        setTimeout(() => {
            theInterval = true;
            btnText.classList.remove('fade-out')

            btnText.innerHTML = phrase;
            document.querySelector('#eight-ball').classList.remove('eight-ball-animate');
            document.querySelector('.fade-in').classList.remove('.fade-out');
            }, 3000);
    }
}
        

