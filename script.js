const grid = document.querySelector('.grid-container');
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', teste)

function teste(){
    console.log(this.value);
}

function createDivs(size = 16){

    let nTiles = size*size;
    for(let i=0; i < nTiles; i++){
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.style.backgroundColor = 'rgb(255, 255, 255';//white
        grid.appendChild(tile);
    }

    const gridTile = document.querySelectorAll(".tile");
    gridTile.forEach(tile => tile.addEventListener('mouseover', paintTile));
}

function paintTile(){


    switch(inkColor){
        
        case 'grey': {
            let tileRGB = String(this.style.backgroundColor);
            tileRGB = tileRGB.match(/\d+/g);// match receives a regex to match ao digits in the string then return an array containing them
            this.style.backgroundColor = `rgb(${tileRGB[0]-26},${tileRGB[1]-26},${tileRGB[2]-26})`;
        }
        case 'rainbow': {
            this.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
        }
        case 'pick': {
            this.style.backgroundColor = "";
        }
        default: {
            this.style.backgroundColor = `black`;
        }
    }

}

function randomRGB(){
    return Math.random() * 255;
}

let inkColor = 'black';

function changeColor(){
    console.log(color);
    inkColor = color;
}

//
function clearGrid(){
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => tile.style.backgroundColor = 'rgb(255, 255, 255');//white
}

function newGrid(){

    let newSize = prompt("Enter the size of new grid");
    if(isNaN(newSize)) newSize=16;
    console.log(newSize);

    const gridTile = document.querySelectorAll(".tile");
    gridTile.forEach(tile => tile.remove());

    grid.style.gridTemplateColumns = `repeat(${newSize}, auto)`;
    grid.style.gridTemplateRows = `repeat(${newSize}, auto)`;


    createDivs(newSize)


}

createDivs(16);

