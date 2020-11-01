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
  sendToAPI(signal);
}
function desligar1() {

  document.getElementById("luz1off"). src = 'loff.png';
  signal = 0;
  sendToAPI(signal);
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

function sendToAPI(state){

  const http = new XMLHttpRequest();
  http.open("GET", "https://api.thingspeak.com/update?api_key=Z37MSV1R5QBCQ9PP&field1=0" + state);
  http.send();
  http.onload = console.log(http.response.Text +" "+ state);
}

