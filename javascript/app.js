// JS file for the trivia game assignment(easy)

// **** Some mental notes for myself below as I go along to chart my line of thinking ****
//
// if userInput = question.correctAnswer, make correct status true, correctTotal++
// 
// EDIT 10PM WED 1/9/2019: Ok so upon a fair bit of Googling it appears that I way over thought this. Going to try and get it working anyways.
// EDIT 11PM WED 1/9/2019: Yeah...ok. pseudocoding a lot, looking into ways to get something working. Feeling seems to be shared with other members of my study group on Slack.

var timer = 120000;
var totalCorrect = 0;
var totalIncorrect = 0;
var questionArray = [questionOne,questionTwo,questionThree];
// Compare userChoice to entry in correctAnswers Array?
// var correctAnswers = [answer2,answer2,answer4];
var userChoice;


// **** Question Objects ****

var questionOne = {
    id: q1,
    text: "In what year did the US declare Independence?",
    answer1: "1620",
    answer2: "1776",
    answer3: "1812",
    answer4: "1782",
    // correct: answer2

};

var questionTwo = {
    id: q2,
    text: "How many players are on a baseball field during play?",
    answer1: "8",
    answer2: "9",
    answer3: "10",
    answer4: "11",
    // correct: answer2

};

var questionThree = {
    id: q3,
    text: "What kind of person shall not be honored on a postage stamp?",
    answer1: "A King or Queen",
    answer2: "A Sports Star",
    answer3: "A President",
    answer4: "A living person",
    // correct: answer4
};


// **** Functions ****

function checkCorrect() {
    // if (userChoice === )
    // if userchoice for this question equals correct:
    // - totalCorrect++
    // else
    // 
};

function generateHtml(){
    // for (i = 0, i < questionArray.length, i++ )
        // $(.questions).html("<div id =" + "></div>" )

}