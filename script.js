function book() {
    
    var num = document.getElementById("num").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    
    var isCorrect = check(date, time);
    
    if (isCorrect) {
    
    var output = "Thank you, "+name+"!<br> You reserved a table for "+num+" on "+date+" at "+time+".<br> Confirmation sent to "+email+". <br> If any changes occur we will contact you on "+phone;
    }
    
    else {
        output = "Sorry, we cannot make a reservation for this date and time ("+date+", "+time+").<br> Please, check our working hours. Last possible reservation is an hour before closing.";
    }
        
    document.getElementById("output").innerHTML=output;
}



function check(date, time) {
    
    var dateIsOk;
    var timeIsOk;
    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth(); 
    var yyyy = today.getFullYear();
    
    var currentDate= new Date(yyyy, mm, dd);
    var date = new Date(date);
    
    if (currentDate<= date) {
       dateIsOk = true;
    } else {
       dateIsOk = false;
    }
    
    var dayOfWeek = date.getDay(); // monday is 0!
    
    if ((dayOfWeek>=0 && dayOfWeek <=3)
       && ("09:00"<=time && time<="21:00")) {
        timeIsOk = true;
    } else if ((dayOfWeek>=4 && dayOfWeek <=6)
       && ("10:00"<=time && time<="22:00")) {
        timeIsOk = true;
    } else {
        timeIsOk = false;
    }
    
    if (dateIsOk && timeIsOk) {
        return true;
    } else {
        return false;
    }
    
}


// map
function initMap(){
    var uluru = {
        lat: 60.2006918, lng: 24.9343016
    };
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 16, center: uluru });
    
    var marker = new google.maps.Marker({
        position: uluru, map: map
    });
}



// jQuery
// show the message and hide the booking form
$(document).ready(function(){
    $("#reserve").click(function(e){
        e.preventDefault();
        $("#reservation").hide();
        $("#output").show();
        $("#reserve-new").show();
    });
});

//
$(document).ready(function(){
    $("#reserve-new").click(function(){
        $("#reservation").show();
        $("#reserve-new").hide();
        $("#output").empty();
        $("#reservation")[0].reset();
    });
});

// slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// scroll

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if ( screen.width <601 && (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)) {
        document.getElementById("btn-scroll").style.display = "block";
    }
    else {
        document.getElementById("btn-scroll").style.display = "none";
    }
}