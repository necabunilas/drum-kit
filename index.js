var drums = document.querySelectorAll(".drum");

function playSound(key){
  if(key === "w"){
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
  }else if(key === "a"){
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
  }else if(key === "s"){
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
  }else if(key === "d"){
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
  }else if(key === "j"){
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
  }else if(key === "k"){
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
  }else if(key === "l"){
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
  }
}

function clickHandler(){

  var btn = this.innerHTML;

  playSound(btn);
  buttonAnimation(e);

}


function pressHandler(e){
  playSound(e);
  buttonAnimation(e);
}

for(var i=0; i < drums.length; i++){
  drums[i].addEventListener("click", clickHandler);
}

document.addEventListener("keypress", function(event){
    pressHandler(event.key);
});

function buttonAnimation(key){
  var activeKey = document.querySelector("." + key);
  activeKey.classList.add("pressed");

  setTimeout(function(){
    activeKey.classList.remove("pressed");
  }, 100);
}
