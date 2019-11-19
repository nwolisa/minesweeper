export class Cell {

    constructor(y:number, x:number) {
        this.column= x;
        this.row =y;
    }
    row:number;
    column:number;
    status: 'open' | 'clear' | 'flag' = 'open';
    mine = false;
    proximityMines;
}