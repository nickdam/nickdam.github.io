function mudar(){
var i;
  for (i=1;i<11;i++){
    alert ((document.getElementById("result").innerHTML = "mudou!") + " Número da vez: " + i);
  }
}
var singal;
function ligar1 (){

  document.getElementById("luz1off"). src = 'lon.png';
  signal = 1000;
  sendToServer(signal);
}
function desligar1() {

  document.getElementById("luz1off"). src = 'loff.png';
  signal = 0;
  sendToServer(signal);
}
function ligar2 (){
  document.getElementById("luz2off"). src = 'lon.png';
}
function desligar2() {
  document.getElementById("luz2off"). src = 'loff.png';
}function ligar3 (){
  document.getElementById("luz3off"). src = 'lon.png';
}
function desligar3() {
  document.getElementById("luz3off"). src = 'loff.png';
}function ligar4 (){
  document.getElementById("luz4off"). src = 'lon.png';
}
function desligar4() {
  document.getElementById("luz4off"). src = 'loff.png';
}function ligar5 (){
  document.getElementById("luz5off"). src = 'lon.png';
}
function desligar5() {
  document.getElementById("luz5off"). src = 'loff.png';
}function ligar6 (){
  document.getElementById("luz6off"). src = 'lon.png';
}
function desligar6() {
  document.getElementById("luz6off"). src = 'loff.png';
}

function sendToServer(state) {
 var KEY = "2TTIUAQVMSBGGCUH";
 //criar um objeto capaz de enviar dados via requisição HTTP GET
 const http = new XMLHttpRequest();
 //prepara um GET passando a váriavel lux como ultimo paramentro do link
 http.open("GET", "https://api.thingspeak.com/update?api_key="+KEY+"&field1=0" + state);
 //envia um GET
 http.send();
 //quando a requisição retornar ele chama o console e imprime o valor gerado
 http.onload = console.log(http.responseText+" "+state);
 }
