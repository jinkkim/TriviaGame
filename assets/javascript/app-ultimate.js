var questions = [
    "1. Normal adult dogs have how many teeth?",
    "2. Through what part of the body do dogs sweat?",
    "3. Which dog breed has a black tongue?",
    "4. What is the most common training command taught to dogs?" ,   
    "5. What is a dog’s most highly developed sense?",
    "6. Puppies are delivered how many weeks after conception?",
    "7. What is the favorite dog breed of the Queen of England?",
    "8. Which TV series had a dog named K9 who was also a robot?",
    "9. Which dog breed is the smallest of them all?",
    "10. Which breed was once known as St. John’s Newfoundland?"
];

var choice1 = [
    "A) 24",
    "A) Mouth",
    "A) Husky",
    "A) Stay",
    "A) Taste",
    "A) 36",
    "A) Corgi",
    "A) Full House",
    "A) Dachshund",
    "A) Newfoundland"
];

var choice2 = [
    "B) 38",
    "B) Ears",
    "B) Labrador",
    "B) Beg",
    "B) Smell",
    "B) 22",
    "B) Basenji",
    "B) Star Trek",
    "B) Shih tzu",
    "B) Golden retriever"
];

var choice3 = [
    "C) 42",
    "C) Nose",
    "C) Weimaraner",
    "C) Sit",
    "C) Sight",
    "C) 9",
    "C) Poodle",
    "C) Doctor Who",
    "C) Pomeranian",
    "C) Labrador"
];

var choice4 = [
    "D) 32",
    "D) Paws",
    "D) Chow chow",
    "D) Dance",
    "D) Touch",
    "D) 16",
    "D) Pomeranian",
    "D) Law & Order",
    "D) Chihuahua",
    "D) Puli"
];

var imagePath = [
    "q1.jpg",
    "q2.jpg",
    "q3.jpg",
    "q4.jpg",
    "q5.jpg",
    "q6.jpg",
    "q7.jpg",
    "q8.jpg",
    "q9.jpg",
    "q10.jpg"
];

var answers = [2, 3, 3, 2, 1, 2, 0, 2, 3, 2];

var correctScores = 0;
var incorrectScores = 0;
var unansweredScores = 0;
var countdown = 0;
var counter = 0;



$(document).ready(function(){

    $("#mainScreen").hide();

    $("#start").click(function(){

        correctScores = 0;
        incorrectScores = 0;
        unansweredScores = 0;
        countdown = 30;
        counter = 0;


        $("#mainScreen").show();
        $("#start").hide();

        timerStart();
        assignQuestions();
        
    });

    $("#choice1").click(function(){
        
        if (counter==10){
            clearInterval(x);
            showScore();
            $("#start").text("Start over?");
            $("#start").show();
        }
        
        showAnswer();
        setTimeout(function(){
            hideAnswer();
            assignQuestions(); 
        },2000)
        var answerKey = 0;
        compareClick(answerKey);
        counter++;
        countdown = 30;

   
    });

    $("#choice2").click(function(){
        
        if (counter==10){
            clearInterval(x);
            showScore();
            $("#start").text("Start over?");
            $("#start").show();
        }

        showAnswer();
        setTimeout(function(){
            hideAnswer();
            assignQuestions(); 
        },2000)

        var answerKey = 1;
        compareClick(answerKey);
        counter++;
        countdown = 30;


    });

    $("#choice3").click(function(){
        
        if (counter==10){
            clearInterval(x);
            showScore();
            $("#start").text("Start over?");
            $("#start").show();
        }
        
        showAnswer();
        setTimeout(function(){
            hideAnswer();
            assignQuestions(); 
        },2000)

        var answerKey = 2;
        compareClick(answerKey);
        counter++;
        countdown = 30;
    });

    $("#choice4").click(function(){
        
        if (counter==10){
            clearInterval(x);
            showScore();
            $("#start").text("Start over?");
            $("#start").show();
        }

        showAnswer();
        setTimeout(function(){
            hideAnswer();
            assignQuestions(); 
        },2000)
        var answerKey = 3;
        compareClick(answerKey);
        counter++;
        countdown = 30;
    });
    
});

function timerStart(){
    x = setInterval(function(){

        if (counter==10){
            clearInterval(x);
            showScore();
            $("#start").text("Start over?");
            $("#start").show();

        }

        $("#timer").html("Time Remaining: " + countdown + " Seconds");
        countdown--;
        if (countdown < 0) {
            $("#questions").html("Time is up!");
            showAnswer();
            setTimeout(function(){
                hideAnswer();
                assignQuestions(); 
            },2000)
            countdown = 30;
            counter++;
            unansweredScores++;
        };
    }, 1000);
}


function compareClick(answerKey){
    if (answerKey == answers[counter]){
        $("#questions").html("Correct!");
        correctScores++;
        $("#correctAnswer").html("");

    } else {
        $("#questions").html("Nope!");
        incorrectScores++;

    }
}

function showAnswer(){
    $("#choice1").hide();
    $("#choice2").hide();
    $("#choice3").hide();
    $("#choice4").hide();
    $("#correctAnswer").html("Correct answer is " + String.fromCharCode(answers[counter]+65));
    $("#correctAnswerImg").html("<img src='assets/images/"+ imagePath[counter]  +"' width='260' height='193'>");
    $("#correctAnswer").show();
    $("#correctAnswerImg").show();
};

function hideAnswer(){
    $("#choice1").show();
    $("#choice2").show();
    $("#choice3").show();
    $("#choice4").show();
    $("#correctAnswer").hide();
    $("#correctAnswerImg").hide();
};

function assignQuestions(){
    hideAnswer();
    $("#questions").html(questions[counter]);
    $("#choice1").html(choice1[counter]);
    $("#choice2").html(choice2[counter]);
    $("#choice3").html(choice3[counter]);
    $("#choice4").html(choice4[counter]);
}

function showScore(){
    $("#questions").text("All done here is how you did!");
    $("#choice1").text("Correct Scores:   " + correctScores);
    $("#choice2").text("Incorrect Scores:   " + incorrectScores);
    $("#choice3").text("Unanswered Scores:   " + unansweredScores);
    $("#choice4").text("");
}