window.onload = function () {
    document.getElementById("submit3").onclick = addRev;
};

function addRev() {
    // Checks if everything is entered
    var a = document.getElementById("name3").value;
    var b = document.getElementById("date").value;
    var c = document.getElementById("message3").value;
    if (a == "" || c == "", !b){
        alert("Please enter all required elements!");
    } else {
        alert("Thank you " + a + " for adding your review.");
    }
    // Adds review after user enters everything in
    document.getElementById("result").innerHTML = "<p>" + a + " recommends Marko Lukić Beauty. " + "</p>" + b + "<br>" + c + "<hr>";
}

