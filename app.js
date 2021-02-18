const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
let shipCard = document.querySelector('.ship-card img');
const circle = document.querySelector('.circle');
const models = document.querySelector('.models');
const descri = document.querySelector('h3');


function movingAnimation(e) {
  let xAxis = (window.innerWidth / 2 - e.pageX)/ 15;
  let yAxis = (window.innerHeight / 2 - e.pageY)/ 15;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}

function animateIn() {
  card.style.transition = 'none';
  title.style.transform = "translateZ(100px)";
  descri.style.transform = "translateZ(100px)";
  shipCard.style.transform = "translateZ(200px)";
}

function animateOut() {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateY(0) rotateX(0)`;
  title.style.transform = "translateZ(0)";
  shipCard.style.transform = "translateZ(0)";
  descri.style.transform = "translateZ(0)";
}

function updateShip(event) {
  const previousBtn = document.querySelector('button.active');
  const actualBtn = event.target;
  const actualShipImage = actualBtn.className;
  const allShips = document.querySelectorAll('img')
  allShips.forEach(ship => {
    if(!ship.classList.contains(actualShipImage)) {
      ship.style.display='none';
      ship.classList.remove('active');
      document.querySelector('.title').innerText = actualBtn.innerText;
    } else {
      shipCard = ship;
      ship.style.display='inline';
      ship.classList.add('active');}
    })
  previousBtn.classList.remove('active');
  actualBtn.classList.add('active');
}

window.onload = function() {
  const allButtons = document.querySelectorAll('button');
  allButtons.forEach(btn => btn.addEventListener('click', updateShip));
  const allShips = document.querySelectorAll('img')
  allShips.forEach(ship => {
    if(!ship.classList.contains('active')) ship.style.display='none'})
  container.addEventListener("mousemove", movingAnimation)
  container.addEventListener("mouseenter", animateIn)
  container.addEventListener("mouseleave", animateOut)
}
