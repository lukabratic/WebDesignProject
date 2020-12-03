window.onload = function () {
    document.getElementById("submit").onclick = appt;
};

// Method checks if everything is entered
function appt() {
    var a = document.getElementById("name").value;
    var b = document.getElementById("email").value;
    var c = document.getElementById("phone").value;
    var d = document.getElementById("message").value;
    if (a == "" || b == "", c == "" || d == ""){
        alert("Please enter all required elements!");
    } else {
        alert("Thank you " + a + " for sending your message, we will respond to you by email or phone with possible appointment times!");
    }
}


// Fancybox plugin
$(document).ready(function() {
    $("#single_1").fancybox({
        helpers: {
            title : {
                type : 'float'
            }
        }
    });
    $("#single_2").fancybox({
        helpers: {
            title : {
                type : 'float'
            }
        }
    });
    $("#single_3").fancybox({
        helpers: {
            title : {
                type : 'float'
            }
        }
    });
    $("#single_4").fancybox({
        helpers: {
            title : {
                type : 'float'
            }
        }
    });
    $("#single_5").fancybox({
        helpers: {
            title : {
                type : 'float'
            }
        }
    });
    $("#single_image").fancybox({
        helpers: {
            title : {
                type : 'float'
            }
        }
    });
});

// Slider plugin
$(document).ready(function() {
    $("#slider").bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 30,
        speed: 3000,
        adaptiveHeight: true,
        slideWidth: 800
    });
});




