// This listens for mouse clicks and then calls toggleCell 
document.addEventListener("mousedown", toggleCell, false); 

function toggleCell(e){
    let boundingRect = canvas.getBoundingClientRect();

    // Calculate how much vertical and width we have after subtracting offsets and padding between squares
    let heightSpacing = b.calculateHeightSpacing(); 
    let widthSpacing = b.calculateWidthSpacing(); 
    let squareWidth = Math.min(heightSpacing, widthSpacing);
    
    // Get relative mouse coords based on where the canvas is relative to the DOM
    let r = Math.floor((e.clientY - b.squareOffSetTop - boundingRect.top)/squareWidth);
    let c = Math.floor((e.clientX - b.squareOffSetLeft - boundingRect.left)/squareWidth);
    
    // Toggle the state of the cell if the click was within bounds
    if(b.inBounds(r, c)){
        b.grid[r][c].alive = !b.grid[r][c].alive
        clearCanvas();
        b.show(); 
    }
}

