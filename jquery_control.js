$(document).ready(function() {
  $("#img1").on( "click", function() {
    $(this).css( "width", "+=200" );
  });

  $("p").on( "mouseover", function() {
      $(this).css( "color", "red" );
  });

  $( "#truck" ).on( "mouseover", function() {
    $(this).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
    }, 5000, function() {
    }); 
  });


  $("#car").on("click", function() { 
    $(this).attr('src','img2.png'); 
  });


  $( "p" ).find(":contains('t')").css({
      "font-style": "italic",
      "font-weight": "bolder"
    });

});
