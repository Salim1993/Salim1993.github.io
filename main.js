function main() {
  $(".desc").hide();
  $(".info").hide();
  $(".info").fadeIn(1000);

  $(".home-button").on("click", function() {
    $(".text").children().hide();
    $(".AboutText").fadeIn();
  });

  $(".games-button").on("click", function() {
    $(".text").children().hide();
    $(".GameText").fadeIn();
  });

  $(".project-button").on("click", function() {
    $(".text").children().hide();
    $(".ProjectText").fadeIn();
  });
}

$(document).ready(main);