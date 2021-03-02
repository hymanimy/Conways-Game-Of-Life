class Cell {
    constructor(r, c, alive, board){
        this.r = r; 
        this.c = c; 
        this.alive = alive; 
        this.nextState = alive; 
        this.board = board; 
    }

    aliveNeighbourCount(){
        let count = 0; 
        for(let i = -1; i < 2; i++){
            for(let j = -1; j < 2; j++){
                if(!(i == 0 && j == 0)){
                    let newR = this.r + i; 
                    let newC = this.c + j;
                    if(this.board.inBounds(newR, newC) && this.board.grid[newR][newC].alive){
                        count++; 
                    }
                }
            }
        }
        return count; 
    }
}
