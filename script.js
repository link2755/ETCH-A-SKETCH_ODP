const grid = document.querySelector('main');

createDivs(16);

function createDivs(size){

    if(isNaN(size) || size > 100 || size < 0) return false;

    let nTiles = size*size;
    for(let i=0; i < nTiles; i++){

        const tile = document.createElement('div');
        tile.classList.add('tile');
        grid.appendChild(tile);
    }

    const gridTile = document.querySelectorAll(".tile");
    gridTile.forEach(tile => tile.addEventListener('mouseover', paintTile));
}

function paintTile(tile){
    this.classList.add('painted')
}




function clearGrid(){
    const paintedTiles = document.querySelectorAll('.painted');
    paintedTiles.forEach(tile => tile.classList.remove('painted'));
}

function newGrid(){

    let newSize = prompt("Enter the size of new grid");
    if(!newSize) return;

    const gridTile = document.querySelectorAll(".tile");
    gridTile.forEach(tile => tile.remove());

    grid.style.gridTemplateColumns = `repeat(${newSize}, auto)`;
    grid.style.gridTemplateRows = `repeat(${newSize}, auto)`;


    createDivs(newSize)


}


