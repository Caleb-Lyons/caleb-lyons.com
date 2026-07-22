let hoverbox = document.querySelector('.hoverbox');
let cube = document.querySelector('.cube');
let cubeSide = document.querySelectorAll('.side');

let rotationForce = 0.04;
let scrollForce = 0.1; 

let mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};

let rotation = {
    x: 0,
    y: 0
};

function updateCubeRotation() {

    let rect = cube.getBoundingClientRect();
    let cubeCenterX = rect.left + (rect.width / 2);
    let cubeCenterY = rect.top + (rect.height / 2);

    let viewportCenterY = window.innerHeight / 2;

    let baseRotationX = (mouse.y - cubeCenterY) / (window.innerHeight * rotationForce * -1);
    

    let scrollRotationX = (viewportCenterY - cubeCenterY) * scrollForce;
    
    rotation.x = baseRotationX + scrollRotationX;

    rotation.y = (mouse.x - cubeCenterX) / (window.innerWidth * rotationForce);

    cube.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
}

window.addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    updateCubeRotation();
});

window.addEventListener('scroll', function () {
    updateCubeRotation();
});

updateCubeRotation();