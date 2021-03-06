//Grabbing elements from the HTML document
const timer = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const submitButton = document.getElementById("submitBtn");
const quiz = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const questionSection = document.getElementById("question-section");
const scoreEl = document.getElementById("score");
const images = document.getElementById("images");
const scoreContainer = document.getElementById('score-container');
const initialsInput = document.getElementById("initals");
const scoreInput = document.getElementById("scoreRecord");
const container = document.getElementsByClassName("container");
const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const D = document.getElementById("D");




//Create an array with objects of the questions, answers and possible answers
const questions = [
    {
        question: "Who created the T-virus in Resident Evil?",
        imgSrc: "./assets/images/resident-evil.png",
        A: "The Racoon Corporation",
        B: "The Umbrella Corporation",
        C: "Dynamite Corporation",
        D: "Boomerang Corporation",
        answer: "B"

    }, {
        question: "What is the alien race that has to battle Predator in Alien vs Predator called?",
        imgSrc: "./assets/images/alien.jpg",
        A: "Kaminoan",
        B: "Polymorph",
        C: "Xenomorph",
        D: "Ortolan",
        answer: "C"
    },
    {
        question: "In Harry Potter, what was the name of Hagrid's hippogriff?",
        imgSrc: "./assets/images/buckbeak2.jpg",
        A: "Buckbeak",
        B: "Fawkes",
        C: "Aragog",
        D: "Hedwig",
        answer: "A"
    },
    {
        question: "In Lord of the Rings, who was NOT a member of the fellowship of the ring?",
        imgSrc: "./assets/images/fellowship.jpg",
        A: "Aragorn",
        B: "Gimli",
        C: "Frodo",
        D: "Eowyn",
        answer: "D"
    },
    {
        question: "In Futurama, what is Fry's favorite soft drink that is highly addictive?",
        imgSrc: "./assets/images/futurama2.jpg",
        A: "Nuka-Cola",
        B: "Slurm",
        C: "Buzz Cola",
        D: "Butterbeer",
        answer: "B"
    },

];


//Declaring variables
const lastQuestion = questions.length - 1;
let currentQuestion = 0;
let answer = "none";
let usersChoice;
let score;
let timerInterval;
let finalScore;
let initials;
let lastScore;



//When the start button is clicked, the quiz begins
startButton.addEventListener("click", startQuiz);




//Create a start function to start the quiz when Start Quiz is clicked
//Current question index is at 0, score it at 0, setTimer function is called to set the timer, 
//the startButton is hidden while the questions are displayed on the screen

function startQuiz() {
    setTimer();
    console.log("start");
    startButton.classList.add('hide');
    currentQuestion = 0;
    score = 0;
    questionSection.classList.remove('hide');
    nextQuestion();
}

//Function for the timer, starts at 45 seconds, changes the HTML timer content and displays seconds left, the timer is counting down so -- from seconds left
//If timer gets to 0 an alert will be displayed letting the player know they ran out of time and endQuiz function will be enabled

function setTimer() {
    secondsLeft = 45;
    const timerInterval = setInterval(function () {
        document.getElementById('timer').innerHTML = secondsLeft;
        secondsLeft--;
        timer.textContnet = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's Up");
            endQuiz();

        }
    }, 1000);
}





//Function to go to the next question
//Displays the current question index in the questions array
function nextQuestion() {
    showQuestion(questions[currentQuestion]);
}

//Function to show questions on screen 
function showQuestion(question) {
    //Displays the question by changing the text of HTML questionEl by grabbing the question text out of the object 
    questionEl.textContent = question.question;
    // Displays the answers and images that go with the current question the user is on 
    images.innerHTML = "<img src=" + questions[currentQuestion].imgSrc + ">";
    A.textContent = questions[currentQuestion].A;
    B.textContent = questions[currentQuestion].B;
    C.textContent = questions[currentQuestion].C;
    D.textContent = questions[currentQuestion].D;
}



//Function to calculate whether the users choices were right and wrong
//If right, the score increases and goes to the next question, until the last question is hit then it will endQuiz
//If wrong, 10 seconds is taken out of the timer and then will continue onto next question, until last question is hit which will lead to endQuiz

function selectAnswer(usersChoice) {
    //If the usersChoice is equal to the answer for the current question, then the score increases
    if (usersChoice === questions[currentQuestion].answer) {
        score++;
    }
    //if userChoice is not equal to the right answer, 10 seconds deducted off the timer
    if (usersChoice !== questions[currentQuestion].answer) {
        secondsLeft = secondsLeft - 10;
    }
    //If the current question is the last question, endQuiz 
    if (currentQuestion >= lastQuestion) {
        clearInterval(timerInterval);
        endQuiz();
        //Else if the current question is not the last question, the next question will be showed and score will be console.log
    } else {
        currentQuestion++;
        nextQuestion();
        console.log(score);
    }
}

//When the last question is hit or the timer runs out, the endQuiz clears the timer and goes to the score input page
//The score input page (scoreContainer) is changed from display of hidden to display of grid
function endQuiz() {
    scoreContainer.style.display = "grid";
    clearInterval(timerInterval);
    showScore();

}

//function to show user how many questions they got right
//hiding the questionSection so that the showScore page can be visible
//the text content of the score HTML is changed to show how many questions the user got right out of the total question amount
function showScore() {
    questionSection.classList.add('hide');
    scoreEl.innerHTML = "You got  " + score + " out of  " + questions.length + " right!";
}

//function to submit the user initals and final score into the database to keep a record of highscores
//can not figure out how to do this part, followed excersises from class to try to format it out

function saveScore() {

    //objects of the users inpus to be used to be saved to the localstorage
    var highScore = {
        initials: initialsInput.text,
        finalScore: scoreInput.text,
    };

    //function to put highscore into the localstorage 
    localStorage.setItem("highScore", JSON.stringify(highScore));

};
//function to renderScore by using the highScore collected from the last function and getting the item from the local storage

function renderScore() {
    lastScore = JSON.parse(localStorage.getItem("highScore"))
    //If last score is coming up as nothing pull elements from the HTML otherwise cancel
    if (lastScore !== null) {
        document.getElementById("saved-inital").innerHTML = highScore.initials;
        document.getElementById("saved-score").innerHTML = highScore.finalScore;

    } else {
        return;
    }
    //clicking the submit button will save and render the score
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        saveScore();
        renderScore();
    })

}




