let container = document.querySelector('.container');
let box = document.querySelector('.box');
let boxSide = document.querySelectorAll('.box_side');
let boxGlow = document.querySelector('.box_glow');

let rotationForce = 0.025;

let boxPos = {
    x: container.offsetLeft + box.offsetWidth / 2,
    y: container.offsetTop + box.offsetHeight / 2
}

let mouse = {
    x: 0,
    y: 0
}

let rotation = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    rotation.x = (mouse.y - boxPos.y) / (window.innerHeight * -1 * rotationForce);
    rotation.y = (mouse.x - boxPos.x) / (window.innerWidth * rotationForce);

    box.style.transform = 'rotateX(' + rotation.x + 'deg)' + 'rotateY(' + rotation.y + 'deg)';
    boxGlow.style.transform = 'rotateX(' + -1 * rotation.x + 'deg)' + 'rotateY(' + -1 * rotation.y + 'deg)';
})