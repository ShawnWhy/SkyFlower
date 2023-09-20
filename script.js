function randomColor1() {
  for (let i = 0; i < 30; i++) {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var j = 0; j < 6; j++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  }
  return color;
}

function createMeteor() {
  var randomHeight = Math.random() * 100 - 20;

  var meteorPath = $("<div>");
  $(meteorPath).addClass("meteorPath");

  $(meteorPath).css("top", randomHeight + "%");

  var red = Math.floor(Math.random() * 250 + 100);
  var green = Math.floor(Math.random() * 100 + 60);
  var blue = Math.floor(Math.random() * 50 + 20);

  var meteorColor = randomColor1;

  var meteor = $("<div>");
  $(meteor).addClass("meteor");
  $(meteor).addClass("meteorGo");
  $(meteor).css("background-color", meteorColor);
  $(meteor).css("left", 0);

  for (i = 0; i < 21; i++) {
    let redRand = Math.floor(Math.random() * 100 - 40);
    let greenRand = Math.floor(Math.random() * 100 - 40);
    let blueRand = Math.floor(Math.random() * 100 - 40);
    let pedalColor =
      "rgb(" +
      (red + redRand) +
      "," +
      (green + greenRand) +
      "," +
      (blue + blueRand) +
      ")";

    let petal = $("<div>");
    $(petal).addClass("petalclosed");
    $(petal).css("background-color", pedalColor);
    $(petal).css("transform", "rotate(" + 20 * i + "deg)");
    $(meteor).append(petal);
  }

  $(meteorPath).append(meteor);
  $("body").append(meteorPath);
}

setInterval(() => {
  createMeteor();
}, 3000);

setInterval(() => {
  var meteors = $(".meteorGo");
  // console.log(meteors)

  meteors.each(function (index, value) {
    let left = $(value).css("left");
    // console.log(left)
    left = left.split("px");
    left = left[0];

    if (left > 1500) {
      $(value).parent().remove();
    }
    // console.log(left)

    $(value).css("left", parseInt(left) + 5);
  });
}, 50);

$(document).on("click", ".meteorGo", (event) => {
  event.preventDefault();
  event.stopPropagation();
  console.log("clickmeteor");

  if ($(event.target).hasClass("meteor")) {
    $(event.target).removeClass("meteorGo");
    $(event.target).css("overflow", "visible");
    var petals = $(event.target).find(".petalclosed");
    //petals
    petals.each(function (index, value) {
      var transform = $(value).css("transform");
      transform = transform + "translateX(80%)";
      // console.log(left)
      $(meteor).css("overflow", "visible");

      setTimeout(() => {
        $(value).css("transform", transform);
      }, 20 * index);
    });
    setTimeout(() => {
      $(event.target).addClass("meteorStop");
    }, 500);
  } else {
    var meteor = $(event.target).parent();
     $(meteor).removeClass("meteorGo");

    var petals = $(meteor).find(".petalclosed");
    //petals
    petals.each(function (index, value) {
      var transform = $(value).css("transform");
      transform = transform + "translateX(80%)";
      // console.log(left)
      $(meteor).css("overflow", "visible");

      setTimeout(() => {
        $(value).css("transform", transform);
      }, 20 * index);
    });

    $(meteor).removeClass("meteorGo");
    setTimeout(() => {
      $(meteor).addClass("meteorStop");
    }, 500);
  }
});
