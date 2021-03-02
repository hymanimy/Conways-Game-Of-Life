let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d"); 
let width = canvas.width;
let height = canvas.height;
let intervalID; 
let b; 

function draw(){
    clearCanvas(); 
    b.updateGrid(); 
    b.show(); 
}

// These functions can be called by button clicks in the html file

function start(){
    let delay = 1000; 
    intervalID = setInterval(draw, delay);
}

function stop(){
    clearInterval(intervalID); 
}

function reset(chanceOfLife){
    stop(); 
    clearCanvas();
    b = new Board(10, 10, chanceOfLife); 
    b.show(); 
}

reset(0.5); 