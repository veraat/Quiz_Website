
function start(){
    username = document.getElementById("username").value;
    console.log(username);
    localStorage.setItem("user" , username);
    window.location = "grade.html";
}