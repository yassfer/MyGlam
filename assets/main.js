
$.getJSON('https://cors.io/?http://api.myglamapp.pl/api/categories?language=EN&fbclid=IwAR0dPmCFoKrnBhsA5MUExn6oEm8Gxf1vPLQ4WUCzYNSWWRHruPZ4mK9shB8', function(file) {
  console.log(file.data)
  
var
a= "";
var i;

for (i = 0; i < file.data.length; i++) {
if (i==0) {
a+=
"<div class='carousel-item col-md-4 active'>"+
"<div class='card'>"+
"<img class='card-img-top img-fluid' src='http://"+file.data[i].imagePath+"'alt='Card image cap'>"+
"<div class='card-body'>"+
  "<h4 class='card-title'>"+ file.data[i].label + "</h4>"+
  "<p class='card-text'>"+ file.data[i].description +"</p>"+
  "<p class='card-text'><small class='text-muted'>Last updated 3 mins ago</small></p>"+
"</div>"+
"</div>"+
"</div>";
}
else{
a+=
"<div class='carousel-item col-md-4'>"+
"<div class='card'>"+
"<img class='card-img-top img-fluid' src='http://"+file.data[i].imagePath+"'alt='Card image cap'>"+
"<div class='card-body'>"+
  "<h4 class='card-title'>"+ file.data[i].label + "</h4>"+
  "<p class='card-text'>"+ file.data[i].description +"</p>"+
  "<p class='card-text'><small class='text-muted'>Last updated 3 mins ago</small></p>"+
"</div>"+
"</div>"+
"</div>";
}
document.getElementById("demo").innerHTML= a;
}


});

 
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  $(function() {
    $('.tooltip-carousel').popover();

    $('#carousel-example-generic').on('slide.bs.carousel', function() {
      $('.tooltip-carousel').popover('hide');
      $(this).find('.caraousel-tooltip-item.active').fadeOut(function() {
        $(this).removeClass('active');
      });
    });

    $('#carousel-example-generic').on('slid.bs.carousel', function() {
      var index = $(this).find('.carousel-inner > .item.active').index();
      $(this).find('.caraousel-tooltip-item').eq(index).fadeIn(function() {
        $(this).addClass('active');
      });
    });

    $('.tooltip-carousel').mouseenter(function() {
      $(this).popover('show');
    }).mouseleave(function() {
      $(this).popover('hide');
    });
  });