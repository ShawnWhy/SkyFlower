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
  var randomHeight = Math.random() * 60 + 20;

  var meteorPath = $("<div>");
  $(meteorPath).addClass("meteorPath");
  
  $(meteorPath).css("top", randomHeight + "%");

  var red = Math.floor(Math.random() * 250 + 100);
  var green = Math.floor(Math.random() * 100 + 60);
  var blue = Math.floor(Math.random() * 50 + 20);

  var meteorColor = randomColor1;

  var meteor = $("<div>");
  $(meteor).addClass("meteor");
  $(meteor).addClass("meteorGo")
  $(meteor).css("background-color", meteorColor);
  $(meteor).css("left",0)

  for (i = 0; i < 11; i++) {
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
    createMeteor()
}, 1000);

setInterval(() => {
var meteors = $(".meteorGo")
console.log(meteors)

meteors.each(function(index, value){
    let left = $(value).css("left");
    console.log(left)
    left = left.split("px")
    left = left[0];
    console.log(left)

    $(value).css("left", parseInt(left)+5)
})

}, 50);