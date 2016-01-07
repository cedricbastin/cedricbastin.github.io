//debugger which conserves line numbers! yay
isDebug = true // toggle this to turn on / off for global controll
var debug = function(){} //do nothing
if (isDebug) debug = console.log.bind(window.console)

//create a stylesheet which can be easily accessed by javascript
var styleElem = document.createElement('style'), styleSheet;
document.head.appendChild(styleElem);
var styleSheet = styleElem.sheet;

//get reference to all available images
var images = []; //array to be filled with images paths
$.ajax({
    url : "images.html", //file generated locally as it is not possible on the server side
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.jpg|\.png|\.gif/) ) {
                images.push("images/" + val);
            }
        });
    }
});

//autoscroll the page in vertical mode
var autoscroll = true;
function pageScroll() {
  window.scrollBy(0,1);
  if (autoscroll)
    setTimeout(pageScroll, 5);
}

//add random images one after the other
var count = 0; //we might not want to go to infinity if the page stays open in the background
function addImage() {
  var index = Math.floor(Math.random() * images.length);
  var top = Math.floor(Math.random() * $(window).height());
  var right = Math.floor(Math.random() * window.innerWidth);
  //top and right will only be applied with style: position: fixed
  $("#content").append( "<img src='"+ images[index] +"' style='top:"+top+"px ; right:"+right+"px'>" );
  if (count < 1000) {
    setTimeout(addImage, 300);
    count = count+1;
  }
}

//clean rules whenever we switch layout
function cleanRules() {
  while (styleSheet.rules.length > 0)
    styleSheet.removeRule(0)
  autoscroll = false;
}

//random layout without auto-scroll
function random() {
  cleanRules();
  styleSheet.insertRule("#content { overflow: hidden; position: fixed;}", 0)
  // styleSheet.insertRule("body { height: window.innerHeight; }", 0)
  styleSheet.insertRule("img { width: 250px; }", 0); //indexes can be used to remove or overwrite
  styleSheet.insertRule("img { position: fixed; }", 0);
}

//vertical layout with autoscroll
function vertical() {
  cleanRules();
  autoscroll = true;
  styleSheet.insertRule("#content { width: 600px; left: 50% ; margin-left: -300px; position: absolute;}", 0)
  styleSheet.insertRule("body { width: 500px; }", 0);
  styleSheet.insertRule("img { width: 500px; }", 0);
  styleSheet.insertRule("img { position: float; }", 0);
  pageScroll(); //initial call
}

//allow to switch between different styles
var myStyle = 1; //initial style
var nbStyles = 2;
function switchstyle() {
  switch (myStyle) {
    case 0:
      random()
      myStyle =  (myStyle+1) % nbStyles
      break;
    case 1:
      vertical()
      myStyle =  (myStyle+1) % nbStyles
      break;
  }
}

function init() {
  switchstyle()
  addImage() //start adding images one-by-one
}
init()
