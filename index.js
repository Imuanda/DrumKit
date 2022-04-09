
//Detect the click anmd make a sound.
for(var i = 0; i < document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}

//Detect button press then make a sound...
// We add this event listener to the entire keyboard. One property of the keyboardEvent()
//listener is "key", which return the value or the letter typed on the keyboard.
//If we pass a parameter in the function that gets called after the event is triggered
//we can access all the properties of the event that gets triggered.

//We can get the value of the key that was pressed by using the (.)notation to get the property
//That returns that value. in Ex: parameter.key

//Here when the event is triggered, it calls the anonymous function.
//The anonymous function has a parameter, that will help access the properties of the event
//Inside the anonymous function there is a function that gets called, and that function takes one parameter
//event.key, event has access to properties of the event and one of the properties is .key, which return the
//value of the key pressed on the keyboard. So basically we pass on the value, or the letter pressed
//as a parameter inside the the function called. Then the function perform its task, which in this case
//it is to return the sound associated with the key that is pressed if it is available in the function
document.addEventListener("keydown", function(event){
  makeSound(event.key)
  keyAnimation(event.key);
});


function handleClick(){

  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
  keyAnimation(buttonInnerHtml);

}

function makeSound(key){

  switch (key) {
      case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();

      break;
      case "a":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();

        break;
      case "s":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();

        break;
      case "d":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();

          break;
      case "j":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();

          break;
      case "k":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();

          break;
      case "l":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();

          break;

    default: console.log(key);

  }
}

//Creat a function that animate when a key is pressed
function keyAnimation(current){
  //Create a var that will return the button that is being pressed
  var activatedButton = document.querySelector("."+current); // This allow to find the class of the key being pressed

  //Now add a class that animate a key to the key that was pressed
  activatedButton.classList.add("pressed");

  //Create a time out to remove the animation after key is pressed
  setTimeout(function () {
    activatedButton.classList.remove("pressed");

  }, 100);

}
//Get identity and change the color
//this.style.color = "white";

// var sound = new Audio("sounds/tom-1.mp3");
// sound.play();
