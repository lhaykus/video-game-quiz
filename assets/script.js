//Grabbing elements from the HTML document
const timer = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const quiz = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const choiceBtn = document.getElementById("choiceBtn");
const buttons = document.getElementsByClassName("buttons");
const questionSection = document.getElementById("question-section");
const choiceSection = document.getElementsByClassName("#choices");
const choiceA = document.getElementById ("A");
const choiceB = document.getElementById ("B");
const choiceC = document.getElementById ("C");
const choiceD = document.getElementById ("D");



//Create an array with objects of the questions, answers and possible answers
const questions = [ {
    question: "Who created the T-virus in Resident Evil?",
    choiceA: "The Racoon Corporation",
    choiceB: "The Umbrella Corporation",
    choiceC: "Dynamite Corporation",
    choiceD: "Boomerang Corporation",
    answer: "The Umbrella Corporation"
    
}, { 
    question: "What is the alien race that has to battle Predator in Alien vs Predator called?",
    choiceA: "Kaminoan",
    choiceB: "Polymorph", 
    choiceC: "Xenomorph", 
    choiceD: "Ortolan",
    answer: "Xenomorph"
}, 
{
    question: "In Harry Potter, what was the name of Hagrid's hippogriff?",
    choiceA: "Buckbeak",
    choiceB: "Fawkes", 
    choiceC: "Aragog", 
    choiceD: "Hedwig",
    answer: "Buckbeak"
}, 
{
    question: "In Lord of the Rings, who was NOT a part of the fellowship of the ring?",
    choiceA: "Aragorn", 
    choiceB: "Gimli",
    choiceC: "Frodo",
    choiceD: "Eowyn",
    answer: "Eowyn"
}, 
{
    question: "In Futurama, what is Fry's favorite soft drink that is highly addictive?",
    choiceA: "Nuka-Cola",
    choiceB: "Slurm",
    choiceC: "Buzz Cola",
    choiceD: "Butterbeer",
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
    choiceA.textContent = questions[currentQuestion].choiceA;
    choiceB.textContent = questions[currentQuestion].choiceB;
    choiceC.textContent = questions[currentQuestion].choiceC;
    choiceD.textContent = questions[currentQuestion].choiceD;
  
}

function selectAnswer () {
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
