let hoverbox = document.querySelector('.hoverbox');
let cube = document.querySelector('.cube');
let cubeSide = document.querySelectorAll('.side');


let rotationForce = 0.01;

let cubePos = {
    x: hoverbox.offsetLeft + cube.offsetWidth / 2,
    y: hoverbox.offsetTop + cube.offsetHeight / 2
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

    rotation.x = (mouse.y - cubePos.y) / (window.innerHeight * rotationForce * -2.5 );
    rotation.y = (mouse.x - cubePos.x) / (window.innerWidth * rotationForce* 2.5);

    cube.style.transform = 'rotateX(' + rotation.x + 'deg)' + 'rotateY(' + rotation.y + 'deg)';
})