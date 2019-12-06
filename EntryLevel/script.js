start = false

i = 60

botton_text = ["Start", "Pause"];

document.getElementById("startbutton").onclick = function (){
  start = !start
  document.getElementById("startbutton").value = botton_text[+start]
}

function timer() {
  if (start) {
    document.getElementById("p1").innerHTML=i;
    if (i == 0) {
    	start = !start;
    }
    else i = i - 1;
  }
  else {
    if (i == 0) {
    	document.getElementById("p1").innerHTML="End";
    	document.getElementById("startbutton").hidden = true;
        setInterval(() => location.reload(), 3000);
    }
  }
}

setInterval(() => timer(), 1000)
