var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var palabras = [ 'lista', 'matias', 'voy a pasar lista', 'tarea', 'entregar', 'lime','aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral'];
var grammar = '#JSGF V1.0; grammar palabras; public <palabra> = ' + palabras.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

var colorHTML= '';
hints.innerHTML = 'pulsa el boton y el programa reconozera las siguientes palabras: ' + colorHTML + '.';

function mybtn() {
  recognition.start();
  console.log('escuchando');
}

recognition.onresult = function(event) {
  var palabra = event.results[0][0].transcript;//this is theline that i need chan
  diagnostic.textContent = 'dijiste: ' + palabra + '.';
  bg.style.backgroundColor = palabra;
  console.log(palabra);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  document.write = "nontendi :)";
}

recognition.onerror = function(event) {
  console.log = 'Error occurred in recognition: ' + event.error;
}
