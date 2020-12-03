window.onload = function () {
    document.getElementById("submit2").onclick = support;
};

// Checks if everything is entered
function support() {
    var a = document.getElementById("name2").value;
    var b = document.getElementById("email2").value;
    var c = document.getElementById("message2").value;
    if (a == "" || b == "", c == ""){
        alert("Please enter all required elements!");
    } else {
        alert("Thank you " + a + " for sending your message, we will respond to your question or concern by email.");
    }
}