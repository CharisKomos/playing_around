var new_sound = document.createElement('audio');

new_sound.setAttribute('id', 'my_sound');
new_sound.setAttribute('src', 'directoryOfSoundFile');
document.body.appendChild(new_sound);

var reminding = prompt('Remind me in (minutes):')*60000;

function reminder(){
  var time = new Date();
  var current_time = 'The time is: ' + time.getHours() + ':' + time.getMinutes();
  document.getElementById('my_sound').play(); alert(current_time);
};

if(reminding){ setInterval(reminder, reminding) };
