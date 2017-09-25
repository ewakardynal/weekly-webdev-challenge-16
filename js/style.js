window.onscroll = function() {
   var nav = document.getElementById("nav");
   var isTop = document.body.scrollTop > 50
   nav.className = isTop ? "sticky" : "";
}

var $about = $("#about").offset().top
$(".scroll-down").on("click", function() {
   $("body, html").animate({
      scrollTop: $about
   },1000)
})
