function LengthConverter(valNum) {
  document.getElementById("outputcm").innerHTML=valNum/0.01;
  document.getElementById("outputinch").innerHTML = valNum*39.370;
  document.getElementById("outputfeet").innerHTML=valNum*3.2808;
  document.getElementById("outputmiles").innerHTML = valNum*0.00062137
  document.getElementById("outputkilom").innerHTML = valNum/1000

}