var myName = "Google";

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var yellow = [58, 84, 58];
var letterColors = [blue, red, yellow, blue, green, red];

drawName(myName, letterColors);

bubbleShape = "circle";

bounceBubbles();

//--------------------- JQuery
// $('.a').css(
//   "display", "none"
// )
$('.a').hide();
$('.part').click(function(){
  $(this).children(".a").toggle(500, function(){
    //console.log("What?")
    //css("display", "block");
  });
})
