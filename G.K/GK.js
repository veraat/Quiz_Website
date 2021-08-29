var allnames = [];
var correct = 0;
var wrong = 0;
var miss = 0;

const quiz = [
    {
        id: 1,
        Q: " __________ is known as the City of Lakes in India?",
        options: ["Indore" , "Bhopal" , "Jaipur" , "Surat"],
        answer:"Bhopal"
    },
    {
        id: 2,
        Q: "Bhakra-Nangal dam is is located in ______?",
        options: ["Himachal Pradesh" , "Madhya Pradesh" , "Uttarakhand" , "Punjab"],
        answer:"Himachal Pradesh"
    },
    {
        id: 3,
        Q: "______ state has the longest coastline in India?",
        options: ["Andhra Pradesh" , "Karnataka" , "Tamil Nadu" , "Gujarat"],
        answer:"Gujarat"
    },
    {
        id: 4,
        Q: " Total number of major seaports in India?",
        options: ["12" , "13" , "10" , "9"],
        answer:"13"
    },
    {
        id: 5,
        Q: " Mahatma Gandhi started Dandi March in _______?",
        options: ["1930" , "1932" , "1935" , "1927"],
        answer:"1930"
    },
]

// console.log(quiz[18]);
questionNumber = document.getElementById("question-number");
questionText = document.getElementById("question-text");
var optionContainer = document.getElementById("option-container");

 var questionnumber = 0;
 currentQuestion = 1;
 availableQuestions = [];
 displayOption();
 var userAns = "";

 questionNumber.innerHTML="Question number is " + currentQuestion + " out of 5" 
 questionText.innerHTML="Question is " + quiz[questionnumber].Q;
 
 console.log(questionnumber)

 function next() {
     currentQuestion = currentQuestion + 1;
     questionnumber = questionnumber + 1;

     console.log(questionnumber)
     questionNumber.innerHTML="Question number is " + currentQuestion + " out of 5";

    //  questionText.innerHTML="Question is " + quiz[questionnumber].Q;
     
     
     
     if (questionnumber >= 4 ) {
         document.getElementById("next").style="display:none"
         document.getElementById("complete").style="display:inline"
        }
        if (questionnumber <= 4) {
            questionText.innerHTML="Question is " + quiz[questionnumber].Q;
            allnames = [];
        displayOption(questionnumber);
    }
}

function displayOption(questionnumber = 0) {
    console.log("start");   
    console.log(questionnumber)
    for (var i = 0 ; i <= 3 ; i++ ) {
        allnames.push("<button class='options'" + "id='option" + [i] + "'" + " onclick='input" + i + "()'>" + quiz[questionnumber].options[i] + "</button>");
        console.log(allnames);
        var remove = allnames.join(" ")
        optionContainer.innerHTML = remove;
    }
}

function complete(){
    console.log("Done");
    document.getElementById("score").classList.remove("hide");

    // if(correct !== 1 ){
    //     document.getElementById("correct").innerHTML = correct + 1;
    // }
    // else if(correct == 1 ){
    //     document.getElementById("correct").innerHTML = correct - 1;
    // }
    // if(wrong !== 1 ){
    //     document.getElementById("wrong").innerHTML = wrong + 1 ;
    // }
    // else if(wrong == 1 ){
        //     document.getElementById("wrong").innerHTML = wrong - 1 ;
        // }
        
        document.getElementById("wrong").innerHTML = wrong ;
        document.getElementById("correct").innerHTML = correct;
        
        // total = wrong + correct;
        // console.log(total)
        
        // console.log(quiz.length)
        // if ( total !== 5){
        //     miss = 0
        //     miss =  5 - total;
        //     console.log("miss " + miss)
        //     document.getElementById("miss").innerHTML = miss;
        // }
        
    
    }
    
function input0(){
    userAns = document.getElementById("option0").textContent;
    // console.log(userAns);

    check(user = userAns);
}
function input1(){
    userAns = document.getElementById("option1").textContent;
    // console.log(userAns);

    check(user = userAns);
}
function input2(){
    userAns = document.getElementById("option2").textContent;
    // console.log(userAns);

    check(user = userAns);
}
function input3(){
    userAns = document.getElementById("option3").textContent;
    // console.log(userAns);

    check(user = userAns);
}

function check(user){
     console.log("user ans is " + user);   

     if (user == quiz[questionnumber].answer) {
            console.log("correct")
            console.log(questionnumber)
            document.getElementById(questionnumber).src = "correct.png"
            next();
            correct = correct + 1;
            console.log("correct - " + correct)
            console.log("wrong - " + wrong)
        }
        
        
        else{
            console.log("wrong")
            document.getElementById(questionnumber).src = "wrong.png"
            next();
            
            wrong= wrong + 1 ;
            console.log("correct - " + correct)
        console.log("wrong - " + wrong)

     }

    }


    function nextsub(){
            window.location = ("../subject_6.html");
            
    }