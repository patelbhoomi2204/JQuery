$(".btn").click(function(){
  $(".content p").fadeIn("slow");
});

$(".lessons_btn1").click(function(){
  $(".lessons p").hide();
});

$(".lessons_btn2").click(function(){
  $(".lessons p").show();
});

$(".lessons_btn3").click(function(){
  $(".lessons p").toggle();
});

$(".click_for_slideup" ).click(function() {
    $( ".navbar" ).slideUp();
  });

  $(".click_for_slidedown" ).click(function() {
    $( ".navbar" ).slideDown();
  });

  $(".click_for_toggle" ).click(function() {
    $( ".navbar" ).slideToggle();
  });

  $(".try").mouseenter(function(){
    $(this).css("color","red")
    $(".fadeIn").fadeIn("slow");
  });

  $(".try").mouseleave(function(){
    $(this).css("color","black")
    $(".fadeIn").fadeOut("slow");
  });

  document.onkeydown = function(e) {
    if(e.keyCode === 40) $(".addClass p").addClass("colorchange");
  };

  document.onkeyup = function(e) {
    if(e.keyCode === 38) $(".addClass p").removeClass("colorchange");
  };

  $(".beforeButton" ).click(function() {
    $( ".before_after p" ).before("<p>Test for before</p>" );
  });

  $(".afterButton" ).click(function() {
    $( ".before_after p" ).after("<p>Test for after</p>" );
  });

  $(".appendButton" ).click(function() {
    $( ".before_after p" ).append("<p>Test for append</p>" );
  });

  $(".difference p" ).hover(function() {
    $( ".difference p" ).html("<p>Hello there!</p>");
  });

  $(".difference span" ).hover(function() {$( ".difference span" ).text("<p>Hello there!</p>");
  });

  $(".attrButton" ).click(function() {
    $(".attr-test p").html($(".attr-test").attr("data-attr-test"));
  });

  $(".val-test" ).click(function() {
    alert($(".input").val());
  });
