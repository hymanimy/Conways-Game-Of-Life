function rect(x, y, w, h, color = "Black"){
    ctx.beginPath(); 
    ctx.fillStyle = color;
    ctx.rect(x, y, w, h); 
    ctx.fill();
    ctx.closePath(); 
}

function strokeRect(x, y, w, h, strokeColor = "Black"){
    ctx.beginPath(); 
    ctx.strokeStyle = strokeColor;
    ctx.strokeRect(x, y, w, h); 
    ctx.stroke();
    ctx.closePath(); 
}



function clearCanvas(){
    ctx.clearRect(0, 0, width, height);
}
