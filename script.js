i = 60

function timer() {
  document.getElementById("p1").innerHTML=i;
  if (i == 0) i = 60;
  i = i - 1;
}

setInterval(() => timer(), 1000)