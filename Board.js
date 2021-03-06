class Board {
    constructor(rows, cols, chanceOfLife){

        this.rows = rows;
        this.cols = cols; 
        this.chanceOfLife = chanceOfLife; 

        this.grid = Board.make2DArray(rows, cols);
        this.populateGrid(); 

        // Attributes required for showing the board
        this.h = 600; 
        this.w = 600;           // Pixel dimensions for the board
        this.squarePadding = 1; // Padding between squares
        this.squareOffSetTop = 10; 
        this.squareOffSetLeft = 10;

    }

    calculateHeightSpacing(){
        // Calculates how much height we actually have for rects after accounting for offsets and padding
        return (this.h - 2*this.squareOffSetTop - (this.rows - 1)*this.squarePadding)/this.rows; 
        
    }

    calculateWidthSpacing(){
        // Calculates how much width we actually have for rects after accounting for offsets and padding
        return (this.w - 2*this.squareOffSetLeft - (this.cols - 1)*this.squarePadding)/this.cols; 
    }



    static make2DArray(rows, cols){
        let grid = new Array(rows); 
        for(let i = 0; i < rows; i++){
            grid[i] = new Array(cols); 
        }
        return grid;    
    }

    populateGrid(){

        for(let r = 0; r < this.rows; r++){
            for(let c = 0; c < this.cols; c++){

                let alive = Math.random() <= this.chanceOfLife;
                this.grid[r][c] = new Cell(r, c, alive, this); 
            }
        }
        
    }

    show(){

        let heightSpacing = this.calculateHeightSpacing(); 
        let widthSpacing = this.calculateWidthSpacing();
        let squareWidth = Math.min(heightSpacing, widthSpacing); 

        for(let r = 0; r < this.rows; r++){
            for(let c = 0; c < this.cols; c++){
                let currentCell = this.grid[r][c]; 
                let color = currentCell.alive ? "Black" : "White"; 
                let squareX = c*(squareWidth + this.squarePadding) + this.squareOffSetLeft;
                let squareY = r*(squareWidth + this.squarePadding) + this.squareOffSetTop;
                rect(squareX, squareY, squareWidth, squareWidth, color); 
                strokeRect(squareX, squareY, squareWidth, squareWidth, "Grey"); // Border square so we can see individual tiles
            }
        }
    }



    applyRules(){
        // Applies the rules to every cell in the grid and updates their next state
        for(let r = 0; r < this.rows; r++){
            for(let c = 0; c < this.cols; c++){
                let currentCell = this.grid[r][c]; 
                let aliveNeighbours = currentCell.aliveNeighbourCount(); 
                
                // Alive cell dies of overcrowding or lack fo partners
                if(currentCell.alive && (aliveNeighbours < 2 || aliveNeighbours > 3)){
                    currentCell.nextState = false;
                } 
                // Dead cell is regenerated by fellow cells 
                else if (!currentCell.alive && aliveNeighbours == 3){
                    currentCell.nextState = true; 
                } 
                // Otherwise, retain previous state.
                else {
                    currentCell.nextState = currentCell.alive; 
                }
            }
        }
    }

    updateGrid(){
        this.applyRules(); 
        for(let r = 0; r < this.rows; r++){
            for(let c = 0; c < this.cols; c++){
                let currentCell = this.grid[r][c]; 
                currentCell.alive = currentCell.nextState; 
            }
        }
    }

    inBounds(r, c){
        return r >= 0 && r < this.rows && c >= 0 && c < this.cols;  
    }
}