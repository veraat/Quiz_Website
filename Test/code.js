quiz = [
    {
        id: 1,
        Q: "Which month comes right before june ?",
        options: ["may" , "september" , "july" , "august"],
        answer:0
    },
    {
        id: 2,
        Q: "The class mark of the class 90-130 is:",
        options: ["90" , "105" , "115" , "110"],
        answer:3
    },
    {
        id: 3,
        Q: "The range of the data: 25, 81, 20, 22, 16, 6, 17,15,12, 30, 32, 10, 91, 8, 11, 20 is",
        options: ["10" , "75" , "85" , "26"],
        answer:2
    },
    {
        id: 4,
        Q: "In a frequency distribution, the mid value of a class is 10 and the width of the class is 6. The upper limit of the class is:",
        options: ["6" , "7" , "10" , "13"],
        answer:3
    },
    {
        id: 5,
        Q: "In a distribution, the mid value of a class is 10 and the width of the class is 6. The upper limit of the class is:",
        options: ["6" , "7" , "10" , "13"],
        answer:3
    },
]

var allnames = [];

function start(){
    console.log("start");   
    var questionnumber = 3;
    for (var i = 0 ; i <= 3 ; i++ ) {
        allnames.push("<div class='options' id='option'>" + quiz[questionnumber].options[i] + "</div>");
        console.log(allnames);
        var remove = allnames.join(" ")
        document.getElementById("option-container").innerHTML = remove;
    }

    c = document.getElementById("option-container").value;
    console.log(c);
}

