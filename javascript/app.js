// JS file for the trivia game assignment(easy)

// **** Some mental notes for myself below as I go along to chart my line of thinking ****
//
// if userInput = question.correctAnswer, make correct status true, correctTotal++
//
// EDIT 10PM WED 1/9/2019: Ok so upon a fair bit of Googling it appears that I way over thought this. Going to try and get it working anyways.
// EDIT 11PM WED 1/9/2019: Yeah...ok. pseudocoding a lot, looking into ways to get something working. Feeling seems to be shared with other members of my study group on Slack.
// EDIT 8:30PM THURS 1/10/2019: Updating from class break. Adding some more pseudocode and trying to add some functionality. Still a big fail on my part.
// EDIT 10PM THURS 1/10/2019: I'm fried. I'll make more changes tomorrow after submitting.

var timer = 120000;
var totalCorrect = 0;
var totalIncorrect = 0;
var questionArray = [questionOne, questionTwo, questionThree];
// Compare userChoice to entry in correctAnswers Array?
// var correctAnswers = [answer2,answer2,answer4];
var userChoice;


$(document).ready(function() {
    $(".questions").on("click", function (event){
        // start the timer
        setTimeout(function(){ alert("Hello"); }, timer);
        // generate the questions
        generateHtml();
        // get user input here
    
    
    });

    
});

// **** Question Objects ****

var questionOne = {
    id: "q1",
    text: "In what year did the US declare Independence?",
    answer1: "1620",
    answer2: "1776",
    answer3: "1812",
    answer4: "1782",
    correct: 2,

};

var questionTwo = {
    id: "q2",
    text: "How many players are on a baseball field during play?",
    answer1: "8",
    answer2: "9",
    answer3: "10",
    answer4: "11",
    correct: 2,

};

var questionThree = {
    id: "q3",
    text: "What kind of person shall not be honored on a postage stamp?",
    answer1: "A King or Queen",
    answer2: "A Sports Star",
    answer3: "A President",
    answer4: "A living person",
    correct: 4,
};


// **** Functions ****

function checkCorrect() {
    // if (userChoice === correct )
    // - totalCorrect++
    // else
    // - totalIncorrect++
};

function generateHtml() {

    // for (i = 0, i < questionArray.length, i++ )
    // var questionWrite = <div class = "question" id = questionArray[i].id>
    // questionwrite += <h3>questionArray[i].text</h3>;
    // questionWrite += <ol>;
    // questionWrite += <li value = "1">questionArray[i].answer1</li>
    // questionWrite += <li value = "2">questionArray[i].answer2</li>
    // questionWrite += <li value = "3">questionArray[i].answer3</li>
    // questionWrite += <li value = "4">questionArray[i].answer4</li>
    // questionWrite += </ol>;


}