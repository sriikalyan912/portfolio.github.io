const cover = document.querySelector('.cover');
const card = document.querySelector('.card');

const name_ = document.querySelector('.name');
const profession = document.querySelector('.profession');

cover.addEventListener('mouseover', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;


})

cover.addEventListener("mouseenter", (e) => {
    card.style.transition = "all 0.5s ease";

    name_.style.transform = "translateZ(100px)";
    profession.style.transform = "translateZ(75px)";

});
  //Animate Out
cover.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    name_.style.transform = "translateZ(0px)";
    profession.style.transform = "translateZ(0px)";
});
  