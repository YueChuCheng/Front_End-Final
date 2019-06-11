import $ from "jquery";
$(".humberger").click(function(e) {
    $(".line1").css("transform", "45deg");
    $(".line2").css("display", "none");
    $(".line3").css("transform", "-45deg");
  });