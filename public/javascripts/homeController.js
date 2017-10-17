(function() {
	var app = angular.module('tapp', []);

	app.controller('HomeController', function() {

	});

	var g = [
  "你好",
  "Hola",
  "Hi",
  "مرحبا",
  "नमस्ते",
  "Oi",
  "Olá",
  "হ্যালো",
  "Привет",
  "今日は",
  "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ",
  "Halo",
  "안녕하세요",
  "侬好",
  "Hallo",
  "Guten Tag",
  "grüß Gott",
  "Grüezi",
  "Bonjour",
  "నమస్కారం",
  "नमस्कार",
  "Merhaba",
  "سلام",
  "chào bạn",
  "வணக்கம்",
  "Ciao",
  "درود",
  "Selamat pagi",
  "สวัสดี",
  "食飽未",
  "Cześć",
  "નમસ્તે",
  "Агов",
  "നമസ്തെ",
  "akkam",
  "ታዲያስ።",
  "Salut",
  "प्रणाम",
  "Musta",
  "Pranam",
  "Ẹ n lẹ",
  "Здраво",
  "你好",
  "Hola",
  "Hello",
  "مرحبا",
  "नमस्ते",
  "Oi",
  "Olá",
  "হ্যালো",
  "Привет",
  "今日は",
  "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ",
  "Halo",
  "안녕하세요",
  "侬好",
  "Hallo",
  "Guten Tag",
  "grüß Gott",
  "Grüezi",
  "Bonjour",
  "నమస్కారం",
  "नमस्कार",
  "Merhaba",
  "سلام",
  "chào bạn",
  "வணக்கம்",
  "Ciao",
  "درود",
  "Selamat pagi",
  "สวัสดี",
  "食飽未",
  "Cześć",
  "નમસ્તે",
  "Агов",
  "നമസ്തെ",
  "akkam",
  "ታዲያስ።",
  "Salut",
  "प्रणाम",
  "Musta",
  "Pranam",
  "Ẹ n lẹ",
  "Здраво"
];

//document.getElementById('bg-text').append(g1.join(' '));

var viewportH;
var viewportW;

//https://stackoverflow.com/a/12598394/8605534
if (document.compatMode === "BackCompat") {
  viewportH = document.body.clientHeight;
  viewportW = document.body.clientWidth;
} else {
  viewportH = document.documentElement.clientHeight;
  viewportW = document.documentElement.clientWidth;
}

var fontSize = getRandomFloat(0.8, 1.8); //em
var greeting = g[getRandomInt(0, g.length)];

var ul = document.getElementById("bg-text");
var newLi = document.createElement("li");
ul.appendChild(newLi);
newLi.innerHTML = greeting;

while (ul.offsetHeight < viewportH) {
  fontSize = getRandomFloat(0.4, 1.8); //em
  greeting = g[getRandomInt(0, g.length-1)];
  var rn = getRandomInt(0, 235); //255 = fff
  var gColor = "rgb(" + rn + "," + rn + "," + rn + ")";

  newLi = document.createElement("li");
  ul.appendChild(newLi);
  newLi.innerHTML = greeting;
  newLi.style.color = gColor;
  newLi.style.fontSize = fontSize + "em";
}

var lis = ul.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
  var speed = getRandomInt(1, 5);
  var direction;
  lis[i].style.textIndent += getRandomInt(0, viewportW) +'px';
  lis[i].setAttribute('data-duration',(3500 * speed)+'');
  //(lis[i].classList) ? lis[i].classList.add('mq') : lis[i].className += ' mq';
  lis[i].className = 'mq';
}
$(function(){
  $("<br/>").insertAfter("li");
});

// https://github.com/aamirafridi/jQuery.Marquee
$('.mq').marquee();

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
})();