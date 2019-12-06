document.getElementById("left_block").onclick = function () {
  document.getElementById("wrapper").remove();
  let div = document.createElement('div');
  div.innerHTML = "<img src='https://www.tricouri-misto.ro/images/thumbnails/600/600/detailed/41/rebel_alliance_logo.png' alt='Jedi Logo'> <p id='p1'></p> <input value='Start' type='button' id = 'startbutton'>"
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'EntryLevel/script.js';
  document.body.append(div);
  document.body.appendChild(script); 
}

document.getElementById("right_block").onclick = function () {
  document.getElementById("wrapper").remove();
  let div = document.createElement('div');
  div.innerHTML = "<img src='https://www.tricouri-misto.ro/images/thumbnails/600/600/detailed/41/rebel_alliance_logo.png' alt='Alliance Logo'> <p id='p1'></p> <input value='Start' type='button' id = 'startbutton'>"
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'AdvancedLevel/script.js';
  document.body.append(div);
  document.body.appendChild(script); 
}
