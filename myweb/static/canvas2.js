let canvas = document.querySelector("#canvas");
let c = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

function randomColor(){
    z = "rgba(" + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) 
    + ", " + Math.round(Math.random() * 255) + ", " + Math.random() + ")";
    return z
}

let mouse = {x:undefined, y:undefined}
window.addEventListener("mousemove", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse.x + ":" + mouse.y);
})

window.addEventListener("resize", function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    init();
})


function Circle(x,y,dx,dy,radius,color) {

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = randomColor();

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,360);
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function(){
        if(this.x >= (canvas.width - this.radius) | this.x <= this.radius ){
            this.dx = -this.dx;
        }
        if(this.y >= (canvas.height - this.radius) | this.y <= this.radius){
            this.dy = -this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;

// interactivity
        let radiusMax2 = 100;
        let threshold = 50;
        let increment = 2;
        if ((Math.abs(mouse.x - this.x) < threshold) && (Math.abs(mouse.y - this.y) < threshold) && (this.radius < radiusMax2)){
            this.radius += (increment*3);
        } else if(this.radius > this.minRadius) {
            this.radius -= (increment/2);
        }
        this.draw();
    }
    }
// let circle1 = new Circle(200, 200, 5, 5, 25);
 

let circleArray = []; 
let num_circles = 2000;    
let radiusMax1 = 20;    
let max_movement = 5;  


function init(){ // so resizing doesn't look disjointed
    circleArray = [];
 

    for (i=0;i<num_circles;i++){    
        let random_radius = Math.round(Math.random() * radiusMax1) + 1; 
        let randomx = Math.floor(Math.random() * (canvas.width - (2*random_radius))) + random_radius;   
        let randomy = Math.floor(Math.random() * (canvas.height -(2*random_radius))) + random_radius;   
        random_dx = Math.round(Math.random() * max_movement) - (max_movement/2);    
        random_dy = Math.round(Math.random() * max_movement) - (max_movement/2);    
        c.fillStyle = randomColor();    
        circleArray[i] = new Circle(randomx, randomy, random_dx, random_dy, random_radius); 
}
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);

    for (i=0; i < num_circles; i++){
        circleArray[i].update();
    }
}
init();
animate();

