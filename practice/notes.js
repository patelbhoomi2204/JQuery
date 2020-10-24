// vanilla JS
// document.getElementById("banana")

//in JQuerry


$("h1").mouseenter(function(){
  $(this).css("color","red")
  $("h2").fadeIn("slow");
});

$("h1").mouseleave(function(){
  $(this).css("color","black")
  $("h2").fadeOut("slow");
});

$(".box").mouseenter(function(){
  $(this).css("width","300px")
  $(this).css("background-color","blue")
});
$(".box").mouseleave(function(){
  $(this).css("width","100px")
  $(this).css("background-color","gray")
});
