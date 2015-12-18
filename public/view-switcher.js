(function() {
  $(".get").on("click", function() {
    $(".get-help").css("display", "block");
    $(".give-help").css("display", "none");
    $(".get").addClass("active");
    $(".give").removeClass("active");
  });
  $(".give").on("click", function() {
    $(".get-help").css("display", "none");
    $(".give-help").css("display", "block");
    $(".give").addClass("active");
    $(".get").removeClass("active");
  });
})();
