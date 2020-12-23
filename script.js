var slideIndex=1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n){
  showSlides(slideIndex += n);
}

function showSlides(n){
  var i;
  var figlist = document.querySelector("figure");
  var slides = figlist.querySelectorAll("img");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display="block";
}

var art = document.querySelectorAll("article");
var but = document.querySelectorAll("button");
//lines below, rather than done in CSS, as this way removes a "delay" where you have to click twice initially on a button to get script going
art[0].style.display="none";
art[1].style.display="none";

function artcls(x,y){
if (art[x].style.display=="none")
{
art[x].style.display="block";
art[y].style.display="none";
but[x].style.color="lightsteelblue";
but[y].style.color="#e9e9e9";
}
else
{
art[x].style.display="none";
but[x].style.color="#e9e9e9";}
}