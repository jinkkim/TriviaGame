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

var choice0 = [
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

var choice1 = [
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

var choice2 = [
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

var choice3 = [
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

var answers = [2, 3, 3, 2, 1, 2, 0, 2, 3, 2];
//var answers = ["C", "D", "D", "C", "B", "C", "A", "C", "D", "C"];

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

var correctScores = 0;
var incorrectScores = 0;
var unansweredScores = 0;
var countdown = 0;
var counter = 0;

$(document).ready(function(){
    $("#mainScreen").hide();

    $("#start").click(function(){
        $("#mainScreen").show();
        $("#start").hide();

        //initialization or reset
        correctScores = 0;
        incorrectScores = 0;
        unansweredScores = 0;
        countdown = 30;
        counter = 0;

        QnAassign();
        timerStart();    
    });


    // when click choice,
    $("#choice0").click(function(){
        if (counter ==10) {
            clearInterval(x);
            $("#timer").hide();
            setTimeout(function(){
                showScores();
            }, 4001);
        }
        // move to next qeustions
        showAnswers(); 
        setTimeout(function(){
            hideAnswers();
            QnAassign();
        }, 4000);
        countdown = 33;
        
        // check the answer is correct or not
        var clickedKey = 0;
        compareAnswers(clickedKey);

        counter ++;
        
    })


    $("#choice1").click(function(){
        if (counter ==10) {
            clearInterval(x);
            $("#timer").hide();
            setTimeout(function(){
                showScores();
            }, 4001);
        }

         // move to next qeustions
        showAnswers(); 
        setTimeout(function(){
            hideAnswers();
            QnAassign();
        }, 4000);
        countdown = 33;
 
        // check the answer is correct or not
        var clickedKey = 1;
        compareAnswers(clickedKey);

        counter ++;
        
    })


    $("#choice2").click(function(){
        if (counter ==10) {
            clearInterval(x);
            $("#timer").hide();
            setTimeout(function(){
                showScores();
            }, 4001);
        }

        // move to next qeustions
        showAnswers(); 
        setTimeout(function(){
            hideAnswers();
            QnAassign();
        }, 4000);
        countdown = 33;
        
        // check the answer is correct or not
        var clickedKey = 2;
        compareAnswers(clickedKey);

        counter ++; 
        
    })


    $("#choice3").click(function(){
        if (counter ==10) {
            clearInterval(x);
            $("#timer").hide();
            setTimeout(function(){
                showScores();
            }, 4001);
        }
        
        // move to next qeustions
        showAnswers(); 
        setTimeout(function(){
            hideAnswers();
            QnAassign();
        }, 4000);
        countdown = 33;
  
        // check the answer is correct or not
        var clickedKey = 3;
        compareAnswers(clickedKey);

        counter ++;
    })


    //highlight effects by mouse pointer
    $("#choice0").mouseover(function(){
        $(this).addClass('hover');
    })

    $("#choice0").mouseout(function(){
        $(this).removeClass('hover');
    })



    $("#choice1").mouseover(function(){
        $(this).addClass('hover');
    })

    $("#choice1").mouseout(function(){
        $(this).removeClass('hover');
    })


    $("#choice2").mouseover(function(){
        $(this).addClass('hover');
    })

    $("#choice2").mouseout(function(){
        $(this).removeClass('hover');
    })


    $("#choice3").mouseover(function(){
        $(this).addClass('hover');
    })

    $("#choice3").mouseout(function(){
        $(this).removeClass('hover');
    })

})

function timerStart(){
    x = setInterval(function(){
        
        if (counter ==10) {
            clearInterval(x);
            $("#timer").hide();
            setTimeout(function(){
                showScores();
            }, 4001);
        }

        $("#timer").text("Time Remaining: " +  countdown + " Seconds");
    
        if (countdown == 0) {

            showAnswers(); 
            setTimeout(function(){
                hideAnswers();
                QnAassign();
            }, 2000);
            countdown = 31;
            unansweredScores ++;
            counter ++; 
            console.log("correctScores: "+ correctScores)
            console.log("incorrectScores: "+ incorrectScores)
            console.log("unanswered: "+ unansweredScores)            
        }
        countdown --;
    }, 1000);
}
//showing correct answers
function showAnswers(){
    $("#choice0").hide();
    $("#choice1").hide();
    $("#choice2").hide();
    $("#choice3").hide();
    var temp_string = "choice"+ answers[counter] + "[" + counter + "]"; 
    var temp_answer = eval(temp_string);
    $("#correctAnswer").html("Correct answer is " + temp_answer);
    $("#correctAnswerImg").html("<img src='assets/images/"+ imagePath[counter]  +"' width='260' height='193'>");
    $("#correctAnswer").show();
    $("#correctAnswerImg").show();
    $("#timer").hide();
}

//hiding correct answers
function hideAnswers(){
    $("#choice0").show();
    $("#choice1").show();
    $("#choice2").show();
    $("#choice3").show();
    $("#correctAnswer").hide();
    $("#correctAnswerImg").hide();
    $("#timer").show();
}

// assign question and choices
function QnAassign(){
    $("#questions").html(questions[counter]);
    $("#choice0").html(choice0 [counter]);
    $("#choice1").html(choice1 [counter]);
    $("#choice2").html(choice2 [counter]);
    $("#choice3").html(choice3 [counter]);
}

function showScores() {
    $("#start").text("start over");
    $("#start").show();
    $("#questions").text("All done! Here is your scores.");
    $("#choice0").text("Correct Score:" + correctScores);
    $("#choice1").text("Incorrect Scores:" + incorrectScores);
    $("#choice2").text("Unanswered: " + unansweredScores);
    $("#choice3").text("Answered: " + (10-unansweredScores));
}

function compareAnswers(clickedKey){
    if (clickedKey == answers[counter]){
        $("#questions").text("Correct!");
        correctScores++;
        $("#correctAnswer").html("");
        console.log("correctScores: "+ correctScores)
        console.log("incorrectScores: "+ incorrectScores)
        console.log("unanswered: "+ unansweredScores)
    } else {
        incorrectScores++;
        $("#questions").text("Nope!");
        console.log("correctScores: "+ correctScores)
        console.log("incorrectScores: "+ incorrectScores)
        console.log("unanswered: "+ unansweredScores)
    }

}