//Create an array with objects of the questions, answers and possible answers
const questions = [ {
    question: "Who created the T-virus in Resident Evil?",
    choices: ["The Raccoon Corporation", "The Umbrella Corporation", "Dynamite Corporation", "Boomerang Corporation"],
    answer: "The Umbrella Corporation"
    
}, { 
    question: "What is the alien race that has to battle Predator in Alien vs Predator called?",
    choices: ["Kaminoan", "Polymorph","Xenomorph", "Ortolan"],
    answer: "Xenomorph"
}, 
{
    question: "In Harry Potter, what was the name of Hagrid's hippogriff?",
    choices: ["Buckbeak", "Fawkes", "Aragog", "Hedwig"],
    answer: "Buckbeak"
}, 
{
    question: "In Lord of the Rings, who was NOT a part of the fellowship of the ring?",
    choices: ["Aragorn", "Gimli", "Frodo", "Eowyn"],
    answer: "Eowyn"
}, 
{
    question: "In Futurama, what is Fry's favorite soft drink that is highly addictive?",
    choices: ["Nuka-Cola", "Slurm", "Buzz Cola", "Butterbeer"],
    answer: "Slurm"
},
];

//Grabbing elements from the HTML document
const timer = document.getElementById("timer");
const startButton = document.getElementById(".startbtn");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

//Declaring variables
const lastQuestion = question.length- 1;
const currentQuestion =0;
const correctAnswers=0;
const question = "none";
const answer = "none"; 
const totalTime = 90;
const secondsLeft = 0;
const choiceButtons; 


//Create a start function to start the game
const startQuiz = function() {

}


//Function to show question on the screen 

function renderQuestion() {
    question.textContnet
    //const q = question.[currentQuestion];
   // question.innerHTML = "" + question[currentQuestion].question;

}


//Function to check the answer with the users choice
function checkAnswer(answer){
    //If users choice matches the right answer, then correctAnswers score increaes
    if(question[currentQuestion].correct===answer) {
        correctAnswers++;
        checkAnswer.textContnet = "Correct!"
    
    //Else if the users choice does NOT match the right answer, 10 seconds is taken off the timer
    //and a message
    } else {
        totalTime -=10;
        secondsLeft.textContnet=totalTime;
        checkAnswer.textContnet = "Wrong."

    }
    //If the current question is not the last question, then the next question will be displayed
    if(currentQuestion < lastQuestion) {
        currentQuestion++;
        renderQuestion();
    }
    //If the current question is the last question, the timer will be cleared and the 
    if(currentQuestion >= lastQuestion) {
        clearInterval(timer);
        
    }
}









//Set up buttons

//Set up timer
//Get timer to start when start game is pressed
function setTimer() {
const timer = setInterval(function(){
    secondsLeft--;
    timer.textContnet = "Timer: " + secondsLeft;
    
    if(secondsLeft === 0) {
        clearInterval(timer);
        alert("Time's Up");
    }
}, 9000);
}

//Show the questions and choices
function quiz() {
    nextQuestoin();
}











//Event listener to call startGame function when button is clicked
startButton.addEventListener("click", startGame);

button1.addEventListener("click", checkAnswer);
button2.addEventListener("click", checkAnswer);
button3.addEventListener("click", checkAnswer);
button4.addEventListener("click", checkAnswer);
