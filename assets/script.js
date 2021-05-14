//Grabbing elements from the HTML document
const timer = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const quiz = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const choiceBtn = document.getElementById("choiceBtn");
const buttons = document.getElementsByClassName("buttons");
const questionSection = document.getElementById("question-section");
const choiceSection = document.getElementsByClassName("#choices");
const images = document.getElementById ("images");
const A = document.getElementById ("A");
const B = document.getElementById ("B");
const C = document.getElementById ("C");
const D = document.getElementById ("D");



//Create an array with objects of the questions, answers and possible answers
const questions = [ {
    question: "Who created the T-virus in Resident Evil?",
    imgSrc: "./assets/images/resident-evil.png",
    A: "The Racoon Corporation",
    B: "The Umbrella Corporation",
    C: "Dynamite Corporation",
    D: "Boomerang Corporation",
    answer: "The Umbrella Corporation"
    
}, { 
    question: "What is the alien race that has to battle Predator in Alien vs Predator called?",
    imgSrc: "./assets/images/alien.jpg",
    A: "Kaminoan",
    B: "Polymorph", 
    C: "Xenomorph", 
    D: "Ortolan",
    answer: "Xenomorph"
}, 
{
    question: "In Harry Potter, what was the name of Hagrid's hippogriff?",
    imgSrc: "./assets/images/buckbeak2.jpg",
    A: "Buckbeak",
    B: "Fawkes", 
    C: "Aragog", 
    D: "Hedwig",
    answer: "Buckbeak"
}, 
{
    question: "In Lord of the Rings, who was NOT a member of the fellowship of the ring?",
    imgSrc: "./assets/images/fellowship.jpg",
    A: "Aragorn", 
    B: "Gimli",
    C: "Frodo",
    D: "Eowyn",
    answer: "Eowyn"
}, 
{
    question: "In Futurama, what is Fry's favorite soft drink that is highly addictive?",
    imgSrc: "./assets/images/futurama2.jpg",
    A: "Nuka-Cola",
    B: "Slurm",
    C: "Buzz Cola",
    D: "Butterbeer",
    answer: "Slurm"
},
];


//Declaring variables
const lastQuestion = question.length- 1;
let currentQuestion;
const correctAnswers=0;
//let question = "none";
let choices = " ";
const answer = "none"; 
const totalTime = 90;
let secondsLeft = 0;
let choiceButtons; 
let button;
let choice;


//When the start button is clicked, the quiz begins
startButton.addEventListener("click", startQuiz)

//Create a start function to start the game
function startQuiz() {
    console.log("start");
    startButton.classList.add('hide');
    currentQuestion = 0;
    questionSection.classList.remove('hide');
    nextQuestion();
}




//Function to go to the next question
//Grabbing the current question out of the questions array
function nextQuestion() {
    showQuestion(questions[currentQuestion]);
}

//Function to show question on screen 

function showQuestion(question) {
    //Displaying the question by changing the text of questionEl by grabbing the question text out of the object 
    questionEl.textContent = question.question;
   // changing the text for each choice by grabbing the current question out of the questions array and assigning the choiceA-D in the current question
    images.innerHTML = "<img src=" + questions[currentQuestion].imgSrc + ">";
    A.textContent = questions[currentQuestion].A;
    B.textContent = questions[currentQuestion].B;
    C.textContent = questions[currentQuestion].C;
    D.textContent = questions[currentQuestion].D;
  
}

function selectAnswer () {
    //current question index increases aka goes to next question
    currentQuestion ++;
    nextQuestion();
    console.log(selectAnswer);
}


  //  var q = questions[currentQuestion];
   // choiceA.innerText = q.choiceA;

 //   choiceA.textContent = choiceA[currentQuestion].choiceA;
    // questions.choices.forEach(choices => {
   //   questionEl.choices = document.createElement ('button');
   //   button.innerText = choices.text;
     //  button.classList.add("btn");

   
        
    




/*

//Function to check the answer with the users choice
function selectAnswer(answer){
 //   If users choice matches the right answer, then correctAnswers score increaes
   if(choice === questions[currentQuestion].answer) {
       currentQuestion++;
      correctAnswers++;
    checkAnswer.textContnet = "Correct!"
    
   // Else if the users choice does NOT match the right answer, 10 seconds is taken off the timer
   // and a message
    } else {
       totalTime -=10;
    secondsLeft.textContnet=totalTime;
       checkAnswer.textContnet = "Wrong."

    }
    //If the current question is not the last question, then the next question will be displayed
   if(currentQuestion < lastQuestion) {
       currentQuestion++;
        nextQuestion();
    }
    //If the current question is the last question, the timer will be cleared and the 
   if(currentQuestion >= lastQuestion) {
        clearInterval(timer);
        
    };
//}









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
}
 //let q = questions[currentQuestion];
  //  
  //  question.choices.forEach(choices => document.createElement('button'),button.textContent = q.choices);
    
      //  const button = document.createElement('button');
      //  button.innerHTML = q.choices.value;


        //currentQuestion.choices.forEach(function(choices, i) {
  //   const button = document.createElement('button');
  //    button.setAttribute("value", choices);
  //    button.classList.add('buttons');
  //  button.textContent= i + 1 + ". " + choices;
   // button.onclick = checkAnswer;
   // choiceEl.appendChild(button);
  //  });

*/
