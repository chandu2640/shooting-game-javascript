// Variables

let carPointing = 1;

//list for fired cars 
let firedCars = []


// Function for turn left buttons
document.getElementById('left').addEventListener('click', () => {
  console.log('left')
  document.getElementById("shotter").style.transform = `rotate(-${72 * carPointing}deg)`;
  if (carPointing >= 5) {
    carPointing = 1;
  } else {
    carPointing += 1;

  }
});

//turn right
document.getElementById('right').addEventListener('click', () => {
  console.log('lrighteft')
  document.getElementById("shotter").style.transform = `rotate(${72 * carPointing}deg)`;
  if (carPointing >= 5) {
    carPointing = 1;
  } else {
    carPointing += 1;

  }
});


//shoot car
var carList = document.getElementsByClassName('car');

document.getElementById('shoot').addEventListener('click', () => {
  let carId = carList[carPointing - 1].id
  document.getElementById(carId).style.display = "none"
  firedCars.push(carId)
});





function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      console.log(timer, 'in if the timer')
      if (timer === -1) {
        if (firedCars.includes('c1')) {
          document.getElementById("gameover").innerHTML = "The Game is Over"
          document.getElementById("gameover").style.display = "block"
        } else {
          document.getElementById("gameover").innerHTML = "You Are Winner..."
          document.getElementById("gameover").style.display = "block"

        }
        document.getElementById("timer").style.display = "none"
        return;
      }
      timer = duration;

    }
  }, 1000);
  console.log(timer, 'the timer')
}

window.onload = function () {
  var fiveMinutes = 60 * 5
  display = document.querySelector("#timer");
  startTimer(fiveMinutes, display);
};

document.getElementById('time').addEventListener('e')