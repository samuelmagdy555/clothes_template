let navToggler = document.querySelector('.navbar-toggler i')

$(".navbar-toggler").click(function(){
    $(".navbar-nav").toggleClass("transform-nav");
    $(".navbar-overlay").toggleClass("navbar-display");

})

$(".fas fa-bars").click(function(){
    $(".navbar-overlay").toggleClass("navbar-display")
})

$(".navbar-overlay").click(function(){
    $(".navbar-nav").removeClass("transform-nav");
    $(".navbar-overlay").removeClass("navbar-display");
    $(".navbar-collapse").removeClass("show");
});



let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




