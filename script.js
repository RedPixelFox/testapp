start = false

i = 60

botton_text = ["Start", "Stop"]

document.getElementById("startbutton").onclick = function (){
  start = !start
  document.getElementById("startbutton").value = botton_text[+start]
}

function timer() {
  if (start) {
    document.getElementById("p1").innerHTML=i;
    if (i == 0) i = 60;
    i = i - 1;
    console.log(i)
  }
  else {
    i = 60
    document.getElementById("p1").innerHTML="";
  }
}

setInterval(() => timer(), 1000)
