let openButton = document.getElementById('open');
let doorLeft = document.getElementById('door-left');
let closeButton = document.getElementById('close');
let doorOpen = true;
let rope = document.getElementById('rope');

openButton.addEventListener('click', function(){
  doorLeft.classList.add('door-left-open');
  openButton.style.color = "#00ff00";
  closeButton.style.color = "#fff";
  doorLeft.style.transitionDelay = "0s";
});

closeButton.addEventListener('click', function(){
  doorLeft.classList.remove('door-left-open');
  closeButton.style.color = "#00ff00";
  openButton.style.color = "#fff";
  doorLeft.style.transitionDelay = "0s";
});

function openDoors() {
  doorLeft.classList.add('door-left-open');
}
function closeDoors() {
  doorLeft.classList.remove('door-left-open');
}

//numbers moves the elevator
let elevatorDoors = document.getElementById('elevatorDoors');
let header = document.getElementById('header');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let oneText = document.createElement('p');
let floorText = document.getElementById('floorText');
oneText.textContent = "1";
header.appendChild(oneText);
one.addEventListener('click', function(){
    one.classList.add('highlight');
    one.classList.remove('loneBtn');
    while(header.firstChild) {
    if(header.firstChild !== 1) {
    header.removeChild(header.firstChild);
  }
  }
  let oneText = document.createElement('p');
  oneText.textContent = "1";
  header.appendChild(oneText);

  elevatorDoors.style.bottom = "-100px";
  let rect = elevatorDoors.getBoundingClientRect();
  let contains = doorLeft.classList.contains('door-left-open');
  if (contains === true) {
    closeDoors();
    doorLeft.style.transitionDelay = '0s';
    elevatorDoors.style.transitionDelay = '1s';
  } else if(contains === false){
    openDoors();
    doorLeft.style.transitionDelay = '1.5s';
    elevatorDoors.style.transitionDelay = '1s';
  }
  two.classList.remove('highlight');
  two.classList.add('numBtn2');
  three.classList.remove('highlight');
  three.classList.add('numBtn2');
  four.classList.remove('highlight');
  four.classList.add('numBtn1');
  five.classList.remove('highlight');
  five.classList.add('numBtn1');
  rope.style.height = "600px";
});

two.addEventListener('click', function(){
  //header code
  while(header.firstChild) {
    header.removeChild(header.firstChild);
  }
  let twoText = document.createElement('p');
  twoText.textContent = "2";
  header.appendChild(twoText);
  let rect = elevatorDoors.getBoundingClientRect();
  elevatorDoors.style.bottom = "50px";
  let contains = doorLeft.classList.contains('door-left-open');
  if (contains === true) {
    closeDoors();
    doorLeft.style.transitionDelay = '0s';
    elevatorDoors.style.transitionDelay = '1s';
  }
  if(rect.top === 346) {
    openDoors();
    doorLeft.style.transitionDelay = '1.5s';
    elevatorDoors.style.transitionDelay = '1s';
  }

  one.classList.remove('highlight');
  one.classList.add('loneBtn');
  two.classList.add('highlight');
  two.classList.remove('numBtn2');
  three.classList.remove('highlight');
  three.classList.add('numBtn2');
  four.classList.remove('highlight');
  four.classList.add('numBtn1');
  five.classList.remove('highlight');
  five.classList.add('numBtn1');
  rope.style.height = "500px";
});

three.addEventListener('click', function(){
  while(header.firstChild) {
    header.removeChild(header.firstChild);
  }
  let threeText = document.createElement('p');
  threeText.textContent = "3";
  header.appendChild(threeText);
  elevatorDoors.style.bottom = "150px";
  let rect = elevatorDoors.getBoundingClientRect();
  console.log(rect.top);
  let contains = doorLeft.classList.contains('door-left-open');
  console.log(contains);
  if (contains === true) {
    closeDoors();
    doorLeft.style.transitionDelay = '0s';
    elevatorDoors.style.transitionDelay = '1s';
  } else if(contains === false) {
    openDoors();
    doorLeft.style.transitionDelay = '1.5s';
    elevatorDoors.style.transitionDelay = '1s';
  }
  rope.style.height = "300px";
  one.classList.remove('highlight');
  one.classList.add('loneBtn');
  two.classList.remove('highlight');
  two.classList.add('numBtn2');
  three.classList.add('highlight');
  three.classList.remove('numBtn2');
  four.classList.remove('highlight');
  four.classList.add('numBtn1');
  five.classList.remove('highlight');
  five.classList.add('numBtn1');
});

four.addEventListener('click', function(){
  while(header.firstChild) {
    header.removeChild(header.firstChild);
  }
  let fourText = document.createElement('p');
  fourText.textContent = "4";
  header.appendChild(fourText);
  one.classList.remove('highlight');
  one.classList.add('loneBtn');
  two.classList.remove('highlight');
  two.classList.add('numBtn2');
  three.classList.remove('highlight');
  three.classList.add('numBtn2');
  four.classList.add('highlight');
  four.classList.remove('numBtn1');
  five.classList.remove('highlight');
  five.classList.add('numBtn1');
  elevatorDoors.style.bottom = "250px";
  rope.style.height = "300px";
  let contains = doorLeft.classList.contains('door-left-open');
  console.log(contains);
  if(contains === false){
    openDoors();
    doorLeft.style.transitionDelay = '1.5s';
    elevatorDoors.style.transitionDelay = '1s';
  } else if(contains === true) {
    closeDoors();
    doorLeft.style.transitionDelay = '0s';
    elevatorDoors.style.transitionDelay = '1s';
  }
});

five.addEventListener('click', function(){
  while(header.firstChild) {
    header.removeChild(header.firstChild);
  }
  let fourText = document.createElement('p');
  fourText.textContent = "5";
  header.appendChild(fourText);
  one.classList.remove('highlight');
  one.classList.add('loneBtn');
  two.classList.remove('highlight');
  two.classList.add('numBtn2');
  three.classList.remove('highlight');
  three.classList.add('numBtn2');
  four.classList.remove('highlight');
  four.classList.add('numBtn1');
  five.classList.add('highlight');
  five.classList.remove('numBtn1');
  elevatorDoors.style.bottom = "350px";
  rope.style.height = "100px";
  let contains = doorLeft.classList.contains('door-left-open');
  console.log(contains);
  if(contains === false){
    openDoors();
    doorLeft.style.transitionDelay = '1.5s';
    elevatorDoors.style.transitionDelay = '1s';
  } else if(contains === true) {
    closeDoors();
    doorLeft.style.transitionDelay = '0s';
    elevatorDoors.style.transitionDelay = '1s';
  }
});
